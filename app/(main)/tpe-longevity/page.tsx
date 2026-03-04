import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/placeholder-page"

export const metadata: Metadata = {
  title: "TPE for Longevity & Biological Age | Dr. Allen P. Green, MD",
  description:
    "Reversing biological age with Therapeutic Plasma Exchange — the science of longevity through apheresis.",
}

export default function TpeLongevityPage() {
  return (
    <PlaceholderPage
      label="Applications"
      title="Longevity & Biological"
      titleAccent="Age"
      description="Reversing biological age with Therapeutic Plasma Exchange — the science of longevity through apheresis."
    />
  )
}
