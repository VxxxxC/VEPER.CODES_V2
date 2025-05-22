import MotionDiv from "@components/MotionDiv";
import Boxs from "./boxs/boxs.tsx";
import { Container, Flex, Tabs } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

export type tabsPropsType = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function Works() {
  const works: tabsPropsType[] = [
    { id: uuidv4(), label: "Boxs", content: <Boxs /> },
  ];
  return (
    <>
      {
        <div className="flex flex-col items-start justify-center w-full h-full">
          {works.map(({ id, label, content }: tabsPropsType) => (
            <>
              <Tabs.Root defaultValue={works[0].id} variant="plain">
                <Tabs.List aria-label="works tab">
                  <Tabs.Trigger value={id} key={id} title={label}>
                    {label}
                  </Tabs.Trigger>
                  <MotionDiv>
                    <Container>
                      <Flex>
                        <Tabs.Content value={id}>{content}</Tabs.Content>
                      </Flex>
                    </Container>
                  </MotionDiv>
                  <Tabs.Indicator rounded={12} />
                </Tabs.List>
              </Tabs.Root>
            </>
          ))}
        </div>
      }
    </>
  );
}
