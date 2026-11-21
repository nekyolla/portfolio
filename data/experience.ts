import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Software Developer Intern",
    company: "Kementerian Dalam Negeri Republik Indonesia",
    unit: "Balai Besar Pengembangan Kapasitas Pemerintahan Desa (BBPKPD)",
    type: "Internship",
    location: "Malang, Indonesia",
    period: "Sep 2026 - Now",
    highlights: [
      "Developed the Sistem Informasi Aparatur Desa (Village Apparatus Information System), a web platform for managing village apparatus training programs, schedules, participants and dormitory allocation.",
      "Designed a relational database schema covering hierarchical regional data (province to village), training schedules, participant enrollment, certificates and dormitory rooms.",
      "Implemented role-based access control with Spatie Laravel Permission and an audit trail with Spatie Activitylog to track data changes.",
      "Generated participant training certificates as PDFs with DomPDF.",
      "Wrote automated tests with Pest and set up a containerized development environment with Laravel Sail (Docker).",
    ],
    techStack: ["Laravel 13", "Filament v4","Spatie Permission", "Spatie Activitylog", "DomPDF", "Pest", "Docker"],
  },
];
