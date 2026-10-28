// Avatar.jsx - gol photo. Photo load na ho to "RY" initials dikhte hain.
import { useState } from 'react'
import { personal } from '../data.js'

function Avatar({ size = 40 }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className="avatar" style={{ width: size, height: size }}>
      {failed ? (
        <b>RY</b>
      ) : (
        <img src={personal.photo} alt="Portrait of Rimsha Younas" onError={() => setFailed(true)} />
      )}
    </span>
  )
}

export default Avatar
