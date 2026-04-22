"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (Number.isInteger(value)) return Math.round(latest);
    return parseFloat(latest.toFixed(2));
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.25, 0.4, 0.25, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="flex items-baseline gap-1 justify-center md:justify-start">
        <motion.span className="font-display text-4xl md:text-5xl font-light text-text-primary">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="font-display text-2xl md:text-3xl text-accent font-light">
            {suffix}
          </span>
        )}
      </div>
      <p className="font-body text-sm text-text-muted mt-2">{label}</p>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-[120px] md:py-[200px] overflow-hidden"
    >
      {/* Section marker */}
      <div className="section-marker">01</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium text-accent tracking-[0.3em] uppercase mb-16 md:mb-24"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Image / Visual */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-[400px] mx-auto lg:mx-0 overflow-hidden rounded-2xl group">
              {/* Abstract placeholder with gradient */}
              <div className="w-full h-full bg-gradient-to-br from-surface via-surface-2 to-surface relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                {/* Abstract pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-48 md:h-48 border border-border rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 md:w-32 md:h-32 border border-accent/20 rounded-full flex items-center justify-center">
                        <span className="font-display italic text-4xl md:text-6xl text-text-primary/30">
                          {personalInfo.initials}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Scan line effect */}
                <motion.div
                  className="absolute left-0 right-0 h-[1px] bg-accent/30"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-border group-hover:border-accent/30 transition-colors duration-500 group-hover:shadow-[0_0_40px_var(--accent-glow)]" />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 right-4 md:right-auto md:left-[calc(50%-80px)] lg:left-auto lg:right-8 bg-surface-2 border border-border rounded-full px-4 py-2 flex items-center gap-2"
            >
              <MapPin size={12} className="text-accent" />
              <span className="font-mono text-xs text-text-muted">
                {personalInfo.location}
              </span>
            </motion.div>

            {/* Available badge */}
            {personalInfo.availableForWork && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute top-4 left-4 bg-surface-2 border border-accent/30 rounded-full px-3 py-1.5 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] text-accent">Open to Work</span>
              </motion.div>
            )}
          </motion.div>

          {/* Right - Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-section-title font-light text-text-primary mb-8"
            >
              I build the full picture.
            </motion.h2>

            <div className="space-y-5 mb-12">
              {personalInfo.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="font-body text-body-lg text-text-muted leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {personalInfo.stats.map((stat, i) => (
                <AnimatedCounter
                  key={i}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
