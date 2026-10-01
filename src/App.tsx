import { ScrollProgress } from "./components/motion/ScrollProgress";
import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";
import { LogoCloud } from "./components/landing/LogoCloud";
import { Stats } from "./components/landing/Stats";
import { BentoFeatures } from "./components/landing/BentoFeatures";
import { MidFunnelCTA } from "./components/landing/MidFunnelCTA";
import { HowItWorks } from "./components/landing/HowItWorks";
import { Integrations } from "./components/landing/Integrations";
import { Testimonials } from "./components/landing/Testimonials";
import { Pricing } from "./components/landing/Pricing";
import { FAQ } from "./components/landing/FAQ";
import { FinalCTA } from "./components/landing/FinalCTA";
import { Footer } from "./components/landing/Footer";
import { StickyMobileCTA } from "./components/landing/StickyMobileCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Stats />
        <BentoFeatures />
        <MidFunnelCTA />
        <HowItWorks />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
