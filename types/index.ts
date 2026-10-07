// ============================================
// Portfolio Data Types
// ============================================

export interface Profile {
  name: string;
  nickname: string;
  title: string;
  university: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  bio: string;
  aboutMe: string;
  profileImage: string;
  cvFile: string;
  location: string;
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

export interface Skill {
  name: string;
  icon: string;
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
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  pdfFile?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  date: string;
  location?: string;
}
