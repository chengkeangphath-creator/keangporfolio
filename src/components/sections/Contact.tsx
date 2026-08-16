"use client";

import React from "react";
import { Mail, MapPin, Send, PhoneCall, Languages } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm";

export default function Contact() {
  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com", 
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ), 
      colorClass: "hover:text-brand-primary" 
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com", 
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      colorClass: "hover:text-brand-secondary" 
    },
    { 
      name: "Facebook", 
      href: "https://facebook.com", 
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      colorClass: "hover:text-brand-accent" 
    },
    { name: "Telegram", href: "https://t.me", icon: <Send size={18} />, colorClass: "hover:text-purple-400" },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-primary opacity-[var(--glow-opacity)] blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full" />
          <p className="text-sm text-muted-foreground max-w-md mt-2">
            Let's collaborate, discuss internship opportunities, or just say hello!
          </p>
        </div>

        {/* Form and Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Info Cards & Social Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight">
                Let's discuss something <span className="text-brand-primary">special</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I am actively seeking software engineering internships, research roles, and creative freelance projects. Send a message, and I'll respond within 24 hours.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4.5 rounded-2xl glass-panel">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-brand-primary rounded-xl shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Email Me</p>
                  <a href="mailto:chengkeangphath@email.com" className="text-xs sm:text-sm font-semibold hover:underline text-foreground/90">
                    chengkeangphath@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4.5 rounded-2xl glass-panel">
                <div className="p-3 bg-pink-500/10 border border-pink-500/20 text-brand-secondary rounded-xl shrink-0">
                  <PhoneCall size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Call Me</p>
                  <a href="tel:+85516729478" className="text-xs sm:text-sm font-semibold hover:underline text-foreground/90">
                    +855 16 72 94 78
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4.5 rounded-2xl glass-panel">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-brand-accent rounded-xl shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground/90">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4.5 rounded-2xl glass-panel">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl shrink-0">
                  <Languages size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Languages</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground/90">
                    English (Intermediate) | Chinese (Basic)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Social Channels</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border border-brand-primary/10 bg-opacity-5 hover:bg-brand-primary/10 hover:border-brand-primary/30 transition-all text-muted-foreground glass-panel ${link.colorClass}`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 flex items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="w-full flex"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
