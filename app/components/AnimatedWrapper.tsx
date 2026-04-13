"use client"

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedWrapperProps {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  delay?: number;
}

export default function AnimatedWrapper({ children, direction = "up", className = "", delay = 0 }: AnimatedWrapperProps) {
  const getVariants = () => {
    switch (direction) {
      case "up": return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
      case "down": return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
      case "left": return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
      case "right": return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
      case "none": return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
      default: return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
