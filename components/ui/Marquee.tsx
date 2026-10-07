import { Fragment } from "react";

/** Decorative, infinitely scrolling band of keywords (CSS-only; pauses on hover and for reduced motion). */
export default function Marquee({ items }: { items: string[] }) {
  const track = (
    <div className="marquee-track items-center" aria-hidden>
      {items.map((item) => (
        <Fragment key={item}>
          <span className="px-6 font-serif text-3xl whitespace-nowrap text-fg italic md:px-10 md:text-5xl">
            {item}
          </span>
          <span className="text-xl text-accent md:text-2xl">✦</span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="marquee border-y border-line py-6 md:py-8">
      {track}
      {track}
    </div>
  );
}
