"use client";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
export function MagneticButton({ children, className, href, as, onClick, strength = 0.25, type = "button" }: { children: ReactNode; className?: string; href?: string; as?: "a" | "button"; onClick?: () => void; strength?: number; type?: "button" | "submit" }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
  function move(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function leave() { x.set(0); y.set(0); }
  const style = reduce ? undefined : { x: sx, y: sy };
  const cls = cn("inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className);
  const isLink = as === "a" || !!href;
  if (isLink) return <motion.a ref={ref as any} href={href} onMouseMove={move} onMouseLeave={leave} style={style} className={cls} onClick={onClick}>{children}</motion.a>;
  return <motion.button ref={ref as any} type={type} onMouseMove={move} onMouseLeave={leave} style={style} className={cls} onClick={onClick}>{children}</motion.button>;
}
