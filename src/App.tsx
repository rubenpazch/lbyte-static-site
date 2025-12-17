import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
// import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
