import { AnimatePresence, motion } from "motion/react";
import { IconButton } from "@chakra-ui/react";
import {
  useColorMode,
  useColorModeValue,
} from "@chakra/components/ui/color-mode";
import { FiSun, FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorPalette={useColorModeValue("purple", "orange")}
          onClick={toggleColorMode}
        >
          {useColorModeValue(<FiMoon />, <FiSun />)}
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
}
export default ThemeToggle;
