import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "@components/NavBar.tsx";
import Footer from "./Footer.tsx";
import Home from "@routes/home";
import Works from "@routes/works";
import Projects from "@routes/projects";
import { Box, Container } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box
        className="App-Container"
        width="full"
        height="full"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textStyle={{ base: "mobile", lg: "normal" }}
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
            minWidth: "80rem",
            maxWidth: "80rem",
          }}
        >
          <Container
            className="InnerBox"
            paddingY={5}
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
            <Footer />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
