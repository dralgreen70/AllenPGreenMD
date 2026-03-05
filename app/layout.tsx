import type { Metadata } from "next"
import { Outfit, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Dr. Allen P. Green, MD | Global Apheresis | Therapeutic Apheresis Specialist",
  description:
    "Board-Certified Clinical Pathologist specializing in therapeutic plasma exchange, lipid apheresis, and cellular therapies for longevity and health optimization.",
  openGraph: {
    title: "Dr. Allen P. Green, MD | Global Apheresis | Therapeutic Apheresis Specialist",
    description:
      "Board-Certified Clinical Pathologist specializing in therapeutic plasma exchange, lipid apheresis, and cellular therapies for longevity and health optimization.",
    images: [{ url: "/images/og-image.jpg" }],
    url: "https://allenpgreenmd.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Allen P. Green, MD | Therapeutic Apheresis Specialist",
    description:
      "Associate Medical Director at Global Apheresis. Specializing in TPE for longevity and health optimization.",
    images: ["/images/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M96CELHBYV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M96CELHBYV');
          `}
        </Script>
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Allen P. Green, MD",
              url: "https://allenpgreenmd.com",
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
