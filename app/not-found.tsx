import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const delay = (ms: number) => ({ "--d": ms }) as React.CSSProperties;

  return (
    <section className="container-page flex min-h-[85svh] flex-col justify-center pt-28 pb-16">
      <p className="eyebrow fade-up" style={delay(0)}>
        Error 404
      </p>
      <h1 className="display mt-6 text-[3.25rem] sm:text-7xl md:text-8xl">
        <span className="mask">
          <span className="rise" style={delay(100)}>
            Lost on the
          </span>
        </span>{" "}
        <span className="mask">
          <span className="rise italic text-accent" style={delay(200)}>
            trail.
          </span>
        </span>
      </h1>
      <p className="fade-up mt-6 max-w-md text-lg leading-relaxed text-fg-muted" style={delay(400)}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on the path.
      </p>
      <div className="fade-up mt-10" style={delay(550)}>
        <Link href="/" className="btn btn-primary group">
          <ArrowLeft size={16} aria-hidden className="transition-transform duration-500 group-hover:-translate-x-1" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
