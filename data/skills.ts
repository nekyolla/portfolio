import { Skill } from "@/types";

// `icon` is a key from components/ui/SkillIcon.tsx (icons are bundled — no CDN requests).
// Keys without a bundled icon (e.g. "pest") fall back to a generic code icon.
// `color` is the brand color shown on hover; leave it out for black/white or very dark logos.
export const skills: Skill[] = [
  // Languages
  { name: "Python", icon: "python", category: "Languages", color: "#3776AB" },
  { name: "Go", icon: "go", category: "Languages", color: "#00ADD8" },
  { name: "PHP", icon: "php", category: "Languages", color: "#777BB4" },
  { name: "Java", icon: "java", category: "Languages", color: "#ED8B00" },
  { name: "TypeScript", icon: "typescript", category: "Languages", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", category: "Languages", color: "#E8C400" },

  // AI / ML
  { name: "NumPy", icon: "numpy", category: "AI / ML", color: "#4D77CF" },
  { name: "Pandas", icon: "pandas", category: "AI / ML" },
  { name: "Scikit-learn", icon: "scikitlearn", category: "AI / ML", color: "#F7931E" },
  { name: "TensorFlow", icon: "tensorflow", category: "AI / ML", color: "#FF6F00" },
  { name: "PyTorch", icon: "pytorch", category: "AI / ML", color: "#EE4C2C" },
  { name: "OpenCV", icon: "opencv", category: "AI / ML", color: "#5C3EE8" },
  { name: "HuggingFace Transformers", icon: "huggingface", category: "AI / ML", color: "#E8B500" },

  // Frameworks & Libraries
  { name: "Laravel", icon: "laravel", category: "Frameworks & Libraries", color: "#FF2D20" },
  { name: "Filament", icon: "filament", category: "Frameworks & Libraries", color: "#F59E0B" },
  { name: "Next.js", icon: "nextjs", category: "Frameworks & Libraries" },
  { name: "React", icon: "react", category: "Frameworks & Libraries", color: "#149ECA" },
  { name: "React Native", icon: "react", category: "Frameworks & Libraries", color: "#149ECA" },
  { name: "Node.js", icon: "nodejs", category: "Frameworks & Libraries", color: "#5FA04E" },
  { name: "Express.js", icon: "express", category: "Frameworks & Libraries" },
  { name: "Go Fiber", icon: "go", category: "Frameworks & Libraries", color: "#00ADD8" },
  { name: "TailwindCSS", icon: "tailwindcss", category: "Frameworks & Libraries", color: "#06B6D4" },
  { name: "Streamlit", icon: "streamlit", category: "Frameworks & Libraries", color: "#FF4B4B" },

  // Databases & BaaS
  { name: "PostgreSQL", icon: "postgresql", category: "Databases & BaaS", color: "#4169E1" },
  { name: "MySQL", icon: "mysql", category: "Databases & BaaS", color: "#4479A1" },
  { name: "MongoDB", icon: "mongodb", category: "Databases & BaaS", color: "#47A248" },
  { name: "Supabase", icon: "supabase", category: "Databases & BaaS", color: "#3ECF8E" },

  // Tools & Platforms
  { name: "Git", icon: "git", category: "Tools & Platforms", color: "#F05032" },
  { name: "Docker", icon: "docker", category: "Tools & Platforms", color: "#2496ED" },
  { name: "Vercel", icon: "vercel", category: "Tools & Platforms" },
  { name: "Postman", icon: "postman", category: "Tools & Platforms", color: "#FF6C37" },
  { name: "Swagger", icon: "swagger", category: "Tools & Platforms", color: "#6BA539" },
  { name: "Pest", icon: "pest", category: "Tools & Platforms" },
  { name: "Figma", icon: "figma", category: "Tools & Platforms", color: "#F24E1E" },
  { name: "LaTeX", icon: "latex", category: "Tools & Platforms", color: "#008080" },
];
