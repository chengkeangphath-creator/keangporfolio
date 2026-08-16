"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Achievements from "@/components/sections/Achievements";
import LearningJourney from "@/components/sections/LearningJourney";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Premium background layer grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none -z-20 opacity-70" />
      
      {/* Mouse interactive canvas background */}
      <InteractiveBackground />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certificates />
        <Achievements />
        <LearningJourney />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
