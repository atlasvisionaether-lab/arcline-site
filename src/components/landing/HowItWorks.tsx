import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import { FadeIn } from "../motion/FadeIn";
import { site } from "../../content/site";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border/50 bg-muted/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn><p className="text-sm font-medium text-primary">{site.howItWorks.eyebrow}</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">{site.howItWorks.headline}</h2></FadeIn>
        </div>
        <StaggerGroup className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-16" staggerDelay={0.15}>
          {site.howItWorks.steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary">{step.number}</div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{step.description}</p>
                {index < site.howItWorks.steps.length - 1 && <div className="absolute -right-8 top-7 hidden h-px w-16 bg-border lg:block" aria-hidden="true" />}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
