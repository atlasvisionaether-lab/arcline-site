import { Layers, Shield, Palette, GitBranch, BarChart3, Code2, type LucideIcon } from "lucide-react";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import { FadeIn } from "../motion/FadeIn";
import { site } from "../../content/site";

const iconMap: Record<string, LucideIcon> = { Layers, Shield, Palette, GitBranch, BarChart3, Code2 };

const iconColors: Record<string, { bg: string; text: string }> = {
  Layers: { bg: "bg-primary/[0.08]", text: "text-primary" },
  Shield: { bg: "bg-emerald-500/[0.08]", text: "text-emerald-600" },
  Palette: { bg: "bg-amber-500/[0.08]", text: "text-amber-600" },
  GitBranch: { bg: "bg-violet-500/[0.08]", text: "text-violet-600" },
  BarChart3: { bg: "bg-cyan-500/[0.08]", text: "text-cyan-600" },
  Code2: { bg: "bg-rose-500/[0.08]", text: "text-rose-600" },
};

function ComponentSyncVisual() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex-1 rounded-lg border border-border/60 bg-muted/30 p-3">
        <div className="mb-2 flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="text-[10px] font-medium text-muted-foreground">Figma</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-full rounded bg-primary/20" />
          <div className="h-2 w-3/4 rounded bg-primary/15" />
          <div className="h-2 w-1/2 rounded bg-primary/10" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <div className="h-px w-6 bg-border" />
        <div className="flex items-center gap-0.5">
          <div className="h-1 w-1 rounded-full bg-primary/40" />
          <div className="h-1 w-1 rounded-full bg-primary/60" />
          <div className="h-1 w-1 rounded-full bg-primary" />
        </div>
        <div className="h-px w-6 bg-border" />
      </div>
      <div className="flex-1 rounded-lg border border-border/60 bg-muted/30 p-3">
        <div className="mb-2 flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-medium text-muted-foreground">Code</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex gap-1"><div className="h-2 w-3 rounded bg-emerald-500/20" /><div className="h-2 w-6 rounded bg-emerald-500/15" /></div>
          <div className="flex gap-1"><div className="h-2 w-2 rounded bg-emerald-500/15" /><div className="h-2 w-5 rounded bg-emerald-500/20" /></div>
          <div className="h-2 w-4 rounded bg-emerald-500/10" />
        </div>
      </div>
    </div>
  );
}

export function BentoFeatures() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn><p className="text-sm font-medium text-primary">{site.features.eyebrow}</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">{site.features.headline}</h2></FadeIn>
          <FadeIn delay={0.15}><p className="mt-4 text-muted-foreground leading-relaxed">{site.features.subheadline}</p></FadeIn>
        </div>

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {site.features.items.map((feature) => {
            const Icon = iconMap[feature.icon] || Layers;
            const colors = iconColors[feature.icon] || iconColors.Layers;
            return (
              <StaggerItem key={feature.title}>
                <div className={`group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${feature.highlight ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                  <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg} ${colors.text} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  {feature.highlight && <ComponentSyncVisual />}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
