import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { ColorModeProvider } from "./src/components/ui/color-mode.tsx";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
  defaultSystem,
  defineTextStyles,
} from "@chakra-ui/react";

const textStyles = defineTextStyles({
  header: {
    value: {
      fontFamily: "Varela Round",
      fontWeight: "800",
      fontSize: "20px",
    },
  },
  body: {
    value: {
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: "16px",
    },
  },
});

const config = defineConfig({
  theme: {
    textStyles,
  },
});

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
);
