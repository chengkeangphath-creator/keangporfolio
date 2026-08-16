"use client";

import React, { useState } from "react";
import { Code2, LayoutTemplate, Database, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  level: "Advanced" | "Intermediate" | "Familiar";
  progress: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      title: "Web & Programming",
      icon: <Code2 size={20} />,
      colorClass: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/20",
      skills: [
        { name: "JavaScript", level: "Advanced", progress: 85 },
        { name: "PHP", level: "Advanced", progress: 80 },
        { name: "HTML5", level: "Advanced", progress: 92 },
        { name: "CSS3", level: "Advanced", progress: 88 },
        { name: "Tailwind CSS", level: "Advanced", progress: 85 },
        { name: "Bootstrap", level: "Intermediate", progress: 75 },
      ],
    },
    {
      title: "Mobile & Design",
      icon: <LayoutTemplate size={20} />,
      colorClass: "from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/20",
      skills: [
        { name: "Flutter", level: "Intermediate", progress: 70 },
        { name: "Figma (UI/UX Design)", level: "Intermediate", progress: 80 },
      ],
    },
    {
      title: "Databases",
      icon: <Database size={20} />,
      colorClass: "from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/20",
      skills: [
        { name: "MySQL", level: "Advanced", progress: 82 },
        { name: "Oracle SQL", level: "Advanced", progress: 80 },
        { name: "Microsoft Access", level: "Intermediate", progress: 75 },
        { name: "phpMyAdmin", level: "Intermediate", progress: 78 },
      ],
    },
    {
      title: "Tools & Productivity",
      icon: <Settings size={20} />,
      colorClass: "from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/20",
      skills: [
        { name: "Git & GitHub", level: "Advanced", progress: 82 },
        { name: "Microsoft Excel", level: "Intermediate", progress: 75 },
        { name: "Microsoft Word", level: "Advanced", progress: 90 },
        { name: "AI-assisted development", level: "Intermediate", progress: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full" />
          <p className="text-sm text-muted-foreground max-w-md mt-2">
            The programming tools, frameworks, and protocols I use to build robust applications.
          </p>
        </div>

        {/* Tab Buttons - Mobile-first grid, desktop horizontal */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-4xl mx-auto">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 border cursor-pointer ${
                activeTab === idx
                  ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-transparent shadow-lg shadow-purple-500/15 scale-105"
                  : "glass-panel text-muted-foreground border-brand-primary/5 hover:border-brand-primary/20 hover:text-foreground"
              }`}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Animated Skill Details */}
        <div className="max-w-4xl mx-auto min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {categories[activeTab].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="glass-panel rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:scale-[1.01] hover:border-brand-primary/25 transition-all"
                >
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-bold text-sm sm:text-base tracking-tight text-foreground/90">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                        skill.level === "Advanced"
                          ? "bg-purple-500/10 border-purple-500/25 text-brand-primary"
                          : skill.level === "Intermediate"
                          ? "bg-pink-500/10 border-pink-500/25 text-brand-secondary"
                          : "bg-cyan-500/10 border-cyan-500/25 text-brand-accent"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress track */}
                  <div className="space-y-1.5">
                    <div className="w-full h-2 rounded-full bg-gray-200/10 dark:bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 0.8, delay: sIdx * 0.05, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full"
                      />
                    </div>
                    <div className="flex justify-end">
                      <span className="text-[10px] font-mono text-muted-foreground opacity-80">
                        {skill.progress}% Mastery
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
