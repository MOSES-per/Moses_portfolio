"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const sections = ["projects", "skills", "about", "contact"];
  const [active, setActive] = useState<string>("projects");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offsets = sections.map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      if (nearest && nearest.id) setActive(nearest.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed left-0 right-0 z-50 ${scrolled ? "site-nav scrolled" : "site-nav"}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full brand-badge p-1">
            <div className="h-9 w-9 rounded-full bg-white/90 flex items-center justify-center font-bold text-[var(--brand)]">MM</div>
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: "var(--text-on-dark)" }}>Moses Marlon Pereira</div>
            <div className="text-xs text-muted">Full-stack • AI • Cloud</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          {sections.map(s => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`px-3 py-2 rounded-md text-sm transition ${active === s ? "bg-[var(--brand)] text-white" : "text-[var(--text-on-dark)] hover:bg-white/6"}`}
            >
              {s[0].toUpperCase() + s.slice(1)}
            </button>
          ))}
          <a className="ml-2 rounded-md border px-3 py-2 text-sm text-[var(--text-on-dark)] hover:bg-white/6" href="/Resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="rounded-md border p-2 text-[var(--text-on-dark)]" aria-label="Toggle menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/** mobile menu */}
      {open && (
        <div className="md:hidden mx-auto max-w-6xl px-6 py-3">
          <div className="flex flex-col gap-2">
            {sections.map(s => (
              <button key={s} onClick={() => scrollTo(s)} className="text-left px-3 py-2 rounded-md text-sm text-[var(--text-on-dark)] hover:bg-white/6">
                {s[0].toUpperCase() + s.slice(1)}
              </button>
            ))}
            <a href="/Resume.pdf" className="px-3 py-2 rounded-md text-sm border text-[var(--text-on-dark)]">Résumé</a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
