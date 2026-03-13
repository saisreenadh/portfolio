import ThemeToggle from './components/ThemeToggle'
import AnimatedContent from './components/AnimatedContent'

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <main className="w-full max-w-4xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-8 md:pb-12 flex flex-col items-center">
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>
        
        <AnimatedContent />
      </main>
    </div>
  )
}
