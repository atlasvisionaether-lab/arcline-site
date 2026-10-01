import { Mail } from "lucide-react";
import { FadeIn } from "../motion/FadeIn";
import { site } from "../../content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30 pt-20 pb-8 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mb-20 rounded-2xl border border-border/50 bg-card p-8 lg:p-12">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold text-foreground">Stay in the loop</h3>
                <p className="mt-2 text-sm text-muted-foreground">Product updates, design system insights, and early access to new features. No spam.</p>
              </div>
              <div className="flex w-full max-w-sm gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input type="email" placeholder="you@company.com" className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20" />
                </div>
                <button className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]">Subscribe</button>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">{site.brand}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{site.footer.description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="mailto:hello@arcline.io" className="text-sm text-muted-foreground transition-colors hover:text-foreground">hello@arcline.io</a></li>
              <li><a href="mailto:sales@arcline.io" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Sales inquiries</a></li>
              <li><a href="mailto:support@arcline.io" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">{site.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="/privacy.html" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy</a>
            <a href="/terms.html" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Terms</a>
            <a href="/privacy.html#cookies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
