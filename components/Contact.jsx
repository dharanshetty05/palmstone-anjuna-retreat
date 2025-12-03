"use client";

import { motion } from "framer-motion";
import { Phone, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1a231d] text-slate-50">
      <div className="mx-auto max-w-6xl px-6">

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-semibold"
        >
          Plan Your Stay
        </motion.h2>

        {/* reassurance line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-center text-sm sm:text-base text-slate-300"
        >
          Reach out for availability, pricing and quick queries — we respond fast
        </motion.p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            href="https://wa.me/919999999999"
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-emerald-600 transition"
          >
            <MessageCircle size={18} /> WhatsApp Enquiry
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22 }}
            href="tel:+919999999999"
            className="flex items-center gap-2 rounded-full bg-[#202d26] border border-slate-600 px-7 py-3 text-sm font-semibold hover:bg-[#2b3a32] transition"
          >
            <Phone size={18} /> Call Now
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.29 }}
            href="https://instagram.com"
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-slate-600 px-7 py-3 text-sm font-semibold hover:bg-[#2b3a32] transition"
          >
            <Instagram size={18} /> Instagram Page
          </motion.a>
        </div>

        {/* closing line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 text-center text-xs text-slate-400"
        >
          Response time usually under 10 minutes
        </motion.p>
      </div>
    </section>
  );
}
