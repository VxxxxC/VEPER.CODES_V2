import { Link } from "react-router";
import ThemeToggle from "@components/ThemeToggle";
import { Box } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Box
        width="100%"
        padding="2"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gapX="5"
      >
        <nav>
          <Link to="/"> HOME </Link>
          <Link to="/works"> WORKS </Link>
          <Link to="/projects"> PROJECTS </Link>
        </nav>
        <ThemeToggle />
      </Box>
    </>
  );
}
