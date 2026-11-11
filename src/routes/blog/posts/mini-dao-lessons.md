OpenZeppelin Governor does about 90% of the work of building a DAO for you. Three things about it still ran against my intuition: its time units, where voting power comes from, and which function an override actually affects. I only understood them after reading the source.

- Versions: Solidity `^0.8.27`, OpenZeppelin Contracts `5.6.1`, Foundry `forge 1.5.1`
- Source: [github.com/VxxxxC/mini_dao](https://github.com/VxxxxC/mini_dao)
- Live demo (Sepolia testnet): [mini-dao.netlify.app](https://mini-dao.netlify.app)

> This is a self-learning project. It runs only on the Sepolia testnet, holds no real money, and governs nothing real. What follows is a record of the mistakes I made, not production best practice.

## 1. A DAO is five contracts, not one

Before I started, I pictured a DAO as "a contract with a vote function in it". Built on OpenZeppelin, it is several contracts, each doing one job:

| Contract            | Role                     | In one sentence                                                              |
| ------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| `MiniDaoToken`      | Ballots                  | ERC20 + `ERC20Votes`; holdings become voting power only after delegation     |
| `MiniDaoFaucet`     | Ballot distribution      | Each wallet can claim 100 MDAO once                                          |
| `MiniDaoGovernance` | Parliament               | Accepts proposals, counts votes, decides pass or fail                        |
| `MiniDaoTimeLock`   | Treasury + executor      | Passed proposals wait here before they can run; also holds 70% of the supply |
| `MiniDaoVoteBox`    | The thing being governed | A simple counter; only the Timelock may call `storeVote()`                   |

The full flow:

```
claim()      Faucet    → receive 100 MDAO
delegate()   Token     → activate voting power
propose()    Governor  → wait votingDelay (30 blocks)
castVote()   Governor  → voting open for votingPeriod (60 blocks)
queue()      Governor  → Timelock schedules it, wait minDelay (60 seconds)
execute()    Governor  → Timelock calls VoteBox.storeVote()
```

The most useful mental model I came away with: **the Governor never executes anything itself.** It only decides whether a proposal is allowed. The Timelock is what calls the target contract, which is why the VoteBox is owned by the Timelock and not by the Governor.

## 2. Three concepts that had to click

### Holding tokens is not the same as having votes

The first time I tested end to end, I claimed 100 MDAO from the faucet, went to vote, and my vote weight was **0**.

`ERC20Votes` does not treat your balance as voting power. You first have to `delegate` (to yourself is fine), and only then does it start recording voting-power checkpoints for you. OpenZeppelin designs it this way to save gas: holders who never take part in governance don't pay for checkpoint writes on every transfer.

The faucet can't delegate for the user inside `claim()`, because `delegate()` uses `msg.sender`: the faucet would delegate its own tokens. Delegating for someone else requires `delegateBySig`. I took the simplest option, so the faucet page sends two transactions: `claim`, then `delegate(self)`.

### Snapshots make flash-loan voting worthless

If voting power were based on the balance _right now_, an attacker could borrow tokens, vote, and repay in one go. The Governor avoids this by weighting every vote by **voting power at the proposal's snapshot**, not the current balance:

```solidity
// Governor.sol (v5.6.1)
uint256 totalWeight = _getVotes(account, proposalSnapshot(proposalId), params);

// GovernorVotes.sol
function _getVotes(address account, uint256 timepoint, bytes memory)
    internal view virtual override returns (uint256)
{
    return token().getPastVotes(account, timepoint);
}
```

I wrote a security test for it: after the snapshot, an attacker receives 10 million MDAO, delegates, and votes. The transaction does not revert. The attacker's voting power at the snapshot was 0, so the vote counts for nothing. **The attack is not blocked, it is made worthless.** If you only write `expectRevert`, you will conclude the protection doesn't work.

This is also why `votingDelay` exists: people get time to read the proposal and delegate, and the snapshot is taken at the end of that delay.

### Decentralisation is a deployment step

`TimelockController` uses roles. In this project the Governor holds `PROPOSER_ROLE` and `CANCELLER_ROLE`, `EXECUTOR_ROLE` goes to `address(0)` (anyone can trigger execution once the delay has passed), and the Timelock is its own admin. The last lines of the deploy script are where the hand-over happens:

```solidity
// contracts/script/DeployDao.s.sol (excerpt)
timelock.grantRole(timelock.PROPOSER_ROLE(), address(governance));
timelock.grantRole(timelock.CANCELLER_ROLE(), address(governance));
timelock.grantRole(timelock.EXECUTOR_ROLE(), address(0));
timelock.revokeRole(timelock.DEFAULT_ADMIN_ROLE(), deployer); // hand over the last key
```

With the exact same contract, forgetting the `revokeRole` line would leave the deployer able to bypass voting and `schedule()` anything directly. **Decentralisation is not a property of a contract. It is a step in the deployment.** I added an invariant test (`invariant_DeployerHasNoAdminRole`) to check exactly that.

## 3. Pitfall 1: `30 seconds` actually means 30 blocks

This bug cost me more time than anything else in the project: 13 commits over three weeks mention countdown, timer or blocktime. I originally wrote:

```solidity
function votingDelay() public pure override returns (uint256) {
    return 30 seconds; // I thought this meant 30 seconds
}
```

In Solidity, `30 seconds` is just the number `30`. The compiler has no idea what unit you mean. How the Governor interprets that number depends on its `clock()` ([ERC-6372](https://eips.ethereum.org/EIPS/eip-6372)), and `ERC20Votes` uses **block numbers** by default. So `votingDelay = 30` means 30 blocks: about 1 minute on Anvil with `--block-time 2`, about 6 minutes on Sepolia.

Worse, one flow uses two different clocks:

- The Governor's `votingDelay` / `votingPeriod` count **block numbers**
- The Timelock's `minDelay` counts **`block.timestamp` (seconds)**

So the frontend countdown needs two separate pieces of logic. Pending and Active estimate time as block count × 12 seconds. Queued compares the Timelock ETA with on-chain time, read from the latest block's `timestamp` rather than the browser's `Date.now()`, because local time and chain time don't necessarily agree. Sepolia also does not produce a block in every slot, so when the countdown reaches 0 the frontend re-reads `state()` from the chain instead of trusting its own arithmetic.

> **Lesson:** in Solidity, time-unit suffixes are multiplication, not types. Whenever you see a "time" parameter, find out whether its clock is blocks or seconds.

## 4. Pitfall 2: I overrode `getVotes()` and voting didn't change at all

I wanted one person, one vote: anyone holding at least 10 MDAO gets exactly 1 vote. So I overrode `getVotes`:

```solidity
function getVotes(address account, uint256 blockNumber)
    public view override(Governor) returns (uint256)
{
    uint256 actualTokenVotes = super.getVotes(account, blockNumber);
    return actualTokenVotes >= 10 * 10 ** 18 ? 1 : 0;
}
```

It compiled, the tests passed, and vote counting never used it. `_castVote` calls the **internal `_getVotes`**, not the public `getVotes`. I overrode a read-only exit; counting goes down a different path:

```
castVote()
  └─ _castVote()
       └─ _getVotes()          ← vote counting uses this
            └─ token.getPastVotes()

getVotes()                      ← I overrode this, but counting never goes through it
  └─ _getVotes()
```

Vote weight is therefore still the token amount. Because every user claims exactly 100 MDAO and quorum is 300 MDAO, "three people must vote to reach quorum" looked exactly like what I intended, and I didn't notice the override was dead for a long time. The frontend even divides the tally by 100 so the UI shows "1 vote", which is the frontend papering over a contract problem. Anyone who gets extra MDAO some other way has more than "1 vote".

A correct version probably means overriding the internal `_getVotes` and changing `quorum()` to count votes (for example `3`). I haven't written tests for that change, so treat it as a hypothesis.

**All 143 tests passed and this still got through.** My fuzz test asserted that `governance.getVotes()` returns 0 or 1. It proved the function I wrote works. It did not prove that a vote is weighted 0 or 1. Had I asserted `forVotes == 1` after a `castVote`, it should have failed, because `forVotes` comes back as `100e18` for a 100 MDAO holder.

> **Lesson:** overriding a public function does not change the behaviour behind it. Trace which function actually gets called, and assert the outcome you care about ("how much is this vote worth"), not the implementation you wrote ("what does this function return").

## 5. Pitfall 3: on-chain is permanent, off-chain is not

Proposal titles and bodies are too long to store on-chain cheaply. So the frontend uploads the content as JSON to Filebase (S3-compatible, backed by IPFS) through an API route that verifies a wallet signature, then calls `governor.propose(...)` with the IPFS CID as the description. Reading goes the other way: `ProposalCreated` events → CID → fetch from an IPFS gateway.

The problem I didn't see at the time: **the on-chain record is there forever, but files in a Filebase bucket can be deleted.** I once cleaned up the bucket, and afterwards every proposal card showed "Failed to load proposal title". The events were still on-chain; the CIDs no longer resolved.

My eventual fix was to deploy a fresh set of contracts, empty Filebase and start over. A problem in off-chain storage ended up being solved by redeploying every on-chain contract.

> **Lesson:** a system is only as decentralised as its most centralised component. If the content lives in a bucket you can delete, the proposal is only as permanent as that bucket.

## 6. Known issues

Things I know about and haven't fixed. If you use this project as a reference, keep them in mind:

- **One person, one vote does not work.** Voting is token-weighted (section 4).
- **Quorum is hard-coded at 300 MDAO**, which is 0.00003% of the 1 billion supply. A production DAO should use `GovernorVotesQuorumFraction`.
- **Demo parameters are extremely short.** 30 blocks, 60 blocks, 60 seconds. Real DAOs use days and weeks.
- **There is no on-chain proposal threshold.** `proposalThreshold()` is 0, so anyone can call `propose()` directly. The signature and ETH-balance checks in the API only filter proposals submitted through my frontend.
- **Signatures can be replayed for 5 minutes.** The signed message contains only the title and a timestamp, with no nonce.
- **`MiniDaoVoteBox` still imports `forge-std/console.sol`** and calls `console.log`, which should be removed before any real deployment.

## 7. What I would do differently

My own judgement, not verified conclusions:

1. **Decide blocks or timestamps on day one.** OpenZeppelin 5 lets you switch the token's `clock()` to `block.timestamp`. With seconds everywhere, the frontend countdown would be much simpler.
2. **Read the source before copying the tutorial.** The dead `getVotes` override came from adapting an example without tracing which functions OpenZeppelin calls internally.
3. **Write integration tests for behaviour.** For any governance rule I override, assert the result inside a full propose → vote → tally flow.
4. **Store a hash of off-chain content on-chain.** Even if the content disappears, you can prove what it was and re-upload the same file elsewhere.
5. **Move `fromBlock` and contract addresses into config** instead of hard-coding them in components, so a redeploy doesn't leave stale values behind.

## References

- [OpenZeppelin Contracts 5.x: Governance guide](https://docs.openzeppelin.com/contracts/5.x/governance)
- [OpenZeppelin Contracts 5.x: Governance API](https://docs.openzeppelin.com/contracts/5.x/api/governance)
- [ERC-6372: Contract clock](https://eips.ethereum.org/EIPS/eip-6372)
- [ERC-5805: Voting with delegation](https://eips.ethereum.org/EIPS/eip-5805)
- [Foundry Book: fuzz testing](https://book.getfoundry.sh/forge/fuzz-testing) and [invariant testing](https://book.getfoundry.sh/forge/invariant-testing)
- [Solidity docs: time units](https://docs.soliditylang.org/en/latest/units-and-global-variables.html#time-units)
