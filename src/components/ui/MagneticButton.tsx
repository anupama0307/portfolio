"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit";
}

export default function MagneticButton({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    // Check if touch device
    if ("ontouchstart" in window) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    const maxDist = 80;
    const dist = Math.sqrt(distX * distX + distY * distY);

    if (dist < maxDist) {
      const factor = 0.15;
      setPosition({ x: distX * factor, y: distY * factor });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const baseClasses =
    "relative inline-flex items-center justify-center px-8 py-4 text-sm font-body font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 border";

  const variantClasses =
    variant === "primary"
      ? "bg-accent text-background border-accent hover:shadow-[0_0_30px_var(--accent-glow)]"
      : "bg-transparent text-text-primary border-border hover:border-text-muted";

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 150 }}
      className="inline-block"
    >
      <Tag
        ref={ref as never}
        href={href}
        onClick={onClick}
        type={href ? undefined : type}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">
          <motion.span
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        </span>
        {variant === "ghost" && (
          <motion.div
            className="absolute inset-0 bg-surface-2"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "0%" : "-100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </Tag>
    </motion.div>
  );
}
