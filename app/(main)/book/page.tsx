import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BookEmailForm } from "@/components/book-email-form"

const DESCRIPTION =
  "A new book on the history and science of therapeutic plasma exchange, by Allen P. Green, MD and Dobri Kiprov, MD. Paperback available September 1, 2026."

export const metadata: Metadata = {
  title: "Old Blood, New Life | Dr. Green",
  description: DESCRIPTION,
  alternates: {
    canonical: "https://allenpgreenmd.com/book",
  },
  openGraph: {
    title: "Old Blood, New Life | Dr. Green",
    description: DESCRIPTION,
    url: "https://allenpgreenmd.com/book",
    type: "website",
    siteName: "Allen P. Green, M.D.",
    images: [
      {
        url: "https://allenpgreenmd.com/images/book/old-blood-new-life-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old Blood, New Life | Dr. Green",
    description: DESCRIPTION,
    images: ["https://allenpgreenmd.com/images/book/old-blood-new-life-og.jpg"],
  },
}

// Set this to the retail listing URL to activate the buy button at launch.
const BUY_URL: string | null = null

export default function BookPage() {
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Old Blood, New Life",
    author: [
      {
        "@type": "Person",
        name: "Allen P. Green, MD",
        url: "https://allenpgreenmd.com/about",
      },
      {
        "@type": "Person",
        name: "Dobri Kiprov, MD",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Sanguine House",
    },
    bookFormat: "https://schema.org/Paperback",
    datePublished: "2026-09-01",
    inLanguage: "en",
    numberOfPages: 293,
    isbn: "979-8-9970143-1-5",
    image: "https://allenpgreenmd.com/images/book/old-blood-new-life-cover.jpg",
    url: "https://allenpgreenmd.com/book",
    offers: {
      "@type": "Offer",
      price: "18.99",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <main>
        {/* ===== HERO ===== */}
        <section className="site-section">
          <div className="site-container">
            <div className="book-hero">
              <Image
                src="/images/book/old-blood-new-life-cover.jpg"
                alt="Cover of Old Blood, New Life by Allen P. Green, MD and Dobri Kiprov, MD"
                width={1600}
                height={2560}
                className="book-hero-cover"
                priority
              />
              <div className="book-hero-text">
                <h1 className="h-display">Old Blood, New Life</h1>
                <p className="book-hero-subtitle">
                  How Cleaning the Blood Became Medicine, and Where It Goes Next
                </p>
                <p className="book-hero-authors">
                  Allen P. Green, MD and Dobri Kiprov, MD
                </p>
                <p className="book-hero-meta">
                  Paperback, $18.99. Available September 1, 2026.
                </p>
                <div className="book-buy">
                  {BUY_URL ? (
                    <a
                      href={BUY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent"
                    >
                      Buy the paperback
                    </a>
                  ) : (
                    <span className="book-buy-disabled" aria-disabled="true">
                      Available September 1
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT THE BOOK ===== */}
        <section className="site-section" style={{ background: "var(--bg-alt)" }}>
          <div className="site-container">
            <div className="section-label-line">
              <span className="label-text">About the Book</span>
            </div>
            <div className="book-prose" style={{ maxWidth: "50rem" }}>
              <p className="body-lg">
                For four thousand years, medicine sensed the blood held the key
                to health. For most of that time, it was wrong about how.{" "}
                <em>Old Blood, New Life</em> traces humanity&rsquo;s long
                obsession with the blood, from the bloodletting basin and the
                four humors to its unlikely modern heir, therapeutic plasma
                exchange.
              </p>
              <p className="body-lg">
                Written by two physicians who perform the procedure, it separates
                the proven from the promising from the speculative, names every
                conflict of interest, and follows the science exactly as far as
                the evidence allows, and no further.
              </p>
            </div>
          </div>
        </section>

        {/* ===== EMAIL CAPTURE ===== */}
        <section className="site-section">
          <div className="site-container">
            <div className="book-signup">
              <h2 className="h-lg">Get an email when it&rsquo;s out</h2>
              <p className="body-lg" style={{ marginTop: "0.75rem" }}>
                One message when the book is available, and nothing else unless
                you want it.
              </p>
              <BookEmailForm />
            </div>
          </div>
        </section>

        {/* ===== ABOUT THE AUTHORS ===== */}
        <section className="site-section" style={{ background: "var(--bg-alt)" }}>
          <div className="site-container">
            <div className="section-label-line">
              <span className="label-text">About the Authors</span>
            </div>
            <div className="book-prose" style={{ maxWidth: "50rem" }}>
              <div className="book-author-card">
                <p className="body-lg">
                  <strong>Allen P. Green, MD</strong> is Associate Medical
                  Director of Global Apheresis in Mill Valley, California, where
                  he specializes in therapeutic plasma exchange, and is
                  Board-Certified in Clinical Pathology by the American Board of
                  Pathology. He earned his medical degree at the Medical
                  University of South Carolina and completed his residency at UT
                  Southwestern Medical Center. His peer-reviewed work spans
                  apheresis, coagulation disorders, and transfusion medicine, and
                  he is a member of the American Society for Apheresis and a U.S.
                  Air Force veteran. He has supervised over 500 TPE procedures and
                  writes about the procedure at{" "}
                  <Link href="/">allenpgreenmd.com</Link>.
                </p>
              </div>
              <div className="book-author-card">
                <p className="body-lg">
                  <strong>Dobri Kiprov, MD,</strong> is a pioneer of therapeutic
                  apheresis and the founder of Global Apheresis in Mill Valley,
                  California. A founding member of both the American Society for
                  Apheresis and the <em>Journal of Clinical Apheresis</em>, he
                  trained in clinical immunology at Massachusetts General Hospital
                  and Harvard Medical School and was the first physician in the
                  United States to pass the Hemapheresis Practitioner examination.
                  Over four decades he has published more than 100 peer-reviewed
                  papers, helped establish therapeutic plasma exchange as a
                  treatment for immune disease and, later, for aging itself, and
                  earned the American Society for Apheresis&rsquo;s Presidential,
                  Lecturer&rsquo;s, and Francis Morrison Memorial Awards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CLOSING ===== */}
        <section className="site-section">
          <div className="site-container">
            <div className="book-prose" style={{ maxWidth: "50rem" }}>
              <p className="body-lg">
                The book covers therapeutic plasma exchange as it is actually
                practiced, including its{" "}
                <Link href="/research/tpe-evidence">
                  established clinical indications
                </Link>
                , its{" "}
                <Link href="/tpe-alzheimers">use in Alzheimer&rsquo;s disease</Link>
                , and the{" "}
                <Link href="/tpe-longevity">research on aging and plasma</Link>. If
                you want to start before the book is out,{" "}
                <Link href="/tpe">begin here</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
