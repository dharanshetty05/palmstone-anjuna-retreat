"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  BedSingle,
  Wifi,
  ParkingCircle,
  Heart,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: BedSingle,
    title: "Clean & cozy rooms",
    desc: "Warm interiors designed for deep rest",
  },
  {
    icon: Leaf,
    title: "Surrounded by nature",
    desc: "Wake up to greenery and fresh air",
  },
  {
    icon: Heart,
    title: "Perfect for couples & families",
    desc: "A relaxed stay with complete privacy",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi for all guests",
    desc: "Work, stream, and stay connected",
  },
  {
    icon: ParkingCircle,
    title: "Secure parking available",
    desc: "Drive in without any worries",
  },
  {
    icon: Clock,
    title: "Early check-in on request",
    desc: "Flexibility designed around you",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative w-full py-24 max-sm:py-16 bg-[#f6f8f3] overflow-hidden">
      {/* subtle ambient pattern background */}
      <div className="absolute inset-0 opacity-[0.11] pointer-events-none bg-[url('/textures/leaf-pattern.png')] bg-cover bg-center" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-semibold text-[#283b2f]"
        >
          Why guests love staying here
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="mt-3 text-[#4e5d53] text-lg"
        >
          Comfort, peace and moments that feel memorable
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
              className="group bg-white rounded-2xl py-9 px-7 shadow [0_4px_18px_rgba(0,0,0,0.08)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_28px_rgba(0,0,0,0.14)] sm:py-8 sm:px-6 max-sm:py-6 max-sm:px-5 max-sm:rounded-xl"

            >
              <f.icon className="w-9 h-9 max-sm:w-7 max-sm:h-7 text-[#3b5a3f] mb-4 transition-all group-hover:scale-110" />
              <p className="text-[#2f3e34] font-semibold text-[18px] max-sm:text-[16px] mb-1">
                {f.title}
              </p>
              <p className="text-[#5b675e] text-[15px] max-sm:text-[14px] leading-relaxed max-sm:leading-snug">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
