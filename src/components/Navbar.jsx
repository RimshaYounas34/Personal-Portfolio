
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

const githubUrl = 'https://github.com/RimshaYounas34'

const linkedinUrl =
  'https://www.linkedin.com/in/rimshayounas441?utm_source=share_via&utm_content=profile&utm_medium=member_android'

function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-bar">

        {/* Brand */}
        <a href="#home" className="brand" onClick={closeMenu}>
          <Avatar size={44} />

          <span className="brand-text">
            <strong>{personal.name}</strong>
            <small>MERN Stack Developer</small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <Github size={19} />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin size={19} />
          </a>

          <button
            type="button"
            className="theme-button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a href="#contact" className="btn btn-dark btn-small">
            Let's Talk
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="menu-button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <>
          <button
            type="button"
            className="mobile-menu-backdrop"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />

          <nav className="mobile-menu" aria-label="Mobile navigation">
            <div className="mobile-menu-heading">
              <span>Navigation</span>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>{link.label}</span>

                <ArrowUpRight size={16} />
              </a>
            ))}

            <div className="mobile-menu-socials">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <Github size={18} />
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <Linkedin size={18} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>

            <a
              href="#contact"
              className="mobile-contact-button"
              onClick={closeMenu}
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </a>
          </nav>
        </>
      )}
    </header>
  )
}

export default Navbar
