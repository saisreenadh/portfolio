'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
  return (
    <motion.div
      className="max-w-[850px] mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div 
        variants={itemVariants}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-8 mb-10"
      >
        <div className="w-[200px] h-[200px] relative overflow-hidden rounded-lg shrink-0">
          <Image
            src="/images/profile-original.jpg"
            alt="Profile"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="min-w-[600px]">
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
            Computer Science (AI) @ Stanford • SWE Intern @ Onki • AI Fellow @ Codeium
          </p>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section 
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-[850px] mb-10"
      >
        <h2 className="mb-4">About</h2>
        <div className="space-y-4" style={{ color: 'var(--body-text)' }}>
          <p>
            Hi, I&apos;m Sreenadh (shree-nod), a Stanford CS student specializing in AI. I&apos;m interested in building AI-driven solutions that enhance human-computer interaction, optimize decision-making, and drive social impact.
          </p>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[850px] mb-10"
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

      {/* Projects Section */}
      <motion.section 
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-[850px] mb-10"
      >
        <h2 className="mb-4">Projects</h2>
        <div className="space-y-4">
          <div>
            <p className="mb-1">
              <span className="text-[1.1rem] font-[450]" style={{ color: 'var(--foreground)' }}>Multimodal Fire Risk Analysis System</span>
              <span style={{ color: 'var(--gray-600)' }}> — Fire hazard detection system using geospatial analytics and deep learning for predictive monitoring. <span className="font-[500]">Winner of Google's Multimodal Hackathon</span> ($3000+ in prizes).</span>
            </p>
            <p className="text-sm tracking-wide" style={{ color: 'var(--gray-600)' }}>
              Technologies: Google Gemini, React, Python, ArcGIS
            </p>
          </div>

          <div>
            <p className="mb-1">
              <span className="text-[1.1rem] font-[450]" style={{ color: 'var(--foreground)' }}>RAG-Based Resource Distribution Platform</span>
              <span style={{ color: 'var(--gray-600)' }}> — Shelter resource management system using RAG and real-time processing for optimized distribution. Features vector-based retrieval for efficient allocation.</span>
            </p>
            <p className="text-sm tracking-wide" style={{ color: 'var(--gray-600)' }}>
              Technologies: Python, JavaScript, HTML, CSS, Google Vertex AI, Firebase, GenKit, React
            </p>
          </div>

          <div>
            <p className="mb-1">
              <span className="text-[1.1rem] font-[450]" style={{ color: 'var(--foreground)' }}>LLM-Powered Interactive Game Engine</span>
              <span style={{ color: 'var(--gray-600)' }}> — Multiplayer word game with GPT-powered hint generation and real-time interaction. Implements WebSocket technology for seamless multiplayer experience.</span>
            </p>
            <p className="text-sm tracking-wide" style={{ color: 'var(--gray-600)' }}>
              Technologies: Node.js, Express, OpenAI API, HTML, CSS, JavaScript
            </p>
          </div>

          <div>
            <p className="mb-1">
              <span className="text-[1.1rem] font-[450]" style={{ color: 'var(--foreground)' }}>Geospatial Route Optimization Engine</span>
              <span style={{ color: 'var(--gray-600)' }}> — Navigation platform with advanced pathfinding algorithms for multi-stop route planning. Features OAuth authentication and personalized route recommendations.</span>
            </p>
            <p className="text-sm tracking-wide" style={{ color: 'var(--gray-600)' }}>
              Technologies: Node.js, Express, Mongoose, Passport.js (Google OAuth), HTML, CSS, JavaScript, Bootstrap, Leaflet.js, MongoDB
            </p>
          </div>

          <div>
            <p className="mb-1">
              <span className="text-[1.1rem] font-[450]" style={{ color: 'var(--foreground)' }}>Real-Time Mask Detection CV System</span>
              <span style={{ color: 'var(--gray-600)' }}> — Computer vision system using CNNs and cascade classifiers for face mask monitoring. Implements TensorFlow and OpenCV for efficient video processing and analysis.</span>
            </p>
            <p className="text-sm tracking-wide" style={{ color: 'var(--gray-600)' }}>
              Technologies: OpenCV, TensorFlow/Keras, Numpy, Haar Cascade Classifier, Python
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-[850px] mb-10"
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
    </motion.div>
  )
}
