import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Organization from "@/components/sections/Organization";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Organization />
      <Skills />
      <Projects />
      <Certificates />
      <Gallery />
    </>
  );
}
