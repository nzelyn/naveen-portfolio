'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
  Send,
  MapPin,
  Phone,
  BookOpen,
  CheckCircle,
} from 'lucide-react'
import { profile } from '@/data/profile'

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'naveenad-cybersecurity',
    href: profile.linkedin,
    color: '#0077B5',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'nzelyn',
    href: profile.github,
    color: '#6E40C9',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@cybertechinkannada',
    href: profile.instagram,
    color: '#E4405F',
  },
  {
    icon: BookOpen,
    label: 'Medium',
    value: '@navigtechofficial',
    href: profile.medium,
    color: '#00AB6C',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 9606258657',
    href: profile.whatsapp,
    color: '#25D366',
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('https://formspree.io/f/meewgzpk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSent(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        alert('Something went wrong. Please email me directly at ' + profile.email)
      }
    } catch {
      alert('Something went wrong. Please email me directly at ' + profile.email)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,217,255,0.08), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-cyber-blue/60 tracking-[0.3em] uppercase">
            &gt;_ Open Channel
          </span>
          <h2 className="section-title text-3xl md:text-4xl mt-2 gradient-text">
            CONTACT
          </h2>
          <p className="font-rajdhani text-white/50 mt-3 text-lg max-w-xl mx-auto">
            Available for consulting projects, training engagements, and mentorship sessions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ───── LEFT: Contact info ───── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Contact card */}
            <div
              className="p-6 hud-corners relative overflow-hidden"
              style={{ background: 'rgba(11, 17, 32, 0.95)', border: '1px solid rgba(0,217,255,0.2)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyber-blue/50 to-transparent" />

              <h3 className="font-orbitron text-sm tracking-widest text-cyber-blue mb-5">
                GET IN TOUCH
              </h3>

              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-cyber-blue/30 bg-cyber-blue/5 group-hover:bg-cyber-blue/10 transition-colors">
                    <Mail size={16} className="text-cyber-blue" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/30 tracking-wider">EMAIL</div>
                    <div className="font-rajdhani text-white/80 group-hover:text-cyber-blue transition-colors">
                      {profile.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-cyber-blue/30 bg-cyber-blue/5 group-hover:bg-cyber-blue/10 transition-colors">
                    <Phone size={16} className="text-cyber-blue" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/30 tracking-wider">PHONE</div>
                    <div className="font-rajdhani text-white/80 group-hover:text-cyber-blue transition-colors">
                      {profile.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center border border-cyber-blue/30 bg-cyber-blue/5">
                    <MapPin size={16} className="text-cyber-blue" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-white/30 tracking-wider">LOCATION</div>
                    <div className="font-rajdhani text-white/80">{profile.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-2">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 p-3 border border-white/6 bg-white/2 hover:bg-white/5 hover:border-white/15 transition-all duration-200 group"
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center"
                    style={{ background: `${link.color}15`, border: `1px solid ${link.color}30` }}
                  >
                    <link.icon size={15} style={{ color: link.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[10px] text-white/30 tracking-wider">{link.label}</div>
                    <div className="font-rajdhani text-white/70 text-sm group-hover:text-white transition-colors">
                      {link.value}
                    </div>
                  </div>
                  <div className="font-mono text-[10px] text-white/20 group-hover:text-white/40 transition-colors">
                    →
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ───── RIGHT: Contact form ───── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div
                className="p-10 flex flex-col items-center gap-4 text-center"
                style={{ background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.2)' }}
              >
                <CheckCircle size={48} className="text-cyber-green" />
                <h3 className="font-orbitron text-lg text-white">Message Transmitted</h3>
                <p className="font-rajdhani text-white/60 text-lg">
                  Naveen will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
                  className="btn-cyber mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 flex flex-col gap-5 hud-corners"
                style={{ background: 'rgba(11, 17, 32, 0.9)', border: '1px solid rgba(0,217,255,0.15)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyber-blue/50 via-cyber-purple/30 to-transparent" />

                <h3 className="font-orbitron text-sm tracking-widest text-cyber-blue">
                  SEND A MESSAGE
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { key: 'name', label: 'Name', type: 'text', placeholder: 'Your Name' },
                    { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  ].map((f) => (
                    <div key={f.key} className="flex flex-col gap-1.5">
                      <label className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={formData[f.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                        required
                        className="bg-white/3 border border-white/10 px-4 py-2.5 font-rajdhani text-white placeholder-white/25 focus:outline-none focus:border-cyber-blue/50 focus:bg-cyber-blue/3 transition-all text-base"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Security Consulting Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-white/3 border border-white/10 px-4 py-2.5 font-rajdhani text-white placeholder-white/25 focus:outline-none focus:border-cyber-blue/50 focus:bg-cyber-blue/3 transition-all text-base"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white/3 border border-white/10 px-4 py-2.5 font-rajdhani text-white placeholder-white/25 focus:outline-none focus:border-cyber-blue/50 focus:bg-cyber-blue/3 transition-all resize-none text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-cyber-filled flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-cyber-bg border-t-transparent rounded-full animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="font-mono text-xs text-white/25">
            © {new Date().getFullYear()} Naveen AD. Securing the digital world.
          </div>
          <div className="flex items-center gap-1 font-mono text-xs text-white/25">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
            SYSTEM SECURE
          </div>
        </motion.div>
      </div>
    </section>
  )
}
