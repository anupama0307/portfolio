"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-[120px] md:py-[200px] overflow-hidden"
    >
      {/* Section marker */}
      <div className="section-marker">04</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium text-accent tracking-[0.3em] uppercase mb-6"
        >
          04 — Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-section-title font-light text-text-primary mb-16 md:mb-24"
        >
          Where I&apos;ve been.
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border">
            <motion.div
              className="w-full bg-accent"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            />
          </div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="relative mb-16 last:mb-0"
            >
              {/* Dot on timeline */}
              <div
                className={`absolute -left-8 md:-left-12 top-2 w-3 h-3 rounded-full border-2 ${
                  exp.current
                    ? "bg-accent border-accent shadow-[0_0_12px_var(--accent-glow)]"
                    : "bg-background border-border"
                }`}
                style={{ transform: "translateX(-5px)" }}
              />

              <div className="flex flex-col md:flex-row md:items-start md:gap-12 mb-4">
                <div className="flex-shrink-0 mb-2 md:mb-0 md:w-48">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-text-muted">
                      {exp.dateRange}
                    </span>
                    {exp.current && (
                      <span className="flex items-center gap-1.5 text-accent font-mono text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        PRESENT
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-medium text-text-primary mb-1">
                    {exp.company}
                  </h3>
                  <p className="font-body text-sm font-medium text-accent mb-4">
                    {exp.role}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {exp.achievements.map((achievement, j) => (
                      <li key={j} className="flex gap-3 text-sm text-text-muted font-body">
                        <span className="text-accent mt-1 flex-shrink-0">—</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono text-text-muted border border-border rounded-md bg-surface/50 hover:border-accent/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
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
