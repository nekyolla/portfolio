import { GalleryItem } from "@/types";

// The Gallery section (and its navbar link) only appears once this list has items.
// Put photos in /public/images/gallery/ and add entries like:
//
// {
//   id: "kkn-2025",
//   image: "/images/gallery/kkn-2025.jpg",
//   caption: "Community service program (KKN)",
//   alt: "Students posing with villagers in front of the village hall",
//   date: "July 2025",
//   location: "Grobogan, Central Java",
// },
//
// Tip: strip location (GPS) metadata from phone photos before committing them.
export const galleryItems: GalleryItem[] = [];
