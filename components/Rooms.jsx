"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BedDouble, MessageCircle, ChevronDown } from "lucide-react";

const rooms = [
  {
    name: "Standard Courtyard Room",
    image: "/images/room-standard.jpg",
    features: [
      "Queen bed with fresh linen",
      "Air conditioning and ceiling fan",
      "Attached bathroom with hot water",
      "Smart TV and WiFi",
    ],
    price: "Ideal for short stays and solos",
    pricePerNight: 4200,
  },
  {
    name: "Balcony Room with Garden View",
    image: "/images/room-balcony.jpg",
    features: [
      "Private balcony with seating",
      "King bed with premium mattress",
      "Work desk and soft lighting",
      "Perfect for couples",
    ],
    price: "Popular choice for 2 guests",
    pricePerNight: 5800,
  },
  {
    name: "Family Suite with Living Area",
    image: "/images/room-family.jpg",
    features: [
      "Separate living and sleeping area",
      "Sleeps up to 4 guests",
      "Mini fridge and extra storage",
      "Comfortable for longer stays",
    ],
    price: "Recommended for families and groups",
    pricePerNight: 7500,
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-3xl sm:text-4xl font-semibold text-[#263326]"
        >
          Rooms at Palmstone Anjuna Retreat
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-3 text-center text-sm sm:text-base text-[#5a675c]"
        >
          Designed to match the way you like to unwind
        </motion.p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {rooms.map((room, index) => (
            <RoomCard room={room} index={index} key={room.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomCard({ room, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#e0e6dd] shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:scale-[1.015] cursor-pointer md:hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:hover:scale-[1.015]"

    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 px-6 py-5 flex-1">
        <h3 className="text-lg sm:text-xl font-semibold text-[#28352b]">
          {room.name}
        </h3>

        {/* Highlight / mini tagline */}
        <p className="text-sm font-semibold text-[#35523a]">
        {room.price}
        </p>

        <p className="text-sm text-[#4b574d]">
        From ₹{room.pricePerNight.toLocaleString("en-IN")} / night
        </p>


        {/* CTA FIRST — before feature list */}
        <div className="mt-2 flex gap-2 flex-wrap">
          <a
            href="#contact"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#3b5a3f] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_3px_10px_rgba(0,0,0,0.18)] transition hover:bg-[#304632]"
          >
            <BedDouble size={15} />
            Book Room
          </a>

          <button
            onClick={() => {
              const phone = "919999999999";
              const encoded = encodeURIComponent(
                `Hi, I'm interested in the ${room.name}. Can you share availability?`
              );
              const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
              const link = mobile
                ? `https://wa.me/${phone}?text=${encoded}`
                : `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
              window.open(link, "_blank");
            }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#c2cec4] bg-white/40 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#2e3e33] backdrop-blur transition hover:bg-[#e7ece6]"
          >
            <MessageCircle size={15} />
            WhatsApp
          </button>
        </div>

        {/* Expandable feature list BELOW CTAs */}
        <div className="pt-2">
          <ul className="space-y-1.5 text-sm text-[#5b675e]">
            {(open ? room.features : room.features.slice(0, 2)).map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3b5a3f]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {room.features.length > 2 && (
            <button
              onClick={() => setOpen(!open)}
              className="mt-1 text-xs font-medium text-[#3b5a3f] flex items-center gap-1 hover:underline"
            >
              {open ? "Show less" : "More details"}
              <ChevronDown size={13} className={`${open && "rotate-180"} transition`} />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
