import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold">Arcline</h1>
      <p className="mt-4 text-muted-foreground">Terminal-native AI editor</p>
      <a href="/blog" className="mt-8 underline">Blog →</a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}
