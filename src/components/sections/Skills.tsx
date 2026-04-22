"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillPillars, skills } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Code2, Server, Cloud } from "lucide-react";

const pillarIcons = [Code2, Server, Cloud];

function SkillCard({
  name,
  proficiency,
  category,
  index,
}: {
  name: string;
  proficiency: number;
  category: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-400 group hover:scale-[1.03]"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-body text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
          {name}
        </h4>
        <span className="font-mono text-[10px] text-text-muted">{proficiency}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.05 + 0.3, ease: [0.76, 0, 0.24, 1] }}
        />
      </div>
      <p className="font-mono text-[10px] text-text-muted mt-3 tracking-wider uppercase">
        {category}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="stack"
      ref={sectionRef}
      className="relative py-[120px] md:py-[200px] overflow-hidden"
    >
      {/* Section marker */}
      <div className="section-marker">02</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium text-accent tracking-[0.3em] uppercase mb-6"
        >
          02 — Stack
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-section-title font-light text-text-primary mb-16 md:mb-24"
        >
          The tools I trust.
        </motion.h2>

        {/* Skill Pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20"
        >
          {skillPillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="bg-surface/50 border border-border rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-text-primary">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-text-muted mb-6">
                  {pillar.description}
                </p>
                <div className="space-y-3">
                  {pillar.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-sm text-text-muted group-hover:text-text-primary/80 transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span className="font-body">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              proficiency={skill.proficiency}
              category={skill.category}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
