import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1763771420303-0f11ccf613d1?auto=format&fit=crop&w=800&q=80",
    alt: "Bundled TMT steel rebar",
    caption: "TMT Rebar Bundles",
  },
  {
    src: "https://images.unsplash.com/photo-1709244596178-4c2656d02d1e?auto=format&fit=crop&w=800&q=80",
    alt: "Stacked steel pipes",
    caption: "Pipes & Tubes",
  },
  {
    src: "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?auto=format&fit=crop&w=800&q=80",
    alt: "Structural steel frame at a construction site",
    caption: "Structural Steel",
  },
  {
    src: "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=800&q=80",
    alt: "Steel being welded and fabricated",
    caption: "Fabrication & Cutting",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Gallery</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-extrabold uppercase leading-tight text-white mb-16"
        >
          Steel in <span className="text-zinc-500">Every Form.</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm uppercase tracking-wide">
                {img.caption}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
