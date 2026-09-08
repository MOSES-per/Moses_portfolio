"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
      tech: ["Python", "Streamlit", "NLP", "SQLite"],
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
      tech: ["Python", "PennyLane", "Qiskit"],
      path: "/projects/quantum-ml",
      code: "https://github.com/MOSES-per",
    },
    {
      title: "eSociety",
      summary: "Smart digital platform for residential society management.",
      tech: ["Flutter", "Dart", "Java", "Spring Boot", "MongoDB"],
      path: "/projects/esociety",
      code: "https://github.com/MOSES-per",
    },
    {
      title: "Furniture AR/VR",
      summary: "Visualizing furniture in real environments using augmented reality.",
      tech: ["Unity", "Vuforia", "AR/VR"],
      path: "/projects/furniture-arvr",
      code: "https://github.com/MOSES-per",
    },
    {
      title: "Relink",
      summary: "Local-first cross-device app pairing Windows and iPhone over WebSocket with QR-code pairing.",
      tech: ["Rust", "React", "TypeScript", "Tauri"],
      path: "/projects/relink",
      code: "https://github.com/MOSES-per",
    },
    {
      title: "Indian Supreme Court Case Outcome Prediction",
      summary: "NLP models predicting Indian Supreme Court case outcomes from case-facts text.",
      tech: ["Python", "NLP", "TF-IDF"],
      path: "/projects/nlp-court-prediction",
      code: "https://github.com/MOSES-per",
    },
    {
      title: "F.I.N. (Friend In Need)",
      summary: "Lean-startup project solving printing, resale, transport & housing pain points for VIT students.",
      tech: ["Lean Startup", "Market Research"],
      path: "/projects/fin",
    },
  ];

  const skills = [
    "SQL", "Java", "HTML", "CSS", "Excel",
    "Python", "C++", "JavaScript", "TypeScript",
    "Rust", "Streamlit", "React", "Flutter",
    "Tauri", "Next.js", "Angular", "Docker",
    "AWS", "Azure", "MongoDB", "Selenium",
    "Detectron2", "OCR",
  ];

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 sm:px-6 pt-24 pb-16">

        {/* HERO */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-6 h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden border border-white/20 shadow-lg"
          >
            <Image
              src="/profile.jpeg"
              alt="Moses Marlon Pereira"
              width={160}
              height={160}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-200"
          >
            👋 Hi — welcome to my corner of the web
          </motion.p>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>⚡ 8+ Projects</span>
            <span>🧠 AI + Full Stack</span>
            <span>🎨 Frontend Development</span>
            <span>☁️ Cloud Certified</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight text-gray-100"
          >
            I build delightful & fast web experiences
            <br className="hidden sm:block" />
            <span className="hero-name-accent block mt-1">
              Moses Marlon Pereira
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Computer Science graduate (M.Tech Integrated, VIT) with hands-on
            experience across machine learning, quantum computing, and
            full-stack development — now building toward cloud &amp; platform
            engineering.
          </motion.p>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-100">
            Selected Projects
          </h2>

          <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                onClick={() => router.push(p.path)}
                className="cursor-pointer rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow-md hover:shadow-lg transition"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">
                    {p.summary}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-indigo-400/20 bg-indigo-500/10 text-indigo-300 px-3 py-1 text-xs font-medium"
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
                      className="rounded-md bg-indigo-600 px-4 py-3 text-sm text-white hover:bg-indigo-500 transition"
                    >
                      View Case Study
                    </a>

                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-white/20 px-4 py-3 text-sm text-gray-200 hover:bg-white/5 transition"
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

        {/* SKILLS */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-100">
            Skills
          </h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((s) => (
              <div
                key={s}
                className="rounded-lg border border-white/10 bg-white/5 py-3 text-center text-sm sm:text-base text-gray-200"
              >
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-100">
            Experience
          </h2>

          <div className="mt-8 max-w-3xl mx-auto space-y-6 text-gray-300">
            <Experience title="Virtusa — Intern Technology">
              Developed and tested RESTful APIs with Java and Spring Boot,
              built Flutter frontend features, and integrated them with
              backend services.
            </Experience>

            <Experience title="Virtusa Hackathon">
              Built a traffic management solution focusing on real-time data,
              optimization, and deployment constraints.
            </Experience>

            <Experience title="Microsoft E-Train — Cloud Practitioner">
              Designed automated workflows using Power Automate and Azure
              Logic Apps, gaining hands-on exposure to Azure cloud
              fundamentals and architecture best practices.
            </Experience>

            <Experience title="DigitsSquad — Senior Core Member">
              Led technical initiatives, mentored juniors, and contributed
              to production-grade web projects.
            </Experience>

            <Experience title="Healthclub Platform">
              Worked on backend logic, feature integration, and system improvements.
            </Experience>
          </div>
        </section>
        {/* EDUCATION */}
<section id="education" className="py-20">
  <h2 className="text-3xl font-bold text-center text-gray-100">
    Education
  </h2>

  <div className="mt-10 max-w-3xl mx-auto grid gap-6">
    {/* College */}
    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5">
      <h3 className="text-lg font-semibold text-gray-100">
        Integrated M.Tech in Computer Science
      </h3>
      <p className="mt-1 text-sm text-gray-300">
        Vellore Institute of Technology (VIT)
      </p>
      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-400">
        <span>📅 2021 – 2026</span>
        <span>🎓 CGPA: 8.50</span>
      </div>
    </div>

    {/* 12th */}
    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5">
      <h3 className="text-lg font-semibold text-gray-100">
        Class XII (Higher Secondary)
      </h3>
      <p className="mt-1 text-sm text-gray-300">
        Board: CBSE
      </p>
      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-400">
        <span>📅 Year:2021</span>
        <span>📊 Percentage:89%</span>
      </div>
    </div>

    {/* 10th */}
    <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5">
      <h3 className="text-lg font-semibold text-gray-100">
        Class X (Secondary School)
      </h3>
      <p className="mt-1 text-sm text-gray-300">
        Board: ICSE
      </p>
      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-400">
        <span>📅 Year: 2019</span>
        <span>📊 Percentage: 89%</span>
      </div>
    </div>
  </div>
</section>

        {/* CERTIFICATIONS */}
        <section id="certificates" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-100">
            Certifications
          </h2>

          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {[
              ["Microsoft Azure AI-900", "Microsoft", "2024"],
              ["AWS Partner: Sales Accreditation", "AWS", "2024"],
              ["AWS Partner: Cloud Economics", "AWS", "2024"],
              ["React.js Developer Assessment", "Learntube", "2025"],
              ["AWS Certified Solutions Architect – Associate", "AWS", "In Progress"],
            ].map(([title, org, year]) => (
              <div
                key={title}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-5 py-4"
              >
                <div>
                  <p className="font-semibold text-gray-100">{title}</p>
                  <p className="text-sm text-gray-400">{org}</p>
                </div>
                <span className="text-sm text-gray-400">{year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-100">
            Contact
          </h2>
          <p className="mt-2 text-center">
            <a
              href={gmailComposeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              {email}
            </a>
          </p>
          <p className="mt-1 text-center text-sm text-gray-400">
            +91 77965 33054
          </p>
          <ContactForm email={email} />
        </section>

        <footer className="py-8 text-center text-sm text-gray-400">
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
      <h3 className="font-semibold text-lg text-gray-100">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
