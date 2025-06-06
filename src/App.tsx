import "./App.css";
import Navbar from "@components/NavBar.tsx";
import Footer from "./Footer.tsx";
import { Box, Container } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

function App() {
  const [cookies, setCookie] = useCookies(["onBoard"], {
    doNotParse: true,
    doNotUpdate: true,
  });

  useEffect(() => {
    const expired = new Date();
    expired.setDate(expired.getDate() + 1);
    if (!cookies.onBoard || cookies.onBoard === undefined) {
      setCookie("onBoard", true, {
        path: "/",
        expires: expired,
        secure: true,
        sameSite: "none",
      });
    }
  }, []);
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
          height="full"
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
            height="full"
            minHeight="100vh"
            display="flex"
            flexDir="column"
            alignItems="center"
            lg={{
              gridColumnStart: 2,
              gridColumnEnd: 5,
            }}
          >
            <Navbar />
            <Box marginBottom={24} className="App" width="full" height="full">
              <Outlet />
              {/*NOTE Refer to router.tsx , Outlet components representing the child nodes */}

              <ScrollRestoration />
            </Box>
            <Footer />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
