import { motion } from "motion/react";
import React from "react";

const MotionDiv = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    className="flex flex-wrap justify-evenly gap-8"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: delay, ease: "linear" }}
  >
    {children}
  </motion.div>
);

export default MotionDiv;
