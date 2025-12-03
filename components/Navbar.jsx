"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Rooms", id: "rooms" },
  { label: "Gallery", id: "gallery" },
  { label: "Location", id: "location" },
  { label: "Reviews", id: "reviews" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero"); // default on load

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 70;
      const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const positions = links.map((l) => {
        const sec = document.getElementById(l.id);
        if (!sec) return null;
        return {
          id: l.id,
          top: sec.getBoundingClientRect().top,
        };
      });

      const visible = positions
        .filter((p) => p && p.top <= window.innerHeight * 0.33)
        .sort((a, b) => b.top - a.top);

      if (visible.length > 0) {
        setActive(visible[0].id);
      } else {
        setActive("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-xl shadow-sm"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-[18px] font-semibold text-[#263326]"
          >
            Palmstone Anjuna Retreat
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 text-[15px] font-medium">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className={`
                  transition relative
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded
                  ${active === l.id
                    ? "text-[#1b3023] after:w-full after:bg-[#1b3023]"
                    : "text-[#2b3b33] after:w-0 after:bg-[#1b3023] hover:after:w-full hover:text-[#1b3023]"
                  }
                `}
              >
                {l.label}
              </button>
            ))}

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="ml-2 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md"
            >
              WhatsApp Enquiry
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#263326]"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Bottom Sheet Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-[0_-8px_40px_rgba(0,0,0,0.25)] z-50 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-[17px] text-[#263326]">
                Menu
              </span>
              <button onClick={() => setOpen(false)}>
                <X className="text-[#28362d]" />
              </button>
            </div>

            <div className="flex flex-col gap-5 pb-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    scrollToSection(l.id);
                    setOpen(false);
                  }}
                  className={`
                    text-[16px] font-medium tracking-tight text-left
                    ${active === l.id ? "text-[#1b3023]" : "text-[#2b3b33]"}
                  `}
                >
                  {l.label}
                </button>
              ))}

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="mt-2 rounded-full bg-emerald-600 text-white text-center py-3 font-semibold text-[15px]"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
