// src/components/ContactForm.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactForm({ email }: { email: string }) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto mt-8 max-w-md rounded-xl border bg-card p-6 shadow-soft"
      style={{ background: "var(--card)" }}
    >
      <label className="block text-sm">Name</label>
      <input className="mt-1 w-full rounded-md border p-2" required />

      <label className="mt-4 block text-sm">Email</label>
      <input type="email" className="mt-1 w-full rounded-md border p-2" required />

      <label className="mt-4 block text-sm">Message</label>
      <textarea className="mt-1 w-full rounded-md border p-2" rows={4} required />

      <button className="mt-6 w-full rounded-lg btn-primary" type="submit">Send</button>
    </motion.form>
  );
}
