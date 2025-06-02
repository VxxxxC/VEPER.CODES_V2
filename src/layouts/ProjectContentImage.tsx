import { Image } from "@chakra-ui/react";
const ProjectContentImage = (props: { image: string }) => {
  return (
    <>
      <Image
        id="image"
        src={props.image}
        maxWidth={{ base: "20rem", lg: "35rem" }}
        maxHeight="40rem"
        fit="contain"
      />
    </>
  );
};

export default ProjectContentImage;
