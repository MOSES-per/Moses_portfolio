// src/app/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const email = "mosespereiracr@gmail.com";
  const links = {
    github: "#",
    linkedin: "https://www.linkedin.com/in/moses-m-pereira",
    email: `mailto:${email}`,
  };

  const projects = [
    {
      title: "InstaScrapper",
      summary:
        "Automated Instagram data extraction tool. Reduced manual effort by 90%; processed 100+ profiles in under 2 minutes.",
      tech: ["Python", "Streamlit", "Apify", "MongoDB"],
      live: "#",
      code: "#",
    },
    {
      title: "ANPR using Keypoints RCNN",
      summary:
        "Robust number plate recognition with Detectron2 + OCR. Improved recognition accuracy by 35%.",
      tech: ["Python", "Detectron2", "Keypoints RCNN", "OCR"],
      live: "#",
      code: "#",
    },
    {
      title: "PizzaPortal",
      summary:
        "Responsive pizza ordering SPA with interactive menu, cart, discounts, and live filters.",
      tech: ["Angular", "JavaScript", "HTML", "CSS"],
      live: "#",
      code: "#",
    },
  ];

  const skills = [
    "SQL", "Java", "HTML", "CSS", "Excel",
    "Python", "C++", "JavaScript", "Streamlit", "Apify",
    "Angular", "Docker", "Azure", "MongoDB",
    "Selenium", "Detectron2", "OCR",
  ];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
       {/* Hero */}
<section className="text-center">
  <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="inline-block rounded-full border border-white/10 bg-white/6 px-4 py-1 text-sm text-[var(--text-on-dark)]">
    👋 Hi — welcome to my corner of the web
  </motion.p>

  <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.6 }} className="mt-6 text-5xl font-extrabold hero-heading">
    I build delightful & fast web experiences — <br className="hidden sm:block" />
    <span className="hero-name-accent">Moses Marlon Pereira</span>
  </motion.h1>

  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-lg text-muted max-w-2xl mx-auto">
    Full-stack developer + AI tinkerer. I turn practical ideas into polished, maintainable products with good UX and strong performance.
  </motion.p>

  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="mt-8 flex justify-center gap-4">
    <a href="#projects" className="btn-primary inline-flex items-center justify-center">🌟 See My Work</a>
    <a href="#contact" className="btn-secondary inline-flex items-center justify-center">📬 Get in Touch</a>
  </motion.div>

  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-6 text-sm text-muted">
    <a href={links.github} className="hover:underline">GitHub</a> ·{" "}
    <a href={links.linkedin} className="hover:underline">LinkedIn</a> ·{" "}
    <a href={links.email} className="hover:underline">Email</a>
  </motion.p>
</section>


        {/* Projects */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12, duration: 0.6 }} className="rounded-xl border border-gray-200 bg-card shadow hover:shadow-lg transition overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{t}</span>)}
                  </div>
                  <div className="mt-4 text-sm">
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-brand hover:underline">Live</a>{" "}
                    ·{" "}
                    <a href={p.code} target="_blank" rel="noreferrer" className="text-brand hover:underline">Code</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 bg-[var(--bg)]">
          <h2 className="text-3xl font-bold text-center">Skills</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }} className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((s) => (
              <motion.div key={s} variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} className="rounded-lg border bg-card py-3 text-center shadow-sm hover:shadow-md transition">
                {s}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mt-6 max-w-3xl mx-auto text-muted text-center space-y-4">
            <p>Integrated Master’s in Computer Science at VIT (CGPA 8.69, graduating Aug 2026). Certified in Microsoft AI-900; currently completing Google AI Essentials.</p>
            <ul className="list-disc text-left space-y-2 mx-auto max-w-lg pl-6">
              <li>Cloud Practitioner – Microsoft E-Train (June–July 2024)</li>
              <li>Virtusa Hackathon – traffic management app (July 2024)</li>
              <li>Senior Core Member – DigitsSquad (2023–2024)</li>
            </ul>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-[var(--bg)]">
          <h2 className="text-3xl font-bold text-center">Contact</h2>
          <p className="mt-2 text-center text-muted">Prefer email? <a href={`mailto:${email}`} className="text-brand underline">{email}</a></p>

          <ContactForm email={email} />
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} Moses Marlon Pereira — Built with Next.js & TailwindCSS
        </footer>
      </main>

      <BackToTop />
    </>
  );
}
