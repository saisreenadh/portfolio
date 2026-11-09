import './globals.css'
import ThemeProvider from './components/ThemeProvider'
import { GeistSans } from 'geist/font/sans'

export const metadata = {
  title: 'Sreenadh Yandapalli | Portfolio',
  description: "Personal website of Saisreenadh (Sreenadh) Yandapalli",
  icons: {
    icon: '/favicon copy.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={GeistSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
