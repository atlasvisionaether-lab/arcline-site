import { ArrowRight, Play } from "lucide-react";
import { FadeIn, TextReveal, MagneticButton } from "../motion";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ProductPreview } from "./ProductPreview";
import { site } from "../../content/site";
import { trackCTAClick } from "../../lib/analytics";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36" data-cta-location="hero">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn delay={0}>
            <Badge variant="success" className="mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              {site.hero.badge}
            </Badge>
          </FadeIn>

          <TextReveal text={site.hero.headline} as="h1" className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance" delay={0.1} />

          <FadeIn delay={0.4}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">{site.hero.subheadline}</p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MagneticButton as="a" href="#pricing" strength={6} onClick={() => trackCTAClick("hero", "primary")}>
                <span className="inline-flex h-12 min-h-[44px] items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]">
                  {site.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </MagneticButton>
              <Button href="#how-it-works" variant="secondary" size="lg" onClick={() => trackCTAClick("hero", "secondary")}>
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                {site.hero.secondaryCta}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-4 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10" aria-hidden="true">
                <span className="text-xs font-bold text-primary">✓</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">{site.hero.outcomeMetric}</div>
                <div className="text-xs text-muted-foreground">{site.hero.outcomeDetail}</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="mt-8 text-sm text-muted-foreground">{site.hero.socialProof}</p>
          </FadeIn>
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}
