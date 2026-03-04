import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ClientInit } from "@/components/client-init"

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
      <SiteFooter />
    </>
  )
}
