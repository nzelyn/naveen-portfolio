'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Shield,
  Search,
  Target,
  Zap,
  Download,
  User,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'
import { profile } from '@/data/profile'

/* ───── Typewriter ───── */
function Typewriter({ words }: { words: string[] }) {
  const [wordIdx, setWordIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout: NodeJS.Timeout

    if (!deleting && text.length < word.length) {
      timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 90)
    } else if (!deleting && text.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 45)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIdx((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIdx, words])

  return (
    <span className="text-cyber-blue">
      {text}
      <span className="animate-blink-cursor text-cyber-cyan">_</span>
    </span>
  )
}

/* ───── Floating HUD icons around the photo ───── */
const hudIcons = [
  { Icon: Shield,  label: 'PROTECT',  angle: 225, color: '#00D9FF' },
  { Icon: Target,  label: 'HUNT',     angle: 315, color: '#7C3AED' },
  { Icon: Search,  label: 'DETECT',   angle: 135, color: '#00D9FF' },
  { Icon: Zap,     label: 'RESPOND',  angle: 45,  color: '#7C3AED' },
]

function HudIcon({ Icon, label, angle, color, radius = 170 }: {
  Icon: React.ElementType
  label: string
  angle: number
  color: string
  radius?: number
}) {
  const rad = (angle * Math.PI) / 180
  const x = Math.cos(rad) * radius
  const y = Math.sin(rad) * radius
  return (
    <div
      className="absolute flex flex-col items-center gap-1 group"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center border transition-all duration-300"
        style={{
          borderColor: `${color}50`,
          background: `${color}10`,
          boxShadow: `0 0 10px ${color}30`,
        }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <span className="font-mono text-[9px] tracking-widest" style={{ color }}>
        {label}
      </span>
    </div>
  )
}

/* ───── Terminal status bar ───── */
function TerminalBar() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-IN', { hour12: false }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="flex items-center gap-6 font-mono text-[11px] text-cyber-blue/60 flex-wrap">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse inline-block" />
        SYSTEM: SECURE
      </span>
      <span>THREAT LEVEL: LOW</span>
      <span>LOCATION: BANGALORE, IN</span>
      <span>TIME: {time}</span>
    </div>
  )
}

export default function HeroSection() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-100" />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
           style={{ background: 'radial-gradient(circle, #00D9FF, transparent)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
           style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />

      {/* Scan line animation */}
      <div className="animate-scan-across absolute left-0 right-0 h-px pointer-events-none z-10"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.4), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20 pb-12">
        {/* ───── LEFT SIDE ───── */}
        <div className="flex flex-col gap-6">
          {/* Terminal header badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-cyber-blue/30 bg-cyber-blue/5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue animate-pulse" />
              <span className="font-mono text-xs text-cyber-blue tracking-widest">
                CYBER SECURITY PROFESSIONAL
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="font-orbitron font-black tracking-tight leading-none animate-glitch-text">
              <span className="block text-5xl md:text-6xl xl:text-7xl text-white">
                HELLO, I'M
              </span>
              <span
                className="block text-6xl md:text-7xl xl:text-8xl gradient-text-cyan"
                style={{ textShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
              >
                NAVEEN
              </span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-orbitron text-xl md:text-2xl text-white/80 tracking-wide"
          >
            <Typewriter words={profile.typingRoles} />
          </motion.div>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="font-rajdhani text-lg text-white/60 leading-relaxed max-w-xl"
          >
            {profile.intro}
          </motion.p>

          {/* Specializations chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-wrap gap-2"
          >
            {profile.specializations.map((s) => (
              <span key={s} className="font-mono text-xs px-3 py-1 border border-cyber-blue/25 bg-cyber-blue/5 text-cyber-blue/80">
                {s}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => handleScroll('projects')}
              className="btn-cyber-filled flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href={profile.resume} download className="btn-cyber flex items-center gap-2">
              <Download size={14} />
              Download Resume
            </a>
            <button
              onClick={() => handleScroll('contact')}
              className="btn-cyber-purple flex items-center gap-2"
            >
              <User size={14} />
              Contact Me
            </button>
          </motion.div>

          {/* Terminal status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <TerminalBar />
          </motion.div>
        </div>

        {/* ───── RIGHT SIDE: Photo HUD ───── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center mt-[-60px]"
        >
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* Outer rotating ring */}
            <div
              className="absolute w-[480px] h-[480px] rounded-full animate-rotating-ring"
              style={{
                border: '1px solid rgba(0, 217, 255, 0.2)',
                backgroundImage: `repeating-conic-gradient(rgba(0,217,255,0.4) 0deg, rgba(0,217,255,0.4) 2deg, transparent 2deg, transparent 30deg)`,
              }}
            />
            {/* Middle counter-rotating ring */}
            <div
              className="absolute w-[420px] h-[420px] rounded-full animate-rotating-ring-reverse"
              style={{
                border: '1px dashed rgba(124, 58, 237, 0.4)',
              }}
            />
            {/* Inner pulsing ring */}
            <div
              className="absolute w-[370px] h-[370px] rounded-full animate-pulse-ring"
              style={{
                border: '2px solid rgba(0, 217, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.05)',
              }}
            />
            {/* Slowest outer ring */}
            <div
              className="absolute w-[468px] h-[468px] rounded-full animate-rotating-ring-slow"
              style={{
                border: '1px solid transparent',
                backgroundImage: `conic-gradient(from 0deg, rgba(0,217,255,0.6) 0%, transparent 30%, rgba(124,58,237,0.6) 50%, transparent 80%, rgba(0,217,255,0.6) 100%)`,
                backgroundOrigin: 'border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
              }}
            />

            {/* Photo circle */}
            <div
              className="relative w-[320px] h-[320px] rounded-full overflow-hidden scanlines"
              style={{
                border: '2px solid rgba(0, 217, 255, 0.5)',
                boxShadow: '0 0 40px rgba(0, 217, 255, 0.3), 0 0 80px rgba(0, 217, 255, 0.1), inset 0 0 20px rgba(0, 217, 255, 0.05)',
              }}
            >
              <Image
                src={profile.photo}
                alt="Naveen AD"
                fill
                className="object-cover"
                style={{ objectPosition: '50% 5%' }}
                priority
              />
              {/* Scan line over photo */}
              <div className="absolute animate-scan-across left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent pointer-events-none" />
            </div>

            {/* HUD floating icons */}
            {hudIcons.map((icon) => (
              <HudIcon key={icon.label} {...icon} radius={205} />
            ))}

            {/* Corner data readouts */}
            <div className="absolute top-2 left-4 font-mono text-[10px] text-cyber-blue/50 leading-tight">
              <div>ID: NAV-AD-0X42</div>
              <div>STATUS: ACTIVE</div>
            </div>
            <div className="absolute bottom-2 right-4 font-mono text-[10px] text-cyber-blue/50 leading-tight text-right">
              <div>THREAT: NONE</div>
              <div>SEC: MAX</div>
            </div>

            {/* Bottom label */}
            <div
              className="absolute bottom-[-40px] font-orbitron text-xs tracking-widest text-cyber-blue/70 px-4 py-1 border border-cyber-blue/20 bg-cyber-navy/80"
            >
              CYBER SECURITY PROFESSIONAL
            </div>
          </div>
        </motion.div>

        {/* Mobile photo (simpler) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:hidden flex justify-center"
        >
          <div
            className="w-48 h-48 rounded-full overflow-hidden"
            style={{ border: '2px solid rgba(0, 217, 255, 0.5)', boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
          >
            <Image src={profile.photo} alt="Naveen AD" width={192} height={192} className="object-cover object-top" priority />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => handleScroll('stats')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-cyber-blue transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
