import { Link } from "react-router";
import ThemeToggle from "@components/ThemeToggle";
import { Box, Flex } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Flex direction="row" justifyContent="center">
        <Box
          width="80%"
          paddingY={3}
          paddingX={5}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gapX="5"
        >
          <Flex direction="row" gapX={10}>
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
