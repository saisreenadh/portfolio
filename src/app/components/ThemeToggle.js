'use client'

import { useTheme } from './ThemeProvider'
import { useState, useRef, useEffect } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setTheme('system')
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('resize', checkMobile)
    }
  }, [setTheme])

  const options = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ]

  const getThemeIcon = (themeValue) => {
    switch(themeValue) {
      case 'dark': return '●'
      case 'light': return '○'
      default: return '◐'
    }
  }

  // Hide on mobile
  if (isMobile) {
    return null
  }

  return (
    <div className="fixed top-6 right-6 hidden md:block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-toggle-button"
        aria-label="Toggle theme"
      >
        <span className="flex items-center">
          {getThemeIcon(theme)}
          <span className="ml-2 text-sm">
            {options.find(opt => opt.value === theme)?.label}
          </span>
          <span className="ml-2 text-xs opacity-60">▼</span>
        </span>
      </button>
      
      {isOpen && (
        <div className="theme-dropdown">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value)
                setIsOpen(false)
              }}
              className={`theme-dropdown-item ${theme === option.value ? 'active' : ''}`}
            >
              <span className="mr-2">{getThemeIcon(option.value)}</span>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
