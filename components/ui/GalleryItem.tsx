"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { GalleryItem as GalleryItemType } from "@/types";

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
  onClick: () => void;
}

export default function GalleryItemCard({ item, index, onClick }: GalleryItemProps) {
  return (
    <div
      className="masonry-item cursor-pointer group relative overflow-hidden rounded-2xl border border-neutral-800"
      onClick={onClick}
    >
      {/* Image placeholder with varying heights for masonry effect */}
      <div
        className={`w-full bg-neutral-900 flex items-center justify-center ${
          index % 3 === 0 ? "h-64" : index % 3 === 1 ? "h-48" : "h-56"
        }`}
      >
        <span className="text-5xl opacity-20 grayscale">📸</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
        <p className="text-white text-sm font-medium mb-2">{item.caption}</p>
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {item.date}
          </span>
          {item.location && (
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {item.location}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
