"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const phone = "919999999999";
  const message = encodeURIComponent(
    "Hi, I'd like to check availability for my travel dates."
  );
  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      className="fixed bottom-5 right-5 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.35)] active:scale-95 transition"
    >
      <MessageCircle size={28} />
    </a>
  );
}
