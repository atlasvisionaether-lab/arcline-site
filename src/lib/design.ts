export const design = {
  container: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1440px" },
  radius: { sm: "0.375rem", md: "0.5rem", lg: "0.75rem", xl: "1rem", "2xl": "1.25rem", full: "9999px" },
  shadow: {
    xs: "0 1px 2px oklch(0 0 0 / 0.04)",
    sm: "0 1px 3px oklch(0 0 0 / 0.06), 0 1px 2px oklch(0 0 0 / 0.04)",
    md: "0 4px 6px -1px oklch(0 0 0 / 0.06), 0 2px 4px -2px oklch(0 0 0 / 0.04)",
    lg: "0 10px 15px -3px oklch(0 0 0 / 0.06), 0 4px 6px -4px oklch(0 0 0 / 0.04)",
    xl: "0 20px 25px -5px oklch(0 0 0 / 0.06), 0 8px 10px -6px oklch(0 0 0 / 0.04)",
  },
  section: { padding: { mobile: "5rem", desktop: "8rem" } },
  mobile: { maxWidth: "480px" },
  desktop: { maxWidth: "1280px" },
} as const;
export type Radius = keyof typeof design.radius;
export type Shadow = keyof typeof design.shadow;
