"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const name = (form.elements[0] as HTMLInputElement).value;
    const fromEmail = (form.elements[1] as HTMLInputElement).value;
    const message = (form.elements[2] as HTMLTextAreaElement).value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email: fromEmail, message }),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mt-8 max-w-md rounded-xl border bg-card p-6 shadow-soft"
    >
      <label className="block text-sm">Name</label>
      <input className="mt-1 w-full rounded-md border p-2" required />

      <label className="mt-4 block text-sm">Email</label>
      <input type="email" className="mt-1 w-full rounded-md border p-2" required />

      <label className="mt-4 block text-sm">Message</label>
      <textarea className="mt-1 w-full rounded-md border p-2" rows={4} required />

      <button
        className="mt-6 w-full rounded-lg btn-primary"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-center text-green-600"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-red-600"
          >
            ❌ Something went wrong. Please try again later.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
