import { Image } from "@chakra-ui/react";
const ProjectContentImage = (props: { image: string }) => {
  return (
    <>
      <Image
        id="image"
        src={props.image}
        maxHeight="40rem"
        maxWidth="32rem"
        fit="contain"
      />
    </>
  );
};

export default ProjectContentImage;
