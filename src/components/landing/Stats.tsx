import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import { site } from "../../content/site";

export function Stats() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12" staggerDelay={0.08}>
          {site.stats.items.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
