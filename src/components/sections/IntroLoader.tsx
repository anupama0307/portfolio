"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [nameLetters, setNameLetters] = useState(0);

  useEffect(() => {
    // Check sessionStorage
    if (typeof window !== "undefined" && sessionStorage.getItem("loader-shown")) {
      setShow(false);
      onComplete();
      return;
    }

    // Animate counter
    const duration = 2200;
    const steps = 100;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(currentStep);
      // Also build name
      const nameProgress = Math.floor(
        (currentStep / steps) * personalInfo.name.length
      );
      setNameLetters(nameProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setShow(false);
          sessionStorage.setItem("loader-shown", "true");
          onComplete();
        }, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
        >
          {/* Name assembly */}
          <motion.div
            className="font-display text-4xl md:text-6xl font-light italic text-text-primary mb-12 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {personalInfo.name.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: i < nameLetters ? 1 : 0,
                  y: i < nameLetters ? 0 : 20,
                }}
                transition={{ duration: 0.1 }}
                className={letter === " " ? "inline-block w-3" : ""}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Counter */}
          <div className="font-mono text-6xl md:text-8xl font-light text-text-muted tabular-nums">
            {count.toString().padStart(3, "0")}
            <span className="text-accent text-2xl md:text-4xl ml-1">%</span>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-[1px] bg-border mt-8 overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
