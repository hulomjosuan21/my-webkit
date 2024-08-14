import { useState } from "react"
import "./App.css"
import { LandingPage, Header, CategoryBox } from "./components"
import Category from "./pages/Category"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

  const [selectedCategory, setSelectedCategory] =useState(() => {
    return localStorage.getItem("current_category") || "/";
  });

  return (
    <BrowserRouter>
      <main>

        <Routes>
          <Route path="/" element={<>
            <Header/>
            <LandingPage/>
            <CategoryBox onSelectCategory={setSelectedCategory} />
          </>} />
          <Route path="/category" element={<Category categoryName={selectedCategory} />} />
        </Routes>

        
        <footer>© 2024 MyWebkit by Josuan. All Rights Reserved.</footer>
      </main>
    </BrowserRouter>
  )
}

export default App
