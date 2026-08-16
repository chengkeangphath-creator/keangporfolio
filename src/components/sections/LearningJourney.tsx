"use client";

import React from "react";
import { Brain, Cpu, Cloud, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import GitHubCalendar from "../GitHubCalendar";

interface LearningTopic {
  title: string;
  desc: string;
  icon: React.ReactNode;
  colorClass: string;
  progress: number;
}

export default function LearningJourney() {
  const topics: LearningTopic[] = [
    {
      title: "Mobile App Development",
      desc: "Deepening knowledge of cross-platform apps using Flutter, custom layout widgets, state management, and device integration.",
      icon: <Cpu size={18} />,
      colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      progress: 72,
    },
    {
      title: "Web Engineering",
      desc: "Practicing server-side logic scripting using PHP, building secure session flows, and connecting database access endpoints.",
      icon: <Rocket size={18} />,
      colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      progress: 80,
    },
    {
      title: "Database Administration",
      desc: "Constructing complex SQL queries, views, indexes, and normalized database structures in Oracle SQL and MySQL.",
      icon: <Cloud size={18} />,
      colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      progress: 78,
    },
    {
      title: "UI/UX Prototyping",
      desc: "Learning professional mockup designing in Figma, wireframing, layout configurations, and crafting interactive prototypes.",
      icon: <Brain size={18} />,
      colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      progress: 82,
    },
  ];

  return (
    <section id="learning" className="relative py-24 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-secondary opacity-[var(--glow-opacity)] blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Learning & <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">Commitment</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full" />
          <p className="text-sm text-muted-foreground max-w-md mt-2">
            My active training roadmap alongside my regular code contributions.
          </p>
        </div>

        {/* Learning Journey Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Currently Learning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
                <Rocket size={18} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Currently Learning</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {topics.map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="glass-panel rounded-2xl p-5 hover:border-brand-primary/20 transition-all flex items-start gap-4"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${topic.colorClass}`}>
                    {topic.icon}
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-sm sm:text-base leading-tight tracking-tight text-foreground/90">
                        {topic.title}
                      </h4>
                      <span className="text-[10px] font-mono text-muted-foreground">{topic.progress}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {topic.desc}
                    </p>
                    {/* Tiny Progress Tracker Bar */}
                    <div className="w-full h-1 rounded-full bg-gray-200/5 dark:bg-white/5 overflow-hidden">
                      <div className="h-full bg-brand-primary rounded-full" style={{ width: `${topic.progress}%` }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: GitHub contributions */}
          <div className="lg:col-span-7 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <GitHubCalendar />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
