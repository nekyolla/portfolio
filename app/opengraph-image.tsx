import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { OgFrame, og, ogSize, loadOgFonts } from "@/lib/og";

export const alt = `${profile.name} — ${profile.title}`;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  const words = profile.name.split(" ");
  const last = words.length > 1 ? words.pop() : undefined;

  return new ImageResponse(
    (
      <OgFrame eyebrow={`${profile.program} · ${profile.university}`}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Newsreader", fontSize: 128, lineHeight: 0.95, letterSpacing: -4 }}>
            <span>{words.join(" ")}</span>
            {last && <span style={{ fontStyle: "italic", color: og.accent }}>{last}</span>}
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 30, color: og.muted }}>
            {profile.roles.join("  ·  ")}
          </div>
        </div>
      </OgFrame>
    ),
    { ...size, fonts: await loadOgFonts() }
  );
}
