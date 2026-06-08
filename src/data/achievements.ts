export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  color: string
  year: string
  category: 'recognition' | 'milestone' | 'publication' | 'community'
}

export const achievements: Achievement[] = [
  {
    id: 'csap-recognition',
    title: 'CompTIA Security Analytics Professional (CSAP)',
    description:
      'Recognized as CSAP, a stackable certification from CompTIA validating advanced security analytics expertise through the combination of Security+ and CySA+.',
    icon: '🏆',
    color: '#FFB800',
    year: '2025',
    category: 'recognition',
  },
  {
    id: 'publication',
    title: 'Research Publication – IJARESM',
    description:
      'Published "AI Against Adversaries: Deep Learning\'s Role in Malware Detection Using Autoencoders" in the International Journal of All Research Education and Scientific Methods.',
    icon: '📄',
    color: '#00D9FF',
    year: '2024',
    category: 'publication',
  },
  {
    id: 'students-milestone',
    title: '500+ Students Trained',
    description:
      'Trained over 500 students and IT professionals across multiple institutions on cybersecurity concepts, certifications, and career readiness.',
    icon: '👥',
    color: '#00FF88',
    year: '2025',
    category: 'milestone',
  },
  {
    id: 'pass-rate',
    title: '90%+ Certification Pass Rate',
    description:
      'Consistently achieved 85–90%+ certification pass rates across CompTIA Security+, CySA+, and ISO 27001 Lead Auditor batches.',
    icon: '📈',
    color: '#7C3AED',
    year: '2025',
    category: 'milestone',
  },
  {
    id: 'kannada-content',
    title: 'CyberTechInKannada Creator',
    description:
      'Built an Instagram community delivering cybersecurity and tech career content in Kannada-English for students and freshers across Karnataka.',
    icon: '🎙',
    color: '#FF6B35',
    year: '2025',
    category: 'community',
  },
  {
    id: 'mentorship',
    title: '200+ Mentorship Sessions',
    description:
      'Mentored 200+ students and freshers in cybersecurity fundamentals, career pathways, and hands-on security practices through 1:1 sessions.',
    icon: '🎓',
    color: '#FF0055',
    year: '2025',
    category: 'community',
  },
  {
    id: 'iso-specialist',
    title: 'ISO 27001 Lead Auditor',
    description:
      'Earned ISO/IEC 27001:2022 Lead Auditor certification in Feb 2026, positioning as a qualified ISMS auditor for enterprise engagements.',
    icon: '🛡',
    color: '#00D9FF',
    year: '2026',
    category: 'recognition',
  },
  {
    id: 'multi-role',
    title: 'Triple-Role Professional',
    description:
      'Simultaneously active as a Cyber Security Consultant, Trainer at multiple institutions, and Content Creator – a rare combination in the Indian cybersecurity space.',
    icon: '⚡',
    color: '#FFB800',
    year: '2025',
    category: 'milestone',
  },
]
