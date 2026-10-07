import { galleryItems } from "@/data/gallery";
import SectionHeader from "@/components/ui/SectionHeader";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { Reveal } from "@/components/motion/Reveal";

export default function Gallery() {
  // Hidden until there are photos (the navbar link follows the same rule — see lib/sections.ts)
  if (galleryItems.length === 0) return null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="section">
      <div className="container-page">
        <SectionHeader id="gallery" label="Gallery" title="Moments" emphasis="along the trail." />
        <Reveal>
          <GalleryGrid items={galleryItems} />
        </Reveal>
      </div>
    </section>
  );
}
