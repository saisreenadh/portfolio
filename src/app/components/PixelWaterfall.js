'use client'

import { useEffect, useRef } from 'react'

export default function PixelWaterfall() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Create grid with medium-sized boxes
    const boxSize = 20 // Keep same size
    const columns = Math.ceil(canvas.width / boxSize)
    const rows = Math.ceil(canvas.height / boxSize)

    // Create grid cells with animation state
    const cells = Array(columns).fill().map(() => 
      Array(rows).fill().map((_, rowIndex) => ({
        active: Math.random() < 0.5, // 50% chance to be active (more squares)
        opacity: Math.random(),
        speed: 0.008 + Math.random() * 0.008, // Even faster speed
        phase: rowIndex * 0.12,
        basePhase: Math.random() * Math.PI * 2,
        transitionSpeed: 0.06 + Math.random() * 0.04 // Faster transitions
      }))
    )

    const drawBox = (x, y, opacity) => {
      const isDark = document.documentElement.classList.contains('dark')
      const size = boxSize - 1
      const xPos = x * boxSize
      const yPos = y * boxSize
      
      ctx.fillStyle = isDark 
        ? `rgba(35, 35, 35, ${opacity * 0.6})`
        : `rgba(200, 200, 200, ${opacity * 0.8})`
      
      ctx.beginPath()
      ctx.rect(xPos, yPos, size, size)
      ctx.fill()
    }

    let time = 0
    const animate = () => {
      time += 0.006 // Even faster global animation
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      cells.forEach((column, x) => {
        column.forEach((cell, y) => {
          const wave = Math.sin(time + cell.basePhase + cell.phase)
          const targetOpacity = cell.active ? (wave + 1) * 0.5 : 0

          cell.opacity += (targetOpacity - cell.opacity) * cell.transitionSpeed

          if (Math.random() < 0.001) { // More frequent state changes
            cell.active = !cell.active
            // 70% chance to activate nearby cells for a more connected effect
            if (cell.active && Math.random() < 0.7) {
              if (column[y-1]) column[y-1].active = true
              if (column[y+1]) column[y+1].active = true
              if (cells[x-1]?.[y]) cells[x-1][y].active = true
              if (cells[x+1]?.[y]) cells[x+1][y].active = true
            }
          }

          if (cell.opacity > 0.01) {
            drawBox(x, y, cell.opacity)
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="h-full relative">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
