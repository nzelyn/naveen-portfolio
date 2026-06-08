export interface Certification {
  id: string
  name: string
  shortName: string
  issuer: string
  issuerLogo?: string
  issued: string
  expires?: string
  credlyUrl?: string
  verifyUrl?: string
  color: string
  icon: string
  status: 'active' | 'in-progress' | 'expired'
  description: string
}

export const certifications: Certification[] = [
  {
    id: 'cisa',
    name: 'Certified Information Systems Auditor',
    shortName: 'CISA',
    issuer: 'ISACA',
    issued: 'Exam June 2026',
    color: '#FFB800',
    icon: '🎯',
    status: 'in-progress',
    description:
      'The gold standard for IT audit, control, and security professionals. Validates expertise in auditing, control, and assurance.',
  },
  {
    id: 'iso27001-la',
    name: 'ISO/IEC 27001:2022 Lead Auditor',
    shortName: 'ISO 27001 LA',
    issuer: 'PECB',
    issued: 'Feb 2026',
    color: '#00D9FF',
    icon: '🛡',
    status: 'active',
    credlyUrl: 'https://credly.com/users/naveen-ad',
    description:
      'Certified to lead ISMS audits against ISO/IEC 27001:2022 standard. Validates advanced knowledge of information security management systems.',
  },
  {
    id: 'security-plus',
    name: 'CompTIA Security+',
    shortName: 'Security+',
    issuer: 'CompTIA',
    issued: 'Sep 2025',
    expires: 'Sep 2028',
    color: '#FF0055',
    icon: '🔐',
    status: 'active',
    credlyUrl: 'https://credly.com/users/naveen-ad',
    description:
      'Industry-baseline certification covering core security functions and best practices in cybersecurity.',
  },
  {
    id: 'a-plus',
    name: 'CompTIA A+',
    shortName: 'A+',
    issuer: 'CompTIA',
    issued: 'Sep 2025',
    expires: 'Sep 2028',
    color: '#FF6B35',
    icon: '💻',
    status: 'active',
    credlyUrl: 'https://credly.com/users/naveen-ad',
    description:
      'Validates foundational IT infrastructure, networking, and troubleshooting skills.',
  },
  {
    id: 'cysa-plus',
    name: 'CompTIA CySA+',
    shortName: 'CySA+',
    issuer: 'CompTIA',
    issued: 'Nov 2025',
    expires: 'Nov 2028',
    color: '#7C3AED',
    icon: '🔍',
    status: 'active',
    credlyUrl: 'https://credly.com/users/naveen-ad',
    description:
      'Validates behavioral analytics skills to combat malware and advanced persistent threats. Focuses on threat detection and response.',
  },
  {
    id: 'csap',
    name: 'CompTIA Security Analytics Professional',
    shortName: 'CSAP',
    issuer: 'CompTIA',
    issued: 'Nov 2025',
    color: '#00FF88',
    icon: '📊',
    status: 'active',
    description:
      'Stackable certification recognizing the combination of Security+ and CySA+. Validates advanced security analytics expertise.',
  },
]
