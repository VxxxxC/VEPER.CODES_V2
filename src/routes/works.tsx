import Boxs from "./boxs/boxs.tsx";
import type { tabsPropsType } from "@components/NestedTab";
import { v4 as uuidv4 } from "uuid";
import NestedTab from "@components/NestedTab";

export default function Works() {
  const works: tabsPropsType[] = [
    { id: uuidv4(), label: "Boxs", content: <Boxs /> },
  ];
  return (
    <>
      <NestedTab tabs={works} />
    </>
  );
}
