import Ribbon from './components/Ribbon'

const experience = [
  { org: 'Neo Scholar', role: '2026 Cohort' },
  { org: 'xAI', role: 'Member of Technical Staff, Grok Imagine' },
  { org: 'AWS', role: 'MCP & AI Agents' },
  { org: 'Stanford', role: 'Computer Science (AI)' },
]

export default function Home() {
  return (
    <div className="home">
      <main className="home-content">
        <div className="home-inner">
          <h1 className="home-name">Sreenadh Yandapalli</h1>
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
