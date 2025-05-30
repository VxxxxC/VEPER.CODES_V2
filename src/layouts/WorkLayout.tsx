import React from "react";
import "./WorkLayout.css";
import { useColorMode } from "@chakra/components/ui/color-mode";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
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
  const { colorMode } = useColorMode();
  return (
    <Container id="boxs" className="h-full w-full flex flex-col items-center">
      <Flex direction="row" alignItems="center" gapX={2}>
        <Text textStyle="header">{Name}</Text>
        <Box
          textStyle="body"
          paddingX={2}
          paddingY={1}
          className="text-sm font-black "
          color={colorMode === "light" ? "orange.500" : "orange.100"}
          bgColor={colorMode === "light" ? "orange.100" : "orange.800"}
        >
          {Duration}
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
        <fieldset className="h-full w-full overflow-auto scroll-smooth text-left p-5 rounded-lg">
          <legend className="px-2 text-base font-medium">Duty</legend>
          <Box
            textStyle="body"
            paddingX={5}
            display="flex"
            flexDirection="column"
            gapY={3}
          >
            {Duty}
          </Box>
        </fieldset>
        <fieldset className="w-full flex flex-col items-center justify-center text-left p-5 rounded-lg">
          <legend className="px-2 text-base font-medium">
            Tech Stack and Framework
          </legend>
          <Box
            textStyle="body"
            padding={1}
            display="grid"
            gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
            gap={5}
          >
            {TechStack}
          </Box>
        </fieldset>
      </Box>

      <Box>
        <fieldset className=" text-left px-5 rounded-lg">
          <legend className="px-2 text-base font-medium">Demo</legend>
          <NestedTab tabs={Demo} />
        </fieldset>
      </Box>
    </Container>
  );
};

export default WorkLayout;
