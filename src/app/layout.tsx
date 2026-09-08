// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

const siteUrl = "https://moses-portfolio-woad.vercel.app";
const title = "Moses Marlon Pereira – Full-Stack & AI Developer";
const description =
  "Computer Science graduate (VIT) building full-stack, AI, and cloud projects — from quantum ML to cross-device apps. Explore my projects, skills, and resume.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Moses Marlon Pereira",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

// Runs before paint so the correct theme applies immediately (no flash).
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
