import { Link } from "react-router-dom"
import { posts } from "../content/blog"
import { useLang } from "../context/LanguageContext"
export default function Blog(){
  const {lang} = useLang()
  return <div className="max-w-4xl mx-auto px-8 py-16 text-white"><h1 className="text-4xl font-bold mb-8">Blog</h1><div className="grid gap-6">{posts.map(p=><Link key={p.slug} to={`/blog/${p.slug}`} className="border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900"><h2 className="text-xl font-semibold">{p.title[lang]}</h2><p className="text-zinc-400 mt-2 text-sm">{p.excerpt[lang]}</p></Link>)}</div></div>
}
