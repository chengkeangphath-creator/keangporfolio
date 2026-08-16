"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });

      // Trigger premium confetti shower
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, animate a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }, 1500);
  };

  return (
    <div className="w-full glass-panel rounded-2xl p-6 sm:p-8 relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="e.g. Alice Vance"
            disabled={status === "submitting" || status === "success"}
            className="w-full glass-input px-4 py-3.5 text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="e.g. alice@example.com"
            disabled={status === "submitting" || status === "success"}
            className="w-full glass-input px-4 py-3.5 text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2 opacity-80">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            placeholder="Hi Keang, I would love to work on a project with you..."
            disabled={status === "submitting" || status === "success"}
            className="w-full glass-input px-4 py-3.5 text-sm resize-none"
            required
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-rose-500 text-xs bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
            <AlertTriangle size={16} />
            <span>Please fill in all the required fields before submitting.</span>
          </div>
        )}

        {status === "success" && (
          <div className="flex items-center gap-2 text-emerald-500 text-xs bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
            <CheckCircle size={16} />
            <span>Message sent successfully! Confetti is on its way. 🎉</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className={`w-full relative py-4 rounded-xl text-sm font-semibold text-white overflow-hidden shadow-lg group transition-all ${
            status === "submitting" ? "opacity-75 cursor-wait" : ""
          } ${status === "success" ? "bg-emerald-600 shadow-emerald-500/20 cursor-default" : "shadow-purple-500/15"}`}
        >
          {status === "success" ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle size={16} /> Sent Successfully
            </span>
          ) : (
            <>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent transition-transform duration-300 group-hover:scale-105" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === "submitting" ? "Sending..." : "Send Message"}
                <Send size={14} className={status === "submitting" ? "animate-bounce" : "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"} />
              </span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
