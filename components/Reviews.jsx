"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

const reviews = [
  { name: "Aditi", text: "Loved the peaceful atmosphere and balcony view.", stay: "August" },
  { name: "Rahul", text: "Perfect for families. Rooms were clean and staff was helpful.", stay: "November" },
  { name: "Meera", text: "Workation friendly. Good WiFi and cozy room.", stay: "January" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#f6f8f3]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-semibold text-[#263326]"
        >
          Guest Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-center text-sm sm:text-base text-[#5a675c]"
        >
          Real reviews from guests who stayed with us
        </motion.p>

        {/* Reviews grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_26px_rgba(0,0,0,0.12)] transition cursor-default"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#e8eee7] flex items-center justify-center font-semibold text-[#2d3a30]">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-[#1c2a20]">{r.name}</p>
                  <div className="flex items-center gap-1 text-[#6c7b70] text-xs">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    Verified stay
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="mt-3 text-[15px] leading-relaxed text-[#2f3d33]">
                {r.text}
              </p>

              {/* Stay info */}
              <p className="mt-3 text-xs text-[#6b746d]">
                Stayed in {r.stay}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
