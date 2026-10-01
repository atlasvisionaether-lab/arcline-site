export const site = {
  brand: "Arcline",
  tagline: "Design intelligence for teams that ship.",
  description:
    "Arcline unifies your design system, component library, and brand guidelines into one living source of truth.",

  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Start free trial",
  },

  hero: {
    badge: "Now in public beta",
    headline: "Ship design systems\nthat actually scale.",
    subheadline:
      "One platform to govern components, enforce brand consistency, and streamline every handoff between design and engineering.",
    primaryCta: "Start free trial",
    secondaryCta: "See how it works",
    socialProof: "Trusted by product teams at leading companies",
    outcomeMetric: "Built for faster workflows",
    outcomeDetail: "Designed to reduce design-to-dev friction",
  },

  stats: {
    items: [
      { value: "Built for speed", label: "Designed to reduce handoff friction" },
      { value: "Real-time sync", label: "Figma to code, always in sync" },
      { value: "Team-ready", label: "Built for collaboration at scale" },
      { value: "Enterprise-grade", label: "Secure, reliable, and scalable" },
    ],
  },

  logoCloud: {
    label: "Trusted by product teams",
    logos: [] as string[],
  },

  features: {
    eyebrow: "Platform",
    headline: "Everything your design system needs. Nothing it doesn't.",
    subheadline:
      "Six core capabilities that eliminate design debt, enforce consistency, and give your team the confidence to ship faster.",
    items: [
      {
        title: "Living component library",
        description: "Components stay synced between Figma and code. Change once, ship everywhere.",
        icon: "Layers",
        highlight: true,
      },
      {
        title: "Brand governance",
        description: "Automatic checks catch off-brand usage before it reaches production.",
        icon: "Shield",
      },
      {
        title: "Design tokens",
        description: "Single source of truth for colors, spacing, and typography across every platform.",
        icon: "Palette",
      },
      {
        title: "Version control",
        description: "Track every design decision with git-like branching and rollback.",
        icon: "GitBranch",
      },
      {
        title: "Team analytics",
        description: "See adoption metrics, coverage gaps, and component health at a glance.",
        icon: "BarChart3",
      },
      {
        title: "API-first",
        description: "Integrate with your existing CI/CD, Storybook, or custom toolchain.",
        icon: "Code2",
      },
    ],
  },

  howItWorks: {
    eyebrow: "How it works",
    headline: "From chaos to consistency in three steps.",
    steps: [
      {
        number: "01",
        title: "Connect your tools",
        description: "Import your Figma files, Storybook, or existing component library. Arcline automatically detects your design tokens and component structure.",
      },
      {
        number: "02",
        title: "Define your rules",
        description: "Set brand guidelines, spacing rules, and component constraints. Arcline learns your design system and enforces it automatically.",
      },
      {
        number: "03",
        title: "Ship with confidence",
        description: "Every design change is validated against your rules. Every handoff is clean. Every release is on-brand.",
      },
    ],
  },

  testimonials: {
    eyebrow: "What teams say",
    headline: "Built for the people who build products.",
    subheadline: "Hear from teams who have transformed their workflow with Arcline.",
    items: [] as Array<{ quote: string; author: string; role: string; company: string; avatar: string }>,
  },

  pricing: {
    eyebrow: "Pricing",
    headline: "Simple pricing. No surprises.",
    subheadline: "Start free. Upgrade when your team grows. Cancel anytime.",
    anchorText: "Less time managing, more time designing",
    plans: [
      {
        name: "Starter",
        price: "Free",
        period: "",
        description: "For individuals exploring design systems.",
        features: ["Up to 3 projects", "Basic component library", "Figma plugin", "Community support"],
        cta: "Get started",
        highlighted: false,
      },
      {
        name: "Team",
        price: "$29",
        period: "/month",
        description: "For growing teams shipping production software.",
        features: ["Unlimited projects", "Brand governance", "Design tokens", "Version control", "Priority support", "API access"],
        cta: "Start free trial",
        highlighted: true,
        badge: "Most popular",
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For organizations with advanced requirements.",
        features: ["Everything in Team", "SSO & SAML", "Custom integrations", "Dedicated success manager", "SLA guarantee", "On-premise option"],
        cta: "Contact sales",
        highlighted: false,
      },
    ],
    guarantee: "14-day free trial. No credit card required. Cancel anytime.",
  },

  faq: {
    eyebrow: "FAQ",
    headline: "Questions, answered.",
    subheadline: "Everything you need to know about Arcline.",
    items: [
      { question: "How does the free trial work?", answer: "Start with our Team plan free for 14 days. No credit card required. Downgrade to Starter anytime." },
      { question: "Does Arcline work with our existing tools?", answer: "Yes. Arcline integrates with Figma, VS Code, Storybook, GitHub, GitLab, and any CI/CD pipeline via our REST API and webhooks." },
      { question: "What happens to my data if I cancel?", answer: "Your data remains accessible in read-only mode for 90 days after cancellation. You can export everything at any time." },
      { question: "Is there a limit on team members?", answer: "Starter supports 1 user. Team supports up to 50 seats. Enterprise has no seat limits." },
      { question: "Do you offer discounts for startups or nonprofits?", answer: "Yes. We offer 50% off for qualified startups and free Team plans for registered nonprofits." },
      { question: "Is my data secure?", answer: "Yes. Arcline encrypts all data at rest and in transit using industry-standard encryption." },
    ],
  },

  integrations: {
    eyebrow: "Integrations",
    headline: "Works with the tools you already use.",
    subheadline: "Arcline connects to your existing workflow. No rip-and-replace.",
    categories: [
      { name: "Design", tools: ["Figma", "Sketch", "Adobe XD", "Framer"] },
      { name: "Development", tools: ["VS Code", "Storybook", "GitHub", "GitLab"] },
      { name: "CI/CD", tools: ["Vercel", "Netlify", "CircleCI", "GitHub Actions"] },
      { name: "Communication", tools: ["Slack", "Microsoft Teams", "Discord"] },
    ],
  },

  finalCta: {
    headline: "Start building better design systems today.",
    subheadline: "Join product teams who have streamlined their design-to-dev workflow with Arcline. Try it free for 14 days.",
    primaryCta: "Start free trial",
    secondaryCta: "Talk to sales",
    note: "No credit card required. 14-day free trial. Cancel anytime.",
  },

  footer: {
    description: "Design intelligence for teams that ship.",
    columns: [
      { title: "Product", links: ["Features", "Pricing", "Changelog", "Integrations"] },
      { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
      { title: "Resources", links: ["Documentation", "Guides", "Community"] },
      { title: "Legal", links: ["Privacy", "Terms", "Security"] },
    ],
    copyright: "© 2026 Arcline Inc. All rights reserved.",
    social: [] as Array<{ name: string; url: string }>,
  },
};
