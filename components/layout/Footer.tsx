import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const socials = [
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: profile.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serif text-3xl tracking-tight">
              {profile.nickname}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">{profile.tagline}</p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-fg"
                  >
                    {s.label}
                    <ArrowUpRight
                      size={14}
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="link-underline break-all text-fg-muted hover:text-fg">
                  {profile.email}
                </a>
              </li>
              <li className="text-fg-muted">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
