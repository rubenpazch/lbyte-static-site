import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { ServicesPage } from './pages/Services'
import { AboutPage } from './pages/About'
import { ContactPage } from './pages/Contact'
import { FAQsPage } from './pages/FAQs'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const hour = new Date().getHours()
    const isNight = hour >= 19 || hour < 7
    setTheme(prefersDark || isNight ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark')
    document.body.classList.add(`theme-${theme}`)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Router>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/faq" element={<FAQsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
