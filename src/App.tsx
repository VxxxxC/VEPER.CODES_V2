import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "@components/NavBar.tsx";
import Home from "@routes/home";
import Works from "@routes/works";
import Projects from "@routes/projects";
import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra/components/ui/color-mode";

function App() {
  return (
    <>
      <Box
        height="100%"
        width="100%"
        bg={useColorModeValue("gray.300", "gray.850")}
        transition="background 0.8s ease-in-out"
        className="bg-stone-300 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-50"
      >
        <SimpleGrid columns={5}>
          <GridItem colSpan={3} colStart={2}>
            <Navbar />
            <div className="card">
              <Routes>
                <Route index element={<Home />} />
                <Route path="works" element={<Works />} />
                <Route path="projects" element={<Projects />} />
              </Routes>
            </div>
          </GridItem>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default App;
