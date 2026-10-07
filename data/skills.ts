import { Skill } from "@/types";

// `icon` is a key from components/ui/SkillIcon.tsx (icons are bundled — no CDN requests).
// `color` is the brand color shown on hover; leave it out for black/white logos.
export const skills: Skill[] = [
  // Languages
  { name: "Go", icon: "go", category: "Languages", color: "#00ADD8" },
  { name: "TypeScript", icon: "typescript", category: "Languages", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", category: "Languages", color: "#E8C400" },
  { name: "Python", icon: "python", category: "Languages", color: "#3776AB" },

  // Frameworks & Libraries
  { name: "Next.js", icon: "nextjs", category: "Frameworks & Libraries" },
  { name: "React Native", icon: "react", category: "Frameworks & Libraries", color: "#149ECA" },
  { name: "Node.js", icon: "nodejs", category: "Frameworks & Libraries", color: "#5FA04E" },
  { name: "Express.js", icon: "express", category: "Frameworks & Libraries" },
  { name: "TailwindCSS", icon: "tailwindcss", category: "Frameworks & Libraries", color: "#06B6D4" },
  { name: "Streamlit", icon: "streamlit", category: "Frameworks & Libraries", color: "#FF4B4B" },
  { name: "TensorFlow", icon: "tensorflow", category: "Frameworks & Libraries", color: "#FF6F00" },
  { name: "PyTorch", icon: "pytorch", category: "Frameworks & Libraries", color: "#EE4C2C" },
  { name: "OpenCV", icon: "opencv", category: "Frameworks & Libraries", color: "#5C3EE8" },
  { name: "HuggingFace", icon: "huggingface", category: "Frameworks & Libraries", color: "#E8B500" },

  // Databases & BaaS
  { name: "PostgreSQL", icon: "postgresql", category: "Databases & BaaS", color: "#4169E1" },
  { name: "MongoDB", icon: "mongodb", category: "Databases & BaaS", color: "#47A248" },
  { name: "Supabase", icon: "supabase", category: "Databases & BaaS", color: "#3ECF8E" },

  // Tools & Platforms
  { name: "Git", icon: "git", category: "Tools & Platforms", color: "#F05032" },
  { name: "Vercel", icon: "vercel", category: "Tools & Platforms" },
  { name: "Postman", icon: "postman", category: "Tools & Platforms", color: "#FF6C37" },
  { name: "Swagger", icon: "swagger", category: "Tools & Platforms", color: "#6BA539" },
  { name: "Figma", icon: "figma", category: "Tools & Platforms", color: "#F24E1E" },
];
