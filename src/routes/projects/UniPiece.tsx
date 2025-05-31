import type { SelectorProps } from "@components/TechIcons";
import type { projectPropsType } from "@layouts/ProjectLayout";
import ProjectLayout from "@layouts/ProjectLayout";

const UniPiece = () => {
  const title = "Unipiece";
  const desc =
    "An E-commerce online marketplace, focusing on local handcrafted product and artist";
  const img = [
    "https://user-images.githubusercontent.com/80626616/200284360-bf0be878-b53c-4f25-9233-20187a964903.gif",
  ];

  const features = [
    "User system",
    "Marketplace Explore",
    "Artist Profile",
    "Product Detail",
  ];

  const techIcons: SelectorProps[] = [
    "Typescript",
    "React",
    "Tailwindcss",
    "Nodejs",
    "Express",
    "PostgreSQL",
    "EC2",
    "S3",
  ];

  const projectProps: projectPropsType = {
    title,
    img,
    desc,
    feat: features,
    techIcons,
    platform: true,
    mobile: "iOS",
  };

  return (
    <>
      <ProjectLayout props={projectProps} />
    </>
  );
};

export default UniPiece;
