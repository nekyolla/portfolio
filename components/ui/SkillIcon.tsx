import type { IconType } from "react-icons";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFilament,
  SiGit,
  SiGo,
  SiHuggingface,
  SiJavascript,
  SiLaravel,
  SiLatex,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiOpenjdk,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
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
// Simple Icons has no Java logo (trademark), so Java uses the OpenJDK mark.
const icons: Record<string, IconType> = {
  docker: SiDocker,
  express: SiExpress,
  figma: SiFigma,
  filament: SiFilament,
  git: SiGit,
  go: SiGo,
  huggingface: SiHuggingface,
  java: SiOpenjdk,
  javascript: SiJavascript,
  laravel: SiLaravel,
  latex: SiLatex,
  mongodb: SiMongodb,
  mysql: SiMysql,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  numpy: SiNumpy,
  opencv: SiOpencv,
  pandas: SiPandas,
  php: SiPhp,
  postgresql: SiPostgresql,
  postman: SiPostman,
  python: SiPython,
  pytorch: SiPytorch,
  react: SiReact,
  scikitlearn: SiScikitlearn,
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
