import { galleryItems } from "@/data/gallery";

export interface SectionLink {
  id: string;
  label: string;
}

// Single source of truth for the home page sections: drives the navbar links
// and the "01 / 02 / …" numbering. Gallery only shows up once it has photos.
export const sections: SectionLink[] = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "organization", label: "Organizations" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  ...(galleryItems.length > 0 ? [{ id: "gallery", label: "Gallery" }] : []),
  { id: "contact", label: "Contact" },
];

export function sectionNumber(id: string): string {
  const index = sections.findIndex((s) => s.id === id);
  return String(index + 1).padStart(2, "0");
}
