'use client'

import { useEffect, useState } from 'react'

// The loading screen: a full page in the banner's green. A cream circle pops in, squares
// off, and stretches into a tiny copy of the banner; then the screen fades away.
// Timings here are mirrored in globals.css (.loader-* and .home-inner).

const SHOW_MS = 1650 // the shape morphs into the banner, then holds for a beat
const FADE_MS = 350 // the screen fades away

export default function Loader() {
  const [phase, setPhase] = useState('show') // show -> exit -> done

  useEffect(() => {
    const leave = setTimeout(() => setPhase('exit'), SHOW_MS)
    const done = setTimeout(() => setPhase('done'), SHOW_MS + FADE_MS)
    return () => {
      clearTimeout(leave)
      clearTimeout(done)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`loader loader-${phase}`} aria-hidden="true">
      <div className="loader-shape" />
    </div>
  )
}
