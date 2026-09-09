export const personalInfo = {
  name: "Anupama Nair",
  initials: "AN",
  title: "Full Stack Developer",
  tagline: "Building things\nthat work &\nlook stunning.",
  subtitle: "End-to-end development. Pixel-perfect interfaces.",
  year: new Date().getFullYear(),
  email: "anupamanairmail@gmail.com",
  phone: "+91 9995464197",
  linkedin: "https://linkedin.com/in/anupama-vinod-nair",
  github: "https://github.com/anupama0307",
  location: "Coimbatore, India",
  bio: [
    "I'm a Computer Science undergraduate at Amrita Vishwa Vidyapeetham with a deep passion for building software that's both technically robust and beautifully crafted.",
    "From AI-driven fintech platforms to real-time mobility solutions, I love tackling complex problems across the entire stack — backend architecture, database design, API engineering, and pixel-perfect frontends.",
    "When I'm not shipping features, I'm exploring machine learning research, competing in national hackathons, or pushing the boundaries of what's possible with modern web technologies.",
  ],
  stats: [
    { value: 3, suffix: "+", label: "Projects Shipped" },
    { value: 8.47, suffix: "", label: "CGPA Score" },
    { value: 10, suffix: "+", label: "Technologies Mastered" },
  ],
  availableForWork: true,
};

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github?: string;
  live?: string;
  image: string;
  featured?: boolean;
  category: string;
}

export const projects: Project[] = [
  {
    id: "scaler-ai",
    number: "001",
    title: "Scaler AI Portfolio Agent",
    description: "Dual-modality AI agent with real-time voice and web chat",
    longDescription:
      "Architected a dual-modality AI agent supporting real-time voice interactions and streaming web chat using Gemini, Vapi, Deepgram, and ElevenLabs. Developed a Retrieval-Augmented Generation (RAG) pipeline using FastAPI and ChromaDB to index resume and GitHub repositories, enabling semantic retrieval and grounded LLM responses. Optimized voice-agent scheduling latency from ~4s to under 100ms using caching and revalidation, eliminating third-party webhook timeout failures.",
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "ChromaDB",
      "Gemini",
      "Docker",
    ],
    github: "https://github.com/anupama0307",
    image: "/images/project-scaler.webp",
    featured: true,
    category: "AI · Full Stack",
  },
  {
    id: "riskoff",
    number: "002",
    title: "RISKOFF",
    description: "AI-Driven FinTech Risk Platform",
    longDescription:
      "Developed an AI-powered financial risk assessment platform using React, FastAPI, PostgreSQL, and Docker to automate loan-risk evaluation workflows. Built backend services for financial analysis, risk scoring, authentication, and secure API communication across multiple application modules. Containerized backend infrastructure using Docker, enabling reproducible development environments and streamlined deployment workflows.",
    techStack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Gemini API",
      "Python",
    ],
    github: "https://github.com/anupama0307",
    image: "/images/project-riskoff.webp",
    featured: true,
    category: "Full Stack · AI",
  },
  {
    id: "amazon-intent",
    number: "003",
    title: "Amazon Intent-to-Cart",
    description: "AI-driven intent understanding for personalized shopping carts",
    longDescription:
      "Built a multimodal commerce platform that transforms text, voice, and image inputs into personalized shopping carts through AI-driven intent understanding. Developed image-to-cart and multilingual voice-to-cart workflows using Gemini multimodal capabilities to extract shopping intent and generate contextual product recommendations. Designed a modular intent-orchestration pipeline to process multimodal inputs and route extracted intent across recommendation and cart-generation workflows.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Gemini API",
      "Vercel",
    ],
    github: "https://github.com/anupama0307",
    image: "/images/project-amazon.webp",
    category: "AI · Front End",
  },
];

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "AI / ML" | "Core CS" | "Embedded Systems" | "Other";
  proficiency: number; // 0-100
}

export const skills: Skill[] = [
  // Languages & Core
  { name: "Java", category: "Backend", proficiency: 85 },
  { name: "Python", category: "Backend", proficiency: 90 },
  { name: "C", category: "Core CS", proficiency: 80 },
  { name: "Data Structures & Algorithms", category: "Core CS", proficiency: 90 },
  { name: "Object-Oriented Programming", category: "Core CS", proficiency: 90 },
  { name: "Operating Systems", category: "Core CS", proficiency: 85 },
  { name: "Computer Networks", category: "Core CS", proficiency: 80 },
  
  // Frontend
  { name: "React.js", category: "Frontend", proficiency: 90 },
  { name: "Next.js", category: "Frontend", proficiency: 88 },
  { name: "TypeScript", category: "Frontend", proficiency: 85 },
  
  // Backend & Database
  { name: "FastAPI", category: "Backend", proficiency: 85 },
  { name: "PostgreSQL", category: "Database", proficiency: 85 },
  { name: "DBMS", category: "Database", proficiency: 85 },
  { name: "ChromaDB", category: "Database", proficiency: 80 },
  
  // DevOps & Tools
  { name: "Git", category: "DevOps", proficiency: 90 },
  { name: "Docker", category: "DevOps", proficiency: 85 },
  { name: "Linux", category: "DevOps", proficiency: 85 },
  
  // Embedded Systems
  { name: "Embedded C", category: "Embedded Systems", proficiency: 75 },
  { name: "ECU Architecture", category: "Embedded Systems", proficiency: 70 },
  { name: "Debugging", category: "DevOps", proficiency: 85 },
  
  // AI / ML
  { name: "Gemini", category: "AI / ML", proficiency: 85 },
  { name: "LLM APIs", category: "AI / ML", proficiency: 85 },
  { name: "XGBoost", category: "AI / ML", proficiency: 78 },
];

export const skillPillars = [
  {
    title: "Software Engineering & Core CS",
    description: "Strong foundation in data structures, algorithms, and system design",
    skills: [
      "Java",
      "Python",
      "C",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
    ],
  },
  {
    title: "Full Stack & AI Integration",
    description: "Building scalable backend services and AI-powered interfaces",
    skills: [
      "Next.js",
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Gemini API",
    ],
  },
  {
    title: "Embedded & Systems",
    description: "Hardware-level programming and automotive software systems",
    skills: [
      "Embedded C",
      "ECU Architecture",
      "Linux",
      "Debugging",
      "Git",
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  dateRange: string;
  current: boolean;
  achievements: string[];
  techTags: string[];
}

export const experiences: Experience[] = [
  {
    company: "Visteon Corporation",
    role: "Visteon Scholar",
    dateRange: "Present",
    current: true,
    achievements: [
      "Selected for Visteon's nationwide mentorship program focused on automotive software systems.",
      "Gained exposure to Embedded C, ECU architecture, debugging, and embedded software development practices."
    ],
    techTags: ["Embedded C", "ECU Architecture", "Debugging", "Linux", "Automotive Software"],
  },
  {
    company: "Infosys Springboard",
    role: "Virtual Intern",
    dateRange: "Past",
    current: false,
    achievements: [
      "Developed FastAPI backend services integrating Open-Meteo, OpenStreetMap and XGBoost for disaster severity prediction, rescue prioritization and AI-assisted resource allocation."
    ],
    techTags: [
      "FastAPI",
      "Python",
      "XGBoost",
      "Open-Meteo",
      "OpenStreetMap",
      "AI",
    ],
  },
  {
    company: "Amrita Vishwa Vidyapeetham",
    role: "B.Tech Computer Science & Engineering",
    dateRange: "2023 — 2027",
    current: true,
    achievements: [
      "Maintaining a CGPA of 8.47 while actively building production-grade projects",
      "National Semi-Finalist at Flipkart GRID 7.0 — one of India's most competitive tech challenges",
      "Conducting research on wildfire prediction using ML, with a paper submitted for publication",
    ],
    techTags: ["Java", "Python", "C", "Data Structures", "Algorithms"],
  },
];

export interface Publication {
  title: string;
  venue: string;
  year: string;
  description: string;
  tags: string[];
  link?: string;
}

export const publications: Publication[] = [
  {
    title:
      "A Data-Driven Machine Learning Framework for Forest Fire Prediction in the Satpura Region",
    venue: "PEIS 2026, NIT Uttarakhand (Springer)",
    year: "2026",
    description:
      "Presented research on wildfire risk prediction using machine learning models trained on meteorological and satellite datasets. Applied XGBoost-based classification, feature engineering, preprocessing, and imbalance-handling techniques for high-risk prediction analysis. Evaluated model performance using precision, recall, F1-score, and ROC-AUC metrics for imbalanced wildfire datasets.",
    tags: [
      "XGBoost",
      "Wildfire Prediction",
      "Machine Learning",
      "Imbalanced Learning",
      "ROC-AUC",
      "Feature Engineering",
    ],
  },
];

export interface Achievement {
  title: string;
  org: string;
  year: string;
  description: string;
  icon: "trophy" | "flame" | "book" | "zap" | "star";
}

export const achievements: Achievement[] = [
  {
    title: "National Semi-Finalist — Flipkart GRID 7.0",
    org: "Flipkart",
    year: "Present",
    description:
      "Reached the national semifinals of Flipkart's flagship engineering competition.",
    icon: "trophy",
  },
  {
    title: "Community Volunteer",
    org: "National Service Scheme (NSS)",
    year: "Present",
    description:
      "Actively volunteering for community service and social activities as part of the National Service Scheme.",
    icon: "star",
  },
  {
    title: "Research Paper — Wildfire Prediction",
    org: "Amrita Vishwa Vidyapeetham",
    year: "Present",
    description:
      "Authored a research paper on wildfire prediction using XGBoost and MODIS/VIIRS satellite data, submitted for publication in an international journal.",
    icon: "book",
  },
  {
    title: "CGPA 8.47 — B.Tech CSE",
    org: "Amrita Vishwa Vidyapeetham",
    year: "2023 — 2027",
    description:
      "Maintaining strong academic performance while actively building production-grade projects, contributing to research, and competing in national hackathons.",
    icon: "flame",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = [
  "Java",
  "Python",
  "C",
  "React",
  "Next.js",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Gemini",
  "Embedded C",
  "Linux",
];
