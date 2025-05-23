import Selector from "@components/TechIcons";
import Revamp from "./revamp";
import RevampMobile from "./revampMobile";
import NewFeature from "./newFeature";
import NestedTab from "@components/NestedTab";
import type { tabsPropsType } from "@components/NestedTab";
import { v4 as uuidv4 } from "uuid";
import { Box, Container, Flex } from "@chakra-ui/react";

const Boxs = () => {
  const tabs: tabsPropsType[] = [
    {
      id: uuidv4(),
      label: "Revamp - UI",
      content: <Revamp />,
    },
    {
      id: uuidv4(),
      label: "Revamp - Mobile UI",
      content: <RevampMobile />,
    },
    {
      id: uuidv4(),
      label: "New Features",
      content: <NewFeature />,
    },
  ];

  return (
    <Container id="boxs" className="h-full w-full flex flex-col items-center">
      <Flex direction="row" alignItems="center" gapX={2}>
        <div className="text-xl font-bold">BOXS - Frontend Developer</div>
        <Box
          paddingX={2}
          paddingY={1}
          className="text-sm font-black dark:bg-slate-500 text-cyan-500 bg-slate-300"
        >
          2024-2025
        </Box>
      </Flex>
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        alignContent="center"
        className="h-3/5 mobile:h-3/4"
        gap={2}
      >
        <fieldset className="w-full flex flex-col items-center justify-center text-left p-5 rounded-lg border border-zinc-400 dark:border-zinc-700">
          <legend className="px-2 text-base font-medium">
            Tech Stack and Framework
          </legend>
          <Box
            padding={1}
            display="grid"
            gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
            gap={5}
          >
            <Selector props="Javascript" />
            <Selector props="Typescript" />
            <Selector props="Vue" />
            <Selector props="Nuxt" />
            <Selector props="NativeScript" />
            <Selector props="Nodejs" />
            <Selector props="Feathers.js" />
            <Selector props="MongoDB" />
          </Box>
        </fieldset>
        {/* <fieldset className="w-full text-left p-5 rounded-lg bg-zinc-400 dark:bg-zinc-700"> */}
        {/*   <legend className="px-2 flex flex-start text-base font-medium"> */}
        {/*     Framework */}
        {/*   </legend> */}
        {/*   <li>Frontend - Vue.js, Nuxt.js</li> */}
        {/*   <li>App Development - NativeScript</li> */}
        {/*   <li>Backend - feathers.js, MongoDB</li> */}
        {/* </fieldset> */}
        <fieldset className="h-full w-full overflow-x-auto overflow-y-scroll scroll-smooth text-left p-5 rounded-lg border border-zinc-400 dark:border-zinc-700">
          <legend className="px-2 text-base font-medium">Duty</legend>
          <Box paddingX={5} display="flex" flexDirection="column" gapY={3}>
            <li>
              Participating company Website, iOS/Android App UI, POS System UI
              revamp, according from desigers Figma design
            </li>
            <li>Create reuseable UI components</li>
            <li>
              Collaborating with Designers, Project Manager, and CS team to
              defining UX flow for shipping new features on POS system
            </li>
            <li>
              Perform bug fix for old UI components or client reported issue
            </li>
          </Box>
        </fieldset>
      </Box>

      <Box>
        <fieldset className=" text-left px-5 rounded-lg border border-zinc-400 dark:border-zinc-700">
          <legend className="px-2 text-base font-medium">Demo</legend>
          <NestedTab tabs={tabs} />
        </fieldset>
      </Box>
    </Container>
  );
};

export default Boxs;
