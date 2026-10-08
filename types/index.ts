// ============================================
// Portfolio Data Types
// ============================================

export interface Profile {
  name: string;
  nickname: string;
  title: string;
  university: string;
  program: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  /** Short intro shown in the hero */
  bio: string;
  /** Long-form about text — paragraphs separated by a blank line */
  aboutMe: string;
  /** Roles listed under the name in the hero */
  roles: string[];
  /** Keywords scrolling in the marquee below the hero */
  focusAreas: string[];
  interests: string;
  /** One-liner shown in the footer */
  tagline: string;
  profileImage: string;
  /** Alt text for the profile image */
  profileImageAlt: string;
  cvFile: string;
  location: string;
  /** Production URL, used for SEO metadata, sitemap and Open Graph */
  siteUrl: string;
  /** Small "result" card pinned to the hero portrait (optional) */
  heroSnippet?: HeroSnippet;
}

export interface HeroSnippet {
  /** Where the snippet comes from, e.g. "SKP API" */
  source: string;
  /** Slug of the project the card links to */
  projectSlug: string;
  request: { method: string; path: string };
  rows: { key: string; value: string; highlight?: boolean }[];
  /** true when the snippet is a composed example rather than captured output — shows an "Illustrative" label */
  illustrative: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  major: string;
  period: string;
  gpa?: string;
  description?: string;
  highlights?: string[];
}

export interface Organization {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  achievements?: string[];
}

export type SkillCategory = "Languages" | "Frameworks & Libraries" | "Databases & BaaS" | "Tools & Platforms";

export interface Skill {
  name: string;
  /** Icon key — see components/ui/SkillIcon.tsx for the available keys */
  icon: string;
  category: SkillCategory;
  /** Brand color used on hover (optional) */
  color?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  thumbnail: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  period: string;
  teamSize?: number;
  role?: string;
  highlights?: string[];
  /** One-line, evidence-style summary shown on the card and detail page (e.g. "20+ endpoints · 3 roles") */
  impact?: string;
}

export interface ProcessStep {
  title: string;
  body: string;
}

export interface ProcessStat {
  value: number;
  suffix?: string;
  label: string;
  /** Where the number comes from (project slug), so it can be checked against data/projects.ts */
  source?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  /** Format: "Month YYYY", e.g. "April 2026" — used for sorting */
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  pdfFile?: string;
  /** Image of the certificate's first page, shown in the grid and dialog */
  previewImage?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  /** Describes the photo for screen readers; falls back to the caption */
  alt?: string;
  date: string;
  location?: string;
}
