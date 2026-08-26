import type { Metadata } from "next"
import { PlaceholderPage } from "@/components/placeholder-page"

export const metadata: Metadata = {
  title: "Speaking & Press | Allen P. Green, MD",
  description:
    "Speaking engagements, media appearances, and press coverage of Allen P. Green, MD.",
  openGraph: {
    title: "Speaking & Press | Allen P. Green, MD",
    description:
      "Speaking engagements, media appearances, and press coverage of Allen P. Green, MD.",
    url: "https://allenpgreenmd.com/media",
    siteName: "Allen P. Green, MD",
    images: [{ url: "https://allenpgreenmd.com/images/me-and-amicus.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking & Press | Allen P. Green, MD",
    description:
      "Speaking engagements, media appearances, and press coverage of Allen P. Green, MD.",
    images: ["https://allenpgreenmd.com/images/me-and-amicus.jpg"],
  },
  alternates: {
    canonical: "https://allenpgreenmd.com/media",
  },
  // Placeholder page — keep it out of the index until there is real content here.
  robots: { index: false, follow: true },
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
