import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { CaseStudies } from './components/CaseStudies'
import { Testimonials } from './components/Testimonials'
import { FAQs } from './components/FAQs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

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
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
