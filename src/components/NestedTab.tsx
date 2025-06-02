import { Box, Container, Flex, Tabs, Text } from "@chakra-ui/react";
import {
  useColorMode,
  useColorModeValue,
} from "@chakra/components/ui/color-mode";
import { useEffect, useState } from "react";
import MotionDiv from "./MotionDiv";

export type tabsPropsType = {
  value: string;
  label: string;
  content: React.ReactNode;
};

const NestedTab = ({ tabs }: { tabs: tabsPropsType[] }) => {
  const [selectedTab, setSelectedTab] = useState<tabsPropsType["value"]>(
    tabs[0].value,
  );

  const [textColor, setTextColor] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("");

  const { colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode == "light") {
      setTextColor("pink.400");
      setBgColor("gray.600");
    } else {
      setTextColor("pink.500");
      setBgColor("gray.700");
    }
  }, [colorMode]);

  return (
    <>
      <MotionDiv>
        <Container>
          <Tabs.Root
            value={selectedTab}
            variant="plain"
            size="sm"
            orientation="vertical"
            onValueChange={(e) => setSelectedTab(e.value)}
          >
            <Flex
              justify="start"
              bg={useColorModeValue("gray.100", "gray.800")}
              rounded="lg"
            >
              {tabs.map(({ value, label }: tabsPropsType) => (
                <Tabs.List
                  key={value}
                  rounded="md"
                  padding={1.5}
                  display="flex"
                  justifyContent="center"
                >
                  <Tabs.Trigger
                    height="min-content"
                    key={value}
                    value={value}
                    color={textColor}
                    bg={selectedTab === value ? bgColor : ""}
                  >
                    <Text>{label}</Text>
                  </Tabs.Trigger>
                </Tabs.List>
              ))}
            </Flex>
          </Tabs.Root>
        </Container>

        <Tabs.Root
          value={selectedTab}
          variant="plain"
          size="sm"
          orientation="horizontal"
          onValueChange={(e) => setSelectedTab(e.value)}
        >
          {tabs.map(({ value, content }: tabsPropsType) => (
            <div key={value}>
              <Box>
                <Tabs.Content value={value}>{content}</Tabs.Content>
              </Box>
            </div>
          ))}
        </Tabs.Root>
      </MotionDiv>
    </>
  );
};

export default NestedTab;
