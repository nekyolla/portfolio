"use client";

import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryItemCard from "@/components/ui/GalleryItem";
import { Lightbox } from "@/components/ui/Modal";
import { useState } from "react";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const lightboxImages = galleryItems.map((item) => ({
    src: item.image,
    caption: item.caption,
  }));

  return (
    <section id="gallery" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Gallery" />

        <div className="masonry-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GalleryItemCard
                item={item}
                index={index}
                onClick={() => setLightboxIndex(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex >= 0 ? lightboxIndex : 0}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryItems.length)}
      />
    </section>
  );
}
