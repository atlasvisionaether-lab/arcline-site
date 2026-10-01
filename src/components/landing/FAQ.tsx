import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "../motion/FadeIn";
import { motionConfig } from "../../lib/motion";
import { site } from "../../content/site";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-border/50 transition-colors ${open ? "bg-muted/20" : ""}`}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg px-6 -mx-6" aria-expanded={open}>
        <span className="text-base font-medium text-foreground pr-4">{question}</span>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${open ? "bg-primary/10 rotate-180" : "bg-muted"}`}>
          <ChevronDown className={`h-4 w-4 transition-colors ${open ? "text-primary" : "text-muted-foreground"}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: motionConfig.durations.fast, ease: [...motionConfig.easing.exit] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <p className="pb-6 px-6 -mx-6 text-base leading-relaxed text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border/50 bg-muted/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn><p className="text-sm font-medium text-primary">{site.faq.eyebrow}</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">{site.faq.headline}</h2></FadeIn>
          <FadeIn delay={0.15}><p className="mt-4 text-muted-foreground leading-relaxed">{site.faq.subheadline}</p></FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="mx-auto mt-20 max-w-3xl">
            {site.faq.items.map((item) => <FaqItem key={item.question} question={item.question} answer={item.answer} />)}
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">Still have questions?{" "}<a href="mailto:support@arcline.io" className="font-medium text-primary hover:underline underline-offset-4">Contact our support team</a></p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
