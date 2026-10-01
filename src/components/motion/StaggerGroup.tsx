"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function StaggerGroup({ children, className, staggerDelay = 0.08, delayChildren = 0.05 }: { children: ReactNode; className?: string; staggerDelay?: number; delayChildren?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const container = { hidden: {}, visible: { transition: { staggerChildren: staggerDelay, delayChildren } } };
  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
  return <motion.div variants={item} className={className}>{children}</motion.div>;
}
