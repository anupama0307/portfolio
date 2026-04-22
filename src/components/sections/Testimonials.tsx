"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Double the testimonials for infinite scroll
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      ref={sectionRef}
      className="relative py-[120px] md:py-[200px] overflow-hidden"
    >
      {/* Section marker */}
      <div className="section-marker">05</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium text-accent tracking-[0.3em] uppercase mb-6"
        >
          05 — Kind Words
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-section-title font-light text-text-primary"
        >
          What people say.
        </motion.h2>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-6 hover:[animation-play-state:paused]"
          style={{
            animation: "marquee 40s linear infinite",
            width: "max-content",
          }}
        >
          {allTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[350px] md:w-[450px] bg-surface-2 border border-border rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 group"
            >
              {/* Quote mark */}
              <span className="font-display text-[80px] leading-none text-accent/20 block -mb-8 -mt-2">
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="font-display italic text-base md:text-lg text-text-primary/90 leading-relaxed mb-8 font-light">
                {testimonial.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm text-text-muted">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-text-muted">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
