// Footer.jsx - sab se neeche wali bar
import { ArrowUp } from 'lucide-react'
import { personal, navLinks } from '../data.js'
import SocialIcons from './SocialIcons.jsx'
import Avatar from './Avatar.jsx'

function Footer() {
  const currentYear = new Date().getFullYear() // har saal khud update

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <Avatar size={44} />
            <span>
              <strong>{personal.name}</strong>
              <small className="gradient-text">MERN Stack Developer | Business Developer</small>
            </span>
          </div>
          <a href={`mailto:${personal.email}`} className="footer-email">{personal.email}</a>
        </div>

        <div>
          <p className="mono-label">Navigation</p>
          <nav className="footer-links" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>

        <div>
          <p className="mono-label">Connect</p>
          <SocialIcons />
          <a href="#home" className="back-top"><ArrowUp size={14} /> Back to Top</a>
        </div>
      </div>
      <p className="copyright">© {currentYear} {personal.name}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
