import type { IconType } from "react-icons";
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiGo,
  SiHuggingface,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiStreamlit,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Code2 } from "lucide-react";

// Bundled Simple Icons — monochrome (currentColor), so they match both themes.
// To add a skill: import its icon from "react-icons/si" and register a key here.
const icons: Record<string, IconType> = {
  express: SiExpress,
  figma: SiFigma,
  git: SiGit,
  go: SiGo,
  huggingface: SiHuggingface,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  opencv: SiOpencv,
  postgresql: SiPostgresql,
  postman: SiPostman,
  python: SiPython,
  pytorch: SiPytorch,
  react: SiReact,
  streamlit: SiStreamlit,
  supabase: SiSupabase,
  swagger: SiSwagger,
  tailwindcss: SiTailwindcss,
  tensorflow: SiTensorflow,
  typescript: SiTypescript,
  vercel: SiVercel,
};

export default function SkillIcon({ icon, className }: { icon: string; className?: string }) {
  const Icon = icons[icon];
  if (!Icon) return <Code2 className={className} aria-hidden />;
  return <Icon className={className} aria-hidden />;
}
