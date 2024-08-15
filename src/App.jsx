import { useState } from "react"
import "./App.css"
import { LandingPage, Header, CategoryBox } from "./components"
import Category from "./pages/Category"
import Admin from "./pages/Admin"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || "";
  });

  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

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
          <Route path="/josuan" element={<Admin/>} />
        </Routes>

        
        <footer>© 2024 MyWebkit by Josuan. All Rights Reserved.</footer>
      </main>
    </BrowserRouter>
  )
}

export default App
