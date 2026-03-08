"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  y?: number;
  amount?: number;
  once?: boolean;
};

export default function FadeIn({
  children,
  className = "",
  duration = 0.5,
  delay = 0,
  y = 0,
  amount = 0.2,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...(y !== 0 && { y }) }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount, once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
