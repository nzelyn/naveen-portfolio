'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react'
import { experiences } from '@/data/experience'

const typeLabels: Record<string, string> = {
  'full-time': 'Full-Time',
  'part-time': 'Part-Time',
  freelance: 'Freelance',
  training: 'Training',
}

export default function ExperienceSection() {
  const [openId, setOpenId] = useState<string>(experiences[0].id)

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-cyber-blue/60 tracking-[0.3em] uppercase">
            &gt;_ Work Log
          </span>
          <h2 className="section-title text-3xl md:text-4xl mt-2 gradient-text">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue/40 via-cyber-purple/40 to-transparent md:left-8" />

          <div className="flex flex-col gap-4">
            {experiences.map((exp, i) => {
              const isOpen = openId === exp.id
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-cyber-bg flex items-center justify-center"
                    style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}80` }}
                  />

                  {/* Card */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      background: 'rgba(11, 17, 32, 0.9)',
                      border: `1px solid ${isOpen ? exp.color + '40' : 'rgba(255,255,255,0.06)'}`,
                      boxShadow: isOpen ? `0 0 25px ${exp.color}10` : 'none',
                    }}
                  >
                    {/* Header */}
                    <button
                      onClick={() => setOpenId(isOpen ? '' : exp.id)}
                      className="w-full text-left p-5 flex items-start justify-between gap-4 group"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-orbitron text-sm text-white group-hover:text-cyber-blue transition-colors">
                            {exp.role}
                          </h3>
                          <span
                            className="font-mono text-[9px] px-2 py-0.5 tracking-widest"
                            style={{ color: exp.color, background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
                          >
                            {typeLabels[exp.type]}
                          </span>
                        </div>
                        <div className="font-rajdhani font-semibold text-base" style={{ color: exp.color }}>
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-1 text-sm text-white/40">
                          <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                          <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                        </div>
                      </div>
                      <div className="text-white/30 mt-1 flex-shrink-0">
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-white/5">
                            <ul className="mt-4 space-y-2">
                              {exp.highlights.map((h, hi) => (
                                <li key={hi} className="flex items-start gap-2 font-rajdhani text-white/65 text-base">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                                  {h}
                                </li>
                              ))}
                            </ul>
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                              {exp.tags.map((tag) => (
                                <span key={tag} className="font-mono text-[10px] px-2 py-0.5 bg-white/4 border border-white/8 text-white/40">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
