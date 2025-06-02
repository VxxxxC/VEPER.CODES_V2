import Selector from "@components/TechIcons";
import Revamp from "./revamp";
import RevampMobile from "./revampMobile";
import NewFeature from "./newFeature";
import type { tabsPropsType } from "@components/NestedTab";
import WorkLayout from "@layouts/WorkLayout";

export const BoxsDemo: tabsPropsType[] = [
  {
    value: "RevampUi",
    label: "Revamp - UI",
    content: <Revamp />,
  },
  {
    value: "RevampMobileUi",
    label: "Revamp - Mobile UI",
    content: <RevampMobile />,
  },
  {
    value: "NewFeature",
    label: "New Features",
    content: <NewFeature />,
  },
];

export const BoxsTechStack = () => {
  return (
    <>
      <Selector props="Javascript" />
      <Selector props="Typescript" />
      <Selector props="Vue" />
      <Selector props="Nuxt" />
      <Selector props="NativeScript" />
      <Selector props="Nodejs" />
      <Selector props="Feathers.js" />
      <Selector props="MongoDB" />
    </>
  );
};

export const BoxsDuty = () => {
  return (
    <>
      <li>
        Participating company Website, iOS/Android App UI, POS System UI revamp,
        according from desigers Figma design
      </li>
      <li>Create reuseable UI components</li>
      <li>
        Collaborating with Designers, Project Manager, and CS team to defining
        UX flow for shipping new features on POS system
      </li>
      <li>Perform bug fix for old UI components or client reported issue</li>
    </>
  );
};

const Boxs = () => {
  return (
    <>
      <WorkLayout
        Name="BOXS - Frontend Developer"
        Duration="FEB2023 - OCT2024"
        TechStack={<BoxsTechStack />}
        Duty={<BoxsDuty />}
        Demo={BoxsDemo}
      />
    </>
  );
};

export default Boxs;
