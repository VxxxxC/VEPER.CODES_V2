import { Link } from "react-router";
import ThemeToggle from "@components/ThemeToggle";
import { Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Flex
        position="sticky"
        top={0}
        zIndex={10}
        backdropFilter="blur(10px)"
        width="100%"
        direction="row"
        justifyContent="center"
      >
        <Box
          width="100%"
          p={1}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex className="navbar" direction="row" gapX={5}>
            <Link to="/"> HOME </Link>
            <Link to="/works"> WORKS </Link>
            <Link to="/projects"> PROJECTS </Link>
          </Flex>
          <ThemeToggle />
        </Box>
      </Flex>
    </>
  );
}
