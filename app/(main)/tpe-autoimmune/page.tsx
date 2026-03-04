import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/placeholder-page"

export const metadata: Metadata = {
  title: "TPE for Autoimmune Conditions | Dr. Allen P. Green, MD",
  description:
    "Therapeutic Plasma Exchange for autoimmune conditions — removing pathogenic antibodies to restore immune balance.",
}

export default function TpeAutoimmunePage() {
  return (
    <PlaceholderPage
      label="Applications"
      title="Autoimmune"
      titleAccent="Conditions"
      description="Therapeutic Plasma Exchange for autoimmune conditions — removing pathogenic antibodies to restore immune balance."
    />
  )
}
