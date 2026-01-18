"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const sections = ["projects", "skills", "about", "contact"];
  const [active, setActive] = useState("projects");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });

      const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      if (nearest?.id) setActive(nearest.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // lock background scroll on mobile menu open
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur ${
          scrolled ? "bg-black/70 border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center font-bold">
              MM
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">
                Moses Marlon Pereira
              </p>
              <p className="text-xs text-muted">Full-stack • AI • Cloud</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`px-3 py-2 rounded-md text-sm transition ${
                  active === s
                    ? "bg-[var(--brand)] text-white"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                {s[0].toUpperCase() + s.slice(1)}
              </button>
            ))}
            <a
              href="/Resume.pdf"
              target="_blank"
              className="ml-2 rounded-md border border-white/20 px-3 py-2 text-sm text-white hover:bg-white/10"
            >
              Résumé
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-md border border-white/20 p-2 text-white"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-0 right-0 z-50 mx-4 rounded-xl border border-white/10 bg-black/90 p-4"
            >
              <div className="flex flex-col gap-2">
                {sections.map((s) => (
                  <button
                    key={s}
                    onClick={() => scrollTo(s)}
                    className="text-left px-3 py-2 rounded-md text-white hover:bg-white/10"
                  >
                    {s[0].toUpperCase() + s.slice(1)}
                  </button>
                ))}
                <a
                  href="/Resume.pdf"
                  className="mt-2 rounded-md border border-white/20 px-3 py-2 text-white text-center"
                >
                  Résumé
                </a>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-2 text-sm text-white/60"
                >
                  Close
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
