import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import "typeface-poppins"

import Home from "./pages/Home"
import WebsiteSucks from "./pages/WebsiteSucks"
import ScrollToTop from "./components/ScrollToTop"
import reportWebVitals from "./reportWebVitals"

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<WebsiteSucks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
