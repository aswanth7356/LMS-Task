import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Videos from "./pages/Videos"
import Modules from "./pages/Modules"
import { Toaster } from "react-hot-toast"
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module/:subjectId" element={<Modules />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App
