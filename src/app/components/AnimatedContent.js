'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function AnimatedContent({ children }) {
  const { mounted } = useTheme();
  
  // Only animate content after the theme has been properly mounted
  if (!mounted) {
    return <div className="w-full opacity-0">{children}</div>;
  }
  
  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div 
        variants={itemVariants}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-8 mb-10"
      >
        <div className="w-[180px] h-[180px] relative overflow-hidden rounded-lg shrink-0">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="w-full md:min-w-0">
          <h1 className="mb-3" style={{ color: 'var(--foreground)' }}>
            Saisreenadh (Sreenadh) Yandapalli
          </h1>
          <div className="flex gap-1 mb-3">
            <Link href="https://github.com/saisreenadh" className="social-icon opacity-90 hover:opacity-100" aria-label="GitHub">
              <Image
                src="/images/outline.png"
                alt="GitHub"
                width={20}
                height={20}
                priority
              />
            </Link>
            <Link href="https://www.linkedin.com/in/sreenadh-yandapalli/" className="social-icon opacity-90 hover:opacity-100" aria-label="LinkedIn">
              <Image
                src="/images/linkedin-new.png"
                alt="LinkedIn"
                width={20}
                height={20}
                priority
              />
            </Link>
            <Link href="mailto:syandapalli@stanford.edu" className="social-icon opacity-90 hover:opacity-100" aria-label="Email">
              <Image
                src="/images/email.png"
                alt="Email"
                width={20}
                height={20}
                priority
              />
            </Link>
          </div>
          <p className="text-lg" style={{ color: 'var(--body-text)' }}>
            Computer Science (AI) @ Stanford • Agentic AI @ AWS • AI Fellow @ Windsurf
          </p>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section 
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full mb-10"
      >
        <h2 className="mb-4">About</h2>
        <div className="space-y-4" style={{ color: 'var(--body-text)' }}>
          <p>
            Hi, I&apos;m Sreenadh, a Stanford CS student specializing in AI. I&apos;m interested in building AI-driven solutions that enhance human-computer interaction, optimize decision-making, and drive social impact.
          </p>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full mb-10"
      >
        <h2 className="mb-4">Experience</h2>
        <div className="space-y-4">
          <div className="relative inline-block">
            <Link href="/experience" className="group flex items-center gap-2 hover:opacity-80 font-medium">
              <span className="wave-text">Click here to learn more about my experience</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </motion.section>


      {/* Contact Section */}
      <motion.section 
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full mb-10"
      >
        <h2 className="mb-4">Contact</h2>
        <div className="space-y-4">
          <Link 
            href="mailto:syandapalli@stanford.edu" 
            style={{ color: 'var(--body-text)' }}
            className="hover:opacity-80"
          >
            syandapalli [at] stanford [dot] edu
          </Link>
        </div>
      </motion.section>

      {/* Copyright Section */}
      <motion.section 
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full mt-8 pt-6"
      >
        <p className="text-sm text-center" style={{ color: 'var(--body-text)' }}>
          © 2025 Sreenadh Yandapalli
        </p>
      </motion.section>
    </motion.div>
  )
}
