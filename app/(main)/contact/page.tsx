import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact Dr. Allen P. Green | Therapeutic Plasma Exchange",
  description:
    "Reach Dr. Allen P. Green and the Global Apheresis team in Mill Valley, CA. Call, email, or book a complimentary discovery call about therapeutic plasma exchange.",
  openGraph: {
    title: "Contact Dr. Allen P. Green | Therapeutic Plasma Exchange",
    description:
      "Reach Dr. Allen P. Green and the Global Apheresis team in Mill Valley, CA. Call, email, or book a complimentary discovery call about therapeutic plasma exchange.",
    url: "https://allenpgreenmd.com/contact",
    siteName: "Allen P. Green, MD",
    images: [{ url: "https://allenpgreenmd.com/images/me-and-amicus.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dr. Allen P. Green | Therapeutic Plasma Exchange",
    description:
      "Reach Dr. Allen P. Green and the Global Apheresis team in Mill Valley, CA. Call, email, or book a complimentary discovery call.",
    images: ["https://allenpgreenmd.com/images/me-and-amicus.jpg"],
  },
  alternates: {
    canonical: "https://allenpgreenmd.com/contact",
  },
}

const cardStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "2rem",
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.5rem",
}

const labelStyle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.7rem",
  fontWeight: 500,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "var(--accent)",
  marginBottom: "0.25rem",
}

const valueStyle = {
  fontFamily: "'Instrument Serif', serif",
  fontSize: "1.25rem",
  color: "var(--text)",
  textDecoration: "none",
  lineHeight: 1.35,
}

export default function ContactPage() {
  const mapsQuery =
    "https://www.google.com/maps/search/?api=1&query=655+Redwood+Highway+Suite+370+Mill+Valley+CA+94941"

  return (
    <>
      <Script
        id="schema-breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://allenpgreenmd.com" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://allenpgreenmd.com/contact" },
            ],
          }),
        }}
      />
      <main>
        {/* ===== HEADER ===== */}
        <section className="site-section" style={{ background: "var(--bg)" }}>
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Contact</span>
            </div>
            <h1 className="h-display reveal" style={{ marginBottom: "1.5rem" }}>
              Get in{" "}
              <span className="serif-italic accent-text">touch</span>
            </h1>
            <p className="body-lg reveal" style={{ maxWidth: 640 }}>
              Whether you have questions about therapeutic plasma exchange or are
              ready to discuss whether it&apos;s right for you, reach out
              directly or book a complimentary discovery call.
            </p>

            {/* ===== CONTACT CARDS ===== */}
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
                marginTop: "3rem",
              }}
            >
              <div style={cardStyle}>
                <span style={labelStyle}>Call</span>
                <a href="tel:+14154486839" style={valueStyle}>
                  (415) 448-6839
                </a>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Monday&ndash;Friday, 8:00 AM &ndash; 5:00 PM PT
                </span>
              </div>

              <div style={cardStyle}>
                <span style={labelStyle}>Email</span>
                <a
                  href="mailto:DrGreen@allenpgreenmd.com"
                  style={{ ...valueStyle, fontSize: "1.05rem", wordBreak: "break-word" }}
                >
                  DrGreen@allenpgreenmd.com
                </a>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  We aim to respond within one business day.
                </span>
              </div>

              <div style={cardStyle}>
                <span style={labelStyle}>Visit</span>
                <span style={valueStyle}>Global Apheresis</span>
                <address
                  style={{
                    fontStyle: "normal",
                    fontSize: "0.95rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  655 Redwood Highway, Suite 370
                  <br />
                  Mill Valley, CA 94941
                </address>
                <a
                  href={mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: "var(--accent)",
                    textDecoration: "none",
                    marginTop: "0.25rem",
                  }}
                >
                  Get directions <span className="arrow">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta-section">
          <div className="cta-content">
            <div
              className="section-label-line reveal"
              style={{ justifyContent: "center" }}
            >
              <span className="label-text" style={{ color: "var(--accent-light)" }}>
                Get Started
              </span>
            </div>
            <h2 className="h-lg reveal">
              Ready to{" "}
              <span className="serif-italic" style={{ color: "var(--accent-light)" }}>
                begin?
              </span>
            </h2>
            <p className="reveal">
              Schedule a complimentary discovery call to discuss whether
              therapeutic plasma exchange is right for you.
            </p>
            <div className="cta-actions reveal">
              <a
                href="https://www.globalapheresis.com/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Book a Discovery Call <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
