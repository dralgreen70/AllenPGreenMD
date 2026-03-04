import { HeroSection } from "@/components/hero-section"
import { Ticker } from "@/components/ticker"
import { PlexSection } from "@/components/plex-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ConditionsPreview } from "@/components/conditions-preview"
import { AboutSection } from "@/components/about-section"
import { ResearchPreview } from "@/components/research-preview"
import { BlogSection } from "@/components/blog-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <PlexSection />
      <BenefitsSection />
      <ConditionsPreview />
      <AboutSection />
      <ResearchPreview />
      <BlogSection />
      <CTASection />
    </>
  )
}
