import type { projectPropsType } from "@layouts/ProjectLayout";
import ProjectLayout from "@layouts/ProjectLayout";

const ParkAndCharge = () => {
  const title = "Park & Charge";
  const img = [
    "https://user-images.githubusercontent.com/80626616/206899424-6b30d18c-4c2d-4010-a21d-b5399269470d.gif",
    "https://user-images.githubusercontent.com/80626616/217342259-49979720-d127-4ce7-97f7-d1dc23847753.gif",
  ];
  const desc = "A Real-time Hong Kong car park parking slot update mobile app";
  const features = [
    "18 Districts Selection",
    "MapView embedded",
    "CarPark location drop-pin",
    "Real-time update parking slot vacancy",
    "Animated Zoom-in",
  ];
  const techIcons = [
    "Typescript",
    "React Native",
    "Redux",
    "Nodejs",
    "Express",
    "MongoDB",
    "EC2",
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

export default ParkAndCharge;
