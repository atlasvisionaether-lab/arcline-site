"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
export function RevealMask({ children, className, direction = "up", delay = 0 }: { children: ReactNode; className?: string; direction?: "up" | "down" | "left" | "right"; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const clip = { up: "inset(0 0 100% 0)", down: "inset(100% 0 0 0)", left: "inset(0 100% 0 0)", right: "inset(0 0 0 100%)" }[direction];
  return (
    <motion.div initial={{ clipPath: clip }} whileInView={{ clipPath: "inset(0 0 0 0)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}
