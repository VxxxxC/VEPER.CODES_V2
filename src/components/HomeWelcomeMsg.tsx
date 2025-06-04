import { Box, Center } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { useColorMode } from "@chakra/components/ui/color-mode";

const text1 = "Hi there!! Thank you to visit VEPER.CODES";
const text2 = "I am a Developer base in Hong Kong";
const text3 = "To more about me, please have a look at the below :)";

const HomeWelcomeMsg = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bgColor={colorMode === "light" ? "gray.300" : "gray.800"}
      rounded="md"
      p={2}
      m={5}
      position="relative"
    >
      <Center>
        <Typewriter
          options={{
            cursor: "",
            strings: [text1, text2, text3],
            delay: 60,
            autoStart: true,
            loop: true,
          }}
        />
      </Center>
    </Box>
  );
};

export default HomeWelcomeMsg;
