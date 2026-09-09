"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo, marqueeItems } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLenis } from "@/components/layout/SmoothScroll";

function Marquee() {
  return (
    <div className="overflow-hidden border-t border-border py-4 bg-background z-20">
      <div className="marquee-track flex whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs md:text-sm text-text-muted mx-4 md:mx-6 flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-accent inline-block" />
            {item}
          </span>
        ))}
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={`dup-${i}`}
            className="font-mono text-xs md:text-sm text-text-muted mx-4 md:mx-6 flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-accent inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const { scrollTo } = useLenis();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -80]);

  const headlineLines = personalInfo.tagline.split("\n");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current || !groupRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    groupRef.current.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  };

  const handleMouseLeave = () => {
    if (!groupRef.current) return;
    groupRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col pt-24 md:pt-0 overflow-hidden"
    >
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex-grow flex items-center max-w-[1400px] mx-auto w-full px-6 md:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Side: 3D Composition from User HTML */}
          <div 
            className="glass-stage w-full max-w-[500px] mx-auto hidden lg:flex" 
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="glow-blob"></div>
            <div className="glass-group" ref={groupRef}>
              <div className="pane pane-data">
                <div className="pane-sheen"></div>
                <div className="data-rows">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="pane-label">data</div>
              </div>
              <div className="pane pane-logic">
                <div className="pane-sheen"></div>
                <div className="logic-glyph">&lt;/&gt;</div>
                <div className="pane-label">logic</div>
              </div>
              <div className="pane pane-interface">
                <div className="pane-sheen"></div>
                <div className="browser-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-lines">
                  <div></div>
                  <div></div>
                </div>
                <div className="pane-label">interface</div>
              </div>
            </div>
          </div>

          {/* Right Side: Text & CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* Label */}
            <motion.p
              variants={fadeUp}
              className="font-mono text-xs md:text-sm text-accent tracking-wider mb-6 md:mb-8"
            >
              Full Stack Developer — {personalInfo.year}
            </motion.p>

            {/* Headline */}
            <div className="mb-6 md:mb-8">
              {headlineLines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + i * 0.15,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="font-display italic font-light text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.05] tracking-tight text-text-primary"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-lg text-text-muted max-w-lg mb-8 md:mb-12"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <MagneticButton
                variant="primary"
                onClick={() => scrollTo("#work")}
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                onClick={() => scrollTo("#contact")}
              >
                Get In Touch
              </MagneticButton>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Marquee at the very bottom */}
      <div className="w-full absolute bottom-0 left-0 z-20">
        <Marquee />
      </div>
    </section>
  );
}
