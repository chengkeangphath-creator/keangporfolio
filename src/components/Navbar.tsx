"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, Terminal, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-opacity-70 backdrop-blur-md border-b border-opacity-10 border-brand-primary"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Terminal size={18} />
          </div>
          <span className="font-sans font-bold text-lg tracking-tight bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
            Chengkeang.dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-brand-primary relative group"
            >
              {item.name}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        {/* Theme Toggle & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-opacity-10 border-brand-primary bg-opacity-5 hover:bg-opacity-10 hover:border-brand-primary/30 transition-all text-brand-primary glass-panel"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="relative px-5 py-2.5 rounded-xl text-sm font-medium text-white overflow-hidden group shadow-lg shadow-purple-500/10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent transition-transform duration-300 group-hover:scale-105" />
            <span className="relative z-10">Let's Connect</span>
          </a>
        </div>

        {/* Mobile Toggle Buttons */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-opacity-5 border border-brand-primary/10 text-brand-primary glass-panel"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-opacity-5 border border-brand-primary/10 text-brand-primary glass-panel"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-brand-primary/10 mt-3 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-4 rounded-xl text-base font-medium transition-colors hover:bg-brand-primary/5 hover:text-brand-primary"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent shadow-md shadow-purple-500/10 block mt-2"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
