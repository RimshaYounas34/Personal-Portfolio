// Business.jsx - "Technology Meets Business Thinking"
import { businessAreas } from '../data.js'
import SectionTitle from '../components/SectionTitle.jsx'

function Business() {
  return (
    <section id="business" className="section section-dark">
      <div className="container">
        <SectionTitle
          label="Business Development"
          title="Technology Meets Business Thinking"
          subtitle="I combine web development knowledge with business-oriented thinking, so the websites I build serve a clear purpose."
        />

        <div className="grid grid-3">
          {businessAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div className="card card-dark" key={area.title}>
                <div className="card-top">
                  <div className="icon-box"><Icon size={22} /></div>
                  {/* index 0 se shuru hota hai, is liye +1 */}
                  <span className="mono-label">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Business
