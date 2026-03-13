'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

export default function AnimatedContent({ children }) {
  const { mounted } = useTheme();
  
  // Only render content after the theme has been properly mounted
  if (!mounted) {
    return <div className="w-full opacity-0">{children}</div>;
  }
  
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8">
      {/* Split Layout Container */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column - Profile (Fixed on Desktop) */}
        <div className="lg:w-80 lg:sticky lg:top-6 lg:self-start lg:mt-6">
          {/* Profile Photo */}
          <div className="w-24 h-24 relative overflow-hidden rounded-lg mb-4">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          
          {/* Name */}
          <h1 className="text-xl font-medium mb-2" style={{ color: 'var(--foreground)' }}>
            Saisreenadh (Sreenadh) Yandapalli
          </h1>
          
          {/* Tagline */}
          <p className="text-sm mb-4" style={{ color: 'var(--body-text)' }}>
            MTS @ xAI · Stanford CS (AI)
          </p>
          
          {/* Social Links */}
          <div className="flex gap-1">
            <Link href="https://github.com/saisreenadh" className="social-icon opacity-90 hover:opacity-100" aria-label="GitHub">
              <Image
                src="/images/outline.png"
                alt="GitHub"
                width={18}
                height={18}
                priority
              />
            </Link>
            <Link href="https://www.linkedin.com/in/sreenadh-yandapalli/" className="social-icon opacity-90 hover:opacity-100" aria-label="LinkedIn">
              <Image
                src="/images/linkedin-new.png"
                alt="LinkedIn"
                width={18}
                height={18}
                priority
              />
            </Link>
            <Link href="mailto:syandapalli@stanford.edu" className="social-icon opacity-90 hover:opacity-100" aria-label="Email">
              <Image
                src="/images/email.png"
                alt="Email"
                width={18}
                height={18}
                priority
              />
            </Link>
          </div>
          
          {/* Location Block */}
          <div className="mt-6">
            <div className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--gray-600)' }}>
              Location
            </div>
            <div className="text-sm" style={{ color: 'var(--body-text)' }}>
              Bay Area · San Diego
            </div>
          </div>
          
          {/* Focus Block */}
          <div className="mt-4">
            <div className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--gray-600)' }}>
              Focus
            </div>
            <div className="text-sm space-y-0.5" style={{ color: 'var(--body-text)' }}>
              <div>Applied AI</div>
              <div>Infrastructure</div>
              <div>Model Behavior</div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Content (Scrollable) */}
        <div className="flex-1 space-y-12">
          
          {/* About Section */}
          <section>
            <h2 className="text-lg font-medium mb-4" style={{ color: 'var(--foreground)' }}>About</h2>
            <div style={{ color: 'var(--body-text)' }}>
              <p>
                Previously Grok Imagine at xAI, and studying Computer Science (AI) at Stanford, with interests in infrastructure and backend systems.
              </p>
            </div>
          </section>
          
          {/* Selected Experience Section */}
          <section>
            <h2 className="text-lg font-medium mb-4" style={{ color: 'var(--foreground)' }}>Recent Experience</h2>
            <div className="space-y-3" style={{ color: 'var(--body-text)' }}>
              <div>
                <div className="font-medium">xAI — Member of Technical Staff (Grok Imagine)</div>
              </div>
              <div>
                <div className="font-medium">AWS — MCP & AI Agents</div>
              </div>
              <div>
                <div className="font-medium">Stanford — Computer Science (AI)</div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section>
            <h2 className="text-lg font-medium mb-4" style={{ color: 'var(--foreground)' }}>Contact</h2>
            <div>
              <Link 
                href="mailto:syandapalli@stanford.edu" 
                style={{ color: 'var(--body-text)' }}
                className="hover:opacity-80"
              >
                syandapalli [at] stanford [dot] edu
              </Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
