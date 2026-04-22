"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo, marqueeItems } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLenis } from "@/components/layout/SmoothScroll";

function GlowOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x1: 0, y1: 0, x2: 0, y2: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };

    let rafId: number;
    const animate = () => {
      const tx1 = mouse.current.x * 200 - 100;
      const ty1 = mouse.current.y * 200 - 100;
      const tx2 = mouse.current.x * -100 + 50;
      const ty2 = mouse.current.y * -100 + 50;

      // Smooth lerp
      current.current.x1 += (tx1 - current.current.x1) * 0.03;
      current.current.y1 += (ty1 - current.current.y1) * 0.03;
      current.current.x2 += (tx2 - current.current.x2) * 0.03;
      current.current.y2 += (ty2 - current.current.y2) * 0.03;

      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${current.current.x1}px, ${current.current.y1}px, 0)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(${current.current.x2}px, ${current.current.y2}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={orbRef}
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full will-change-transform"
        style={{
          right: "-5%",
          top: "10%",
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, rgba(0, 212, 255, 0.04) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute w-[300px] h-[300px] rounded-full will-change-transform"
        style={{
          right: "15%",
          bottom: "20%",
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-t border-b border-border py-4 mt-12 md:mt-20">
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
  const { scrollTo } = useLenis();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -80]);

  const headlineLines = personalInfo.tagline.split("\n");

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <GlowOrb />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-24 md:pt-0"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
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
                    delay: 3.0 + i * 0.15,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="font-display italic font-light text-hero text-text-primary"
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
      </motion.div>

      {/* Marquee */}
      <div className="w-full mt-auto relative z-10">
        <Marquee />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
