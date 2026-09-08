"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition"
    >
      <span aria-hidden>←</span> Back
    </button>
  );
}
