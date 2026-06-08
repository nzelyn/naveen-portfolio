'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] h-[3px] bg-cyber-navy">
      <div
        className="h-full transition-all duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00D9FF, #7C3AED, #00D9FF)',
          boxShadow: '0 0 8px rgba(0, 217, 255, 0.8)',
        }}
      />
    </div>
  )
}
