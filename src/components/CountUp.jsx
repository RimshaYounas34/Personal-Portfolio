// CountUp.jsx - number 0 se shuru ho kar ginti mein barhta hai
import { useState, useEffect } from 'react'

function CountUp({ end, decimals = 0 }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 1500 // 1.5 second
    const startTime = performance.now()
    let frame

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1) // 0 se 1
      setValue(end * progress)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end])

  return <>{value.toFixed(decimals)}</>
}

export default CountUp
