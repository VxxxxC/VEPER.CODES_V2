import React, { useState } from "react";
import { Text, Accordion, Box, Center, Icon } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";

export type DemoDropdownType = { title: string; content: string };

const DemoDropdownSelector = ({ props }: { props: DemoDropdownType[] }) => {
  const [dropdown, setDropdown] = useState<string[]>([props[0].title]);

  return (
    <>
      <Accordion.Root
        width="full"
        value={dropdown}
        onValueChange={(e) => setDropdown(e.value)}
        collapsible
        lazyMount
      >
        {props.map((item, index) => (
          <Accordion.Item key={index} value={item.title}>
            <Accordion.ItemTrigger>
              <Box display="flex" width="full" justifyContent="space-between">
                <Text textStyle="header">{item.title}</Text>
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
