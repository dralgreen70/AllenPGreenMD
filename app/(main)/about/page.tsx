import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/placeholder-page"

export const metadata: Metadata = {
  title: "About Dr. Green | Dr. Allen P. Green, MD",
  description:
    "Learn about Dr. Allen P. Green, MD — Board-Certified Clinical Pathologist and Therapeutic Plasma Exchange specialist.",
}

export default function AboutPage() {
  return (
    <PlaceholderPage
      label="About"
      title="Dr. Allen P."
      titleAccent="Green"
      description="Board-Certified Clinical Pathologist specializing in therapeutic plasma exchange for longevity and health optimization."
    />
  )
}
