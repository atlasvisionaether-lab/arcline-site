import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import { FadeIn } from "../motion/FadeIn";
import { Button } from "../ui/Button";
import { site } from "../../content/site";
import { trackCTAClick } from "../../lib/analytics";

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 lg:py-32" data-cta-location="final">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/30 px-8 py-20 text-center sm:px-16 lg:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/[0.03] blur-3xl" />
          </div>

          <FadeIn><h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">{site.finalCta.headline}</h2></FadeIn>
          <FadeIn delay={0.1}><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{site.finalCta.subheadline}</p></FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="mailto:hello@arcline.io?subject=Start%20project" variant="primary" size="lg" onClick={() => trackCTAClick("final", "primary")}>
                {site.finalCta.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="mailto:sales@arcline.io?subject=Talk%20to%20sales" variant="secondary" size="lg" onClick={() => trackCTAClick("final", "secondary")}>
                {site.finalCta.secondaryCta}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" aria-hidden="true" /><span>Enterprise-grade security</span></div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" aria-hidden="true" /><span>Fast and reliable</span></div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" aria-hidden="true" /><span>14-day free trial</span></div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}><p className="mt-8 text-sm text-muted-foreground">{site.finalCta.note}</p></FadeIn>
        </div>
      </div>
    </section>
  );
}
