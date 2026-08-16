"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import TypingEffect from "../TypingEffect";
import confetti from "canvas-confetti";

export default function Hero() {
  const handleDownloadCV = () => {
    // Delighted feedback on download
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Trigger actual download of the CV PDF
    const link = document.createElement("a");
    link.href = "/cv/Path ChenngKeang.pdf";
    link.download = "Path ChenngKeang.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background glow layers */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-primary opacity-[var(--glow-opacity)] blur-[80px] sm:blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-secondary opacity-[var(--glow-opacity)] blur-[80px] sm:blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bio & Intro */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-xs font-semibold text-brand-primary tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping" />
            Available for Internships & Projects
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">Phath Chengkeang</span>
            </h1>
            <h2 className="text-lg sm:text-2xl font-semibold opacity-90 h-8 sm:h-10 flex items-center justify-center lg:justify-start gap-1.5">
              <span>I am an</span>
              <TypingEffect
                words={["IT Student", "Software Developer", "Web Developer", "Database Specialist"]}
                typingSpeed={80}
                deletingSpeed={45}
                delayBetweenWords={1800}
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-normal"
          >
            Motivated IT student at Norton University with skills in software development, web development, and database management. Experienced in building academic projects using SQL, Flutter, and PHP.
          </motion.p>

          {/* Socials & CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent shadow-lg shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              View My Projects <ArrowRight size={16} />
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleDownloadCV}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold border border-brand-primary/20 bg-opacity-5 hover:bg-brand-primary/10 hover:border-brand-primary/30 transition-all text-brand-primary glass-panel"
              >
                Download CV <Download size={15} />
              </button>

              <a
                href="#contact"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold border border-brand-primary/20 bg-opacity-5 hover:bg-brand-primary/10 hover:border-brand-primary/30 transition-all text-brand-primary glass-panel"
              >
                Contact <Mail size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Avatar Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
          >
            {/* Ambient revolving rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-brand-primary/30 animate-[spin_40s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border border-brand-secondary/20 animate-[spin_60s_linear_infinite] reverse" />

            {/* Glowing Backdrop */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-accent opacity-20 blur-md -z-10" />

            {/* Main Avatar Container */}
            <div className="absolute inset-3 rounded-full overflow-hidden border border-brand-primary/20 bg-zinc-950/80 shadow-2xl flex items-center justify-center">
              <Image
                src="/profile.jpg"
                alt="Phath Chengkeang Profile"
                width={380}
                height={380}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Overlay tech tag nodes */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-2 left-6 p-2 rounded-xl glass-panel border border-brand-primary/20 flex items-center gap-1.5 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              <span className="text-[10px] font-mono font-bold tracking-wider">PHP / MySQL</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 -left-6 p-2 rounded-xl glass-panel border border-brand-secondary/20 flex items-center gap-1.5 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-brand-secondary" />
              <span className="text-[10px] font-mono font-bold tracking-wider">Flutter</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -right-2 p-2 rounded-xl glass-panel border border-brand-accent/20 flex items-center gap-1.5 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span className="text-[10px] font-mono font-bold tracking-wider">Oracle SQL</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
