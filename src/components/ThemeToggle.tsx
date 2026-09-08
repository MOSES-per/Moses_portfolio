"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    const t = setTimeout(() => setPulse(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const toggle = () => {
    setPulse(false);
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <motion.button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      animate={
        pulse
          ? {
              boxShadow: [
                "0 0 0 0 rgba(224,101,44,0.55)",
                "0 0 0 9px rgba(224,101,44,0)",
                "0 0 0 0 rgba(224,101,44,0)",
              ],
            }
          : { boxShadow: "0 0 0 0 rgba(224,101,44,0)" }
      }
      transition={pulse ? { duration: 1.5, repeat: 2, ease: "easeOut" } : { duration: 0.2 }}
      className={
        "flex items-center gap-2 rounded-full border-2 border-[var(--toggle-accent)]/50 bg-[var(--toggle-accent)]/10 dark:bg-[var(--toggle-accent)]/20 px-3 py-1.5 text-sm font-semibold text-[var(--toggle-accent)] hover:bg-[var(--toggle-accent)]/20 dark:hover:bg-[var(--toggle-accent)]/30 transition " +
        className
      }
    >
      <span className="text-base leading-none">{theme === "dark" ? "🌙" : "☀️"}</span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </motion.button>
  );
}
