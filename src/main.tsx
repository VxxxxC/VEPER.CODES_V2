import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./router.tsx";
import "../index.css";
import { ColorModeProvider } from "./src/components/ui/color-mode.tsx";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
  defineTextStyles,
} from "@chakra-ui/react";

const textStyles = defineTextStyles({
  mobile: {
    value: {
      fontFamily: "Varela Round",
      fontWeight: "400",
      fontSize: "14px",
    },
  },
  normal: {
    value: {
      fontFamily: "Varela Round",
      fontWeight: "400",
      fontSize: "16px",
    },
  },
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
        <RouterProvider router={router} />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
);
