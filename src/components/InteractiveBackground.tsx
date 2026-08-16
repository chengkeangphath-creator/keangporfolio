"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000)); // Responsive density
    const connectionDistance = 120;
    const mouse = { x: -1000, y: -1000, active: false };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        
        // Soft gradients matching purple, pink, cyan
        const colors = [
          "rgba(168, 85, 247, 0.45)", // Purple
          "rgba(236, 72, 153, 0.45)",  // Pink
          "rgba(34, 211, 238, 0.45)",  // Cyan
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Wrap around margins slightly to prevent get stuck
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.shadowBlur = 8;
        c.shadowColor = this.color;
        c.fill();
        c.shadowBlur = 0; // reset
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawConnections = (c: CanvasRenderingContext2D) => {
      const lineColor = theme === "dark" 
        ? "rgba(168, 85, 247, 0.08)" 
        : "rgba(124, 58, 237, 0.05)";
      
      const mouseLineColor = theme === "dark" 
        ? "rgba(34, 211, 238, 0.15)" 
        : "rgba(8, 145, 178, 0.12)";

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Line to mouse
        if (mouse.active) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance * 1.5) {
            const alpha = (1 - dist / (connectionDistance * 1.5)) * 0.3;
            c.beginPath();
            c.moveTo(p1.x, p1.y);
            c.lineTo(mouse.x, mouse.y);
            c.strokeStyle = mouseLineColor.replace("0.15", alpha.toString()).replace("0.12", alpha.toString());
            c.lineWidth = 1.2;
            c.stroke();
          }
        }

        // Lines to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            c.beginPath();
            c.moveTo(p1.x, p1.y);
            c.lineTo(p2.x, p2.y);
            c.strokeStyle = lineColor.replace("0.08", alpha.toString()).replace("0.05", alpha.toString());
            c.lineWidth = 0.8;
            c.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background glow overlay (subtle colorful ambient glow)
      const gradient = ctx.createRadialGradient(
        width * 0.2, height * 0.2, 10,
        width * 0.2, height * 0.2, Math.max(width, height) * 0.6
      );
      if (theme === "dark") {
        gradient.addColorStop(0, "rgba(88, 28, 135, 0.08)"); // Purple tint
        gradient.addColorStop(0.5, "rgba(13, 148, 136, 0.02)"); // Cyan tint
        gradient.addColorStop(1, "rgba(3, 0, 20, 0)");
      } else {
        gradient.addColorStop(0, "rgba(124, 58, 237, 0.03)");
        gradient.addColorStop(0.5, "rgba(8, 145, 178, 0.02)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      drawConnections(ctx);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.document.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-500"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
