"use client";

import { motion } from "framer-motion";
import { MapPin, Umbrella, Landmark, Trees, Utensils, Music } from "lucide-react";

const places = [
  { icon: Umbrella, name: "Anjuna Beach", time: "5 mins" },
  { icon: Music, name: "Hilltop Night Market", time: "8 mins" },
  { icon: Utensils, name: "Purple Martini (Sunset Café)", time: "10 mins" },
  { icon: Landmark, name: "Chapora Fort", time: "12 mins" },
  { icon: Trees, name: "Vagator Beach", time: "13 mins" },
  { icon: Music, name: "Tito's Street (Baga)", time: "18 mins" },
];

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl sm:text-4xl font-semibold text-[#263326]"
        >
          Location & Nearby Attractions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-3 text-center text-sm sm:text-base text-[#5a675c]"
        >
          Surrounded by beaches, cafés and iconic Goa experiences
        </motion.p>

        {/* Map & Places side by side */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Map smaller, left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-[0_8px_26px_rgba(0,0,0,0.12)] h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60330.91753325137!2d73.71257708940344!3d15.574588973595597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe99b9b35bd0d%3A0x91c5b6ce3c2dfb4e!2sAnjuna%2C%20Goa!5e0!3m2!1sen!2sin!4v1706350000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          {/* Nearby attractions on the right */}
          <div className="grid grid-cols-2 gap-6">
            {places.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-[#f6f8f3] rounded-2xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                <p.icon className="size-7 text-[#40694b]" />
                <p className="mt-3 font-medium text-[#263326]">{p.name}</p>
                <span className="text-sm text-[#5e6a60] mt-1">{p.time} away</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2d5a3b] text-white text-sm font-medium hover:bg-[#244a30] transition"
          >
            <MapPin className="size-4" />
            Get directions & enquire
          </a>
        </motion.div>
      </div>
    </section>
  );
}
