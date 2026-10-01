import { RevealMask } from "../motion/RevealMask";
import { Layers, Shield, Palette, GitBranch, BarChart3, Code2 } from "lucide-react";

export function ProductPreview() {
  return (
    <RevealMask direction="up" delay={0.3} className="mt-20 lg:mt-24">
      <div className="relative mx-auto max-w-5xl">
        <div className="pointer-events-none absolute inset-0 -z-10 translate-y-8" aria-hidden="true">
          <div className="mx-auto h-full w-[80%] rounded-3xl bg-primary/[0.08] blur-3xl" />
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl shadow-primary/[0.06] ring-1 ring-border/50">
          <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-border" />
              <div className="h-2.5 w-2.5 rounded-full bg-border" />
              <div className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <div className="ml-4 flex-1">
              <div className="mx-auto max-w-xs rounded-md bg-background/80 px-3 py-1 text-center text-xs text-muted-foreground">app.arcline.io/dashboard</div>
            </div>
          </div>

          <div className="flex min-h-[400px] lg:min-h-[520px]">
            <div className="hidden w-56 border-r border-border/50 bg-muted/20 p-4 lg:block">
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                  <span className="text-xs font-bold text-primary-foreground">A</span>
                </div>
                <span className="text-sm font-semibold">Arcline</span>
              </div>
              <nav className="space-y-1">
                {[
                  { icon: Layers, label: "Components", active: true },
                  { icon: Palette, label: "Tokens" },
                  { icon: Shield, label: "Governance" },
                  { icon: GitBranch, label: "Versions" },
                  { icon: BarChart3, label: "Analytics" },
                  { icon: Code2, label: "API" },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${item.active ? "bg-primary/[0.08] font-medium text-primary" : "text-muted-foreground"}`}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </div>
                ))}
              </nav>
            </div>

            <div className="flex-1 p-6 lg:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Component Library</h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">24 components · 3 variants</p>
                </div>
                <div className="flex gap-2">
                  <div className="rounded-md border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground">Filter</div>
                  <div className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">+ New</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {[
                  { name: "Button", variants: 6, color: "bg-primary/10 text-primary" },
                  { name: "Input", variants: 4, color: "bg-emerald-500/10 text-emerald-600" },
                  { name: "Card", variants: 3, color: "bg-amber-500/10 text-amber-600" },
                  { name: "Badge", variants: 5, color: "bg-violet-500/10 text-violet-600" },
                  { name: "Modal", variants: 2, color: "bg-rose-500/10 text-rose-600" },
                  { name: "Tooltip", variants: 3, color: "bg-cyan-500/10 text-cyan-600" },
                  { name: "Avatar", variants: 4, color: "bg-indigo-500/10 text-indigo-600" },
                  { name: "Toggle", variants: 2, color: "bg-pink-500/10 text-pink-600" },
                ].map((comp) => (
                  <div key={comp.name} className="group rounded-xl border border-border/60 bg-background p-4 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/[0.04]">
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${comp.color}`}>
                      <div className="h-4 w-4 rounded bg-current opacity-60" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{comp.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{comp.variants} variants</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-muted-foreground">All systems operational</span>
                </div>
                <span className="text-xs text-muted-foreground">Last synced 2m ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealMask>
  );
}
