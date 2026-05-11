"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { publications } from "@/lib/data";
import { BookMarked, ExternalLink } from "lucide-react";

export default function Publications() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="relative py-[120px] md:py-[200px] overflow-hidden"
    >
      {/* Section marker */}
      <div className="section-marker">06</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium text-accent tracking-[0.3em] uppercase mb-6"
        >
          06 — Publications
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-section-title font-light text-text-primary mb-16 md:mb-24"
        >
          Research &amp; papers.
        </motion.h2>

        {/* Publications list */}
        <div className="flex flex-col gap-8">
          {publications.map((pub, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative bg-surface border border-border rounded-2xl p-8 md:p-10 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--accent-glow)_0%,_transparent_60%)]" />

              <div className="relative z-10">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-500">
                    <BookMarked size={20} className="text-accent" />
                  </div>

                  <div className="flex items-center gap-3 ml-auto">
                    <span className="font-mono text-[11px] text-text-muted bg-surface-2 border border-border rounded-full px-3 py-1 group-hover:border-accent/20 transition-colors">
                      {pub.year}
                    </span>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                        aria-label="View publication"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg md:text-xl font-medium text-text-primary mb-2 group-hover:text-accent transition-colors duration-300 leading-snug">
                  {pub.title}
                </h3>

                {/* Venue */}
                <p className="font-body text-xs font-medium text-accent/70 mb-4 tracking-wide uppercase">
                  {pub.venue}
                </p>

                {/* Description */}
                <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
                  {pub.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-text-muted bg-surface-2 border border-border rounded-full px-3 py-1 group-hover:border-accent/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
