import { Image } from "@chakra-ui/react";
const ProjectContentImage = (props: { image: string }) => {
  return (
    <>
      <Image
        id="image"
        src={props.image}
        width="400px"
        height="620px"
        fit="contain"
      />
    </>
  );
};

export default ProjectContentImage;
