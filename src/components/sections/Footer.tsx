"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <p className="font-body text-sm text-text-muted">
            {personalInfo.name} © {personalInfo.year}
          </p>

          {/* Center */}
          <p className="font-body text-xs text-text-muted/50">
            Designed & Built by{" "}
            <span className="text-text-muted">{personalInfo.name}</span>
          </p>

          {/* Right - Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <span className="font-body">Back to top</span>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUp size={14} />
            </motion.div>
          </button>
        </div>
      </div>
    </footer>
  );
}
