import './globals.css'
import Loader from './components/Loader'
import { GeistSans } from 'geist/font/sans'

const title = 'Sreenadh Yandapalli'
const description =
  'Previously Grok Imagine at xAI, and studying Computer Science (AI) at Stanford. Focused on applied AI, infrastructure, and product.'

export const metadata = {
  title,
  description,
  authors: [{ name: 'Sreenadh Yandapalli' }],
  // Text shown when the link is shared (iMessage, Slack, X, LinkedIn, ...)
  openGraph: { title, description, type: 'website', siteName: title },
  twitter: { card: 'summary', title, description },
}

// Browser UI color on mobile (matches the light background)
export const viewport = { themeColor: '#fafafa' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <Loader />
        {children}
      </body>
    </html>
  )
}
