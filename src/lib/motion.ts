export const motionConfig = {
  durations: {
    fast: 0.25,
    normal: 0.5,
    slow: 0.7,
    slower: 0.9,
  },
  stagger: {
    tight: 0.05,
    normal: 0.075,
    loose: 0.1,
  },
  easing: {
    enter: [0.25, 0.1, 0.25, 1] as const,
    exit: [0.4, 0, 0.2, 1] as const,
    snap: [0.2, 0, 0, 1] as const,
    premium: [0.22, 1, 0.36, 1] as const,
    smooth: [0.4, 0, 0.2, 1] as const,
  },
  spring: {
    gentle: { type: "spring" as const, stiffness: 150, damping: 20 },
    snappy: { type: "spring" as const, stiffness: 300, damping: 25 },
    magnetic: { type: "spring" as const, stiffness: 200, damping: 15 },
    premium: { type: "spring" as const, stiffness: 250, damping: 20 },
  },
} as const;

export type Easing = keyof typeof motionConfig.easing;
export type Spring = keyof typeof motionConfig.spring;

export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
} as const;
