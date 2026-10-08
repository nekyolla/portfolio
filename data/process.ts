import { ProcessStat, ProcessStep } from "@/types";
import { projects } from "@/data/projects";

// "How I work" section. Every step points at something a project actually did,
// and every stat is a number from data/projects.ts — update both together.
export const processSteps: ProcessStep[] = [
  {
    title: "Frame the problem",
    body: "Start from who uses it and which decision it supports. In SKP: students report, advisors verify.",
  },
  {
    title: "Model the data",
    body: "Pick storage by shape: PostgreSQL for roles and permissions, MongoDB for fields that change per category.",
  },
  {
    title: "Build and secure",
    body: "REST API with JWT and RBAC middleware, plus OWASP API Security Top 10 mitigations on the Bengkel backend.",
  },
  {
    title: "Document and ship",
    body: "Swagger and Postman docs plus serverless deploys, so teammates and other groups can plug in (CloudTrack's shared API contract).",
  },
];

export const processStats: ProcessStat[] = [
  { value: 20, suffix: "+", label: "Documented API endpoints", source: "skp" },
  { value: 66, label: "Workshop locations mapped", source: "bengkel-brainrot" },
  { value: 6, label: "Achievement types, one flexible schema", source: "skp" },
  { value: projects.length, label: "Projects built" },
];
