import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/placeholder-page"

export const metadata: Metadata = {
  title: "What is Therapeutic Plasma Exchange? | Dr. Allen P. Green, MD",
  description:
    "Understanding Therapeutic Plasma Exchange (TPE) — how it works, its applications, and clinical evidence.",
}

export default function TpePage() {
  return (
    <PlaceholderPage
      label="Therapeutic Plasma Exchange"
      title="What is"
      titleAccent="TPE?"
      description="Understanding Therapeutic Plasma Exchange — the science, the process, and the clinical evidence."
    />
  )
}
