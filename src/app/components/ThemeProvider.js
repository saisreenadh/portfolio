'use client'

import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

// Every visit starts in light mode (system settings and past visits are ignored).
// The switch changes the theme for the current visit only.
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
