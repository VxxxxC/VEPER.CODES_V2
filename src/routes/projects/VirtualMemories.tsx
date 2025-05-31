import type { SelectorProps } from "@components/TechIcons";
import type { projectPropsType } from "@layouts/ProjectLayout";
import ProjectLayout from "@layouts/ProjectLayout";

const VirtualMemories = () => {
  const title = "VirtualMemories";
  const desc =
    "A simple and clean blog that can store up your thoughts with texts and pics";
  const img = [
    "https://user-images.githubusercontent.com/80626616/200232345-76e0b50b-c5e5-4b2e-8328-e7c20bca1f54.gif",
  ];

  const features = ["User system", "Create Post"];

  const techIcons: SelectorProps[] = [
    "HTML",
    "CSS",
    "Javascript",
    "Nodejs",
    "Express",
    "PostgreSQL",
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

export default VirtualMemories;
