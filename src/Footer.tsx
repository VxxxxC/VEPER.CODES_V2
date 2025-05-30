import { Box, Center, Text } from "@chakra-ui/react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();

  return (
    <>
      <Box position="absolute" zIndex={10} bottom={5} width="full">
        <Center>
          <Text textStyle="normal" textAlign="center" maxWidth="55%">
            &copy; {today.getFullYear()}
            <span className="icon-name">VEPER.CODES</span> All rights reserved.
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
