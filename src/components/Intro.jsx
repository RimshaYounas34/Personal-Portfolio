// Intro.jsx - shuru ka welcome screen: naam ke harf ek ek karke aate hain.
// ESC dabane ya SKIP par click karne se band ho jata hai.
import { useState, useEffect } from 'react'

function Intro() {
  const [visible, setVisible] = useState(true) // intro dikh raha hai ya nahi

  const name = 'Rimsha Younas'

  function closeIntro() {
    setVisible(false)
  }

  useEffect(() => {
    const timer = setTimeout(closeIntro, 3600) // 3.6 second baad khud band
    function onKey(event) {
      if (event.key === 'Escape') closeIntro()
    }
    window.addEventListener('keydown', onKey)
    // Cleanup: component hatne par timer aur listener saaf kar do
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className={visible ? 'intro' : 'intro hide'} aria-hidden={!visible}>
      <p className="intro-badge">MERN Stack &amp; Business Development</p>
      <h1 className="intro-title">
        <span className="intro-hi">Hi, I'm</span>
        <span className="intro-name">
          {/* Naam ke har harf ko alag span mein rakhte hain, har ek ki animation thodi der baad shuru hoti hai */}
          {name.split('').map((letter, index) => (
            <span key={index} className="letter" style={{ animationDelay: index * 0.09 + 's' }}>
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
      </h1>
      <p className="intro-text">Building responsive web experiences and practical digital solutions.</p>
      <div className="intro-bar"><span></span></div>
      <button className="intro-skip" onClick={closeIntro}>SKIP [ESC]</button>
    </div>
  )
}

export default Intro
