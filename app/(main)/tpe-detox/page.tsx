import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/placeholder-page"

export const metadata: Metadata = {
  title: "TPE for Detoxification | Dr. Allen P. Green, MD",
  description:
    "Detoxification and environmental toxin removal through Therapeutic Plasma Exchange.",
}

export default function TpeDetoxPage() {
  return (
    <PlaceholderPage
      label="Applications"
      title="Detoxification & Environmental"
      titleAccent="Toxins"
      description="Detoxification and environmental toxin removal through Therapeutic Plasma Exchange."
    />
  )
}
