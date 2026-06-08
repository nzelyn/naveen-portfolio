export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
  category: 'ai-security' | 'vapt' | 'grc' | 'training' | 'automation'
  featured: boolean
  year: string
}

export const projects: Project[] = [
  {
    id: 'gpt-vuln-analyzer',
    title: 'GPT-Vuln-Analyzer',
    description: 'AI-powered vulnerability analysis tool integrating multiple LLM providers for intelligent threat detection and risk prioritization.',
    longDescription:
      'Built an AI-powered vulnerability analysis tool integrating Llama2, GPT-3, and Google PaLM for intelligent threat detection and risk prioritization. Designed modular, scalable architecture with DNS reconnaissance capabilities, demonstrating applied AI governance and security automation.',
    tags: ['Python', 'AI/LLM', 'Llama2', 'GPT-3', 'Google PaLM', 'Ollama', 'DNS Recon'],
    github: 'https://github.com/nzelyn',
    category: 'ai-security',
    featured: true,
    year: '2024',
  },
  {
    id: 'startup-sbom',
    title: 'Startup-SBOM',
    description: 'Reverse-engineered the Linux boot process to extract startup sequence data and analyze package capabilities for supply chain risk visibility.',
    longDescription:
      'Reverse-engineered the Linux boot process to extract startup sequence data and analyze RPM/DPKG package capabilities for supply chain risk visibility. Developed a detection tool using chroot validation to identify and list potential startup entries with high accuracy.',
    tags: ['Python', 'Linux', 'Reverse Engineering', 'SBOM', 'Supply Chain Security'],
    github: 'https://github.com/nzelyn',
    category: 'vapt',
    featured: true,
    year: '2024',
  },
  {
    id: 'quadra-inspect',
    title: 'QuadraInspect',
    description: 'Android security analysis framework integrating multiple tools for comprehensive vulnerability detection and reverse engineering.',
    longDescription:
      'Built an Android security analysis framework integrating multiple tools for comprehensive vulnerability detection and reverse engineering assessments. Enhanced structured reporting to deliver detailed, actionable vulnerability insights aligned with security review standards.',
    tags: ['Python', 'Android Security', 'Reverse Engineering', 'VAPT', 'Mobile Security'],
    github: 'https://github.com/nzelyn',
    category: 'vapt',
    featured: true,
    year: '2023',
  },
  {
    id: 'brute-hacking-framework',
    title: 'Brute-Hacking-Framework',
    description: 'Portable penetration testing environment built through reverse engineering of core architecture for Windows compatibility and portability.',
    longDescription:
      'Recreated a portable penetration testing environment through reverse engineering of core architecture, designed for Windows compatibility and maximum portability. Streamlined penetration testing workflows by improving tool accessibility, configuration management, and upgradability.',
    tags: ['Python', 'Batch Scripting', 'Reverse Engineering', 'Penetration Testing', 'Windows'],
    github: 'https://github.com/nzelyn',
    category: 'vapt',
    featured: false,
    year: '2023',
  },
  {
    id: 'isms-tracker',
    title: 'ISO 27001 ISMS Audit Tracker',
    description: 'Comprehensive Excel-based ISMS implementation and audit tracking workbook with color-coded controls and compliance dashboards.',
    longDescription:
      'Designed a comprehensive ISMS Audit and Implementation Tracker covering all Annex A controls for ISO/IEC 27001:2022. Features color-coded compliance status, risk register integration, audit finding tracking, and executive dashboards for continuous improvement monitoring.',
    tags: ['Excel', 'ISO 27001', 'GRC', 'Audit Management', 'Risk Register'],
    category: 'grc',
    featured: false,
    year: '2025',
  },
  {
    id: 'nexacloud-grc',
    title: 'NexaCloud GRC Portfolio',
    description: 'Full enterprise GRC portfolio for fictional company NexaCloud Solutions: policies, risk assessments, SOC 2 gap analysis, and vendor risk framework.',
    longDescription:
      'Built a complete enterprise GRC portfolio as a showcase piece covering ISO 27001, NIST CSF, SOC 2 Type II, and vendor risk management. Includes 15+ policy documents, risk assessment templates, control testing workpapers, and compliance dashboards.',
    tags: ['GRC', 'ISO 27001', 'NIST CSF', 'SOC 2', 'Risk Assessment', 'Policy Writing'],
    category: 'grc',
    featured: true,
    year: '2025',
  },
]
