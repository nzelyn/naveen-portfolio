# Naveen AD — Cybersecurity Portfolio

A world-class cybersecurity portfolio built with Next.js 15, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 3** with custom cyber theme
- **Framer Motion 11** for animations
- **Lucide React** for icons
- **Orbitron + Rajdhani + JetBrains Mono** fonts (Google Fonts)

## Features

- Animated particle canvas background
- Hero section with rotating HUD photo frame
- Live animated stat counters
- Hexagonal about photo with career timeline
- Six skill categories with animated progress bars
- Filterable project cards
- Premium certification cards with status indicators
- Interactive accordion experience timeline
- Training program cards with expandable details
- Achievement badge grid
- Full contact form with social links
- Scroll progress indicator
- Back-to-top button
- Fully mobile responsive

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Add your photo

Place your photo at:
```
public/naveen-photo.png
```

### 3. Add your resume PDF

Place your resume at:
```
public/resume.pdf
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customization

All content is controlled by files in `src/data/`. You never need to touch component code.

### Profile — `src/data/profile.ts`
- Name, title, bio, social links
- Stat counters
- Typing animation roles

### Projects — `src/data/projects.ts`
Add a new project by appending to the array:
```typescript
{
  id: 'my-new-project',
  title: 'My Project',
  description: 'Short description...',
  longDescription: 'Full description shown on hover...',
  tags: ['Python', 'Security'],
  github: 'https://github.com/...',
  demo: 'https://...',
  category: 'vapt',  // 'ai-security' | 'vapt' | 'grc' | 'training' | 'automation'
  featured: true,
  year: '2025',
}
```

### Certifications — `src/data/certifications.ts`
Add a new cert:
```typescript
{
  id: 'my-cert',
  name: 'Full Certification Name',
  shortName: 'ABBREV',
  issuer: 'Issuing Body',
  issued: 'Jan 2026',
  expires: 'Jan 2029',
  credlyUrl: 'https://credly.com/...',
  color: '#00D9FF',
  icon: '🔐',
  status: 'active',
  description: 'What this cert validates...',
}
```

### Experience — `src/data/experience.ts`
Add a new role:
```typescript
{
  id: 'company-name',
  company: 'Company Name',
  role: 'Job Title',
  location: 'City, Country',
  period: 'Jan 2025 – Present',
  startDate: '2025-01',
  endDate: 'Present',
  type: 'full-time',
  color: '#00D9FF',
  highlights: ['Achievement 1', 'Achievement 2'],
  tags: ['Tool1', 'Skill2'],
}
```

### Training — `src/data/training.ts`
### Achievements — `src/data/achievements.ts`

---

## Build for Production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2: GitHub + Vercel Dashboard

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/naveen-portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo.
3. Click Deploy. Done.

### Custom Domain

In Vercel dashboard → Settings → Domains → Add your domain.

---

## Contact Form Setup

The contact form is wired to simulate sending by default. To make it functional, replace the `handleSubmit` in `ContactSection.tsx` with your preferred service:

**Option A: EmailJS (free tier)**
```bash
npm install @emailjs/browser
```

**Option B: Resend API**
Create `app/api/contact/route.ts` with your Resend API key.

**Option C: Formspree**
Change the form action to your Formspree endpoint.

---

## Project Structure

```
naveen-portfolio/
├── public/
│   ├── naveen-photo.png     ← Your professional photo
│   └── resume.pdf           ← Your resume PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← Root layout + fonts + SEO
│   │   ├── page.tsx         ← Main page assembly
│   │   └── globals.css      ← Global styles + animations
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx       ← Photo HUD + typewriter
│   │   ├── StatsSection.tsx      ← Animated counters
│   │   ├── AboutSection.tsx      ← Bio + hex photo + timeline
│   │   ├── SkillsSection.tsx     ← Skill cards + progress bars
│   │   ├── ExperienceSection.tsx ← Accordion timeline
│   │   ├── ProjectsSection.tsx   ← Filterable project cards
│   │   ├── CertificationsSection.tsx
│   │   ├── TrainingSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── ContactSection.tsx    ← Form + social links
│   │   ├── ParticleCanvas.tsx    ← Background particles
│   │   ├── ScrollProgress.tsx
│   │   └── BackToTop.tsx
│   ├── data/
│   │   ├── profile.ts       ← EDIT THIS for personal info
│   │   ├── projects.ts      ← EDIT THIS for projects
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── achievements.ts
│   │   └── training.ts
│   └── lib/
│       └── utils.ts
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## Performance Notes

- All heavy animations use `will-change: transform` and GPU compositing
- Images use Next.js `<Image>` with automatic WebP optimization
- Framer Motion components are lazy-loaded with `whileInView` to avoid layout thrash
- Google Fonts loaded via `next/font/google` for zero layout shift

---

Built by Naveen AD — Cyber Security Consultant | Trainer | Mentor
