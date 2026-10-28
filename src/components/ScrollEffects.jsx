// ScrollEffects.jsx - scroll se judi animations:
// 1) upar ki patli progress line  2) cards/headings scroll karne par ahista se nazar aana
import { useState, useEffect } from 'react'

function ScrollEffects() {
  const [progress, setProgress] = useState(0) // page kitna scroll hua (0 se 100 %)

  // Progress line
  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll reveal: jo cheez screen par aaye, usay "visible" class de do
  useEffect(() => {
    // Jin logon ne animations band ki hain, unke liye kuch nahi karte
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const items = document.querySelectorAll('.section-title, .about-text, .card, .project-card, .timeline-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
            // Animation khatam hone ke baad extra classes hata dete hain (taake hover theek chale)
            setTimeout(() => {
              entry.target.classList.remove('reveal', 'visible')
              entry.target.style.transitionDelay = ''
            }, 1300)
          }
        })
      },
      { threshold: 0.15 }
    )

    items.forEach((element) => {
      // Timeline ke andar wala card dobara animate na ho
      if (element.classList.contains('card') && element.closest('.timeline-item')) return
      // Ek hi row ke cards thode thode waqfe se aayen
      const position = Array.from(element.parentElement.children).indexOf(element)
      element.style.transitionDelay = Math.min(position, 3) * 120 + 'ms'
      element.classList.add('reveal')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return <div className="scroll-progress" style={{ width: progress + '%' }} />
}

export default ScrollEffects
