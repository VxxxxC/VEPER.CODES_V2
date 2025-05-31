import { Center, Text } from "@chakra-ui/react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();

  return (
    <>
      <footer className="relateive bottom-0 w-full">
        <Center>
          <Text textStyle={{ base: "mobile", lg: "normal" }}>
            &copy; {today.getFullYear()}
            <span className="icon-name">VEPER.CODES</span> All rights reserved.
          </Text>
        </Center>
      </footer>
    </>
  );
};

export default Footer;
