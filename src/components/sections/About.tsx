"use client";

import React from "react";
import { GraduationCap, Target, Heart, Award, Sparkles, Code2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function About() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full" />
          <p className="text-sm text-muted-foreground max-w-md mt-2">
            A peek into my background, tech values, and what drives my programming.
          </p>
        </div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Bio Card - Large */}
          <motion.div
            variants={cardVariants}
            className="glass-panel rounded-3xl p-6 sm:p-8 md:col-span-2 flex flex-col justify-between space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 blur-2xl -z-10 rounded-full" />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-brand-primary">
                  <Code2 size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Who I Am</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I am a motivated IT student at Norton University with skills in software development, web development, and database management. Experienced in building academic projects using SQL, Flutter, and PHP, with proficiency in phpMyAdmin, GitHub, and AI-assisted development.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                "I understand that my lack of formal experience may be a concern, but I would like to assure you that I am a quick learner and eager to take on new challenges and opportunities."
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-4 border-t border-brand-primary/5">
              <span className="flex items-center gap-1 opacity-70"><Sparkles size={12} className="text-brand-accent" /> Innovation-driven</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/30" />
              <span className="flex items-center gap-1 opacity-70"><Heart size={12} className="text-pink-500" /> UI/UX design lover</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/30" />
              <span className="flex items-center gap-1 opacity-70"><Award size={12} className="text-amber-500" /> Quality obsessed</span>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={cardVariants}
            className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-brand-secondary">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold leading-tight">
                    Bachelor of Computer Science
                  </h4>
                  <p className="text-xs text-brand-primary font-medium mt-0.5">
                    Norton University
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 opacity-80">
                    2023 - Present
                  </p>
                </div>
                <div className="border-t border-brand-primary/5 pt-2">
                  <h4 className="text-xs font-semibold leading-tight">
                    High School Diploma
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Samdach Chuon Nath High School | 2020 - 2023
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career Goals Card */}
          <motion.div
            variants={cardVariants}
            className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-brand-accent">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Career Goals</h3>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                  <span>Master modern web application stacks, focusing on PHP, JavaScript, and Flutter.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                  <span>Excel in database management using SQL (MySQL, Oracle SQL) and Microsoft Access.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                  <span>Contribute to software engineering teams to gain real-world industry exposure.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Technology Passion Card */}
          <motion.div
            variants={cardVariants}
            className="glass-panel rounded-3xl p-6 sm:p-8 md:col-span-2 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-brand-primary">
                  <Heart size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Tech Passion</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wide">Web & Mobile</span>
                  <p className="text-xs text-muted-foreground">
                    Passionate about building responsive user interfaces using HTML5, CSS3, Tailwind CSS, Bootstrap, and cross-platform mobile apps with Flutter.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-xs font-bold text-brand-secondary uppercase tracking-wide">Database & Backend</span>
                  <p className="text-xs text-muted-foreground">
                    Dedicated to schema design, query optimization, and management in Oracle SQL, MySQL, and Microsoft Access environments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
