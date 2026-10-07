import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";
import { OgFrame, og, ogSize, loadOgFonts } from "@/lib/og";

export const alt = "Project overview";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const title = project?.title ?? "Project";
  const stack = project?.techStack.slice(0, 5).join("  ·  ") ?? "";

  return new ImageResponse(
    (
      <OgFrame eyebrow={`Project${project ? ` · ${project.period}` : ""}`}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Newsreader",
              fontSize: title.length > 40 ? 76 : 96,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: og.accent }}>{stack}</div>
        </div>
      </OgFrame>
    ),
    { ...size, fonts: await loadOgFonts() }
  );
}
