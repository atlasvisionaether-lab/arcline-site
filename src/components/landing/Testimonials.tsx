import { Star } from "lucide-react";
import { StaggerGroup, StaggerItem } from "../motion/StaggerGroup";
import { FadeIn } from "../motion/FadeIn";
import { site } from "../../content/site";

const avatarGradients = ["from-primary/20 to-violet-500/20", "from-emerald-500/20 to-cyan-500/20", "from-amber-500/20 to-rose-500/20"];

export function Testimonials() {
  if (site.testimonials.items.length === 0) return null;

  return (
    <section id="testimonials" className="border-t border-border/50 bg-muted/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn><p className="text-sm font-medium text-primary">{site.testimonials.eyebrow}</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">{site.testimonials.headline}</h2></FadeIn>
          <FadeIn delay={0.15}><p className="mt-4 text-muted-foreground leading-relaxed">{site.testimonials.subheadline}</p></FadeIn>
        </div>
        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
          {site.testimonials.items.map((item, index) => {
            const gradient = avatarGradients[index % avatarGradients.length];
            return (
              <StaggerItem key={item.author}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-primary/20">
                  <div className="mb-5 flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">&ldquo;{item.quote}&rdquo;</blockquote>
                  <div className="mt-8 flex items-center gap-3 border-t border-border/50 pt-6">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-sm font-semibold text-foreground`}>{item.avatar}</div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{item.author}</p>
                      <p className="text-xs text-muted-foreground">{item.role} · {item.company}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
