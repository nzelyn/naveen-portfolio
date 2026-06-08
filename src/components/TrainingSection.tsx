'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, ChevronDown, ChevronUp, BookOpen, Award } from 'lucide-react'
import { trainingPrograms } from '@/data/training'

export default function TrainingSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="training" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-cyber-blue/60 tracking-[0.3em] uppercase">
            &gt;_ Knowledge Transfer
          </span>
          <h2 className="section-title text-3xl md:text-4xl mt-2 gradient-text">
            TRAINING & MENTORSHIP
          </h2>
          <p className="font-rajdhani text-white/50 mt-3 text-lg max-w-xl mx-auto">
            Building the next generation of cybersecurity professionals across India and beyond.
          </p>
        </motion.div>

        {/* Big stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {[
            { icon: '👥', value: '500+', label: 'Students Trained' },
            { icon: '🏛', value: '4', label: 'Institutions' },
            { icon: '🎓', value: '90%+', label: 'Cert Pass Rate' },
            { icon: '🌍', value: '10+', label: 'Countries Reached' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="p-5 text-center"
              style={{ background: 'rgba(11, 17, 32, 0.8)', border: '1px solid rgba(0,217,255,0.12)' }}
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-orbitron text-2xl text-cyber-blue font-black">{s.value}</div>
              <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Training program cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {trainingPrograms.map((program, i) => {
            const isOpen = openId === program.id
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden"
                style={{
                  background: 'rgba(11, 17, 32, 0.9)',
                  border: `1px solid ${program.color}${isOpen ? '40' : '18'}`,
                  boxShadow: isOpen ? `0 0 25px ${program.color}12` : 'none',
                }}
              >
                {/* Color accent bar */}
                <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${program.color}, transparent)` }} />

                <button
                  onClick={() => setOpenId(isOpen ? null : program.id)}
                  className="w-full text-left p-5 flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center text-xl flex-shrink-0"
                    style={{ border: `1px solid ${program.color}40`, background: `${program.color}10` }}
                  >
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-orbitron text-sm text-white group-hover:text-cyber-blue transition-colors mb-1">
                      {program.title}
                    </h3>
                    <div className="font-rajdhani text-sm" style={{ color: program.color }}>
                      {program.institution}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 font-mono text-[10px] text-white/40">
                        <Users size={11} />
                        {program.studentsCount} students
                      </span>
                      <span className="font-mono text-[10px] text-white/30">{program.duration}</span>
                    </div>
                  </div>
                  <div className="text-white/30 mt-1">
                    {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-white/5 space-y-4">
                        {/* Topics */}
                        <div className="mt-4">
                          <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 tracking-widest mb-2">
                            <BookOpen size={11} />
                            CURRICULUM TOPICS
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {program.topics.map((t) => (
                              <span key={t} className="font-rajdhani text-sm px-2.5 py-0.5 bg-white/4 border border-white/8 text-white/60">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 tracking-widest mb-2">
                            <Award size={11} />
                            KEY HIGHLIGHTS
                          </div>
                          <ul className="space-y-1">
                            {program.highlights.map((h) => (
                              <li key={h} className="flex items-center gap-2 font-rajdhani text-sm text-white/60">
                                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: program.color }} />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Target certs */}
                        <div>
                          <div className="font-mono text-[10px] text-white/30 tracking-widest mb-1.5">TARGET CERTIFICATIONS</div>
                          <div className="flex flex-wrap gap-1.5">
                            {program.certifications.map((c) => (
                              <span key={c} className="font-mono text-[10px] px-2 py-0.5 tracking-wider"
                                    style={{ color: program.color, background: `${program.color}12`, border: `1px solid ${program.color}30` }}>
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Mentorship CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,217,255,0.05), rgba(124,58,237,0.05))',
            border: '1px solid rgba(0,217,255,0.15)',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent" />
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="font-orbitron text-xl text-white mb-2">Need 1-on-1 Mentorship?</h3>
          <p className="font-rajdhani text-white/60 text-lg max-w-md mx-auto mb-5">
            Book a session on Topmate for personalized guidance on cybersecurity career paths, certifications, and GRC.
          </p>
          <a
            href="https://topmate.io"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-filled inline-block"
          >
            Book a Mentorship Session
          </a>
        </motion.div>
      </div>
    </section>
  )
}
