"use client";

import React from "react";
import { GraduationCap, Briefcase, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  category: "education" | "experience" | "achievement";
  icon: React.ReactNode;
  description: string;
  tags: string[];
}

export default function Timeline() {
  const timelineItems: TimelineItem[] = [
    {
      year: "2023 - Present",
      title: "Bachelor of Computer Science",
      subtitle: "Norton University",
      category: "education",
      icon: <GraduationCap size={16} />,
      description: "Developing robust skills in web development, database schema management, and algorithmic troubleshooting.",
      tags: ["Data Structures", "Web Development", "Database Management"],
    },
    {
      year: "2024 - 2025",
      title: "Full-Stack Sales Management System",
      subtitle: "Academic Project",
      category: "experience",
      icon: <Briefcase size={16} />,
      description: "Designed a multi-table database system in Oracle SQL and integrated access layers through VBA automation to reduce workflow friction.",
      tags: ["Oracle SQL", "MS Access", "VBA"],
    },
    {
      year: "2025",
      title: "Troubleshooting Expert System",
      subtitle: "Academic Project",
      category: "experience",
      icon: <Briefcase size={16} />,
      description: "Developed a web troubleshooting platform using PHP and MySQL. Implemented custom logic rules for mobile device diagnostic lookup.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    },
    {
      year: "2020 - 2023",
      title: "High School Diploma",
      subtitle: "Samdach Chuon Nath High School | Kampong Cham",
      category: "education",
      icon: <GraduationCap size={16} />,
      description: "Acquired core academic skills in science and mathematics, laying a strong foundation for computer science.",
      tags: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      year: "2011 - 2020",
      title: "Primary & Lower Secondary",
      subtitle: "Bethel High School | Kampong Cham",
      category: "education",
      icon: <GraduationCap size={16} />,
      description: "Successfully completed early schooling while developing interests in personal computing platforms.",
      tags: ["General Science", "Languages"],
    },
  ];

  return (
    <section id="timeline" className="relative py-24 overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-primary opacity-[var(--glow-opacity)] blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full" />
          <p className="text-sm text-muted-foreground max-w-md mt-2">
            A chronological timeline of my education, professional experience, and key milestones.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line connector */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent opacity-30 transform -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row items-stretch relative ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Bullet */}
                  <div className="absolute left-4 sm:left-1/2 top-4 w-8 h-8 rounded-full bg-zinc-950 border border-brand-primary flex items-center justify-center transform -translate-x-1/2 z-10 shadow-md">
                    <span className="text-brand-primary">{item.icon}</span>
                  </div>

                  {/* Spacer Column for matching spacing */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8"
                  >
                    <div className="glass-panel rounded-2xl p-6 relative hover:scale-[1.01] hover:border-brand-primary/25 transition-all">
                      <span className="inline-block text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-md bg-brand-primary/10 text-brand-primary mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                        {item.title}
                      </h3>
                      <h4 className="text-xs sm:text-sm font-semibold opacity-70 mt-0.5">
                        {item.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tag list */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
