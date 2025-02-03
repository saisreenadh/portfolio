'use client'

import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import PixelWaterfall from '../components/PixelWaterfall'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const experiences = [
  {
    title: 'AI Fellow',
    company: 'Codeium',
    companyUrl: 'https://codeium.com/',
    period: 'January 2025 - Present',
    description: 'Growing and iterating AI Code Editor Windsurf.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Onki',
    companyUrl: 'https://onki.ai/',
    period: 'December 2024 - Present',
    description: 'Building AI Voice chat.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Locbit Inc.',
    companyUrl: 'https://locbit.com/',
    period: 'July 2024 - September 2024',
    description: 'Developed APIs to integrate interactive data visualizations, collaborated with cross-functional teams to enhance IoT strategies, and optimized API integration for better application performance.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'CollegePlan AI',
    companyUrl: 'https://collegeplan.app/',
    period: 'June 2024 - October 2024',
    description: 'Developed chat completion APIs, redesigned core algorithms for scalability, and implemented testing frameworks to improve platform performance and stability.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Locbit Inc.',
    companyUrl: 'https://locbit.com/',
    period: 'June 2023 - August 2023',
    description: 'Built programs using Google\'s APIs to identify IoT opportunities, enhanced front-end experiences, and improved UX for better customer engagement.',
  },
  {
    title: 'Co-Founder',
    company: 'Kid-Kode',
    period: 'June 2020 - August 2024',
    description: 'Designed programming curricula, tutored students in foundational coding skills, and created engaging hands-on projects to prepare students for the tech industry.',
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
      </motion.main>

      {/* Right side with animation and theme toggle */}
      <div className={`${isMobile ? 'hidden' : 'fixed right-0 top-0 bottom-0 w-[400px]'}`}>
        {/* Theme toggle */}
        <div className="absolute top-6 right-6 z-50">
          <ThemeToggle />
        </div>

        {/* Animation container */}
        <div className="absolute inset-0 w-[300px]">
          <PixelWaterfall />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--background)]" />
        </div>
      </div>
    </div>
  )
}
