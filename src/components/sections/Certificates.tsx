"use client";

import React from "react";
import { Code, BrainCircuit, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  icon: React.ReactNode;
  colorClass: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      title: "Oracle SQL Database Design",
      issuer: "Norton University Coursework",
      date: "Jul 2024",
      credentialId: "NU-DB-2024-88A",
      verifyUrl: "https://norton-u.edu.kh",
      icon: <Code size={20} />,
      colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Web Development with PHP & MySQL",
      issuer: "Norton University Coursework",
      date: "Dec 2024",
      credentialId: "NU-WEB-2024-91B",
      verifyUrl: "https://norton-u.edu.kh",
      icon: <Code size={20} />,
      colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Mobile App Development with Flutter",
      issuer: "Norton University Coursework",
      date: "May 2025",
      credentialId: "NU-MOB-2025-44C",
      verifyUrl: "https://norton-u.edu.kh",
      icon: <Code size={20} />,
      colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "UI/UX Design with Figma",
      issuer: "Figma Academy / Self Study",
      date: "Sep 2025",
      credentialId: "FIGMA-UIUX-3032",
      verifyUrl: "https://figma.com",
      icon: <BrainCircuit size={20} />,
      colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/20",
    },
  ];

  return (
    <section id="certificates" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Credentials & <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Certificates</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-full" />
          <p className="text-sm text-muted-foreground max-w-md mt-2">
            Professional certifications and specialized courses I have completed.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4 hover:scale-[1.01] hover:border-brand-primary/20 transition-all"
            >
              {/* Icon Container */}
              <div className={`p-3.5 rounded-xl border shrink-0 ${cert.colorClass}`}>
                {cert.icon}
              </div>

              {/* Text Info */}
              <div className="space-y-2 flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-sm sm:text-base leading-tight tracking-tight">
                    {cert.title}
                  </h3>
                  <span className="text-[10px] font-mono text-muted-foreground opacity-80 shrink-0">
                    {cert.date}
                  </span>
                </div>
                <p className="text-xs text-brand-primary font-semibold">
                  {cert.issuer}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-[11px] border-t border-brand-primary/5">
                  <span className="text-muted-foreground opacity-70">
                    Credential ID: <span className="font-mono">{cert.credentialId}</span>
                  </span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-brand-secondary hover:text-brand-primary hover:underline transition-colors shrink-0 font-medium"
                  >
                    Verify Credential <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
