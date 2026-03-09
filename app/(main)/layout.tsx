import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ClientInit } from "@/components/client-init"
import { NewsletterSitewide } from "@/components/newsletter-sitewide"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ClientInit />
      <Navbar />
      {children}
      <NewsletterSitewide />
      <SiteFooter />
    </>
  )
}
