"use client";

import React from "react";
import { ExternalLink, Database, Cpu, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Sale Management System (SMS)",
      description: "Designed and implemented a full-stack sales management system using Oracle SQL and Microsoft Access. Developed SQL queries to ensure data integrity and generate business reports. Engineered VBA automation to streamline data entry and reduce manual errors.",
      tags: ["Oracle SQL", "Microsoft Access", "VBA", "Database Design"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    },
    {
      title: "Mobile Device Troubleshooting Expert System",
      description: "Developed a web-based expert system for diagnosing mobile device issues. Implemented IF–THEN rule-based logic for troubleshooting. Designed a MySQL database and built the application using PHP, HTML, CSS, and JavaScript.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Rule-based Logic"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    },
    {
      title: "MyWorld Careers",
      description: "Designed a healthcare-focused job platform prototype in Figma. Created intuitive UI/UX for job search, registration, and applications. Improved user experience through simple and responsive interface design.",
      tags: ["Figma", "UI/UX Design", "Wireframing", "Prototype"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      icon: <ShoppingBag className="w-8 h-8 text-pink-400" />,
      gradient: "from-pink-600/20 via-rose-600/10 to-transparent",
    },
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full" />
          <p className="text-sm text-muted-foreground max-w-md mt-2">
            A curated showcase of applications I have built, displaying my design and coding capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/5 transition-all"
            >
              {/* Graphic Mockup Area */}
              <div className={`h-48 relative flex items-center justify-center bg-gradient-to-br ${project.gradient} border-b border-white/5 overflow-hidden`}>
                {/* Abstract grid lines overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Icon wrapper with floating effect */}
                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-white/10 shadow-lg relative group-hover:scale-110 group-hover:border-brand-primary/40 transition-all duration-300">
                  {project.icon}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-muted-foreground opacity-80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2 border-t border-brand-primary/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-brand-primary/15 bg-opacity-5 hover:bg-brand-primary/10 hover:border-brand-primary/30 transition-all text-xs font-semibold text-brand-primary glass-panel"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg> GitHub
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
