import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
// Home zaten sende var, onu koru
import Home from "./pages/Home" // eğer ismi farklıysa düzelt

function App() {
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

export default App
