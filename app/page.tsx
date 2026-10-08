import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Organization from "@/components/sections/Organization";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";
import { profile, siteDescription } from "@/data/profile";
import { educations } from "@/data/education";

// Structured data so search engines can show a proper profile card
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.nickname,
  url: profile.siteUrl,
  image: new URL(profile.profileImage, profile.siteUrl).toString(),
  jobTitle: profile.title,
  description: siteDescription,
  address: { "@type": "PostalAddress", addressLocality: profile.location },
  alumniOf: educations.map((e) => ({ "@type": "EducationalOrganization", name: e.institution })),
  knowsAbout: profile.focusAreas,
  sameAs: [profile.github, profile.linkedin, profile.instagram],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Marquee items={profile.focusAreas} />
      <About />
      <Education />
      <Organization />
      <Skills />
      <Process />
      <Projects />
      <Certificates />
      <Gallery />
      <Contact />
    </>
  );
}
