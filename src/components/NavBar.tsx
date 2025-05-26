import { Link } from "react-router";
import ThemeToggle from "@components/ThemeToggle";
import { Box, IconButton, Menu, Portal, Stack } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../headerLogo.css";

export default function Navbar() {
  return (
    <>
      <Box
        position="sticky"
        top={0}
        zIndex={10}
        backdropFilter="blur(10px)"
        width="100%"
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Link to="/">
          <div
            className="animate-flickering-neon relative"
            aria-lable="header logo"
          >
            VEPER.CODES
          </div>
        </Link>
        <Stack
          width="100%"
          p={1}
          display="flex"
          flexDirection="row"
          justifyContent={{ base: "end", lg: "space-between" }}
          alignItems="center"
          gapX={5}
        >
          <Box
            className="navbar"
            display={{ base: "none", lg: "inline-flex" }}
            gapX={5}
          >
            <Link to="/works"> WORKS </Link>
            <Link to="/projects"> PROJECTS </Link>
          </Box>

          <Box>
            <ThemeToggle />
          </Box>

          <Box
            display={{ base: "inline-flex", lg: "none" }}
            flexDirection="row"
          >
            <Menu.Root positioning={{ placement: "bottom-end" }}>
              <Menu.Trigger asChild>
                <IconButton variant="outline" size="lg">
                  <RxHamburgerMenu />
                </IconButton>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content className="navbar">
                    <Menu.Item value="home">
                      <Link to="/"> HOME </Link>
                    </Menu.Item>
                    <Menu.Item value="works">
                      <Link to="/works"> WORKS </Link>
                    </Menu.Item>
                    <Menu.Item value="projects">
                      <Link to="/projects"> PROJECTS </Link>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
