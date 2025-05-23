import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "@components/NavBar.tsx";
import Home from "@routes/home";
import Works from "@routes/works";
import Projects from "@routes/projects";
import { Box, Container } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra/components/ui/color-mode";

function App() {
  return (
    <>
      <Box
        className="App-Container"
        width="full"
        height="full"
        bg={useColorModeValue("gray.150", "gray.900")}
        color={useColorModeValue(
          "oklch(37% 0.013 285.805)",
          "oklch(92% 0.004 286.32)",
        )}
        transition="0.8s ease-in-out"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          className="OuterBox"
          width="full"
          base={{
            display: "flex",
            flexDir: "column",
          }}
          lg={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            maxWidth: "100rem",
          }}
        >
          <Container
            className="InnerBox"
            width="full"
            lg={{ gridColumnStart: 2, gridColumnEnd: 5 }}
          >
            <Navbar />
            <div className="App">
              <Routes>
                <Route index element={<Home />} />
                <Route path="works" element={<Works />} />
                <Route path="projects" element={<Projects />} />
              </Routes>
            </div>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
