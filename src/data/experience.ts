export interface Experience {
  id: string
  company: string
  role: string
  location: string
  period: string
  startDate: string
  endDate: string
  type: 'full-time' | 'part-time' | 'freelance' | 'training'
  color: string
  highlights: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: 'niit',
    company: 'NIIT',
    role: 'Cyber Security Consultant & Trainer',
    location: 'Gurugram, India (Remote)',
    period: 'June 2025 – Present',
    startDate: '2025-06',
    endDate: 'Present',
    type: 'full-time',
    color: '#00D9FF',
    highlights: [
      'Supported ISO/IEC 27001:2022 ISMS implementation including control reviews, risk assessments, and audit preparation.',
      'Maintained ISMS documentation: policies, SOPs, risk registers, asset inventories, and compliance repositories.',
      'Designed and delivered training on CompTIA A+, Security+, CySA+, ISO 27001 LA, and CISA, achieving 90%+ pass rates.',
      'Conducted hands-on workshops on ethical hacking, SOC operations, VAPT, and ISO 27001 ISMS implementation.',
      'Coordinated internal and external audits by collecting compliance evidence and tracking remediation activities.',
    ],
    tags: ['ISO 27001', 'ISMS', 'Training', 'GRC', 'VAPT', 'CompTIA'],
  },
  {
    id: 'intrnforte',
    company: 'IntrnForte',
    role: 'Cyber Security Specialist & Course Creator',
    location: 'Bengaluru, India (Remote)',
    period: 'June 2025 – Sep 2025',
    startDate: '2025-06',
    endDate: '2025-09',
    type: 'full-time',
    color: '#7C3AED',
    highlights: [
      'Designed and published a structured Cybersecurity Course program on the IntrnForte platform.',
      'Mentored 100+ learners through hands-on labs using DVWA, Juice Shop, Kali Linux, Metasploit, and Burp Suite.',
      'Guided learners on GitHub portfolio building and career transition strategies.',
      'Designed capstone projects focused on VAPT methodology and Linux hardening.',
    ],
    tags: ['Course Design', 'VAPT', 'Kali Linux', 'Mentoring', 'Burp Suite'],
  },
  {
    id: 'imarticus',
    company: 'Imarticus Learning',
    role: 'Cyber Security Trainer',
    location: 'Bengaluru, India (Weekends)',
    period: 'March 2025 – Dec 2025',
    startDate: '2025-03',
    endDate: '2025-12',
    type: 'part-time',
    color: '#00FF88',
    highlights: [
      'Delivered PG Diploma in Cybersecurity covering Ethical Hacking, SOC Operations, Cloud Security, and GRC.',
      'Integrated ISO/IEC 27001 principles and compliance practices preparing learners for multiple certifications.',
      'Guided learners through incident response simulations, mock audits, VAPT labs, and compliance gap analysis.',
      'Achieved 85%+ certification success rates across Security+, CySA+, ISO 27001 LA, and CISA tracks.',
    ],
    tags: ['PG Diploma', 'Ethical Hacking', 'SOC', 'Cloud Security', 'GRC'],
  },
  {
    id: 'ga-software',
    company: 'GA Software Technologies Pvt. Ltd.',
    role: 'Associate Cyber Security Consultant',
    location: 'Bengaluru, India',
    period: 'Jan 2025 – Jun 2025',
    startDate: '2025-01',
    endDate: '2025-06',
    type: 'full-time',
    color: '#FF6B35',
    highlights: [
      'Conducted VAPT across web applications and internal networks, mapping vulnerabilities to ISO 27001 controls.',
      'Supported ISMS implementation through control gap analysis, remediation planning, and compliance activities.',
      'Managed phishing simulation campaigns and performed third-party vendor security assessments.',
      'Assisted in audit evidence collection and improved IT control effectiveness with stakeholders.',
    ],
    tags: ['VAPT', 'ISO 27001', 'ISMS', 'Phishing Simulation', 'Vendor Risk'],
  },
  {
    id: 'texial',
    company: 'Texial',
    role: 'Associate Cyber Security Consultant',
    location: 'Bengaluru, India',
    period: 'June 2023 – Dec 2024',
    startDate: '2023-06',
    endDate: '2024-12',
    type: 'full-time',
    color: '#FFB800',
    highlights: [
      'Conducted VAPT assessments across web applications and internal environments aligned with ISO 27001.',
      'Supported ISMS projects through audit evidence collection, control reviews, and remediation tracking.',
      'Mapped technical vulnerabilities to business risk and ISO 27001 control objectives.',
      'Managed phishing simulation campaigns and organization-wide security awareness initiatives.',
      'Performed vendor security reviews against organizational policies and standards.',
    ],
    tags: ['VAPT', 'ISO 27001', 'Web App Testing', 'Network Security', 'Awareness'],
  },
  {
    id: 'grad-gurukul',
    company: 'Grad Gurukul',
    role: 'Cyber Security Trainer',
    location: 'Bengaluru, India',
    period: 'March 2024 – Dec 2024',
    startDate: '2024-03',
    endDate: '2024-12',
    type: 'part-time',
    color: '#FF0055',
    highlights: [
      'Delivered cybersecurity training on Ethical Hacking, Network Security, SOC fundamentals, and VAPT.',
      'Designed hands-on lab environments using Kali Linux, Metasploit, Burp Suite, DVWA, and Wireshark.',
      'Guided learners on structured paths aligned with CompTIA Security+, CySA+, and ISO 27001 LA objectives.',
      'Conducted mock assessments, doubt-clearing sessions, and career mentoring.',
    ],
    tags: ['Ethical Hacking', 'Kali Linux', 'Metasploit', 'Wireshark', 'Mentoring'],
  },
]
