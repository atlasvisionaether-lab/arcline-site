import { FadeIn } from "../motion/FadeIn";
import { site } from "../../content/site";

export function LogoCloud() {
  if (site.logoCloud.logos.length === 0) return null;

  return (
    <section className="relative border-y border-border/50 bg-muted/20 py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-muted/20 to-transparent sm:w-32" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-muted/20 to-transparent sm:w-32" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/70">{site.logoCloud.label}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 lg:gap-x-20">
            {site.logoCloud.logos.map((logo) => (
              <span key={logo} className="select-none text-muted-foreground/50 transition-colors duration-300 hover:text-muted-foreground/80 text-[17px] font-semibold tracking-tight" aria-label={logo}>{logo}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
