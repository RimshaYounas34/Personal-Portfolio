// SectionTitle.jsx - har section ka heading + chhota intro text
function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="section-title">
      {label && <p className="pill-label"><i></i> {label}</p>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
