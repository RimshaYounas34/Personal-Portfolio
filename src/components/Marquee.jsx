// Marquee.jsx - chalti hui text patti (sirf CSS animation)
function Marquee() {
  const text = 'RIMSHA YOUNAS • MERN STACK DEVELOPER • BUSINESS DEVELOPER • '
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{text.repeat(4)}</span>
        <span>{text.repeat(4)}</span>
      </div>
    </div>
  )
}

export default Marquee
