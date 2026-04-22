"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/lib/data";
import { Trophy, Flame, BookOpen, Zap } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  flame: Flame,
  book: BookOpen,
  zap: Zap,
};

export default function Achievements() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-[120px] md:py-[200px] overflow-hidden"
    >
      {/* Section marker */}
      <div className="section-marker">05</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium text-accent tracking-[0.3em] uppercase mb-6"
        >
          05 — Achievements
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-section-title font-light text-text-primary mb-16 md:mb-24"
        >
          Milestones & highlights.
        </motion.h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon] || Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.12,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="group relative bg-surface border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--accent-glow)_0%,_transparent_60%)]" />

                <div className="relative z-10">
                  {/* Top row: Icon + Year tag */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-500">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <span className="font-mono text-[11px] text-text-muted bg-surface-2 border border-border rounded-full px-3 py-1 group-hover:border-accent/20 transition-colors">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg md:text-xl font-medium text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  {/* Subtitle / org */}
                  <p className="font-body text-xs font-medium text-accent/70 mb-3 tracking-wide uppercase">
                    {achievement.org}
                  </p>

                  {/* Description */}
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
