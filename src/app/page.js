import Image from 'next/image'
import Ribbon from './components/Ribbon'
import ThemeToggle from './components/ThemeToggle'

const experience = [
  { role: 'Member of Technical Staff, Grok Imagine', org: 'xAI' },
  { role: 'MCP & AI Agents', org: 'AWS' },
  { role: 'Computer Science (AI)', org: 'Stanford' },
]

export default function Home() {
  return (
    <div className="home">
      <ThemeToggle />

      <main className="home-content">
        <div className="home-inner">
          {/* The photo is sized from the name's width (see .home-photo) */}
          <div className="home-id">
            <Image
              src="/profile.jpg"
              alt="Sreenadh Yandapalli"
              width={300}
              height={300}
              className="home-photo"
              priority
            />
            <h1 className="home-name">Sreenadh Yandapalli</h1>
          </div>
          <div className="home-meta">San Francisco &amp; San Diego</div>

          <p>
            Previously Grok Imagine at <a className="home-link" href="https://x.ai">xAI</a>, and studying
            Computer Science (AI) at <a className="home-link" href="https://www.stanford.edu">Stanford</a>.
            I focus on applied AI, infrastructure, and product.
          </p>

          <p>
            You can find me on <a className="home-link" href="https://github.com/saisreenadh">GitHub</a> and{' '}
            <a className="home-link" href="https://www.linkedin.com/in/sreenadh-yandapalli/">LinkedIn</a>, or
            reach me via <a className="home-link" href="mailto:syandapalli@stanford.edu">email</a>.
          </p>

          <div className="home-section">
            <div className="home-label">Experience</div>
            {experience.map((item) => (
              <div key={item.org}>
                {item.org} <span className="home-dim">— {item.role}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="home-strip" aria-hidden="true">
          <Ribbon />
        </aside>
      </main>
    </div>
  )
}
