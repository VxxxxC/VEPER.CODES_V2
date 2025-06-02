import Boxs from "./works/boxs/boxs.tsx";
import type { tabsPropsType } from "@components/NestedTab";
import NestedTab from "@components/NestedTab";
import { Box } from "@chakra-ui/react";

export default function Works() {
  const works: tabsPropsType[] = [
    { value: "Boxs", label: "Boxs", content: <Boxs /> },
  ];
  return (
    <>
      <Box marginTop={10}>
        <NestedTab tabs={works} />
      </Box>
    </>
  );
}
