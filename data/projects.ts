import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "skp",
    title: "Student Achievement Credit System (SKP)",
    shortDesc:
      "A REST API backend for reporting and verifying student achievements with role-based access control, built with Go and Fiber using dual-database architecture.",
    fullDesc: `The Student Achievement Credit System (SKP) is a backend REST API built for Universitas Airlangga's Informatics Engineering program. It enables students to report their academic and non-academic achievements, advisors to verify them, and admins to manage the entire system.

The system uses a dual-database architecture: PostgreSQL handles relational data and RBAC (roles, permissions, users, students, lecturers), while MongoDB stores dynamic achievement data with flexible fields per achievement type — competitions, publications, organizations, certifications, and more.

Authentication is handled via JWT with a custom RBAC middleware that checks permissions on every endpoint. The achievement workflow follows a draft → submitted → verified/rejected lifecycle, with each state transition triggering notifications to relevant parties.

Key technical achievements include designing a hybrid PostgreSQL + MongoDB architecture that balances relational integrity with document flexibility, implementing a fine-grained RBAC system with 6+ permissions, and building a dynamic schema for achievement details that adapts per category without schema migrations.`,
    thumbnail: "/images/projects/skp.png",
    techStack: ["Go", "Fiber", "PostgreSQL", "MongoDB", "JWT", "Swagger", "REST API"],
    githubUrl: "https://github.com/nekyolla/sistem-kredit-prestasi",
    liveUrl: "",
    period: "Nov 2025 - Jan 2026",
    teamSize: 1,
    role: "Backend Developer",
    highlights: [
      "Dual-database architecture: PostgreSQL for RBAC + MongoDB for dynamic achievement data",
      "Fine-grained RBAC with 3 roles (Admin, Student, Advisor) and 6+ permissions",
      "Achievement workflow: draft → submitted → verified / rejected",
      "Supports 6 achievement types with flexible dynamic fields per category",
      "Full Swagger API documentation with 20+ endpoints",
      "Final Project — Advanced Backend Programming Practicum, Universitas Airlangga",
    ],
  },
  {
    id: "2",
    slug: "cloudtrack",
    title: "CloudTrack",
    shortDesc:
      "A cloud-based IoT telemetry and attendance platform supporting QR-based check-in, accelerometer batch streaming, and real-time GPS tracking with map visualization.",
    fullDesc: `CloudTrack is a cloud-based platform built for Universitas Airlangga's Cloud Computing practicum. It integrates three core modules — dynamic QR attendance, accelerometer telemetry, and GPS tracking — into a single unified API following the API Contract Simple v1 standard.

The backend is powered by Google Apps Script (GAS) with Google Sheets as the storage layer, handling four data sheets: tokens, presence, accel, and gps. The web client is built with TypeScript and deployed on Vercel, providing an interface for QR scanning, sensor data streaming, and live map visualization using marker and polyline rendering.

The system follows a strict cross-group compatibility contract — any client from other groups can connect to this server and vice versa, enabling swap testing as part of the course assessment.

Key technical achievements include implementing a stateless token-based QR attendance system with expiry validation, building a batch accelerometer ingestion pipeline, and rendering GPS history as polylines on an interactive map.`,
    thumbnail: "/images/projects/cloudtrack.png",
    techStack: ["Google Apps Script", "Google Sheets", "TypeScript", "Next.js", "Vercel", "REST API", "Postman"],
    githubUrl: "https://github.com/nekyolla/TuCil-Cloud-Computing-Kel-4",
    liveUrl: "https://cloudk4.vercel.app",
    period: "Feb 2026",
    teamSize: 4,
    role: "Backend Engineer and Documentator",
    highlights: [
      "Dynamic QR token system with expiry validation for tamper-proof attendance",
      "Batch accelerometer ingestion supporting multiple samples per request",
      "GPS tracking with latest marker and history polyline map rendering",
      "Cross-group API compatibility following API Contract Simple v1",
      "Serverless backend using Google Apps Script + Google Sheets",
      "Cloud Computing Midterm Practicum Project — Universitas Airlangga 2026",
    ],
  },
  {
    id: "3",
    slug: "apriori-market-basket",
    title: "Apriori — Market Basket Analysis",
    shortDesc:
      "An interactive web application for discovering frequently co-purchased item patterns using the Apriori algorithm and Association Rule Mining.",
    fullDesc: `Apriori Market Basket Analysis is a Streamlit-based web application that implements the Apriori algorithm to extract association rules from retail transaction data.

Users can upload their own CSV transaction dataset or use the built-in dummy data. Min Support and Min Confidence parameters are fully adjustable via interactive sidebar sliders, with results rendered instantly as frequent itemsets and association rules tables.

The application includes an automated business insight section that highlights the best rule by confidence and the highest lift rule, along with actionable cross-selling recommendations such as product placement strategies and bundle discount suggestions.

Key technical achievements include building a full ARM pipeline from raw CSV parsing to one-hot encoding, frequent itemset mining, and rule generation — all within a single-file Streamlit app with no backend required.`,
    thumbnail: "/images/projects/arm.png",
    techStack: ["Python", "Streamlit", "Pandas", "mlxtend"],
    githubUrl: "https://github.com/nekyolla/apriori",
    liveUrl: "",
    period: "2025",
    teamSize: 1,
    role: "Data Analyst",
    highlights: [
      "Full ARM pipeline: CSV parsing → one-hot encoding → frequent itemsets → association rules",
      "Interactive Min Support & Min Confidence parameter tuning via sidebar sliders",
      "Supports custom CSV upload or built-in dummy transaction data",
      "Displays Support, Confidence, and Lift metrics for every generated rule",
      "Automated business insight section with cross-selling recommendations",
      "Single-file Streamlit app — no backend or database required",
    ],
  },
  {
    id: "4",
    slug: "bengkel-brainrot",
    title: "Bengkel Brainrot — Campus Workshop Directory",
    shortDesc:
      "A map-based directory app for finding nearby workshops around Universitas Airlangga, featuring real-time GPS, turn-by-turn navigation, and a full admin CRUD panel.",
    fullDesc: `Bengkel Brainrot is a cloud-native mobile directory application built for the Cloud Computing final project at Universitas Airlangga. It helps students and campus residents quickly find nearby workshops (bengkel) with complete details, live distance calculation, and real-time navigation.

The system follows a strict cloud-native architecture: a React Native (Expo) mobile app communicates exclusively through a Node.js + Express REST API deployed serverlessly on Vercel, which acts as a security gatekeeper before any interaction with Supabase (PostgreSQL). This prevents direct database access from the client entirely.

Navigation is powered by OSRM (Open Source Routing Machine) — a free, open-source alternative to Google Directions API — delivering turn-by-turn driving directions in Bahasa Indonesia with an automatic arrival detection threshold of 30 meters.

The admin side features secure Supabase Auth login, full CRUD management of workshop data, and a visual map picker that lets admins set coordinates by dragging a marker on an interactive map instead of manually entering lat/lng values.

Backend security follows OWASP Top 10 API Security standards with strict input validation, centralized error handling, and standardized JSON response formatting.`,
    thumbnail: "/images/projects/bengkel.jpg",
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "OSRM",
      "Google Maps API",
    ],
    githubUrl: "https://github.com/panjigtg/TuBes-Cloud-Computing-Kel-4",
    liveUrl: "https://bengkelbrainrot.vercel.app",
    period: "2026",
    teamSize: 4,
    role: "Backend Engineer",
    highlights: [
      "66 workshop locations seeded from CSV, displayed as live GPS markers on Google Maps",
      "Turn-by-turn navigation in Bahasa Indonesia powered by OSRM (free, open-source routing)",
      "Automatic arrival detection within 30-meter GPS threshold",
      "Admin CRUD panel with visual map picker for coordinate selection",
      "Serverless Node.js API on Vercel as security gatekeeper — no direct DB access from client",
      "Supabase stack: PostgreSQL + Auth + Storage for photos",
      "OWASP Top 10 API Security mitigations applied on backend",
      "Cloud Computing Final Project — Universitas Airlangga 2026",
    ],
  },
  {
  id: "6",
  slug: "nekyolla-portfolio",
  title: "Nekyolla Portfolio",
  shortDesc:
    "A modern, data-driven personal portfolio built with Next.js 16, featuring dynamic project pages, certificate modals, and smooth scroll animations.",
  fullDesc: `This personal portfolio website showcases my profile, education, organizational experience, skills, projects, and certificates in a single modern, dark-themed interface.

The site follows a fully data-driven architecture — all content (projects, education, organizations, skills, certificates, and gallery) lives in separate TypeScript data files, allowing content updates without touching any UI components. Each project automatically generates its own detail page via Static Site Generation based on its slug.

The design follows a professional dark mode aesthetic (pure black, white, and neutral gray), inspired by minimalist developer portfolios. Certificate entries open in a LinkedIn-style modal with embedded PDF preview and download functionality.

Key technical achievements include building a fully type-safe data layer with TypeScript interfaces, implementing dynamic SSG routes for project details, and integrating Framer Motion for scroll-based reveal animations across all sections.`,
  thumbnail: "/images/projects/portfolio.png",
  techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
  githubUrl: "https://github.com/xdante68/portfolio",
  liveUrl: "https://nekyollas-portfolio.vercel.app/",
  period: "2026",
  teamSize: 1,
  role: "Developer",
  highlights: [
    "Fully data-driven architecture — edit TypeScript data files, no component changes needed",
    "Dynamic SSG project detail pages via dynamic routing ([slug])",
    "LinkedIn-style certificate modal with embedded PDF preview and download",
    "Professional dark mode design (pure black + neutral gray)",
    "Smooth scroll-reveal animations powered by Framer Motion",
    "Fully responsive, mobile-first layout with SEO-optimized static pages",
  ],
},
];
