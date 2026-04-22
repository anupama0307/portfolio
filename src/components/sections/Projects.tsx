"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, personalInfo } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { GitFork, ExternalLink } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className="mb-20 md:mb-32 last:mb-0"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isEven ? "lg:direction-rtl" : ""
        }`}
      >
        {/* Text Block */}
        <div className={`${isEven ? "lg:order-2 lg:text-left" : ""} lg:direction-ltr`}>
          <span className="font-mono text-xs text-text-muted tracking-wider mb-3 block">
            {project.number}
          </span>
          <span className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3 block">
            {project.category}
          </span>
          <h3 className="font-display text-3xl md:text-5xl font-light text-text-primary mb-3">
            {project.title}
          </h3>
          <p className="font-body text-lg text-text-muted mb-2">
            {project.description}
          </p>
          <p className="font-body text-sm text-text-muted/70 mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-accent border border-accent/20 rounded-full bg-accent/5 hover:bg-accent/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <GitFork size={16} />
                <span className="font-body">Source</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <ExternalLink size={16} />
                <span className="font-body">Live Site</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual Block */}
        <div
          className={`${isEven ? "lg:order-1" : ""} lg:direction-ltr`}
          data-cursor-view
        >
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative group"
          >
            {/* Browser frame mockup */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:shadow-[0_0_60px_var(--accent-glow)]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-surface rounded-md px-3 py-1 text-center">
                    <span className="font-mono text-[10px] text-text-muted">
                      {project.title.toLowerCase()}.app
                    </span>
                  </div>
                </div>
              </div>

              {/* Project visual */}
              <div className="aspect-video relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-surface-2 via-surface to-background relative">
                  {/* Abstract project visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-display text-6xl md:text-8xl font-light text-text-primary/5">
                        {project.number}
                      </span>
                      <p className="font-display italic text-xl md:text-2xl text-text-primary/20 mt-2">
                        {project.title}
                      </p>
                    </div>
                  </div>
                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                <div className="absolute inset-0 scale-100 group-hover:scale-[1.03] transition-transform duration-700" />
              </div>
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute -top-3 -right-3 bg-accent text-background font-mono text-[10px] font-medium px-3 py-1 rounded-full">
                Featured
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-[120px] md:py-[200px] overflow-hidden"
    >
      {/* Section marker */}
      <div className="section-marker">03</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium text-accent tracking-[0.3em] uppercase mb-6"
        >
          03 — Work
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-section-title font-light text-text-primary"
            >
              Selected Projects.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-base text-text-muted mt-3"
            >
              A few things I&apos;ve built recently.
            </motion.p>
          </div>
        </div>

        {/* Project rows */}
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}

        {/* See All button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <MagneticButton
            variant="ghost"
            href={personalInfo.github}
          >
            See All Projects →
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
