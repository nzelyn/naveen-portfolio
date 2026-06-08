export interface TrainingProgram {
  id: string
  title: string
  institution: string
  audience: string
  duration: string
  studentsCount: string
  topics: string[]
  certifications: string[]
  color: string
  icon: string
  highlights: string[]
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 'niit-training',
    title: 'CompTIA Certification Bootcamp',
    institution: 'NIIT (Remote – International)',
    audience: 'International IT professionals and students',
    duration: 'Ongoing (June 2025 – Present)',
    studentsCount: '100+',
    topics: [
      'CompTIA A+ (Core 1 & Core 2)',
      'CompTIA Security+ (SY0-701)',
      'CompTIA CySA+ (CS0-003)',
      'ISO 27001 Lead Auditor',
      'CISA Domain Review',
      'SOC Operations',
      'VAPT Methodologies',
    ],
    certifications: ['CompTIA A+', 'Security+', 'CySA+', 'ISO 27001 LA', 'CISA'],
    color: '#00D9FF',
    icon: '🌐',
    highlights: [
      '90%+ certification pass rates',
      'International cross-cultural batches',
      'Mock audits and practical labs',
      'Personalized mentoring on GRC and ITGC',
    ],
  },
  {
    id: 'imarticus-training',
    title: 'PG Diploma in Cybersecurity',
    institution: 'Imarticus Learning',
    audience: 'Working professionals and graduates',
    duration: 'March 2025 – Dec 2025 (Weekends)',
    studentsCount: '60+',
    topics: [
      'Ethical Hacking and Penetration Testing',
      'SOC Operations and SIEM',
      'Cloud Security (AWS, Azure)',
      'Risk Management and GRC',
      'Governance Frameworks',
      'Incident Response',
    ],
    certifications: ['Security+', 'CySA+', 'ISO 27001 LA', 'CISA'],
    color: '#7C3AED',
    icon: '🎓',
    highlights: [
      '85%+ certification success rates',
      'Security case study workshops',
      'Hands-on VAPT labs',
      'Compliance gap analysis exercises',
    ],
  },
  {
    id: 'intrnforte-training',
    title: 'Cybersecurity Fundamentals to Pro',
    institution: 'IntrnForte',
    audience: 'Students and career switchers',
    duration: 'June 2025 – Sep 2025',
    studentsCount: '100+',
    topics: [
      'Cybersecurity Fundamentals',
      'Linux Security and Hardening',
      'VAPT with Kali Linux',
      'Burp Suite and Web App Testing',
      'Metasploit Framework',
      'GitHub Portfolio Building',
    ],
    certifications: ['Entry-level cybersecurity readiness'],
    color: '#00FF88',
    icon: '🚀',
    highlights: [
      'Lab-first teaching approach',
      'DVWA, Juice Shop, Metasploitable2 environments',
      'Capstone VAPT projects for portfolios',
      'Career transition coaching',
    ],
  },
  {
    id: 'grad-gurukul-training',
    title: 'Cybersecurity & Ethical Hacking Workshop Series',
    institution: 'Grad Gurukul',
    audience: 'Students and IT professionals',
    duration: 'March 2024 – Dec 2024',
    studentsCount: '150+',
    topics: [
      'Ethical Hacking',
      'Network Security',
      'SOC Fundamentals',
      'VAPT Methodology',
      'Linux Security',
      'Wireshark and Traffic Analysis',
    ],
    certifications: ['Security+', 'CySA+', 'ISO 27001 LA'],
    color: '#FF6B35',
    icon: '⚔',
    highlights: [
      'Practical hands-on labs every session',
      'Kali Linux and Metasploit environment',
      'Mock certification assessments',
      'Career mentoring and portfolio guidance',
    ],
  },
]
