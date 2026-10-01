import { useState } from "react";
import { Check } from "lucide-react";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import { FadeIn } from "../motion/FadeIn";
import { cn } from "../../lib/utils";
import { site } from "../../content/site";

const annualPrices: Record<string, { price: string; period: string }> = {
  Starter: { price: "Free", period: "" },
  Team: { price: "$23", period: "/month" },
  Enterprise: { price: "Custom", period: "" },
};

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 lg:py-32" data-cta-location="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn><p className="text-sm font-medium text-primary">{site.pricing.eyebrow}</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">{site.pricing.headline}</h2></FadeIn>
          <FadeIn delay={0.15}><p className="mt-4 text-muted-foreground">{site.pricing.subheadline}</p></FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card p-1.5" role="radiogroup" aria-label="Billing frequency">
              <button onClick={() => setIsAnnual(false)} role="radio" aria-checked={!isAnnual} className={cn("rounded-full px-4 py-2 text-sm font-medium transition-all min-h-[44px]", !isAnnual ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>Monthly</button>
              <button onClick={() => setIsAnnual(true)} role="radio" aria-checked={isAnnual} className={cn("rounded-full px-4 py-2 text-sm font-medium transition-all min-h-[44px]", isAnnual ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                Annual
                <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">Save 20%</span>
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}><p className="mt-4 text-sm text-muted-foreground">{site.pricing.anchorText}</p></FadeIn>
        </div>

        <StaggerGroup className="mt-20 grid gap-6 lg:grid-cols-3" staggerDelay={0.1}>
          {site.pricing.plans.map((plan) => {
            const pricing = isAnnual ? annualPrices[plan.name] : plan;
            return (
              <StaggerItem key={plan.name}>
                <div className={cn("relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300", plan.highlighted ? "border-primary/30 bg-card shadow-2xl shadow-primary/[0.08] ring-1 ring-primary/20 scale-[1.02] lg:scale-105" : "border-border bg-card hover:shadow-lg hover:shadow-primary/[0.04] hover:border-primary/20")}>
                  {plan.highlighted && plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg">{plan.badge}</div>
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-foreground">{pricing.price}</span>
                    {pricing.period && <span className="text-sm text-muted-foreground">{pricing.period}</span>}
                  </div>
                  <ul className="mt-8 flex-1 space-y-3" aria-label={`${plan.name} features`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", plan.highlighted ? "bg-primary/10" : "bg-muted")}>
                          <Check className={cn("h-3 w-3", plan.highlighted ? "text-primary" : "text-muted-foreground")} aria-hidden="true" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={plan.name === "Enterprise" ? "mailto:sales@arcline.io?subject=Enterprise%20inquiry" : "mailto:hello@arcline.io?subject=Pricing%20question"} className={cn("mt-8 inline-flex h-11 min-h-[44px] items-center justify-center rounded-lg text-sm font-medium transition-all active:scale-[0.98]", plan.highlighted ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg" : "border border-border bg-card text-foreground hover:bg-accent hover:border-primary/20")}>
                    {plan.cta}
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">{site.pricing.guarantee}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
