import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import type { tabsPropsType } from "@components/NestedTab";
import NestedTab from "@components/NestedTab";

const WorkLayout = ({
  Name,
  Duration,
  TechStack,
  Duty,
  Demo,
}: {
  Name: string;
  Duration: string;
  TechStack: React.ReactNode;
  Duty: React.ReactNode;
  Demo: tabsPropsType[];
}) => {
  return (
    <Container id="boxs" className="h-full w-full flex flex-col items-center">
      <Flex direction="row" alignItems="center" gapX={2}>
        <div className="text-xl font-bold">{Name}</div>
        <Box
          paddingX={2}
          paddingY={1}
          className="text-sm font-black dark:bg-slate-500 text-cyan-500 bg-slate-300"
        >
          {Duration}
        </Box>
      </Flex>
      <Box
        display="flex"
        flexDirection={{ base: "column", xl: "row" }}
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
            {TechStack}
          </Box>
        </fieldset>
        <fieldset className="h-full w-full overflow-x-auto overflow-y-scroll scroll-smooth text-left p-5 rounded-lg border border-zinc-400 dark:border-zinc-700">
          <legend className="px-2 text-base font-medium">Duty</legend>
          <Box paddingX={5} display="flex" flexDirection="column" gapY={3}>
            {Duty}
          </Box>
        </fieldset>
      </Box>

      <Box>
        <fieldset className=" text-left px-5 rounded-lg border border-zinc-400 dark:border-zinc-700">
          <legend className="px-2 text-base font-medium">Demo</legend>
          <NestedTab tabs={Demo} />
        </fieldset>
      </Box>
    </Container>
  );
};

export default WorkLayout;
