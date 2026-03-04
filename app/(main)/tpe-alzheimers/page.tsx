import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/placeholder-page"

export const metadata: Metadata = {
  title: "TPE for Alzheimer's & Cognitive Decline | Dr. Allen P. Green, MD",
  description:
    "How Therapeutic Plasma Exchange addresses Alzheimer's disease and cognitive decline through targeted blood purification.",
}

export default function TpeAlzheimersPage() {
  return (
    <PlaceholderPage
      label="Applications"
      title="Alzheimer's & Cognitive"
      titleAccent="Decline"
      description="How Therapeutic Plasma Exchange addresses Alzheimer's disease and cognitive decline through targeted blood purification."
    />
  )
}
