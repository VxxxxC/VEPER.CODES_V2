import type { SelectorProps } from "@components/TechIcons";
import type { projectPropsType } from "@layouts/ProjectLayout";
import ProjectLayout from "@layouts/ProjectLayout";

const MiniDao = () => {
  const title = "Mini DAO";

  const img = ["https://iili.io/BsJoyYP.gif"];

  const link = "https://mini-dao.netlify.app/";

  const desc = "A full-stack Web3 governance DAO governance platform.";

  const alert =
    "🚨 Demonstration only. This project is deployed on Sepolia testnet for learning and showcase purposes. Completing the full voting workflow has no real-world effect.";

  const feat = [
    "Token Faucet",
    "Self Delegation",
    "Proposal creation",
    "On-chain Voting",
    "Full Voting Workflow",
    "Wallet Reactive",
  ];
  const techIcons: SelectorProps[] | string[] = [
    "Typescript",
    "Svelte",
    "SvelteKit",
    "Solidity",
    "Foundry",
    "OpenZeppelin",
    "Wagmi",
    "Viem",
    "IPFS/Filebase",
  ];

  const projectProps: projectPropsType = {
    title,
    img,
    desc,
    feat,
    techIcons,
    link,
    alert,
  };

  return (
    <>
      <ProjectLayout props={projectProps} />
    </>
  );
};

export default MiniDao;
