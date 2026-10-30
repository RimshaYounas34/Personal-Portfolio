// Hero.jsx - sab se pehla (home) section
import { useState } from 'react'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { personal } from '../data.js'
import CountUp from '../components/CountUp.jsx'
import SocialIcons from '../components/SocialIcons.jsx'

// Chhoti stats - sirf CV ke sach facts
const stats = [
  { value: 'MERN', label: 'Stack' },
  { end: 6, label: 'Projects' },
  { end: 2, label: 'Internships' },
  { end: 3.42, decimals: 2, label: 'BSCS CGPA' },
]

function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-badge">MERN Stack &amp; Business Development</p>
          <h1>
            <span className="script">Hi, I'm</span>
            <span className="hero-name">Rimsha Younas.</span>
          </h1>
          <h2 className="hero-headline">MERN Stack Developer &amp; Business Developer</h2>
          <p className="hero-description">
            I build responsive web experiences and practical digital solutions that bring technology and business together.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-dark">Explore My Work <ArrowDown size={16} /></a>
            <a href={personal.resume} download className="btn btn-light"><Download size={16} /> Download Resume</a>
            <a href="#contact" className="btn btn-light"><Mail size={16} /> Contact Me</a>
          </div>

          <SocialIcons />
        </div>

        <div className="hero-visual">
          <div className="blob-back" aria-hidden="true"></div>
          <div className="portrait">
            {photoFailed ? (
              <span className="portrait-initials">RY</span>
            ) : (
              <img src={personal.portrait} alt="Portrait of Rimsha Younas" onError={() => setPhotoFailed(true)} />
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats-row">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.end !== undefined ? <CountUp end={item.end} decimals={item.decimals} /> : item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
