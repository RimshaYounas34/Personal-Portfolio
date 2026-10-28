// Navbar.jsx - upar wali bar. Mobile par hamburger se menu khulta hai.
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { personal, navLinks } from '../data.js'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false) // mobile menu khula hai ya nahi

  return (
    <header className="navbar">
      <div className="container navbar-bar">
        <a href="#home" className="wordmark" onClick={() => setIsOpen(false)}>
          {personal.name}
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-dark btn-small">Let's Talk</a>
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
