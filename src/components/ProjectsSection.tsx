'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code2, Shield, Database, ChevronRight } from 'lucide-react'
import { projects, type Project } from '@/data/projects'

const categoryColors: Record<string, string> = {
  'ai-security': '#7C3AED',
  vapt: '#FF0055',
  grc: '#00D9FF',
  training: '#00FF88',
  automation: '#FFB800',
}

const categoryLabels: Record<string, string> = {
  'ai-security': 'AI Security',
  vapt: 'VAPT',
  grc: 'GRC',
  training: 'Training',
  automation: 'Automation',
}

const filters = ['all', 'ai-security', 'vapt', 'grc', 'training']

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)
  const color = categoryColors[project.category] || '#00D9FF'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group flex flex-col overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(11, 17, 32, 0.9)',
        border: `1px solid ${color}${hovered ? '50' : '18'}`,
        boxShadow: hovered ? `0 0 30px ${color}15` : 'none',
      }}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

      {/* Category + year header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-1">
        <span className="font-mono text-[10px] tracking-widest px-2 py-0.5"
              style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}>
          {categoryLabels[project.category]}
        </span>
        <span className="font-mono text-[10px] text-white/30">{project.year}</span>
      </div>

      <div className="px-5 pb-5 flex flex-col gap-3 flex-1">
        <h3 className="font-orbitron text-sm text-white group-hover:text-cyber-blue transition-colors duration-200 flex items-center gap-2">
          {project.featured && <span className="text-cyber-blue/60 text-[10px]">★</span>}
          {project.title}
        </h3>

        <p className="font-rajdhani text-white/55 text-base leading-relaxed flex-1">
          {hovered ? project.longDescription : project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="font-mono text-[10px] px-2 py-0.5 bg-white/4 border border-white/8 text-white/40">
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="font-mono text-[10px] px-2 py-0.5 bg-white/4 border border-white/8 text-white/30">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2 border-t border-white/5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-white/40 hover:text-cyber-blue transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-white/40 hover:text-cyber-blue transition-colors"
            >
              <ExternalLink size={13} />
              Demo
            </a>
          )}
          <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-white/20">
            <ChevronRight size={11} />
            VIEW
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-cyber-blue/60 tracking-[0.3em] uppercase">
            &gt;_ Project Archive
          </span>
          <h2 className="section-title text-3xl md:text-4xl mt-2 gradient-text">
            PROJECTS
          </h2>
          <p className="font-rajdhani text-white/50 mt-3 text-lg max-w-xl mx-auto">
            Security tools, research projects, and GRC frameworks built from the ground up.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              suppressHydrationWarning
              onClick={() => setFilter(f)}
              className={`font-mono text-xs px-4 py-2 tracking-widest uppercase transition-all duration-200 ${
                filter === f
                  ? 'bg-cyber-blue/10 border border-cyber-blue/60 text-cyber-blue'
                  : 'border border-white/10 text-white/40 hover:border-white/25 hover:text-white/60'
              }`}
            >
              {f === 'all' ? 'All' : categoryLabels[f]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Publication highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 relative overflow-hidden"
          style={{
            background: 'rgba(11, 17, 32, 0.9)',
            border: '1px solid rgba(255, 184, 0, 0.25)',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-amber/50 to-transparent" />
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-1">📄</span>
            <div>
              <div className="font-mono text-[10px] text-cyber-amber tracking-widest mb-1 uppercase">
                Research Publication
              </div>
              <h3 className="font-orbitron text-sm text-white mb-1">
                AI Against Adversaries: Deep Learning's Role in Malware Detection Using Autoencoders
              </h3>
              <p className="font-rajdhani text-white/50">
                International Journal of All Research Education and Scientific Methods (IJARESM) – May 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
