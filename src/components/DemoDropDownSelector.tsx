import { useState } from "react";
import { Text, Accordion, Box, Center, Icon } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { useColorMode } from "@chakra/components/ui/color-mode";

export type DemoDropdownType = { title: string; content: string };

const DemoDropdownSelector = ({ props }: { props: DemoDropdownType[] }) => {
  const { colorMode } = useColorMode();
  const [dropdown, setDropdown] = useState<string[]>([props[0].title]);

  return (
    <>
      <Accordion.Root
        width="full"
        value={dropdown}
        onValueChange={(e) => setDropdown(e.value)}
        collapsible
      >
        {props.map((item, index) => (
          <Accordion.Item key={index} value={item.title}>
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
                <Text>{item.title}</Text>
                <Box>
                  <Icon size="sm">
                    <FaAngleDown />
                  </Icon>
                </Box>
              </Box>
            </Accordion.ItemTrigger>

            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <Center>
                  <video controls>
                    <source src={item.content} type="video/mp4" />
                  </video>
                </Center>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
};
export default DemoDropdownSelector;
