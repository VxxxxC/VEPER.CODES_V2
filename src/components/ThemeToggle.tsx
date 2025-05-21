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
        initial={{ x: -15, y: -20, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 20, y: -15, opacity: 0 }}
        transition={{ duration: 0.3 }}
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
