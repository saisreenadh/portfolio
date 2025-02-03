import './globals.css'
import ThemeProvider from './components/ThemeProvider'

export const metadata = {
  title: 'Saisreenadh (Sreenadh) Yandapalli | Portfolio',
  description: "Hi, I'm Sreenadh! I'm a software engineer with a passion for building innovative solutions. Currently, I'm studying Computer Science at Georgia Tech, where I focus on AI/ML and full-stack development. I love tackling complex problems and creating elegant solutions that make a real impact.",
  icons: {
    icon: '/favicon copy.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
