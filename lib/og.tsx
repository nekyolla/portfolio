import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/data/profile";

export const ogSize = { width: 1200, height: 630 };

// Same palette as the light theme
export const og = {
  bg: "#f6f4ee",
  fg: "#1b1a17",
  muted: "#57534b",
  subtle: "#69655b",
  line: "#e2ded3",
  accent: "#a94e2b",
};

export async function loadOgFonts() {
  const dir = join(process.cwd(), "assets/fonts");
  const [serif, serifItalic, sans] = await Promise.all([
    readFile(join(dir, "Newsreader-Medium.woff")),
    readFile(join(dir, "Newsreader-MediumItalic.woff")),
    readFile(join(dir, "Inter-Medium.woff")),
  ]);
  return [
    { name: "Newsreader", data: serif, style: "normal" as const, weight: 500 as const },
    { name: "Newsreader", data: serifItalic, style: "italic" as const, weight: 500 as const },
    { name: "Inter", data: sans, style: "normal" as const, weight: 500 as const },
  ];
}

export function OgFrame({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: og.bg,
        color: og.fg,
        padding: "64px 72px",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, color: og.subtle, letterSpacing: 3 }}>
        <div style={{ width: 12, height: 12, borderRadius: 999, background: og.accent }} />
        {eyebrow.toUpperCase()}
      </div>
      {children}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${og.line}`,
          paddingTop: 28,
          fontSize: 24,
          color: og.muted,
        }}
      >
        <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: 34, color: og.fg }}>
          {profile.nickname}
          <span style={{ color: og.accent }}>.</span>
        </div>
        <div style={{ display: "flex" }}>{profile.siteUrl.replace(/^https?:\/\//, "")}</div>
      </div>
    </div>
  );
}
