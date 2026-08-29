import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

const TITLE = "Press Kit | Old Blood, New Life | Dr. Green"

const DESCRIPTION =
  "Press and podcast resources for Old Blood, New Life: cover art, author photos, bios, sample chapter, and interview questions."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://allenpgreenmd.com/media-kit",
    siteName: "Allen P. Green, MD",
    images: [
      {
        url: "https://allenpgreenmd.com/images/book/old-blood-new-life-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://allenpgreenmd.com/images/book/old-blood-new-life-og.jpg"],
  },
  alternates: {
    canonical: "https://allenpgreenmd.com/media-kit",
  },
}

const FACTS: { label: string; value: string }[] = [
  { label: "Title", value: "Old Blood, New Life" },
  { label: "Authors", value: "Dobri Kiprov, MD, and Allen P. Green, MD" },
  { label: "Publisher", value: "Sanguine House" },
  { label: "Format", value: "Paperback" },
  { label: "Price", value: "$18.99" },
  { label: "ISBN", value: "979-8-9970143-1-5" },
  { label: "Publication date", value: "September 1, 2026" },
]

// Every asset below is self-hosted under /public. Dimensions are stated so a
// producer can tell at a glance whether a file suits print or web.
const ASSETS: {
  href: string
  name: string
  detail: string
  thumb: string
  alt: string
  ratio: number
}[] = [
  {
    href: "/images/book/old-blood-new-life-cover-print.jpg",
    name: "Cover, print resolution",
    detail: "JPG, 1800 x 2700, 300 dpi",
    thumb: "/images/book/old-blood-new-life-cover-web.jpg",
    alt: "Cover of Old Blood, New Life",
    ratio: 2 / 3,
  },
  {
    href: "/images/book/old-blood-new-life-cover-web.jpg",
    name: "Cover, web resolution",
    detail: "JPG, 1000 x 1500",
    thumb: "/images/book/old-blood-new-life-cover-web.jpg",
    alt: "Cover of Old Blood, New Life",
    ratio: 2 / 3,
  },
  {
    href: "/images/press/dr-green-amicus.jpg",
    name: "Dr. Green at the Amicus separator",
    detail: "JPG, 1400 x 1867",
    thumb: "/images/press/dr-green-amicus.jpg",
    alt: "Allen P. Green, MD, beside an Amicus Separator running therapeutic plasma exchange",
    ratio: 3 / 4,
  },
  {
    href: "/images/press/dr-green-headshot.jpg",
    name: "Dr. Green, formal headshot",
    detail: "JPG, 641 x 801, web resolution",
    thumb: "/images/press/dr-green-headshot.jpg",
    alt: "Formal headshot of Allen P. Green, MD",
    ratio: 4 / 5,
  },
  {
    href: "/images/press/dr-kiprov-headshot.jpg",
    name: "Dr. Kiprov, headshot",
    detail: "JPG, 238 x 320, web resolution",
    thumb: "/images/press/dr-kiprov-headshot.jpg",
    alt: "Headshot of Dobri Kiprov, MD",
    ratio: 3 / 4,
  },
]

const QUESTIONS: string[] = [
  "Bloodletting killed people for two thousand years. Your book argues the doctors doing it were not stupid. What were they actually reasoning from?",
  "What is the difference between bloodletting and therapeutic plasma exchange, in plain terms?",
  "Plasma exchange has been standard care for certain neurological and autoimmune conditions for decades. Why do most people have no idea it exists?",
  "The AMBAR trial tested plasma exchange in Alzheimer's disease. What did it find, and what did it not find?",
  "Plasma exchange for Alzheimer's sits in ASFA Category III. What does that classification mean, and why does it matter that you say so?",
  "There is a lot of enthusiasm around blood-based longevity right now. Where does the science end and the marketing begin?",
  "Your site is unusually critical of some procedures marketed as blood filtration, EBOO in particular. What is the objection?",
  "Microplastics and PFAS are in essentially everyone's blood now. What can and cannot be done about that?",
  "What do we still not know? What would change your mind about this field?",
  "You trained under one of the physicians who helped establish this field, and you wrote the book with him. What has that been like?",
  "Who should not get plasma exchange?",
  "If a listener has a family member with an autoimmune condition and wants to know whether apheresis is relevant, what should they ask their own physician?",
]

const labelStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.7rem",
  fontWeight: 500,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "var(--accent)",
}

const bioBoxStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "2rem",
  marginTop: "1.5rem",
}

// The site's eyebrow label is normally a <span>. On this page each one heads a
// distinct section a producer may jump to, so they are real headings. The class
// carries the type styling; the accent color comes from a `span` selector in
// globals.css, so it has to be restated here.
function SectionHeading({ children }: { children: string }) {
  return (
    <div className="section-label-line">
      <h2 className="label-text" style={{ color: "var(--accent)" }}>
        {children}
      </h2>
    </div>
  )
}

export default function MediaKitPage() {
  return (
    <main>
      {/* ===== HEADER ===== */}
      <section className="site-section">
        <div className="site-container">
          <div className="section-label-line">
            <span className="label-text">Press Kit</span>
          </div>
          <h1 className="h-display" style={{ marginBottom: "1.5rem" }}>
            Press Kit:{" "}
            <span className="serif-italic accent-text">Old Blood, New Life</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: "45rem" }}>
            Resources for press and podcast producers: cover art, author photos,
            bios at two lengths, a sample chapter, and suggested interview
            questions. Everything here is cleared for use in coverage of the
            book.
          </p>
        </div>
      </section>

      {/* ===== BOOK AT A GLANCE ===== */}
      <section className="site-section" style={{ background: "var(--bg-alt)" }}>
        <div className="site-container">
          <SectionHeading>Book at a Glance</SectionHeading>
          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(9rem, max-content) 1fr",
              gap: "0.85rem 2rem",
              maxWidth: "45rem",
              margin: 0,
            }}
          >
            {FACTS.map((f) => (
              <div key={f.label} style={{ display: "contents" }}>
                <dt style={{ ...labelStyle, paddingTop: "0.2rem" }}>
                  {f.label}
                </dt>
                <dd
                  style={{
                    margin: 0,
                    fontSize: "1.05rem",
                    color: "var(--text)",
                    lineHeight: 1.5,
                  }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== DOWNLOAD ASSETS ===== */}
      <section className="site-section">
        <div className="site-container">
          <SectionHeading>Download Assets</SectionHeading>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "1.25rem",
              maxWidth: "45rem",
            }}
          >
            {ASSETS.map((a) => (
              <li
                key={a.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <Image
                  src={a.thumb}
                  alt={a.alt}
                  width={Math.round(96 * a.ratio)}
                  height={96}
                  style={{
                    width: "auto",
                    height: 96,
                    borderRadius: "4px",
                    border: "1px solid var(--border)",
                    flexShrink: 0,
                  }}
                />
                <div style={{ minWidth: 0 }}>
                  <a
                    href={a.href}
                    download
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.2rem",
                      color: "var(--text)",
                      textDecoration: "none",
                      lineHeight: 1.3,
                    }}
                  >
                    {a.name} <span className="arrow">&rarr;</span>
                  </a>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      marginTop: "0.3rem",
                    }}
                  >
                    {a.detail}
                  </div>
                </div>
              </li>
            ))}
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                paddingBottom: "1.25rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 96,
                  flexShrink: 0,
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--card)",
                  ...labelStyle,
                }}
              >
                PDF
              </div>
              <div style={{ minWidth: 0 }}>
                <a
                  href="/downloads/OldBloodNewLife_SampleChapter_Ch3.pdf"
                  download
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.2rem",
                    color: "var(--text)",
                    textDecoration: "none",
                    lineHeight: 1.3,
                  }}
                >
                  Sample chapter: Chapter 3, Bleed to Heal{" "}
                  <span className="arrow">&rarr;</span>
                </a>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    marginTop: "0.3rem",
                  }}
                >
                  PDF, 12 pages
                </div>
              </div>
            </li>
          </ul>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              marginTop: "1.5rem",
              maxWidth: "45rem",
            }}
          >
            Need a larger file or a different crop? Email and we will send one.
          </p>
        </div>
      </section>

      {/* ===== AUTHOR BIOS ===== */}
      <section className="site-section" style={{ background: "var(--bg-alt)" }}>
        <div className="site-container">
          <SectionHeading>Author Bios</SectionHeading>
          <div style={{ maxWidth: "50rem" }}>
            <span style={labelStyle}>100 words</span>
            <div style={bioBoxStyle}>
              <p className="body-lg" style={{ margin: 0 }}>
                Allen P. Green, MD, is board-certified in clinical pathology and
                serves as Associate Medical Director at Global Apheresis in Mill
                Valley, California. He trained in therapeutic apheresis and
                transfusion medicine at UT Southwestern Medical Center under Dr.
                Ravi Sarode, and has supervised over 500 therapeutic plasma
                exchange procedures. His work has appeared in peer-reviewed
                journals, and he has presented at the American Society for
                Apheresis and AABB. With Dr. Dobri Kiprov, he is co-author of{" "}
                <em>Old Blood, New Life</em>, a history of what medicine has
                believed about blood and an account of where the evidence for
                plasma exchange stands today.
              </p>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <span style={labelStyle}>250 words</span>
            </div>
            <div style={bioBoxStyle}>
              <p className="body-lg" style={{ marginTop: 0 }}>
                Allen P. Green, MD, is board-certified in clinical pathology and
                serves as Associate Medical Director at Global Apheresis in Mill
                Valley, California. He trained in therapeutic apheresis and
                transfusion medicine at UT Southwestern Medical Center under Dr.
                Ravi Sarode, and has supervised over 500 therapeutic plasma
                exchange procedures.
              </p>
              <p className="body-lg">
                Apheresis is a procedure practiced within transfusion medicine,
                itself a branch of clinical pathology. Few physicians offering
                plasma exchange today trained in the discipline that developed
                it. That background shapes how Dr. Green approaches the field:
                as a clinical pathologist first, attentive to what the evidence
                supports and to where the claims outrun it.
              </p>
              <p className="body-lg">
                His work has appeared in peer-reviewed journals, and he has
                presented at the American Society for Apheresis and AABB. He
                writes at allenpgreenmd.com on therapeutic plasma exchange for
                clinicians and patients, including critical assessments of
                unproven procedures marketed under the apheresis label.
              </p>
              <p className="body-lg">
                With Dr. Dobri Kiprov, one of the physicians who established
                therapeutic plasma exchange in clinical practice and who has
                overseen more than 15,000 treatments, he is co-author of{" "}
                <em>Old Blood, New Life</em>. The book traces what medicine has
                believed about blood from the ancient world through the long era
                of bloodletting to the present, and asks a question that sounds
                ridiculous until you look at the mechanisms: what did the
                humoralists get right, and what does the current evidence
                actually show about removing pathological factors from
                circulating plasma?
              </p>
              <p className="body-lg" style={{ marginBottom: 0 }}>
                Dr. Green practices in Mill Valley, California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERVIEW QUESTIONS ===== */}
      <section className="site-section">
        <div className="site-container">
          <SectionHeading>Suggested Interview Questions</SectionHeading>
          <ol
            style={{
              maxWidth: "50rem",
              paddingLeft: "1.25rem",
              display: "grid",
              gap: "1rem",
            }}
          >
            {QUESTIONS.map((q, i) => (
              <li key={i} className="body-lg" style={{ paddingLeft: "0.5rem" }}>
                {q}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="site-section" style={{ background: "var(--bg-alt)" }}>
        <div className="site-container">
          <SectionHeading>Contact</SectionHeading>
          <div style={{ maxWidth: "45rem" }}>
            <p className="body-lg">
              Booking inquiries by email preferred.
            </p>
            <p className="body-lg" style={{ marginTop: "1rem" }}>
              <a
                href="mailto:DrGreen@allenpgreenmd.com"
                style={{ color: "var(--accent)" }}
              >
                DrGreen@allenpgreenmd.com
              </a>
              <br />
              <a href="tel:+14154486839" style={{ color: "var(--accent)" }}>
                (415) 448-6839
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== BUY LINK ===== */}
      <section className="site-section">
        <div className="site-container">
          <p className="body-lg" style={{ maxWidth: "45rem" }}>
            Buy the book: <Link href="/book">Old Blood, New Life</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
