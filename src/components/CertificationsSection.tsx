'use client'

import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle, Clock } from 'lucide-react'
import { certifications } from '@/data/certifications'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-cyber-blue/60 tracking-[0.3em] uppercase">
            &gt;_ Credentials Verified
          </span>
          <h2 className="section-title text-3xl md:text-4xl mt-2 gradient-text">
            CERTIFICATIONS
          </h2>
          <p className="font-rajdhani text-white/50 mt-3 text-lg max-w-xl mx-auto">
            Industry-recognized credentials validating expertise across cybersecurity domains.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="relative flex flex-col overflow-hidden group hud-corners"
              style={{
                background: 'rgba(11, 17, 32, 0.95)',
                border: `1px solid ${cert.color}25`,
              }}
            >
              {/* Top gradient bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}30)` }} />

              {/* Status indicator */}
              <div className="absolute top-4 right-4">
                {cert.status === 'active' ? (
                  <span className="flex items-center gap-1 font-mono text-[9px] text-cyber-green"
                        style={{ background: 'rgba(0, 255, 136, 0.1)', border: '1px solid rgba(0, 255, 136, 0.2)', padding: '2px 6px' }}>
                    <span className="w-1 h-1 rounded-full bg-cyber-green animate-pulse" />
                    ACTIVE
                  </span>
                ) : (
                  <span className="flex items-center gap-1 font-mono text-[9px] text-cyber-amber"
                        style={{ background: 'rgba(255, 184, 0, 0.1)', border: '1px solid rgba(255, 184, 0, 0.2)', padding: '2px 6px' }}>
                    <Clock size={8} />
                    IN PROGRESS
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col gap-4 flex-1">
                {/* Icon + badge */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      border: `2px solid ${cert.color}40`,
                      background: `${cert.color}10`,
                      boxShadow: `0 0 20px ${cert.color}20`,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-rajdhani text-[11px] text-white/40 uppercase tracking-wider mb-0.5">
                      {cert.issuer}
                    </div>
                    <div
                      className="font-orbitron text-sm font-bold"
                      style={{ color: cert.color }}
                    >
                      {cert.shortName}
                    </div>
                  </div>
                </div>

                {/* Full name */}
                <h3 className="font-rajdhani text-white font-semibold text-base leading-snug">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="font-rajdhani text-white/50 text-sm leading-relaxed flex-1">
                  {cert.description}
                </p>

                {/* Dates */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div className="font-mono text-[11px] text-white/40">
                    <span className="text-white/25">Issued: </span>
                    <span style={{ color: cert.color }}>{cert.issued}</span>
                    {cert.expires && (
                      <span className="text-white/25 ml-2">Exp: {cert.expires}</span>
                    )}
                  </div>
                  {cert.credlyUrl && (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-[10px] hover:opacity-80 transition-opacity"
                      style={{ color: cert.color }}
                    >
                      <ExternalLink size={11} />
                      Verify
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Credly CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://credly.com/users/naveen-ad"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber inline-flex items-center gap-2"
          >
            <CheckCircle size={14} />
            View All Badges on Credly
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
