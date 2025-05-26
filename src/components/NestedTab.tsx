import { Box, Container, Flex, Tabs } from "@chakra-ui/react";
import {
  useColorMode,
  useColorModeValue,
} from "@chakra/components/ui/color-mode";
import { useEffect, useState } from "react";
import MotionDiv from "./MotionDiv";

export type tabsPropsType = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const NestedTab = ({ tabs }: { tabs: tabsPropsType[] }) => {
  const [selectedTab, setSelectedTab] = useState<tabsPropsType["id"]>(
    tabs[0].id,
  );

  const [textColor, setTextColor] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("");

  const { colorMode } = useColorMode();

  // FIXME need to fix the tab will initialized when color theme is changed
  useEffect(() => {
    setTimeout(() => {
      setSelectedTab(tabs[0].id);
    }, 500);
  }, [colorMode]);

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
              {tabs.map(({ id, label }: tabsPropsType) => (
                <Tabs.List rounded="md" padding={1.5}>
                  <Tabs.Trigger
                    key={id}
                    value={id}
                    color={textColor}
                    bg={selectedTab === id ? bgColor : ""}
                  >
                    {label}
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
          {tabs.map(({ id, content }: tabsPropsType) => (
            <div>
              <Box>
                <Tabs.Content value={id}>{content}</Tabs.Content>
              </Box>
            </div>
          ))}
        </Tabs.Root>
      </MotionDiv>
    </>
  );
};

export default NestedTab;
