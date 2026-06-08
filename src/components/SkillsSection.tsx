'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Skill {
  name: string
  level: number // 0-100
}

interface SkillCategory {
  id: string
  title: string
  icon: string
  color: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'grc',
    title: 'GRC & Compliance',
    icon: '🛡',
    color: '#00D9FF',
    skills: [
      { name: 'ISO/IEC 27001', level: 95 },
      { name: 'NIST CSF', level: 88 },
      { name: 'COBIT', level: 82 },
      { name: 'PCI-DSS', level: 78 },
      { name: 'SOC 1 & SOC 2', level: 80 },
      { name: 'GDPR / DPDP Act', level: 75 },
    ],
  },
  {
    id: 'soc',
    title: 'SOC Operations',
    icon: '📡',
    color: '#7C3AED',
    skills: [
      { name: 'Splunk SIEM', level: 88 },
      { name: 'IBM QRadar', level: 78 },
      { name: 'Threat Hunting', level: 85 },
      { name: 'Incident Response', level: 90 },
      { name: 'Log Analysis', level: 92 },
      { name: 'Wazuh', level: 82 },
    ],
  },
  {
    id: 'vapt',
    title: 'Ethical Hacking & VAPT',
    icon: '⚔',
    color: '#FF0055',
    skills: [
      { name: 'Burp Suite', level: 90 },
      { name: 'Metasploit', level: 88 },
      { name: 'Nmap', level: 92 },
      { name: 'Wireshark', level: 85 },
      { name: 'Kali Linux', level: 93 },
      { name: 'OWASP Top 10', level: 90 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Security',
    icon: '☁',
    color: '#FF6B35',
    skills: [
      { name: 'AWS Security', level: 80 },
      { name: 'Azure Security', level: 75 },
      { name: 'IAM & RBAC', level: 85 },
      { name: 'Docker Security', level: 72 },
      { name: 'Terraform', level: 65 },
      { name: 'Cloud Compliance', level: 80 },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Scripting',
    icon: '💻',
    color: '#00FF88',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'PowerShell', level: 80 },
      { name: 'Bash', level: 82 },
      { name: 'SQL', level: 75 },
      { name: 'JavaScript', level: 65 },
      { name: 'C++', level: 60 },
    ],
  },
  {
    id: 'grc-tools',
    title: 'GRC & Security Tools',
    icon: '🔧',
    color: '#FFB800',
    skills: [
      { name: 'ServiceNow GRC', level: 78 },
      { name: 'RSA Archer', level: 72 },
      { name: 'Nessus', level: 84 },
      { name: 'OneTrust', level: 70 },
      { name: 'Phishing Simulation', level: 88 },
      { name: 'SBOM Tools', level: 75 },
    ],
  },
]

function SkillBar({ skill, color, delay }: { skill: Skill; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col gap-1"
    >
      <div className="flex justify-between items-center">
        <span className="font-rajdhani text-sm text-white/80">{skill.name}</span>
        <span className="font-mono text-xs" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}90, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-cyber-blue/60 tracking-[0.3em] uppercase">
            &gt;_ Capability Index
          </span>
          <h2 className="section-title text-3xl md:text-4xl mt-2 gradient-text">
            TECHNICAL SKILLS
          </h2>
          <p className="font-rajdhani text-white/50 mt-3 text-lg max-w-xl mx-auto">
            Core competencies across cybersecurity domains, tools, and frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              onClick={() => setActiveId(activeId === cat.id ? null : cat.id)}
              className="relative p-6 cursor-pointer group hud-corners transition-all duration-300"
              style={{
                background: 'rgba(11, 17, 32, 0.9)',
                border: `1px solid ${cat.color}${activeId === cat.id ? '60' : '20'}`,
                boxShadow: activeId === cat.id ? `0 0 25px ${cat.color}20` : 'none',
              }}
            >
              {/* Animated top bar */}
              <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
                <div
                  className="h-full animate-data-flow"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.color}80, transparent)` }}
                />
              </div>

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 flex items-center justify-center text-lg"
                  style={{ border: `1px solid ${cat.color}40`, background: `${cat.color}10` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-orbitron text-xs tracking-wider" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={cat.color}
                    delay={si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-6">
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">Tools & Technologies</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'Nessus',
              'Splunk', 'IBM QRadar', 'Wazuh', 'AWS', 'Azure', 'Docker',
              'Python', 'PowerShell', 'Bash', 'Git', 'VS Code', 'LaTeX',
            ].map((tool) => (
              <span
                key={tool}
                className="font-mono text-xs px-3 py-1.5 border border-white/8 bg-white/3 text-white/50 hover:border-cyber-blue/30 hover:text-cyber-blue/80 transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
