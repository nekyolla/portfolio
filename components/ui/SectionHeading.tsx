"use client";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="section-label">
      <span>{title}</span>
    </div>
  );
}
