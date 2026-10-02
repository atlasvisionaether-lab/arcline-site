import { useParams, Link } from "react-router-dom"
import { posts } from "../content/blog"
import { useLang } from "../context/LanguageContext"
export default function BlogPost(){
  const {slug}=useParams()
  const {lang}=useLang()
  const post=posts.find(p=>p.slug===slug)
  if(!post) return <div className="text-white p-10">Not found <Link to="/blog" className="underline">Blog</Link></div>
  return <div className="max-w-3xl mx-auto px-8 py-16 text-white"><Link to="/blog" className="text-sm text-zinc-400">← Blog</Link><h1 className="text-4xl font-bold mt-6">{post.title[lang]}</h1><p className="text-zinc-400 mt-6 leading-relaxed">{post.content[lang]}</p></div>
}
