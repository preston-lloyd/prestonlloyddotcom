"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

type SquareProps = {
  color?: string;
  className?: string;
};

export default function Square({ color = "bg-yellow-500", className = "" }: SquareProps) {
  const { x, y } = useMemo(() => {
    const range = 28;
    return {
      x: Math.round((Math.random() - 0.5) * range),
      y: Math.round((Math.random() - 0.5) * range),
    };
  }, []);

  return (
    <motion.div
      className={`${color} aspect-square rounded-xl ${className}`}
      animate={{
        x: [0, x, 0],
        y: [0, y, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
