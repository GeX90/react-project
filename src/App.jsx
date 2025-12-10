import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ProjectListPage from "./pages/ProjectListPage"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App

