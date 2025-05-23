import { motion } from "motion/react";
import React from "react";
import Head from "../Head";
import type { HeaderType } from "../Head";

export interface MotionDivType extends HeaderType {
  children: React.ReactNode;
}

const MotionDiv = ({ title, description, children }: MotionDivType) => {
  const tag = `${title} - VEPER.CODES`;
  const animateConfig = {
    hidden: { y: 30, x: 0, opacity: 0 },
    enter: { y: 0, x: 0, opacity: 1 },
    exit: { y: 30, x: -0, opacity: 0 },
  };

  return (
    <motion.article
      variants={animateConfig}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {title && <Head title={tag} description={description} />}
      {children}
    </motion.article>
  );
};

export default MotionDiv;
