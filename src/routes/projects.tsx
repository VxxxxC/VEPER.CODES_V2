import { Box, Text, Accordion, Icon, Center } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { useColorMode } from "@chakra/components/ui/color-mode";
import ParkAndCharge from "@routes/projects/ParkAndCharge";
import UniPiece from "@routes/projects/UniPiece";
import BrailleAi from "@routes/projects/BrailleAi";
import VirtualMemories from "@routes/projects/VirtualMemories";
import { useState } from "react";

export default function Projects() {
  const { colorMode } = useColorMode();

  const projects = [
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

  const [project, setProject] = useState<string[]>(["ParkAndCharge"]);

  return (
    <>
      <Accordion.Root
        width="full"
        value={project}
        onValueChange={(e) => setProject(e.value)}
        collapsible
        lazyMount
      >
        {projects.map((item, index) => (
          <Accordion.Item key={index} value={item.value}>
            <Accordion.ItemTrigger>
              <Box display="flex" width="full" justifyContent="space-between">
                <Text textStyle="header">{item.label}</Text>
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
      {/* <Box marginY={5}>
        <ParkAndCharge />
        <Box marginY={10} height="1px" bg="gray.600" />
        <Text textStyle="header">Academy</Text>
        <Box
          paddingY={2}
          bg={colorMode === "light" ? "gray.200" : "gray.800"}
          rounded="md"
        >
          <VirtualMemories />
        </Box>
      </Box> */}
    </>
  );
}
