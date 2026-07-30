import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import Image from "next/image"

const SERIES_DESCRIPTION =
  "A physician's series on PFAS forever chemicals. Five parts covering the chemistry, the evidence of harm, geographic exposure, weight loss mobilization, and fertility. By Dr. Allen P. Green, Board-Certified Clinical Pathologist."

const SERIES_URL = "https://allenpgreenmd.com/pfas-series"
const SERIES_OG_IMAGE = "https://allenpgreenmd.com/images/blog/Jersey_Pfas.jpg"

export const metadata: Metadata = {
  title: "The PFAS Series | Dr. Allen P. Green",
  description: SERIES_DESCRIPTION,
  openGraph: {
    title: "The PFAS Series | Dr. Allen P. Green",
    description: SERIES_DESCRIPTION,
    url: SERIES_URL,
    siteName: "Allen P. Green, MD",
    images: [{ url: SERIES_OG_IMAGE, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The PFAS Series | Dr. Allen P. Green",
    description: SERIES_DESCRIPTION,
    images: [SERIES_OG_IMAGE],
  },
  alternates: {
    canonical: SERIES_URL,
  },
}

type SeriesCard = {
  num: number
  label: string
  title: string
  subtitle?: string
  summary: string
  href?: string
  thumbnail?: string
  status: "live" | "coming-soon"
}

const seriesCards: SeriesCard[] = [
  {
    num: 1,
    label: "Part 1",
    status: "live",
    title: "The PFAS Problem",
    href: "/blog/pfas-problem-forever-chemicals-overview",
    thumbnail: "/images/blog/pfas_part1.jpg",
    subtitle:
      "What forever chemicals are, why they persist, and what we can actually do about them",
    summary:
      "The overview. Carbon-fluorine bond chemistry, biological half-lives, scope of human exposure, and the intervention question framed honestly. Entry point for readers new to the topic.",
  },
  {
    num: 2,
    label: "Part 2",
    status: "live",
    title: "TPE for Detoxification",
    href: "/blog/tpe-detoxification-forever-chemicals",
    thumbnail: "/images/blog/tpe_detox.jpg",
    summary:
      "The broader environmental medicine frame. PFAS in the context of heavy metals, microplastics, and the general class of persistent lipophilic toxins. Where plasma compartment removal fits in the intervention landscape.",
  },
  {
    num: 3,
    label: "Part 3",
    status: "live",
    title: "The Jersey PFAS Crisis",
    href: "/blog/jersey-pfas-crisis",
    thumbnail: "/images/blog/Jersey_Pfas.jpg",
    summary:
      "Geography as exposure. The public health case of one of the most heavily contaminated communities in the British Isles, and the anti-bloodletting argument for why targeting plasma matters more than targeting blood.",
  },
  {
    num: 4,
    label: "Part 4",
    status: "live",
    title: "The Hidden Risk of Weight Loss",
    href: "/blog/hidden-risk-weight-loss-forever-chemicals",
    thumbnail: "/images/blog/weight_loss_pfas.jpg",
    summary:
      "The unintended mobilization problem. Fat loss releases stored persistent organic pollutants into circulation, and the Australian firefighter RCT suggests plasma-based removal is the most efficient countermeasure studied to date.",
  },
  {
    num: 5,
    label: "Part 5",
    status: "live",
    title:
      "Fertility, Fetal Development, and the Conversation You Haven't Had With Your OB",
    href: "/blog/pfas-fertility-fetal-development",
    thumbnail: "/images/blog/pfas_part5_pfda.jpg",
    summary:
      "The human stakes. Mount Sinai's 2023 preconception cohort and the University of Colorado Anschutz 2026 craniofacial mechanism paper converge on a single PFAS compound as the likely worst actor. What the research says, what it doesn't say, and how to think about it before trying to conceive.",
  },
]

const stats = [
  { value: "~15,000", label: "Known PFAS Compounds" },
  { value: ">98%", label: "Americans with PFAS in Their Blood" },
  { value: "2\u20138 Years", label: "Biological Half-Life" },
  { value: "2022", label: "First RCT-Supported Intervention" },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://allenpgreenmd.com" },
    { "@type": "ListItem", position: 2, name: "Report", item: "https://allenpgreenmd.com/blog" },
    { "@type": "ListItem", position: 3, name: "The PFAS Series", item: SERIES_URL },
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The PFAS Series",
  description: SERIES_DESCRIPTION,
  url: SERIES_URL,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "Allen P. Green, MD",
    url: "https://allenpgreenmd.com",
  },
  author: {
    "@type": "Person",
    "@id": "https://allenpgreenmd.com/#physician",
    name: "Allen P. Green, M.D.",
    url: "https://allenpgreenmd.com/about",
  },
}

export default function PfasSeriesPage() {
  const shareUrl = encodeURIComponent(SERIES_URL)
  const shareTitle = encodeURIComponent("The PFAS Series")
  const shareText = encodeURIComponent(
    "A physician's series on PFAS forever chemicals, from Dr. Allen P. Green."
  )

  return (
    <main>
      <Script
        id="schema-pfas-series-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-pfas-series-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ===== HERO ===== */}
      <section className="tpe-hero" id="intro">
        <div className="tpe-hero-inner">
          <nav className="ambar-breadcrumb reveal">
            <Link href="/blog">Report</Link>
            <span>/</span>
            <span>The PFAS Series</span>
          </nav>
          <h1 className="h-display reveal">
            The PFAS{" "}
            <span className="serif-italic accent-text">Series</span>
          </h1>
          <p
            className="tpe-hero-sub reveal"
            style={{ marginTop: "1.5rem" }}
          >
            A clinical guide to forever chemicals, the research behind
            them, and what can actually be done about the ones already in
            your body.
          </p>
          <p
            className="reveal"
            style={{
              marginTop: "1.5rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.03em",
            }}
          >
            5 Articles &middot; by Allen P. Green, MD
          </p>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section
        className="site-section"
        style={{ background: "var(--bg-alt)", paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="site-container">
          <div className="ambar-series-stats reveal">
            {stats.map((s, i) => (
              <div key={i} className="ambar-series-stat">
                <span className="ambar-series-stat-value">{s.value}</span>
                <span className="ambar-series-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BACKGROUND PROSE ===== */}
      <section className="site-section">
        <div className="site-container">
          <div className="alz-evidence-intro reveal" style={{ maxWidth: 820 }}>
            <p className="body-lg">
              Over the past decade, the evidence linking PFAS to kidney and
              testicular cancer, thyroid disease, elevated cholesterol,
              cardiovascular and liver disease, immune dysfunction, and
              reduced fertility has accumulated steadily. What was missing
              until recently was any controlled evidence that the PFAS
              already in the human body could be meaningfully reduced.
            </p>
            <p className="body-lg" style={{ marginTop: "1rem" }}>
              A 2022 Australian randomized clinical trial, published in
              JAMA Network Open, changed that. Subsequent mechanistic
              research, including a March 2026 paper from the University
              of Colorado Anschutz identifying PFDA as the most harmful
              PFAS during fetal development, has sharpened the clinical
              picture considerably.
            </p>
            <p className="body-lg" style={{ marginTop: "1rem" }}>
              This series organizes what the science now supports, what it
              doesn&rsquo;t yet support, and where the conversation should
              land for patients trying to make informed decisions. Part 1
              is the new entry point for readers new to the topic. Parts
              2, 3, and 4 were originally published as standalone posts in
              October 2025 and have been updated for the series. Part 5
              completes the series.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERIES CARDS ===== */}
      <section
        className="site-section"
        style={{ background: "var(--bg-alt)" }}
      >
        <div className="site-container">
          <div className="section-label-line reveal">
            <span className="label-text">Reading Path</span>
          </div>
          <h2 className="h-lg reveal" style={{ marginBottom: "2.5rem" }}>
            The Complete{" "}
            <span className="serif-italic accent-text">Investigation</span>
          </h2>

          <div className="ambar-reading-path pfas-reading-path">
            {seriesCards.map((card) => {
              const isLive = card.status === "live"
              const classes = `ambar-reading-card pfas-series-card reveal${
                isLive ? "" : " coming-soon"
              }`

              const inner = (
                <>
                  <span className="ambar-reading-num">{card.num}</span>
                  <span className="ambar-reading-label">
                    {card.label}
                    {!isLive && (
                      <span className="pfas-status-badge">Coming Soon</span>
                    )}
                  </span>
                  {isLive && card.thumbnail && (
                    <div className="pfas-card-thumb">
                      <Image
                        src={card.thumbnail}
                        alt={card.title}
                        width={480}
                        height={270}
                        sizes="(max-width: 768px) 100vw, 480px"
                      />
                    </div>
                  )}
                  <h3>{card.title}</h3>
                  {card.subtitle && (
                    <p className="pfas-card-subtitle">{card.subtitle}</p>
                  )}
                  <p>{card.summary}</p>
                  {isLive && (
                    <span className="ambar-reading-link">
                      Read article &rarr;
                    </span>
                  )}
                </>
              )

              return isLive && card.href ? (
                <Link key={card.num} href={card.href} className={classes}>
                  {inner}
                </Link>
              ) : (
                <div
                  key={card.num}
                  className={classes}
                  aria-disabled="true"
                >
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="site-section">
        <div className="site-container">
          <blockquote className="ambar-series-quote reveal">
            <p>
              Two independent research teams converged on the same PFAS
              compound as the worst actor, from completely different
              clinical endpoints. That kind of convergence is how
              scientific consensus begins to form.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ===== EXPLORE YOUR OPTIONS CTA ===== */}
      <section className="cta-section" id="contact">
        <div className="cta-content">
          <div
            className="section-label-line reveal"
            style={{ justifyContent: "center" }}
          >
            <span
              className="label-text"
              style={{ color: "var(--accent-light)" }}
            >
              Next Steps
            </span>
          </div>
          <h2 className="h-lg reveal">
            Explore Your{" "}
            <span
              className="serif-italic"
              style={{ color: "var(--accent-light)" }}
            >
              Options
            </span>
          </h2>
          <p className="reveal">
            If you or a loved one has concerns about PFAS exposure, a
            discovery call with Dr. Green can help you understand whether
            therapeutic apheresis is appropriate for your situation. There
            is no obligation, and the conversation is complimentary.
          </p>
          <div className="cta-actions reveal">
            <a
              href="https://globalapheresis.com/free-consultation"
              className="btn btn-accent"
            >
              Book a Discovery Call <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== COMPANION POST LINK ===== */}
      <section
        className="site-section"
        style={{
          textAlign: "center",
          paddingTop: "2.75rem",
          paddingBottom: "2.75rem",
        }}
      >
        <div className="site-container">
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-secondary)",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Looking for the shorter, practice-voice treatment?{" "}
            <a
              href="https://www.globalapheresis.com/blog/pfas-forever-chemicals-plasma-exchange"
              target="_blank"
              rel="noopener"
              style={{
                color: "var(--accent)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Read the companion post on Global Apheresis &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* ===== SHARE ===== */}
      <section className="post-share-section">
        <div className="post-share-inner">
          <h3 className="post-share-heading">Share this page</h3>
          <div className="post-share-buttons">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="post-share-btn"
              aria-label="Share on Twitter"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter / X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="post-share-btn"
              aria-label="Share on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:?subject=${shareTitle}&body=${shareText}%0A%0A${shareUrl}`}
              className="post-share-btn"
              aria-label="Share via Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ===== AUTHOR BIO ===== */}
      <section className="post-author-bio">
        <div className="post-author-bio-inner">
          <div className="post-author-bio-avatar">AG</div>
          <div className="post-author-bio-text">
            <h3>About Dr. Allen P. Green</h3>
            <p>
              Dr. Allen P. Green is a Board-Certified Clinical Pathologist
              specializing in therapeutic plasma exchange for longevity,
              Alzheimer&rsquo;s disease, autoimmune conditions, and
              environmental detoxification. Trained at UT Southwestern
              Medical Center under Dr. Ravi Sarode, Dr. Green has
              supervised over 500 TPE procedures and has published multiple
              peer-reviewed papers in apheresis and transfusion medicine.
              He serves as Associate Medical Director at Global Apheresis
              in Mill Valley, California.
            </p>
            <div className="post-author-bio-links">
              <Link href="/about">
                Learn More About Dr. Green <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/research">
                View Research <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BACK TO JOURNAL ===== */}
      <section
        className="site-section"
        style={{
          background: "var(--bg-alt)",
          textAlign: "center",
          paddingTop: "2.5rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="site-container">
          <Link
            href="/blog"
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            &larr; Back to Report
          </Link>
        </div>
      </section>
    </main>
  )
}
