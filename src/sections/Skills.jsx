// Skills.jsx - skills groups mein (koi fake percentage nahi)
import { skillGroups } from '../data.js'
import SectionTitle from '../components/SectionTitle.jsx'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle label="My Stack" title="Technical Skills" subtitle="Technologies and tools I work with." />

        <div className="grid grid-2">
          {skillGroups.map((group) => {
            const Icon = group.icon // data.js se aaya hua icon
            return (
              <div className="card" key={group.title}>
                <div className="card-head">
                  <div className="icon-box"><Icon size={22} /></div>
                  <h3>{group.title}</h3>
                </div>
                <div className="tags">
                  {group.skills.map((skill) => (
                    <span className="tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
