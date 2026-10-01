"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";

export function TextReveal({ children, text, as: Tag = "span", className, delay = 0 }: { children?: ReactNode; text?: string; as?: ElementType; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  const content = children ?? text;
  if (reduce) return <Tag className={className}>{content}</Tag>;
  return (
    <Tag className={className}>
      <motion.span initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}>
        {content}
      </motion.span>
    </Tag>
  );
}
