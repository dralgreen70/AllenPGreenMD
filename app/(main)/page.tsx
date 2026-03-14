import Script from "next/script"
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
      <Script
        id="schema-physician"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "@id": "https://allenpgreenmd.com/#physician",
            name: "Allen P. Green, M.D.",
            givenName: "Allen",
            familyName: "Green",
            honorificPrefix: "Dr.",
            honorificSuffix: "M.D.",
            jobTitle: "Associate Medical Director",
            description:
              "Board-Certified Clinical Pathologist specializing in therapeutic plasma exchange for longevity, Alzheimer's disease, autoimmune conditions, and environmental detoxification.",
            url: "https://allenpgreenmd.com",
            image: "https://allenpgreenmd.com/images/me-and-amicus.jpg",
            sameAs: ["https://www.linkedin.com/in/allen-green-md/"],
            worksFor: {
              "@type": "MedicalClinic",
              "@id": "https://allenpgreenmd.com/#clinic",
            },
            medicalSpecialty: "Clinical Pathology",
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "Medical University of South Carolina",
              },
              {
                "@type": "Hospital",
                name: "UT Southwestern Medical Center",
              },
            ],
          }),
        }}
      />
      <Script
        id="schema-clinic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id": "https://allenpgreenmd.com/#clinic",
            name: "Global Apheresis",
            url: "https://globalapheresis.com",
            telephone: "+14154486839",
            email: "DrGreen@allenpgreenmd.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "655 Redwood Highway, Suite 370",
              addressLocality: "Mill Valley",
              addressRegion: "CA",
              postalCode: "94941",
              addressCountry: "US",
            },
            medicalSpecialty: "Therapeutic Plasma Exchange",
            description:
              "Global Apheresis specializes in therapeutic plasma exchange for longevity, Alzheimer's disease, autoimmune conditions, and environmental detoxification.",
            physician: {
              "@type": "Physician",
              "@id": "https://allenpgreenmd.com/#physician",
            },
          }),
        }}
      />
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
