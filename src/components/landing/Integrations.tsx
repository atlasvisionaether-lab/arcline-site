import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import { FadeIn } from "../motion/FadeIn";
import { site } from "../../content/site";

export function Integrations() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn><p className="text-sm font-medium text-primary">{site.integrations.eyebrow}</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">{site.integrations.headline}</h2></FadeIn>
          <FadeIn delay={0.15}><p className="mt-4 text-muted-foreground leading-relaxed">{site.integrations.subheadline}</p></FadeIn>
        </div>
        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {site.integrations.categories.map((category) => (
            <StaggerItem key={category.name}>
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/[0.04] hover:border-primary/20">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{category.name}</h3>
                <ul className="mt-5 space-y-3">
                  {category.tools.map((tool) => (
                    <li key={tool} className="flex items-center gap-2.5 text-sm text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
