"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/layout/Navbar";

// Dynamic imports for heavy components
const CustomCursor = dynamic(() => import("@/components/layout/CustomCursor"), {
  ssr: false,
});
const SmoothScroll = dynamic(() => import("@/components/layout/SmoothScroll"), {
  ssr: false,
});
const IntroLoader = dynamic(
  () => import("@/components/sections/IntroLoader"),
  { ssr: false }
);

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaderDone(true);
  }, []);

  return (
    <>
      <IntroLoader onComplete={handleLoaderComplete} />
      <CustomCursor />
      <SmoothScroll>
        {loaderDone && <Navbar />}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
