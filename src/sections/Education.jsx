// Education.jsx - degree card
import { GraduationCap } from 'lucide-react'
import { education } from '../data.js'
import SectionTitle from '../components/SectionTitle.jsx'

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionTitle label="Academics" title="Education" subtitle="My academic background." />

        <div className="card education-card">
          <div className="icon-box"><GraduationCap size={28} /></div>
          <div>
            <div className="education-top">
              <p className="mono-label">Bachelor's Degree</p>
              <span className="status-badge">Completed</span>
            </div>
            <h3>{education.degree}</h3>
            <p className="education-school">{education.institution}</p>
            <div className="education-meta">
              <span className="tag">{education.duration}</span>
              <span className="tag">CGPA: {education.cgpa}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
