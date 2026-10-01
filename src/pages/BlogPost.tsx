import { useParams, Link } from "react-router-dom"
import { blogPosts } from "../content/blog"

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return <div className="p-20">Post bulunamadı. <Link to="/blog" className="underline">Blog'a dön</Link></div>
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link to="/blog" className="text-sm text-muted-foreground hover:underline">← Blog</Link>
      <h1 className="mt-6 text-4xl font-bold tracking-tight">{post.title}</h1>
      <div className="mt-3 text-sm text-muted-foreground">{post.date} • {post.author} • {post.readingTime}</div>
      <p className="mt-6 text-lg text-muted-foreground">{post.description}</p>
      <div className="mt-8 prose dark:prose-invert whitespace-pre-wrap leading-relaxed">{post.content}</div>
    </div>
  )
}
