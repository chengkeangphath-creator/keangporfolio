"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

export default function GitHubCalendar() {
  const [hoveredCell, setHoveredCell] = useState<{
    count: number;
    date: string;
    x: number;
    y: number;
  } | null>(null);

  // Generate grid values (7 rows, 28 columns for clean fit)
  const gridData = useMemo(() => {
    const rows = 7;
    const cols = 26; // Approx 6 months
    const data: { count: number; date: string }[][] = [];

    const now = new Date();
    // Start from 26 weeks ago
    const startDate = new Date();
    startDate.setDate(now.getDate() - 26 * 7);

    for (let r = 0; r < rows; r++) {
      data[r] = [];
      for (let c = 0; c < cols; c++) {
        // Date calculation
        const cellDate = new Date(startDate);
        cellDate.setDate(startDate.getDate() + c * 7 + r);
        
        // Random contribution count with bias towards zero and low numbers
        const rand = Math.random();
        let count = 0;
        if (rand > 0.4 && rand <= 0.75) count = Math.floor(Math.random() * 3) + 1;
        else if (rand > 0.75 && rand <= 0.93) count = Math.floor(Math.random() * 5) + 3;
        else if (rand > 0.93) count = Math.floor(Math.random() * 8) + 8;

        const dateStr = cellDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

        data[r].push({ count, date: dateStr });
      }
    }
    return data;
  }, []);

  const getCellColor = (count: number) => {
    if (count === 0) return "bg-gray-200/5 dark:bg-white/5 border border-black/5 dark:border-white/5";
    if (count <= 2) return "bg-purple-500/20 text-purple-200 border border-purple-500/10";
    if (count <= 5) return "bg-purple-500/40 text-purple-100 border border-purple-500/20";
    if (count <= 8) return "bg-purple-500/70 text-purple-50 border border-purple-500/30";
    return "bg-purple-500 text-white shadow-sm shadow-purple-500/30 border border-purple-400/50";
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentMonthIdx = new Date().getMonth();
  const displayMonths = useMemo(() => {
    // Show 6 months leading to current month
    const result = [];
    for (let i = 5; i >= 0; i--) {
      let idx = currentMonthIdx - i;
      if (idx < 0) idx += 12;
      result.push(months[idx]);
    }
    return result;
  }, [currentMonthIdx]);

  return (
    <div className="w-full glass-panel rounded-2xl p-6 relative overflow-visible select-none">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Contributions Activity
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Simulated commits, pull requests, and merges
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              1,248
            </div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
              Yearly Commits
            </div>
          </div>
          <div className="w-px h-8 bg-brand-primary/10" />
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">
              98.4%
            </div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
              PR Merge Rate
            </div>
          </div>
        </div>
      </div>

      {/* Grid container */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="min-w-[420px] flex flex-col">
          {/* Months label */}
          <div className="flex justify-between pl-6 pr-2 mb-2 text-[10px] text-muted-foreground">
            {displayMonths.map((m, i) => (
              <span key={i} className="w-1/6 text-center">
                {m}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            {/* Days label */}
            <div className="flex flex-col justify-between text-[9px] text-muted-foreground py-0.5 h-[98px]">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Matrix */}
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 flex-1">
              {gridData.map((row, rIdx) =>
                row.map((cell, cIdx) => (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    className={`w-3.5 h-3.5 rounded-sm cursor-pointer transition-all duration-150 hover:scale-125 hover:z-10 ${getCellColor(
                      cell.count
                    )}`}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const parentRect = e.currentTarget.parentElement?.parentElement?.getBoundingClientRect();
                      if (parentRect) {
                        setHoveredCell({
                          count: cell.count,
                          date: cell.date,
                          x: rect.left - parentRect.left + 7,
                          y: rect.top - parentRect.top - 42,
                        });
                      }
                    }}
                    onMouseLeave={() => setHoveredCell(null)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Legend & Tooltip */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-primary/5 text-xs">
        <span className="text-[10px] text-muted-foreground">
          Streak: 32 days active
        </span>
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded-sm bg-gray-200/5 dark:bg-white/5 border border-white/5" />
          <div className="w-2.5 h-2.5 rounded-sm bg-purple-500/20" />
          <div className="w-2.5 h-2.5 rounded-sm bg-purple-500/40" />
          <div className="w-2.5 h-2.5 rounded-sm bg-purple-500/70" />
          <div className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
          <span>More</span>
        </div>
      </div>

      {/* Contribution Tooltip */}
      {hoveredCell && (
        <div
          className="absolute z-20 px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 text-white rounded-lg shadow-xl pointer-events-none text-[10px] leading-tight flex flex-col font-sans transition-all duration-75"
          style={{
            left: `${hoveredCell.x}px`,
            top: `${hoveredCell.y}px`,
            transform: "translateX(-50%)",
          }}
        >
          <span className="font-semibold text-purple-300">
            {hoveredCell.count === 0 ? "No" : hoveredCell.count} contribution
            {hoveredCell.count !== 1 ? "s" : ""}
          </span>
          <span className="opacity-60 mt-0.5">{hoveredCell.date}</span>
        </div>
      )}
    </div>
  );
}
