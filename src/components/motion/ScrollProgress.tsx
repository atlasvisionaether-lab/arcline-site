"use client";
import { motion, useScroll, useSpring } from "motion/react";
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-primary" />;
}
