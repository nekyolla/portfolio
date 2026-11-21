import { Project } from "@/types";

// Numbers quoted in more than one place (project copy + the stats in data/process.ts).
// Change them here and every mention updates.
export const projectFacts = {
  skp: { endpoints: 20, roles: 3, achievementTypes: 6 },
  bengkel: { locations: 66 },
  indobert: { samples: "2,620", accuracy: "98.57%", f1: "98.64%", errors: 3, testSize: 210 },
} as const;

const { skp, bengkel, indobert } = projectFacts;

// Order = hierarchy on the page (top to bottom), ranked by relevance to AI / ML / data:
//   1. IndoBERT    — end-to-end ML/NLP: fine-tuning, evaluation, served model
//   2. Apriori     — data mining: association rule mining on transaction data
//   3. CloudTrack  — data ingestion: batch sensor telemetry + GPS pipeline
//   4. SKP         — data modelling: relational + document schema design
//   5. TOWS        — quantitative analysis: weighted SAP/ETOP scoring
//   6. Bengkel     — app/backend engineering with geospatial data
//   7. Portfolio   — this site
export const projects: Project[] = [
  {
    id: "6",
    slug: "indobert-spam-classification",
    title: "Indonesian Email Spam Classification with IndoBERT",
    shortDesc:
      "A fine-tuned IndoBERT model that sorts Indonesian emails into spam and not spam, served through a Streamlit app for single and bulk CSV predictions.",
    impact: `${indobert.accuracy} accuracy · ${indobert.f1} F1 · ${indobert.errors} errors in ${indobert.testSize} test emails`,
    fullDesc: `A binary text classifier for emails written in Indonesian, built as the Data Mining final project at Universitas Airlangga by fine-tuning IndoBERT (indobenchmark/indobert-base-p1).

The end-to-end NLP pipeline covers data cleaning, text preprocessing, tokenization, model training and evaluation on a dataset of ${indobert.samples} labelled emails.

On unseen test data the model reached ${indobert.accuracy} accuracy and a ${indobert.f1} F1-score, misclassifying only ${indobert.errors} of ${indobert.testSize} samples. Learning curves were used to analyse overfitting, and mitigation strategies were documented for future iterations.

The model is served through a Streamlit web app that handles both single emails and bulk CSV uploads, with a confidence score for every prediction.`,
    techStack: ["Python", "IndoBERT", "HuggingFace Transformers", "Streamlit"],
    period: "2026",
    role: "NLP Engineer",
    highlights: [
      `Fine-tuned IndoBERT (indobenchmark/indobert-base-p1) on ${indobert.samples} Indonesian emails`,
      "End-to-end NLP pipeline: cleaning → preprocessing → tokenization → training → evaluation",
      `${indobert.accuracy} accuracy and ${indobert.f1} F1-score on unseen test data (${indobert.errors} of ${indobert.testSize} misclassified)`,
      "Single and bulk CSV prediction in a Streamlit app, with a confidence score per prediction",
      "Overfitting analysed through learning curves, with mitigation strategies documented",
      "Data Mining Final Project — Universitas Airlangga 2026",
    ],
  },
  {
    id: "3",
    slug: "apriori-market-basket",
    title: "Apriori — Market Basket Analysis",
    shortDesc:
      "An interactive web application for discovering frequently co-purchased item patterns using the Apriori algorithm and Association Rule Mining.",
    impact: "CSV → association rules, no backend",
    fullDesc: `Apriori Market Basket Analysis is a Streamlit-based web application that implements the Apriori algorithm to extract association rules from retail transaction data.

Users can upload their own CSV transaction dataset or use the built-in dummy data. Min Support and Min Confidence parameters are fully adjustable via interactive sidebar sliders, with results rendered instantly as frequent itemsets and association rules tables.

The application includes an automated business insight section that highlights the best rule by confidence and the highest lift rule, along with actionable cross-selling recommendations such as product placement strategies and bundle discount suggestions.

Key technical achievements include building a full ARM pipeline from raw CSV parsing to one-hot encoding, frequent itemset mining, and rule generation — all within a single-file Streamlit app with no backend required.`,
    techStack: ["Python", "Streamlit", "Pandas", "mlxtend"],
    githubUrl: "https://github.com/xdante68/apriori",
    liveUrl: "",
    period: "2026",
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
    id: "2",
    slug: "cloudtrack",
    title: "CloudTrack",
    shortDesc:
      "A cloud-based IoT telemetry and attendance platform supporting QR-based check-in, accelerometer batch streaming, and real-time GPS tracking with map visualization.",
    impact: "QR attendance + accelerometer + GPS in one API",
    fullDesc: `CloudTrack is a cloud-based platform built for Universitas Airlangga's Cloud Computing practicum. It integrates three core modules — dynamic QR attendance, accelerometer telemetry, and GPS tracking — into a single unified API following the API Contract Simple v1 standard.

The backend is powered by Google Apps Script (GAS) with Google Sheets as the storage layer, handling four data sheets: tokens, presence, accel, and gps. The web client is built with TypeScript and deployed on Vercel, providing an interface for QR scanning, sensor data streaming, and live map visualization using marker and polyline rendering.

The system follows a strict cross-group compatibility contract — any client from other groups can connect to this server and vice versa, enabling swap testing as part of the course assessment.

Key technical achievements include implementing a stateless token-based QR attendance system with expiry validation, building a batch accelerometer ingestion pipeline, and rendering GPS history as polylines on an interactive map.`,
    techStack: ["Google Apps Script", "Google Sheets", "TypeScript", "Next.js", "Vercel", "REST API", "Postman"],
    githubUrl: "https://github.com/nekyolla/cloud-computing-uts",
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
    id: "1",
    slug: "skp",
    title: "Student Achievement Credit System (SKP)",
    shortDesc:
      "A REST API backend for reporting and verifying student achievements with role-based access control, built with Go and Fiber using dual-database architecture.",
    impact: `${skp.endpoints}+ endpoints · ${skp.roles} roles · draft\u00a0→\u00a0verified workflow`,
    fullDesc: `The Student Achievement Credit System (SKP) is a backend REST API built for Universitas Airlangga's Informatics Engineering program. It enables students to report their academic and non-academic achievements, advisors to verify them, and admins to manage the entire system.

The system uses a dual-database architecture: PostgreSQL handles relational data and RBAC (roles, permissions, users, students, lecturers), while MongoDB stores dynamic achievement data with flexible fields per achievement type — competitions, publications, organizations, certifications, and more.

Authentication is handled via JWT with a custom RBAC middleware that checks permissions on every endpoint. The achievement workflow follows a draft → submitted → verified/rejected lifecycle, with each state transition triggering notifications to relevant parties.

Key technical achievements include designing a hybrid PostgreSQL + MongoDB architecture that balances relational integrity with document flexibility, implementing a fine-grained RBAC system with 6+ permissions, and building a dynamic schema for achievement details that adapts per category without schema migrations.`,
    techStack: ["Go", "Fiber", "PostgreSQL", "MongoDB", "JWT", "Swagger", "REST API"],
    githubUrl: "https://github.com/nekyolla/sistem-kredit-prestasi",
    liveUrl: "",
    period: "Nov 2025 - Jan 2026",
    teamSize: 1,
    role: "Backend Developer",
    highlights: [
      "Dual-database architecture: PostgreSQL for RBAC + MongoDB for dynamic achievement data",
      `Fine-grained RBAC with ${skp.roles} roles (Admin, Student, Advisor) and 6+ permissions`,
      "Achievement workflow: draft → submitted → verified / rejected",
      `Supports ${skp.achievementTypes} achievement types with flexible dynamic fields per category`,
      `Full Swagger API documentation with ${skp.endpoints}+ endpoints, tested via Postman collections`,
      "Unit tests for every service function, with external dependencies mocked",
      "Final Project — Advanced Backend Programming Practicum, Universitas Airlangga",
    ],
  },
  {
    id: "7",
    slug: "tows-analyzer",
    title: "TOWS Analyzer",
    shortDesc:
      "A browser-based TOWS strategic analysis tool built during the KKN BBK-8 community service program to help map a village's potential.",
    impact: "Automatic SAP + ETOP scoring · no backend",
    fullDesc: `TOWS Analyzer was built during Universitas Airlangga's KKN BBK-8 community service program in Tuban to support village potential mapping. It turns a TOWS (Threats, Opportunities, Weaknesses, Strengths) analysis into a guided calculator that village stakeholders can use without any setup.

External factors are entered as weighted threats and opportunities, while internal weaknesses and strengths are grouped into the 8M categories, each with its own category weight.

From those inputs the app calculates the SAP (Strategic Advantage Profile) and ETOP (Environmental Threat and Opportunity Profile) automatically and positions the result in a strategy quadrant.

It runs fully in the browser — React, Vite and TailwindCSS with no backend — and is deployed on Vercel.`,
    techStack: ["React", "Vite", "TailwindCSS", "Vercel"],
    githubUrl: "https://github.com/nekyolla/tows-analyzer-bbk8-sidotentrem",
    liveUrl: "https://tows-calculator.vercel.app",
    period: "2026",
    role: "Developer",
    highlights: [
      "Automated SAP and ETOP calculation with quadrant-based strategy positioning",
      "Internal factors grouped into the 8M categories with per-category weights",
      "Fully client-side: no backend, accessible to village stakeholders from any browser",
      "Built for village potential mapping in the KKN BBK-8 community service program (Tuban)",
    ],
  },
  {
    id: "4",
    slug: "bengkel-brainrot",
    title: "Bengkel Brainrot — Campus Workshop Directory",
    shortDesc:
      "A map-based directory app for finding nearby workshops around Universitas Airlangga, featuring real-time GPS, turn-by-turn navigation, and a full admin CRUD panel.",
    impact: `${bengkel.locations} locations · turn-by-turn navigation in Bahasa Indonesia`,
    fullDesc: `Bengkel Brainrot is a cloud-native mobile directory application built for the Cloud Computing final project at Universitas Airlangga. It helps students and campus residents quickly find nearby workshops (bengkel) with complete details, live distance calculation, and real-time navigation.

The system follows a strict cloud-native architecture: a React Native (Expo) mobile app communicates exclusively through a Node.js + Express REST API deployed serverlessly on Vercel, which acts as a security gatekeeper before any interaction with Supabase (PostgreSQL). This prevents direct database access from the client entirely.

Navigation is powered by OSRM (Open Source Routing Machine) — a free, open-source alternative to Google Directions API — delivering turn-by-turn driving directions in Bahasa Indonesia with an automatic arrival detection threshold of 30 meters.

The admin side features secure Supabase Auth login, full CRUD management of workshop data, and a visual map picker that lets admins set coordinates by dragging a marker on an interactive map instead of manually entering lat/lng values.

Backend security follows OWASP Top 10 API Security standards with strict input validation, centralized error handling, and standardized JSON response formatting.`,
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
      `${bengkel.locations} workshop locations seeded from CSV, displayed as live GPS markers on Google Maps`,
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
    id: "5",
    slug: "nekyolla-portfolio",
    title: "Nekyolla Portfolio",
    shortDesc:
      "A modern, data-driven personal portfolio built with Next.js 16, featuring an editorial serif design, light/dark themes, dynamic project pages, and smooth scroll animations.",
    impact: "WCAG AA, 0 axe violations",
    fullDesc: `This personal portfolio website showcases my profile, work experience, education, organizations, skills, projects, and certificates in a single, editorial-style interface.

The site follows a fully data-driven architecture — all content (experience, projects, education, organizations, skills, certificates, and gallery) lives in separate TypeScript data files, allowing content updates without touching any UI components. Each project automatically generates its own detail page via Static Site Generation based on its slug.

The design pairs a warm serif display typeface with a clean sans-serif, on a paper-like ivory palette with a matching charcoal dark mode. Motion is deliberately calm: smooth inertial scrolling, masked text reveals, and soft blur-fade transitions — all of which switch off automatically for visitors who prefer reduced motion.

Key technical achievements include a fully type-safe data layer, mostly server-rendered components to keep the JavaScript bundle small, self-hosted fonts and icons with no third-party requests, an accessible dialog with focus management, and optimized, metadata-stripped images.`,
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Lenis", "Vercel"],
    githubUrl: "https://github.com/nekyolla/portfolio",
    liveUrl: "https://portfolio-astral-express.vercel.app/",
    period: "2026",
    teamSize: 1,
    role: "Developer",
    highlights: [
      "Fully data-driven architecture — edit TypeScript data files, no component changes needed",
      "Dynamic SSG project detail pages with generated Open Graph images",
      "Editorial design system: serif display type, warm light and dark themes",
      "Smooth scrolling (Lenis) and reveal animations (Framer Motion) that respect reduced-motion settings",
      "Accessible by default: skip link, keyboard-friendly dialogs, visible focus, WCAG AA contrast",
      "Self-hosted fonts and icons, optimized images, and security headers",
    ],
  },
];
