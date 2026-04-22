"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<"default" | "hovering" | "viewing">("default");
  const [cursorLabel, setCursorLabel] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const pos = { x: 0, y: 0 };
    const follow = { x: 0, y: 0 };
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x - 5}px, ${pos.y - 5}px, 0)`;
      }
    };

    const animate = () => {
      follow.x += (pos.x - follow.x) * 0.12;
      follow.y += (pos.y - follow.y) * 0.12;

      if (followRef.current) {
        const size = cursorState === "viewing" ? 80 : cursorState === "hovering" ? 60 : 40;
        followRef.current.style.transform = `translate3d(${follow.x - size / 2}px, ${follow.y - size / 2}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const onMouseEnterInteractive = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-view]")) {
        setCursorState("viewing");
        setCursorLabel("VIEW →");
      } else {
        setCursorState("hovering");
        setCursorLabel("");
      }
    };

    const onMouseLeaveInteractive = () => {
      setCursorState("default");
      setCursorLabel("");
    };

    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    // Attach hover listeners to interactive elements
    const interactives = document.querySelectorAll("a, button, [data-cursor-hover], [data-cursor-view]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    // Re-attach on DOM changes
    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll("a, button, [data-cursor-hover], [data-cursor-view]");
      newInteractives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, [cursorState]);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={followRef}
        className={`cursor-follow ${cursorState === "hovering" ? "hovering" : ""} ${cursorState === "viewing" ? "viewing" : ""}`}
      >
        {cursorLabel && (
          <span className="font-mono text-[10px] text-accent">{cursorLabel}</span>
        )}
      </div>
    </>
  );
}
