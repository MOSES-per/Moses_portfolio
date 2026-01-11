// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Moses Marlon Pereira – Portfolio",
  description: "Projects, skills, and contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)] text-[var(--fg)] antialiased">
        {children}
      </body>
    </html>
  );
}
