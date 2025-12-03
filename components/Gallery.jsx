"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const gallery = [
  { label: "Balcony seating", src: "/images/gallery-balcony.jpg" },
  { label: "Property outside", src: "/images/gallery-outside.jpg" },
  { label: "Pool view", src: "/images/gallery-pool.jpg" },
  { label: "Bedroom", src: "/images/gallery-bed.jpg" },
  { label: "Restroom", src: "/images/gallery-bathroom.jpg" },
  { label: "Bathroom", src: "/images/gallery-lounge.jpg" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-[#f6f8f3]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-semibold text-[#263326]"
        >
          Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-center text-sm sm:text-base text-[#5a675c]"
        >
          A glimpse of the spaces guests love the most
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
          {gallery.map((g, index) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              onClick={() => setSelected(g.src)}
              className="relative rounded-2xl overflow-hidden cursor-pointer select-none bg-[#e5ebe2] h-44 sm:h-48 lg:h-56 transition md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] md:hover:scale-[1.03]"
            >
              <img
                src={g.src}
                alt={g.label}
                className="absolute inset-0 w-full h-full object-cover transition duration-700"
              />
              <span className="absolute bottom-3 left-3 text-xs font-medium bg-black/55 backdrop-blur-sm text-white rounded-full px-3 py-1">
                {g.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <img
            src={selected}
            alt={selected}
            className="rounded-2xl max-h-[88vh] max-w-[92vw] object-contain"
          />
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white p-2 bg-white/15 hover:bg-white/25 rounded-full transition"
          >
            <X className="size-6" />
          </button>
        </div>
      )}
    </section>
  );
}
