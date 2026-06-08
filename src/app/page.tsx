import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import CertificationsSection from '@/components/CertificationsSection'
import TrainingSection from '@/components/TrainingSection'
import AchievementsSection from '@/components/AchievementsSection'
import ContactSection from '@/components/ContactSection'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import ParticleCanvas from '@/components/ParticleCanvas'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cyber-bg overflow-hidden">
      {/* Global effects */}
      <ScrollProgress />
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <TrainingSection />
      <AchievementsSection />
      <ContactSection />

      {/* Utilities */}
      <BackToTop />
    </main>
  )
}
