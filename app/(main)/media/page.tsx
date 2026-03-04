import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/placeholder-page"

export const metadata: Metadata = {
  title: "Speaking & Press | Dr. Allen P. Green, MD",
  description:
    "Speaking engagements, media appearances, and press coverage of Dr. Allen P. Green, MD.",
}

export default function MediaPage() {
  return (
    <PlaceholderPage
      label="Media"
      title="Speaking &"
      titleAccent="Press"
      description="Speaking engagements, media appearances, and press coverage."
    />
  )
}
