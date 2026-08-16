"use client";

import React from "react";
import { Award, Trophy, Compass, Flag, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  category: "Award" | "Competition" | "Hackathon" | "Personal";
  description: string;
  date: string;
  icon: React.ReactNode;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      title: "Dean's List Excellence Award",
      category: "Award",
      description: "Received recognition for academic excellence, maintaining a semester GPA above 3.85 for consecutive terms.",
      date: "Spring 2024 & 2025",
      icon: <Trophy className="text-amber-400" size={20} />,
    },
    {
      title: "1st Runner-Up at UniHack 2025",
      category: "Hackathon",
      description: "Competed against 40+ student teams to design an AI-powered translation bot facilitating classroom digital lectures.",
      date: "Nov 2025",
      icon: <Award className="text-pink-400" size={20} />,
    },
    {
      title: "Top 100 in Regional Cyber Security Capture-The-Flag (CTF)",
      category: "Competition",
      description: "Successfully solved cryptography, reverse engineering, and web exploitation challenges under pressure.",
      date: "May 2025",
      icon: <Compass className="text-cyan-400" size={20} />,
    },
    {
      title: "Personal Portfolio Launch",
      category: "Personal",
      description: "Designed and coded this personal brand site, deploying it on high-speed CDN servers with optimized SEO.",
      date: "Aug 2026",
      icon: <Flag className="text-purple-400" size={20} />,
    },
  ];

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Key <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full" />
          <p className="text-sm text-muted-foreground max-w-md mt-2">
            Notable milestones, contest rankings, and academic accomplishments.
          </p>
        </div>

        {/* Achievements list/grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel rounded-2xl p-6 flex items-start gap-4 hover:border-brand-primary/20 hover:scale-[1.01] transition-all relative overflow-hidden"
            >
              {/* Decorative radial background glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-primary opacity-5 blur-xl rounded-full" />
              
              {/* Category Node */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 shrink-0 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Core Text */}
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-primary">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground opacity-80">
                    {item.date}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base leading-tight tracking-tight text-foreground/90">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
