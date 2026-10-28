// Experience.jsx - vertical timeline
import { experiences } from '../data.js'
import SectionTitle from '../components/SectionTitle.jsx'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle label="Career Progression" title="Experience" subtitle="My internships and practical learning." />

        <div className="timeline">
          {experiences.map((item) => (
            <div className="timeline-item" key={item.role}>
              <span className="timeline-dot" aria-hidden="true"></span>
              <div className="card">
                <p className="timeline-date">{item.duration}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
