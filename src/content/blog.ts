export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  readingTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-we-built-arcline",
    title: "Why We Built Arcline",
    description: "Qwen Code'dan ilham alan, terminali merkeze alan yeni nesil kod editörü.",
    date: "2025-11-20",
    author: "Atlas Team",
    readingTime: "5 min",
    content: `
Arcline'i inşa etme sebebimiz basit: modern editörler terminali unuttu.

Qwen Code, Kimi Code ve diğer CLI-first agent'lar bize gösterdi ki gerçek güç terminalde. Biz de Arcline'ı terminal-native, AI-first bir deneyim olarak tasarladık.

**Ne farklı?**
- Her şey terminal üzerinden kontrol edilebilir
- 260KB prod bundle, 378 modül, Vite + Rolldown
- Blog-first architecture: /blog rotası tamamen statik

Bu ilk post. Daha fazlası yolda.
    `.trim()
  },
  {
    slug: "arcline-architecture",
    title: "Arcline Architecture: 260KB'de 378 Modül",
    description: "Vite, Tailwind v4 ve Rolldown ile nasıl hafif kaldık.",
    date: "2025-11-22",
    author: "Atlas Team",
    readingTime: "4 min",
    content: `Arcline dist: 1.08kB HTML, 21.59kB CSS, 260kB JS (85kB gzip). LightningCSS warning'lerini @theme ile çözdük.`
  }
]
