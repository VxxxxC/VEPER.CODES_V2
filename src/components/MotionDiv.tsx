import { motion } from "motion/react";
import React from "react";

const MotionDiv = ({ children }: { children: React.ReactNode }) => {
  const animateConfig = {
    hidden: { y: 30, x: 0, opacity: 0 },
    enter: { y: 0, x: 0, opacity: 1 },
    exit: { y: 30, x: -0, opacity: 0 },
  };

  return (
    <motion.article
      className="flex flex-wrap justify-evenly gap-8"
      variants={animateConfig}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.article>
  );
};

export default MotionDiv;
