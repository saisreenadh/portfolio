'use client'

import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'AWS',
    companyUrl: 'https://aws.amazon.com/',
    period: 'June 2025 - September 2025',
    description: 'Built an MCP server behind a new AWS agentic AI product.',
  },
  {
    title: 'AI Fellow',
    company: 'Windsurf',
    companyUrl: 'https://codeium.com/',
    period: 'February 2025 - Present',
    description: 'Growing and iterating on Codeium\'s new AI IDE Windsurf.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Onki',
    companyUrl: 'https://onki.ai/',
    period: 'December 2024 - March 2025',
    description: 'Designed and shipped AI Voice chat.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'CollegePlan',
    companyUrl: 'https://collegeplan.app/',
    period: 'June 2024 - October 2024',
    description: 'Created chat APIs w/ GPT-4o & Llama3.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Locbit',
    companyUrl: 'https://locbit.com/',
    period: 'July 2024 - September 2024',
    description: 'Developed D3.js visualizations & optimized data analysis.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Locbit',
    companyUrl: 'https://locbit.com/',
    period: 'June 2023 - August 2023',
    description: 'Built an IoT lead tool w/ Google\'s Custom Search API & improved UI.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Main content */}
      <motion.main 
        className={`py-12 ${isMobile ? 'px-6' : 'pl-20 pr-4 max-w-2xl'}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Link 
            href="/" 
            className="mb-6 inline-block hover:opacity-80 transition-opacity text-[var(--foreground)] font-medium"
          >
            ← Back to Home
          </Link>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="mb-12 text-4xl font-bold text-[var(--foreground)]"
        >
          Experience
        </motion.h1>
        
        {/* Timeline */}
        <motion.div className="relative" variants={containerVariants}>
          {/* Vertical line */}
          <motion.div 
            variants={itemVariants}
            className="absolute left-[8px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 dark:from-gray-400 dark:via-gray-300 dark:to-gray-400" 
          />
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative pl-10 group"
                variants={itemVariants}
              >
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-0 top-[6px] w-[18px] h-[18px]">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-900 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full border-4 border-gray-300 dark:border-gray-400 opacity-75 group-hover:animate-ping" />
                </div>
                
                {/* Content */}
                <div className="transform transition-all duration-300 group-hover:translate-x-1">
                  <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-lg font-semibold flex items-baseline flex-wrap gap-x-2">
                      <span className="text-[var(--foreground)]">{exp.title}</span>
                      <span className="font-normal text-[var(--body-text)] opacity-60">@</span>
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-[var(--foreground)] opacity-90 hover:opacity-100 hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="font-medium text-[var(--foreground)] opacity-90">{exp.company}</span>
                      )}
                    </h3>
                    <span className="text-sm text-[var(--body-text)] opacity-75">{exp.period}</span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[var(--body-text)] group-hover:text-[var(--foreground)] transition-colors">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-center text-[var(--body-text)]">
            © 2025 Sreenadh Yandapalli
          </p>
        </motion.div>
      </motion.main>

      {/* Theme toggle */}
      <div className={`${isMobile ? 'hidden' : 'fixed top-6 right-6 z-50'}`}>
        <ThemeToggle />
      </div>
    </div>
  )
}
