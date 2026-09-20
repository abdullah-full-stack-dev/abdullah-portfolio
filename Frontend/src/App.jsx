import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { ScrollToTop } from './components/ScrollToTop'
import { AllProjects } from './pages/AllProjects'
import { useEffect, useState } from 'react'
import { NotFound } from './pages/NotFound'
import { ToastContainer } from 'react-toastify'

function App() {

  const current_theme = localStorage.getItem("current_theme");

  const [theme, setTheme] = useState(current_theme ? current_theme : "dark");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme])

  return (
    <div className={`app ${theme}`}>

      <Navbar theme={theme} setTheme={setTheme} />
      <ToastContainer pauseOnHover={false} theme="dark" autoClose={3000} />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home theme={theme} />} />
        <Route path='/projects' element={<AllProjects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
