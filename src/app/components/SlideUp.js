'use client'

import { useEffect, useRef } from 'react'

export default function SlideUp({ children, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('slide-up-show')
          }, delay)
        }
      },
      {
        threshold: 0.1
      }
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay])

  return (
    <div ref={ref} className="slide-up">
      {children}
    </div>
  )
}
