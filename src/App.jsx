// App.jsx - saare sections yahan ek ke baad ek lagte hain (single-page website)
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
  return (
    <>
      <ScrollEffects />
      <Navbar />
      <main>
        <Hero />
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
