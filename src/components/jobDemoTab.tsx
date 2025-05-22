import { Box, Container, Flex, Tabs } from "@chakra-ui/react";
import type { tabsPropsType } from "@/routes/works";
import MotionDiv from "./MotionDiv";
import { useState } from "react";

const JobDemoTab = ({ tabs }: { tabs: tabsPropsType[] }) => {
  const [selectedTab, setSelectedTab] = useState<string | null>(tabs[0].id);

  return (
    <>
      <Tabs.Root
        value={selectedTab}
        variant="plain"
        size="sm"
        orientation="vertical"
        onValueChange={(e) => setSelectedTab(e.value)}
      >
        {tabs.map(({ id, label }: tabsPropsType) => (
          <Flex justify="start">
            <Tabs.List aria-label="demos tab">
              <Tabs.Trigger key={id} value={id} title={label}>
                {label}
              </Tabs.Trigger>
            </Tabs.List>
          </Flex>
        ))}
      </Tabs.Root>

      <Tabs.Root
        value={selectedTab}
        variant="plain"
        size="sm"
        orientation="horizontal"
        onValueChange={(e) => setSelectedTab(e.value)}
      >
        {tabs.map(({ id, content }: tabsPropsType) => (
          <div>
            <MotionDiv>
              <Box>
                <Tabs.Content value={id}>{content}</Tabs.Content>
              </Box>
            </MotionDiv>
          </div>
        ))}
      </Tabs.Root>
    </>
  );
};

export default JobDemoTab;
