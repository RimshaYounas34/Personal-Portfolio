// About.jsx - mere baare mein + 2 cards
import { Code2, Briefcase } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle label="Who I am" title="About Me" subtitle="A BSCS graduate who enjoys building useful things for the web." />

        <p className="about-text">
          I am a motivated and detail-oriented BSCS graduate with practical experience in MERN stack development and an
          interest in building responsive, user-friendly web applications. I am currently working remotely as a Web
          Developer at Tech Kam Software House, Faisalabad, and pursuing a dual-domain internship in Business
          Development and Web Development under the CM IT Internship Program 2026 at Peak Solutions, Faisalabad. I enjoy
          solving problems, learning new technologies, and developing quality digital solutions.
        </p>

        <div className="grid grid-2">
          <div className="card">
            <div className="icon-box"><Code2 size={24} /></div>
            <h3>Web Development</h3>
            <p>
              I build and maintain websites with the MERN stack, focusing on responsive interfaces that work well on
              phones, tablets, and desktops.
            </p>
          </div>
          <div className="card">
            <div className="icon-box"><Briefcase size={24} /></div>
            <h3>Business Development</h3>
            <p>
              Through the CM IT Internship Program, I am learning how to understand business needs and connect them with
              the right digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
