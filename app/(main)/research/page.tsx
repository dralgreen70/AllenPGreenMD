import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/placeholder-page"

export const metadata: Metadata = {
  title: "Research & Publications | Dr. Allen P. Green, MD",
  description:
    "Published research, clinical studies, and evidence supporting therapeutic plasma exchange and apheresis.",
}

export default function ResearchPage() {
  return (
    <PlaceholderPage
      label="Research"
      title="Research &"
      titleAccent="Publications"
      description="Published research, clinical studies, and evidence supporting therapeutic plasma exchange and apheresis."
    />
  )
}
