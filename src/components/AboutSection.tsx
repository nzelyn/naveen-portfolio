'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { profile } from '@/data/profile'

const timeline = [
  { year: '2023', label: 'Started at Texial', detail: 'Associate Cyber Security Consultant', color: '#FFB800' },
  { year: '2024', label: 'Grad Gurukul Trainer', detail: 'Cybersecurity & Ethical Hacking workshops', color: '#FF6B35' },
  { year: '2025', label: 'CompTIA Certifications', detail: 'A+, Security+, CySA+ – all earned', color: '#00D9FF' },
  { year: '2025', label: 'Multi-Institution Trainer', detail: 'NIIT, Imarticus, IntrnForte simultaneously', color: '#7C3AED' },
  { year: '2025', label: 'ISO 27001 LA', detail: 'Certified Lead Auditor', color: '#00FF88' },
  { year: '2026', label: 'CISA in Progress', detail: 'Final certification milestone', color: '#9F67FF' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-cyber-blue/60 tracking-[0.3em] uppercase">
            &gt;_ Profile Loaded
          </span>
          <h2 className="section-title text-3xl md:text-4xl mt-2 gradient-text">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Hexagonal-style photo container */}
            <div className="relative">
              <div
                className="relative w-72 h-72 overflow-hidden"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  border: '2px solid rgba(0, 217, 255, 0.3)',
                }}
              >
                <Image
                  src={profile.photo}
                  alt="Naveen AD"
                  fill
                  className="object-cover object-top"
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/5 to-cyber-purple/10" />
              </div>

              {/* Outer hex outline */}
              <svg
                className="absolute inset-0 w-full h-full animate-rotating-ring-slow pointer-events-none"
                viewBox="0 0 288 288"
              >
                <polygon
                  points="72,0 216,0 288,144 216,288 72,288 0,144"
                  fill="none"
                  stroke="rgba(0, 217, 255, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="8 4"
                />
              </svg>

              {/* Status badge */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 font-mono text-[11px] text-cyber-blue"
                style={{ background: '#0B1120', border: '1px solid rgba(0,217,255,0.3)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
                AVAILABLE FOR HIRE
              </div>
            </div>

            {/* Contact chips */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {[
                { label: profile.location, icon: '📍' },
                { label: '4+ Years Exp', icon: '⚡' },
                { label: 'ISO 27001 LA', icon: '🛡' },
                { label: '500+ Trained', icon: '🎓' },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="flex items-center gap-1.5 px-3 py-1 font-rajdhani text-sm text-white/70 border border-white/10 bg-white/5"
                >
                  <span>{chip.icon}</span>
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 justify-center"
          >
            {/* Bio */}
            <div className="glass-card p-6 hud-corners">
              <h3 className="font-orbitron text-sm tracking-widest text-cyber-blue mb-4 uppercase">
                Professional Bio
              </h3>
              <div className="font-rajdhani text-white/70 text-lg leading-relaxed space-y-3">
                {profile.about.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="section-title text-xl text-center text-white/60 mb-10 tracking-widest">
            CAREER TIMELINE
          </h3>

          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue/50 via-cyber-purple/50 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="flex flex-col gap-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex items-center gap-6 md:w-1/2 ${
                    i % 2 === 0 ? 'md:self-start md:pr-12' : 'md:self-end md:pl-12 md:text-right md:flex-row-reverse'
                  }`}
                >
                  {/* Dot on timeline */}
                  <div
                    className="absolute hidden md:block w-3 h-3 rounded-full border-2 border-cyber-bg"
                    style={{
                      background: item.color,
                      boxShadow: `0 0 8px ${item.color}`,
                      [i % 2 === 0 ? 'right' : 'left']: '-6px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                    }}
                  />

                  <div
                    className="flex-1 p-4"
                    style={{
                      background: 'rgba(11, 17, 32, 0.7)',
                      border: `1px solid ${item.color}30`,
                      boxShadow: `0 0 15px ${item.color}10`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs" style={{ color: item.color }}>
                        [{item.year}]
                      </span>
                      <span className="font-orbitron text-sm text-white">{item.label}</span>
                    </div>
                    <p className="font-rajdhani text-white/50 text-sm">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
