// App.jsx - saare sections yahan ek ke baad ek lagte hain (single-page website)
import { useState, useEffect } from 'react'
import Intro from './components/Intro.jsx'
import Marquee from './components/Marquee.jsx'
import ScrollEffects from './components/ScrollEffects.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Education from './sections/Education.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Business from './sections/Business.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  // isDark = night mode on hai (true) ya band (false)
  const [isDark, setIsDark] = useState(false)

  // Jab isDark badle, <html> par data-theme laga do. CSS usi se colors badalti hai.
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
  }, [isDark])

  return (
    <>
      <Intro />
      <ScrollEffects />
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Business />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
