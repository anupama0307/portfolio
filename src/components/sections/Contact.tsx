"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";
import { GitFork, Globe, Mail, Check, Loader2 } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate submit
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
    setTimeout(() => {
      setFormState("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const socialLinks = [
    { icon: GitFork, href: personalInfo.github, label: "GitHub" },
    { icon: Globe, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-[120px] md:py-[200px] min-h-screen flex items-center overflow-hidden"
    >
      {/* Section marker */}
      <div className="section-marker">06</div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs font-medium text-accent tracking-[0.3em] uppercase mb-12 md:mb-16"
        >
          06 — Contact
        </motion.p>

        {/* Headline */}
        <div className="mb-8">
          {["Let's build", "something", "great."].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="font-display text-hero font-light text-text-primary"
              >
                {line}
              </motion.h2>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body text-base md:text-lg text-text-muted mb-12 max-w-lg"
        >
          Available for freelance & full-time opportunities.
        </motion.p>

        {/* CTA + Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {!showForm ? (
            <MagneticButton variant="primary" onClick={() => setShowForm(true)}>
              Send Me a Message
            </MagneticButton>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="max-w-xl space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="form-input"
                  required
                />
              </div>
              <textarea
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="form-input resize-none"
                required
              />
              <div className="flex items-center gap-4">
                <MagneticButton variant="primary" type="submit">
                  {formState === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </span>
                  ) : formState === "success" ? (
                    <span className="flex items-center gap-2">
                      <Check size={16} />
                      Sent!
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </MagneticButton>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors font-body"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center gap-6 mt-16"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
              title={social.label}
            >
              <social.icon size={20} />
              <span className="font-body text-sm hidden sm:inline">{social.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
