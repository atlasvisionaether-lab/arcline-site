import { Link } from "react-router-dom"
import { blogPosts } from "../content/blog"

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-4 text-muted-foreground">Arcline'ın yapım süreci, mimari kararlar ve güncellemeler.</p>
      <div className="mt-12 grid gap-8">
        {blogPosts.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group border rounded-xl p-6 hover:border-primary transition">
            <div className="text-sm text-muted-foreground">{post.date} • {post.readingTime}</div>
            <h2 className="mt-2 text-2xl font-semibold group-hover:underline">{post.title}</h2>
            <p className="mt-2 text-muted-foreground">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
