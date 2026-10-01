import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<Element | null>(null);
  const finalCtaRef = useRef<Element | null>(null);

  useEffect(() => {
    heroRef.current = document.querySelector("section:first-of-type");
    finalCtaRef.current = document.querySelector("#final-cta");
    if (!heroRef.current || !finalCtaRef.current) return;

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setVisible(true);
    }, { threshold: 0 });

    const finalCtaObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(false);
    }, { threshold: 0.1 });

    heroObserver.observe(heroRef.current);
    finalCtaObserver.observe(finalCtaRef.current);

    return () => { heroObserver.disconnect(); finalCtaObserver.disconnect(); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: reducedMotion ? 0 : 100, opacity: reducedMotion ? 1 : 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: reducedMotion ? 0 : 100, opacity: reducedMotion ? 1 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.2, 0, 0, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background/95 backdrop-blur-xl p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] md:hidden"
          role="complementary"
          aria-label="Quick action"
          data-cta-location="sticky-mobile"
        >
          <a
            href="mailto:hello@arcline.io?subject=Early%20access%20request"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]"
            aria-label="Request early access"
          >
            Request early access
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
