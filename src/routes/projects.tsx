import { Box, Text, Accordion, Icon, Center } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { useColorMode } from "@chakra/components/ui/color-mode";
import ParkAndCharge from "@routes/projects/ParkAndCharge";
import UniPiece from "@routes/projects/UniPiece";
import BrailleAi from "@routes/projects/BrailleAi";
import VirtualMemories from "@routes/projects/VirtualMemories";
import { useState } from "react";
import type { tabsPropsType } from "@components/NestedTab";

export default function Projects() {
  const { colorMode } = useColorMode();

  const projects: tabsPropsType[] = [
    {
      value: "ParkAndCharge",
      label: "Park And Charge",
      content: <ParkAndCharge />,
    },
    { value: "UniPiece", label: "Uni-Piece", content: <UniPiece /> },
    {
      value: "BrailleAi",
      label: "Braille AI",
      content: <BrailleAi />,
    },
    {
      value: "VirtualMemories",
      label: "Virtual Memories",
      content: <VirtualMemories />,
    },
  ];

  const [project, setProject] = useState<string[]>([projects[0].value]);

  return (
    <>
      <Accordion.Root
        width="full"
        value={project}
        onValueChange={(e) => {
          setProject(e.value);
        }}
        collapsible
      >
        {projects.map((item, index) => (
          <Accordion.Item key={index} value={item.value}>
            {index === 0 ? (
              <>
                <Text textStyle="header">Personal</Text>
                <Box height="2px" width="full" bgColor="cyan.500" />
              </>
            ) : index === 1 ? (
              <>
                <Text textStyle="header">Academy</Text>
                <Box height="2px" width="full" bgColor="cyan.500" />
              </>
            ) : null}
            <Accordion.ItemTrigger>
              <Box
                paddingX={5}
                paddingY={1}
                display="flex"
                width="full"
                justifyContent="space-between"
                cursor="pointer"
                _hover={{
                  bg: colorMode === "light" ? "gray.300" : "gray.800",
                  rounded: "lg",
                  border: "deeppink",
                }}
              >
                <Text>{item.label}</Text>
                <Box>
                  <Icon size="sm">
                    <FaAngleDown />
                  </Icon>
                </Box>
              </Box>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <Center>{item.content}</Center>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
}
