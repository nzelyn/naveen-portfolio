'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'
import { profile } from '@/data/profile'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#training', label: 'Training' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      // Find active section
      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const target = document.getElementById(href.replace('#', ''))
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-blue/10 shadow-[0_4px_30px_rgba(0,217,255,0.08)]'
          : 'bg-transparent'
      }`}
      style={{ marginTop: '3px' }} // Below scroll progress bar
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="relative w-8 h-8 flex items-center justify-center border border-cyber-blue/50 group-hover:border-cyber-blue transition-colors duration-300">
            <Shield size={16} className="text-cyber-blue" />
            <div className="absolute inset-0 bg-cyber-blue/5 group-hover:bg-cyber-blue/15 transition-colors duration-300" />
          </div>
          <span className="font-orbitron font-bold text-sm tracking-widest text-white group-hover:text-cyber-blue transition-colors duration-300">
            NAVEEN<span className="text-cyber-blue">.</span>AD
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-200 ${
                    isActive ? 'text-cyber-blue' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-cyber-blue/8 border-b border-cyber-blue"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#contact')}
            className="hidden sm:block btn-cyber-filled text-xs py-2 px-4"
          >
            Hire Me
          </button>
          <a
            href={profile.resume}
            download
            className="hidden sm:block btn-cyber text-xs py-2 px-4"
          >
            Resume
          </a>
          <button
            className="lg:hidden text-white/80 hover:text-cyber-blue transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-cyber-blue/10 bg-cyber-bg/98 backdrop-blur-md"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-3 px-4 font-mono text-sm tracking-wider uppercase text-white/70 hover:text-cyber-blue hover:bg-cyber-blue/5 transition-all duration-200 border-b border-white/5"
                  >
                    <span className="text-cyber-blue mr-2 opacity-60">›</span>
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="block w-full btn-cyber-filled text-center text-xs py-3"
                >
                  Hire Me
                </button>
                <a href={profile.resume} download className="block btn-cyber text-center text-xs py-3">
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
