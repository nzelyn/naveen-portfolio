'use client'

import { motion } from 'framer-motion'
import { achievements } from '@/data/achievements'

const categoryColors: Record<string, string> = {
  recognition: '#FFB800',
  milestone: '#00D9FF',
  publication: '#7C3AED',
  community: '#00FF88',
}

const categoryLabels: Record<string, string> = {
  recognition: 'Recognition',
  milestone: 'Milestone',
  publication: 'Publication',
  community: 'Community',
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-cyber-blue/60 tracking-[0.3em] uppercase">
            &gt;_ Milestone Tracker
          </span>
          <h2 className="section-title text-3xl md:text-4xl mt-2 gradient-text">
            ACHIEVEMENTS
          </h2>
          <p className="font-rajdhani text-white/50 mt-3 text-lg max-w-xl mx-auto">
            Key milestones, recognitions, and contributions to the cybersecurity community.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => {
            const catColor = categoryColors[a.category]
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="relative p-5 flex flex-col gap-3 group transition-all duration-300"
                style={{
                  background: 'rgba(11, 17, 32, 0.9)',
                  border: `1px solid ${a.color}20`,
                  boxShadow: `0 0 0 ${a.color}00`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 20px ${a.color}08` }}
                />

                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px"
                     style={{ background: `linear-gradient(90deg, ${a.color}80, transparent)` }} />

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center text-2xl"
                  style={{ border: `1px solid ${a.color}40`, background: `${a.color}10` }}
                >
                  {a.icon}
                </div>

                {/* Category badge */}
                <span
                  className="font-mono text-[9px] tracking-widest w-fit px-2 py-0.5"
                  style={{ color: catColor, background: `${catColor}10`, border: `1px solid ${catColor}25` }}
                >
                  {categoryLabels[a.category].toUpperCase()}
                </span>

                {/* Title */}
                <h3 className="font-orbitron text-xs text-white leading-snug">
                  {a.title}
                </h3>

                {/* Description */}
                <p className="font-rajdhani text-white/50 text-sm leading-relaxed flex-1">
                  {a.description}
                </p>

                {/* Year */}
                <div className="font-mono text-[11px] pt-2 border-t border-white/5"
                     style={{ color: a.color }}>
                  {a.year}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
