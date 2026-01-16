// src/app/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/ContactForm";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const email = "mosespereiracr@gmail.com";
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  const projects = [
    {
      title: "InfluenceIQ",
      summary: "AI-powered influencer data intelligence and automation platform.",
      tech: ["Python", "Streamlit", "MongoDB"],
      path: "/projects/influenceiq",
      code: "https://github.com/MOSES-per/InfluenceIQ",
    },
    {
      title: "ANPR using Keypoints RCNN",
      summary: "High-accuracy automatic number plate recognition using deep learning.",
      tech: ["Python", "Detectron2", "OCR"],
      path: "/projects/anpr",
      code: "https://github.com/MOSES-per",
    },
    {
      title: "Quantum ML for Supply Chain",
      summary: "Quantum neural networks for backorder prediction and optimization.",
      tech: ["Pennylane", "Qiskit"],
      path: "/projects/quantum-ml",
      code: "https://github.com/MOSES-per",
    },
    {
      title: "eSociety",
      summary: "Smart digital platform for residential society management.",
      tech: ["Java", "Spring Boot", "SQL"],
      path: "/projects/esociety",
    },
    {
      title: "Furniture AR/VR",
      summary: "Visualizing furniture in real environments using augmented reality.",
      tech: ["Unity", "Vuforia", "AR/VR"],
      path: "/projects/furniture-arvr",
    },
  ];

  const skills = [
    "SQL", "Java", "HTML", "CSS", "Excel",
    "Python", "C++", "JavaScript", "Streamlit",
    "Angular", "Docker", "Azure", "MongoDB",
    "Selenium", "Detectron2", "OCR",
  ];

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 sm:px-6 pt-24 pb-16">

        {/* Hero */}
        <section className="text-center">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm"
          >
            👋 Hi — welcome to my corner of the web
          </motion.p>
        <div className="mt-6 flex justify-center gap-6 text-sm text-muted">
  <span>⚡ 5+ Projects</span>
  <span>🧠 AI + Full Stack</span>
  <span>☁️ Cloud Certified</span>
</div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            I build delightful & fast web experiences
            <br className="hidden sm:block" />
            <span className="hero-name-accent">Moses Marlon Pereira</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Full-stack developer with a strong AI focus. I build fast, reliable
            products with clean UX and measurable impact.
          </motion.p>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center">Selected Projects</h2>

          <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => router.push(p.path)}
                className="cursor-pointer rounded-xl border bg-card shadow hover:shadow-lg transition"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-muted leading-relaxed">{p.summary}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/90 text-gray-900 px-3 py-1 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className="mt-5 flex gap-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={p.path}
                      className="rounded-md bg-black px-4 py-3 text-sm text-white"
                    >
                      View Case Study
                    </a>

                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border px-4 py-3 text-sm"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold text-center">Skills</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((s) => (
              <div
                key={s}
                className="rounded-lg border py-3 text-center text-sm sm:text-base"
              >
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold text-center">Experience</h2>

          <div className="mt-8 max-w-3xl mx-auto space-y-6 text-muted">
            <Experience title="Virtusa Hackathon">
              Built a traffic management solution focusing on real-time data,
              optimization, and deployment constraints.
            </Experience>

            <Experience title="Microsoft E-Train — Cloud Practitioner">
              Hands-on exposure to Azure services, cloud fundamentals,
              and architecture best practices.
            </Experience>

            <Experience title="DigitsSquad — Senior Core Member">
              Led technical initiatives, mentored juniors, and contributed
              to multiple production-grade web projects.
            </Experience>

            <Experience title="Healthclub Platform">
              Worked on backend logic, feature integration, and system
              improvements for a fitness-focused application.
            </Experience>
          </div>
        </section>

        {/* Certifications */}
        <section id="certificates" className="py-20 bg-[var(--bg)]">
          <h2 className="text-3xl font-bold text-center">Certifications</h2>

          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {[
              ["Microsoft Azure AI-900", "Microsoft", "2024"],
              ["AWS Partner: Sales Accreditation", "AWS", "2024"],
              ["AWS Partner: Cloud Economics", "AWS", "2024"],
              ["React.js Developer Assessment", "Learntube", "2023"],
            ].map(([title, org, year]) => (
              <div
                key={title}
                className="flex items-center justify-between rounded-lg border bg-card px-5 py-4"
              >
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-muted">{org}</p>
                </div>
                <span className="text-sm text-muted">{year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold text-center">Contact</h2>
          <p className="mt-2 text-center">
            <a href={gmailComposeLink} target="_blank" rel="noopener noreferrer">
              {email}
            </a>
          </p>
          <ContactForm email={email} />
        </section>

        <footer className="py-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} Moses Marlon Pereira
        </footer>
      </main>

      <BackToTop />
    </>
  );
}

function Experience({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
