
import { useState } from 'react'
import {
  Menu,
  X,
  Moon,
  Sun,
  ArrowUpRight,
  Github,
  Linkedin,
} from 'lucide-react'

import { personal, navLinks } from '../data.js'
import Avatar from './Avatar.jsx'

function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-bar">

        {/* Brand */}
        <a
          href="#home"
          className="brand"
          onClick={() => setIsOpen(false)}
        >
          <Avatar size={48} />

          <span>
            <strong>{personal.name}</strong>
            <small>MERN Stack Developer</small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Navbar Actions */}
        <div className="nav-actions">

          <a
            href="https://github.com/RimshaYounas34"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#contact" className="btn btn-dark btn-small">
            Let's Talk
            <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            className="menu-button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://github.com/RimshaYounas34"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar
