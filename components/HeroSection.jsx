"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

export default function HeroSection() {

    const encodedMsg = encodeURIComponent("Hi, I'm looking to book a stay at Palmstone Anjuna Retreat. Can you share availability?");

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      
      {/* Background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full bg-cover bg-[center_50%]"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          filter: "contrast(1.03) saturate(1.05)",
        }}
      />

        {/* Cinematic layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Soft focus glow behind text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[65%] h-[55%] rounded-full bg-black/30 blur-3xl" />
        </div>

      {/* Text block */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-white font-semibold tracking-tight text-[34px] sm:text-[46px] lg:text-[56px] drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] leading-[1.15]">
            Palmstone Anjuna Retreat
          </h1>

          <p className="mt-3 text-white/90 text-lg sm:text-xl drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]">
            A peaceful stay surrounded by nature
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
  <motion.a
    href="#rooms"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.25, duration: 1, ease: "easeOut" }}
    className="rounded-full bg-white/95 backdrop-blur px-8 py-3.5 text-[15px] font-medium text-slate-900 shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:bg-white transition"
  >
    View rooms
  </motion.a>

  <motion.button
  onClick={() => {
    const phone = "919999999999";
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const url = isMobile
  ? `https://wa.me/${phone}?text=${encodedMsg}`
  : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;

    window.open(url, "_blank");
  }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.32, duration: 1, ease: "easeOut" }}
  className="rounded-full border border-white/40 bg-white/5 backdrop-blur px-8 py-3.5 text-[15px] font-medium text-white shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:bg-white/15 transition"
>
  WhatsApp enquiry
</motion.button>

</div>

        </motion.div>
      </div>

      {/* Scroll icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-7 w-full flex justify-center"
      >
        <ArrowDownCircle className="text-white w-7 h-7 animate-pulse" />
      </motion.div>
    </section>
  );
}
