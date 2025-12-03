"use client";

import { Instagram, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141b17] text-slate-300 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 text-center">

        {/* Brand */}
        <h3 className="text-xl font-semibold text-slate-100">
          Palmstone Anjuna Retreat
        </h3>

        {/* Location */}
        <p className="text-sm text-slate-400">
          Anjuna, North Goa · India
        </p>

        {/* Social / Contact icons */}
        <div className="flex items-center gap-6 mt-2">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="hover:text-slate-100 transition"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="tel:+919999999999"
            className="hover:text-slate-100 transition"
          >
            <Phone size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-slate-100 transition"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-700/30 mt-8" />

        {/* Copyright */}
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Palmstone Anjuna Retreat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
