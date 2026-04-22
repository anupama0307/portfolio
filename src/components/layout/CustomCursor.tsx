"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  // Keep all mutable state in refs so the effect never re-runs
  const pos = useRef({ x: -100, y: -100 });
  const follow = useRef({ x: -100, y: -100 });
  const currentSize = useRef(40);
  const targetSize = useRef(40);
  const isTouchDevice = useRef(false);

  const updateFollower = useCallback(() => {
    // Smoothly lerp follower towards cursor
    follow.current.x += (pos.current.x - follow.current.x) * 0.15;
    follow.current.y += (pos.current.y - follow.current.y) * 0.15;

    // Smoothly lerp size
    currentSize.current += (targetSize.current - currentSize.current) * 0.15;

    if (followRef.current) {
      const s = currentSize.current;
      followRef.current.style.transform = `translate3d(${follow.current.x - s / 2}px, ${follow.current.y - s / 2}px, 0)`;
      followRef.current.style.width = `${s}px`;
      followRef.current.style.height = `${s}px`;
    }
  }, []);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      isTouchDevice.current = true;
      if (dotRef.current) dotRef.current.style.display = "none";
      if (followRef.current) followRef.current.style.display = "none";
      return;
    }

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
      }
    };

    const onMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-view]")) {
        targetSize.current = 80;
        if (followRef.current) {
          followRef.current.style.background = "var(--accent-glow)";
        }
        if (labelRef.current) {
          labelRef.current.textContent = "VIEW →";
          labelRef.current.style.opacity = "1";
        }
      } else {
        targetSize.current = 60;
        if (followRef.current) {
          followRef.current.style.background = "var(--accent-glow)";
        }
      }
    };

    const onMouseLeave = () => {
      targetSize.current = 40;
      if (followRef.current) {
        followRef.current.style.background = "transparent";
      }
      if (labelRef.current) {
        labelRef.current.textContent = "";
        labelRef.current.style.opacity = "0";
      }
    };

    const animate = () => {
      updateFollower();
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    // Use event delegation instead of attaching to every interactive element
    document.addEventListener("mouseover", (e) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover], [data-cursor-view]")) {
        onMouseEnter(e);
      }
    }, { passive: true });

    document.addEventListener("mouseout", (e) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover], [data-cursor-view]")) {
        // Only reset if we're not entering another interactive element
        const related = (e as MouseEvent).relatedTarget as HTMLElement | null;
        if (!related || !related.closest("a, button, [data-cursor-hover], [data-cursor-view]")) {
          onMouseLeave();
        }
      }
    }, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []); // Empty deps — never re-runs

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={followRef} className="cursor-follow">
        <span
          ref={labelRef}
          className="font-mono text-[10px] text-accent"
          style={{ opacity: 0, transition: "opacity 0.2s" }}
        />
      </div>
    </>
  );
}
