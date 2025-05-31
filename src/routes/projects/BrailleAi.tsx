import type { SelectorProps } from "@components/TechIcons";
import type { projectPropsType } from "@layouts/ProjectLayout";
import ProjectLayout from "@layouts/ProjectLayout";

const BrailleAi = () => {
  const title = "Braille AI";
  const desc = "A simple trained AI model to recognizing and predict alphabet";
  const img = [
    "https://user-images.githubusercontent.com/80626616/200264614-ea2979e7-43b8-4b9c-92ae-da2205863968.gif",
  ];

  const features = ["Picture upload", "Real-time camera detection"];

  const techIcons: SelectorProps[] = [
    "Typescript",
    "CSS",
    "Nodejs",
    "Express",
    "Python",
    "Tensorflow",
  ];

  const projectProps: projectPropsType = {
    title,
    img,
    desc,
    feat: features,
    techIcons,
  };

  return (
    <>
      <ProjectLayout props={projectProps} />
    </>
  );
};

export default BrailleAi;
