'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Code2, Users, Presentation, Clock } from 'lucide-react'
import { profile } from '@/data/profile'

const iconMap: Record<string, React.ElementType> = {
  award: Award,
  code: Code2,
  users: Users,
  presentation: Presentation,
  clock: Clock,
}

function Counter({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return (
    <span ref={ref}>
      {count}
      {started ? suffix : ''}
    </span>
  )
}

const colorConfigs = [
  { border: 'rgba(0,217,255,0.3)', glow: 'rgba(0,217,255,0.1)', text: '#00D9FF', accent: '#00D9FF' },
  { border: 'rgba(124,58,237,0.3)', glow: 'rgba(124,58,237,0.1)', text: '#9F67FF', accent: '#7C3AED' },
  { border: 'rgba(0,255,136,0.3)', glow: 'rgba(0,255,136,0.1)', text: '#00FF88', accent: '#00FF88' },
  { border: 'rgba(255,107,53,0.3)', glow: 'rgba(255,107,53,0.1)', text: '#FF6B35', accent: '#FF6B35' },
  { border: 'rgba(255,184,0,0.3)', glow: 'rgba(255,184,0,0.1)', text: '#FFB800', accent: '#FFB800' },
]

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-20 px-6 overflow-hidden">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-cyber-blue/60 tracking-[0.3em] uppercase">
            &gt;_ System Dashboard
          </span>
          <h2 className="section-title text-3xl md:text-4xl mt-2 gradient-text">
            LIVE CYBER METRICS
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {profile.stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Award
            const cfg = colorConfigs[i % colorConfigs.length]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative p-6 flex flex-col items-center gap-3 hud-corners group cursor-default"
                style={{
                  background: 'rgba(11, 17, 32, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${cfg.border}`,
                  boxShadow: `0 0 20px ${cfg.glow}`,
                }}
              >
                {/* Animated data flow line at top */}
                <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
                  <div
                    className="animate-data-flow h-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${cfg.accent}, transparent)` }}
                  />
                </div>

                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ border: `1px solid ${cfg.border}`, background: `${cfg.glow}` }}
                >
                  <Icon size={22} style={{ color: cfg.text }} />
                </div>

                <div
                  className="font-orbitron font-black text-3xl md:text-4xl"
                  style={{ color: cfg.text, textShadow: `0 0 20px ${cfg.accent}60` }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>

                <div className="font-mono text-xs text-white/50 tracking-widest text-center uppercase">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent" />
    </section>
  )
}
