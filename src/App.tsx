import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { LanguageProvider, useLang } from "./context/LanguageContext"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"

function Header(){
  const {lang,t,setLang}=useLang()
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-900">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white"><span className="bg-white text-black w-8 h-8 grid place-items-center rounded-lg">A</span> Arcline</Link>
        <nav className="hidden lg:flex gap-7 text-sm text-zinc-400">
          <span>{t.nav.features}</span><span>{t.nav.how}</span><span>{t.nav.pricing}</span><span>{t.nav.faq}</span>
        </nav>
        <div className="flex items-center gap-3">
          {/* DİL SWITCHER - HER ZAMAN GÖRÜNÜR */}
          <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-full p-1">
            <button onClick={()=>setLang("tr")} className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${lang==="tr"?"bg-white text-black shadow":"text-zinc-400 hover:text-white"}`}>TR</button>
            <button onClick={()=>setLang("en")} className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${lang==="en"?"bg-white text-black shadow":"text-zinc-400 hover:text-white"}`}>EN</button>
          </div>
          <Link to="/blog" className="hidden md:inline text-sm text-zinc-300 hover:text-white">{t.blog.title}</Link>
          <Link to="/" className="text-sm bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-zinc-100">{t.nav.start}</Link>
        </div>
      </div>
    </header>
  )
}

function Home(){
  const {t}=useLang()
  return (
    <div className="bg-black text-white min-h-screen">
      <Header/>
      <main className="max-w-7xl mx-auto px-8 pt-24 text-center">
        <div className="inline-flex text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">{t.hero.badge}</div>
        <h1 className="mt-8 text-6xl md:text-7xl font-bold leading-[1.05]">{t.hero.title}</h1>
        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">{t.hero.desc}</p>
        <div className="mt-10 flex justify-center gap-3">
          <button className="bg-white text-black px-7 py-3.5 rounded-full text-sm font-medium">{t.nav.start} →</button>
          <button className="bg-zinc-900 border border-zinc-800 px-7 py-3.5 rounded-full text-sm">▶ {t.nav.demo}</button>
        </div>
        <p className="mt-16 text-xs text-zinc-500">{t.hero.trusted}</p>
      </main>
    </div>
  )
}

export default function App(){
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<div className="bg-black min-h-screen"><Header/><Blog/></div>}/>
          <Route path="/blog/:slug" element={<div className="bg-black min-h-screen"><Header/><BlogPost/></div>}/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
