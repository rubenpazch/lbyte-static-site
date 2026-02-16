import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })))
const Blog = lazy(() => import('./pages/Blog').then((module) => ({ default: module.Blog })))
const BlogPost = lazy(() => import('./pages/BlogPost').then((module) => ({ default: module.BlogPost })))
const ServicesPage = lazy(() => import('./pages/Services').then((module) => ({ default: module.ServicesPage })))
const AboutPage = lazy(() => import('./pages/About').then((module) => ({ default: module.AboutPage })))
const ContactPage = lazy(() => import('./pages/Contact').then((module) => ({ default: module.ContactPage })))
const FAQsPage = lazy(() => import('./pages/FAQs').then((module) => ({ default: module.FAQsPage })))

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
      <Suspense fallback={<div style={{ minHeight: '90vh', paddingTop: '80px' }} />}> 
        <div style={{ minHeight: '90vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/faq" element={<FAQsPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
