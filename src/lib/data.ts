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
    { value: 4, suffix: "+", label: "Projects Shipped" },
    { value: 8.56, suffix: "", label: "CGPA Score" },
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
    id: "riskoff",
    number: "001",
    title: "RISKOFF",
    description: "AI-Driven FinTech Risk Platform",
    longDescription:
      "Engineered a backend-driven fintech platform for loan lifecycle management with reliable and low-latency risk scoring. Implemented a hybrid credit scoring system combining ML predictions with rule-based financial validation.",
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
    id: "gemchef",
    number: "002",
    title: "GemChef",
    description: "AI-Powered Meal Planning Platform",
    longDescription:
      "Built a conversational AI interface using natural language inputs to generate structured outputs from LLM responses. Designed REST APIs for recipe generation, meal planning, and grocery list creation with dietary customization.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Gemini API",
    ],
    github: "https://github.com/anupama0307",
    image: "/images/project-gemchef.webp",
    category: "Full Stack · AI",
  },
  {
    id: "leaflift",
    number: "003",
    title: "LeafLift",
    description: "Real-Time Ride Matching & Mobility Platform",
    longDescription:
      "Designed and built an end-to-end real-time ride-sharing product with geospatial ride-matching algorithms and low-latency communication pipelines using Firebase and WebSockets.",
    techStack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
    ],
    github: "https://github.com/anupama0307",
    image: "/images/project-leaflift.webp",
    category: "Mobile · Full Stack",
  },
  {
    id: "forest-fire",
    number: "004",
    title: "Forest Fire Prediction",
    description: "Machine Learning Research",
    longDescription:
      "Developed wildfire prediction models using meteorological and satellite data (MODIS/VIIRS). Trained XGBoost models with stratified cross-validation for imbalanced datasets. Research paper submitted for publication.",
    techStack: ["Python", "XGBoost", "Scikit-learn", "MODIS/VIIRS"],
    github: "https://github.com/anupama0307",
    image: "/images/project-forestfire.webp",
    category: "Machine Learning · Research",
  },
];

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "AI / ML";
  proficiency: number; // 0-100
}

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend", proficiency: 90 },
  { name: "Next.js", category: "Frontend", proficiency: 88 },
  { name: "TypeScript", category: "Frontend", proficiency: 85 },
  { name: "JavaScript", category: "Frontend", proficiency: 92 },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 90 },
  { name: "React Native", category: "Frontend", proficiency: 75 },
  { name: "Node.js", category: "Backend", proficiency: 88 },
  { name: "FastAPI", category: "Backend", proficiency: 85 },
  { name: "Express.js", category: "Backend", proficiency: 82 },
  { name: "Python", category: "Backend", proficiency: 90 },
  { name: "Java", category: "Backend", proficiency: 78 },
  { name: "REST APIs", category: "Backend", proficiency: 92 },
  { name: "WebSockets", category: "Backend", proficiency: 80 },
  { name: "PostgreSQL", category: "Database", proficiency: 85 },
  { name: "MongoDB", category: "Database", proficiency: 82 },
  { name: "Supabase", category: "Database", proficiency: 78 },
  { name: "Firebase", category: "Database", proficiency: 80 },
  { name: "Docker", category: "DevOps", proficiency: 80 },
  { name: "Git", category: "DevOps", proficiency: 90 },
  { name: "Linux", category: "DevOps", proficiency: 78 },
  { name: "AWS", category: "DevOps", proficiency: 70 },
  { name: "XGBoost", category: "AI / ML", proficiency: 78 },
  { name: "Scikit-learn", category: "AI / ML", proficiency: 75 },
  { name: "LLM APIs", category: "AI / ML", proficiency: 82 },
];

export const skillPillars = [
  {
    title: "Frontend Excellence",
    description: "Crafting pixel-perfect, performant user interfaces",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Architecture",
    description: "Building robust, scalable server-side systems",
    skills: [
      "Node.js",
      "FastAPI",
      "Python",
      "REST APIs",
      "WebSockets",
      "Express.js",
    ],
  },
  {
    title: "Data & Deployment",
    description: "From database design to production infrastructure",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Firebase",
      "Git",
      "Linux",
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
    company: "Amrita Vishwa Vidyapeetham",
    role: "B.Tech Computer Science & Engineering",
    dateRange: "2023 — 2027",
    current: true,
    achievements: [
      "Maintaining a CGPA of 8.56 while actively building production-grade projects",
      "National Semi-Finalist at Flipkart GRID 7.0 — one of India's most competitive tech challenges",
      "Conducting research on wildfire prediction using ML, with a paper submitted for publication",
    ],
    techTags: ["Java", "Python", "JavaScript", "Data Structures", "Algorithms"],
  },
  {
    company: "Independent Projects",
    role: "Full Stack Developer",
    dateRange: "2023 — Present",
    current: true,
    achievements: [
      "Architected and shipped 4+ production-grade applications spanning fintech, AI, and mobility",
      "Built real-time systems using WebSockets and Firebase for sub-second latency",
      "Integrated LLM APIs (Gemini) for intelligent, AI-powered user experiences",
    ],
    techTags: [
      "React",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Gemini API",
    ],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Anupama has a rare ability to understand both the technical complexity and the user experience. Her work on RISKOFF was exceptional — clean architecture, thoughtful design.",
    name: "Project Mentor",
    role: "Senior Developer",
    company: "Amrita University",
  },
  {
    quote:
      "The attention to detail in every component she builds is remarkable. She doesn't just make things work — she makes them feel premium and polished.",
    name: "Team Lead",
    role: "Hackathon Teammate",
    company: "Flipkart GRID 7.0",
  },
  {
    quote:
      "Working with Anupama on GemChef was a great experience. Her ability to architect full-stack solutions with AI integrations is truly impressive for someone still in university.",
    name: "Peer Developer",
    role: "Collaborator",
    company: "Open Source",
  },
  {
    quote:
      "From database schema design to real-time WebSocket implementations — she handles the full spectrum with confidence. A true full-stack developer in every sense.",
    name: "Faculty Advisor",
    role: "Professor",
    company: "CSE Department",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Tailwind",
  "Docker",
  "FastAPI",
  "Python",
  "MongoDB",
  "Firebase",
  "WebSockets",
];
