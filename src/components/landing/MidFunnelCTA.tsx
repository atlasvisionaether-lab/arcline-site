import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "../motion/FadeIn";
import { Button } from "../ui/Button";
import { trackCTAClick } from "../../lib/analytics";

export function MidFunnelCTA() {
  return (
    <section className="py-16 lg:py-20" data-cta-location="mid-funnel">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/[0.03] via-card to-primary/[0.02] p-8 lg:p-12">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl text-balance">Stop manually syncing your design system.</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">Arcline automates the tedious work so your team can focus on building great products.</p>
                <ul className="mt-6 space-y-2.5">
                  {["Auto-sync Figma to code in real-time", "Catch off-brand usage before it ships", "Roll back any design change in seconds"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <Button href="#pricing" variant="primary" size="lg" onClick={() => trackCTAClick("mid-funnel", "primary")}>
                  Start free trial
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <p className="text-xs text-muted-foreground">No credit card required · 14-day free trial</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
