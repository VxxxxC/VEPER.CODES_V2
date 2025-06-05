import { Box, Center, Text } from "@chakra-ui/react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();

  return (
    <>
      <Box position="absolute" zIndex={10} bottom={0}>
        <Center>
          <Text textStyle="body" textAlign="center" maxWidth="max-content">
            &copy; {today.getFullYear()}
            <span className="icon-name">VEPER.CODES</span> All rights reserved.
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
