import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/data/profile";
import Portrait from "@/components/ui/Portrait";
import ResultCard from "@/components/ui/ResultCard";

const delay = (ms: number) => ({ "--d": ms }) as React.CSSProperties;

const socials = [
  { href: profile.github, label: "GitHub", Icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: profile.instagram, label: "Instagram", Icon: FaInstagram },
];

export default function Hero() {
  const words = profile.name.split(" ");
  const lastName = words.length > 1 ? words.pop() : undefined;
  const firstLine = words.join(" ");
  const locationParts = profile.location.split(",").map((part) => part.trim());
  const city = locationParts[0];
  const country = locationParts[locationParts.length - 1];

  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-[100svh] flex-col pt-28 pb-8 md:pt-36">
      <div className="container-page grid flex-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow fade-up flex items-center gap-3" style={delay(100)}>
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/60 [animation-duration:2.4s]" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.program} · {profile.university}
          </p>

          {/* CSS-driven reveal: visible and animating before hydration */}
          <h1 className="display mt-8 text-[clamp(3.25rem,12vw,5.5rem)] leading-[0.92] lg:text-[clamp(5rem,8.6vw,7.4rem)]">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden className="block">
              <span className="mask">
                <span className="rise" style={delay(200)}>
                  {firstLine}
                </span>
              </span>
            </span>
            {lastName && (
              <span aria-hidden className="block">
                <span className="mask">
                  <span className="rise italic text-accent" style={delay(320)}>
                    {lastName}
                  </span>
                </span>
              </span>
            )}
          </h1>

          <p
            className="fade-up mt-8 max-w-[38rem] font-serif text-xl leading-[1.45] text-fg-muted md:text-[1.6rem]"
            style={delay(650)}
          >
            {profile.bio}
          </p>

          <ul className="fade-up mt-8 flex flex-wrap gap-2" style={delay(800)} aria-label="Roles">
            {profile.roles.map((role) => (
              <li key={role} className="tag">
                {role}
              </li>
            ))}
          </ul>

          <div className="fade-up mt-10 flex flex-wrap items-center gap-3" style={delay(950)}>
            <a
              href={profile.cvFile}
              download={`${profile.name.replace(/\s+/g, "-")}-CV.pdf`}
              className="btn btn-primary group"
            >
              Download CV
              <ArrowDownToLine
                size={16}
                strokeWidth={1.75}
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-y-0.5"
              />
            </a>
            <a href="#contact" className="btn btn-ghost group">
              Get in touch
              <ArrowRight
                size={16}
                strokeWidth={1.75}
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </a>
            <ul className="ml-1 flex items-center" aria-label="Social profiles">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={`${label} (opens in a new tab)`}
                  >
                    <Icon size={17} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Portrait
            src={profile.profileImage}
            alt={profile.profileImageAlt}
            caption={
              <>
                <span>Based in {city}</span>
                <span>{country}</span>
              </>
            }
            overlay={profile.heroSnippet && <ResultCard snippet={profile.heroSnippet} />}
          />
        </div>
      </div>

      <div className="container-page fade-in mt-14 hidden items-center gap-4 md:flex" style={delay(1300)}>
        <span className="scroll-cue h-10 w-px bg-line-strong" aria-hidden />
        <span className="eyebrow">Scroll to explore</span>
      </div>
    </section>
  );
}
