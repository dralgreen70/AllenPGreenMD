import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "The AMBAR Series | Allen P. Green, M.D.",
  description:
    "A four-part analysis of the AMBAR trial — the landmark study showing plasma exchange slowed Alzheimer's decline by 52–71%. Trial results, independent validation, FDA drug comparisons, and clinical implications.",
  openGraph: {
    title: "The AMBAR Series — Allen P. Green, M.D.",
    description:
      "Four-part analysis of the AMBAR trial: plasma exchange results, independent validation, drug comparisons, and why this treatment isn't standard of care yet.",
    url: "https://allenpgreenmd.com/ambar-series",
  },
}

const readingPath = [
  {
    num: 1,
    label: "Part 1",
    title: "Understanding Plasma Exchange and Key Results",
    excerpt:
      "The AMBAR trial showed effect sizes of 52\u201371% in slowing Alzheimer\u2019s progression \u2014 and most neurologists have never heard of it. Here\u2019s what the data actually shows.",
    href: "/blog/ambar-study-part-1",
  },
  {
    num: 2,
    label: "Part 2",
    title: "Independent Validation and Comparison to FDA-Approved Drugs",
    excerpt:
      "The mechanistic evidence, independent validation from a 2025 Argentina cohort study, and how plasma exchange compares to FDA-approved monoclonal antibodies like lecanemab and donanemab.",
    href: "/blog/ambar-part-2-fda-comparison",
  },
  {
    num: 3,
    label: "Part 3",
    title:
      "Plasma Exchange Slows Decline Regardless of Amyloid Status",
    excerpt:
      "The finding that changed how we think about what plasma exchange is actually doing \u2014 and why it matters for everyone, not just Alzheimer\u2019s patients.",
    href: "/blog/ambar-study-part-3",
  },
  {
    num: 4,
    label: "Context",
    title:
      "If Plasma Exchange Works, Why Isn\u2019t Your Doctor Recommending It?",
    excerpt:
      "The AMBAR trial demonstrated effect sizes larger than any FDA-approved drug, with a fraction of the side effects. So why haven\u2019t you heard about it from your neurologist?",
    href: "/blog/why-isnt-tpe-standard-of-care",
  },
]

const stats = [
  { value: "322", label: "Patients Treated" },
  { value: "Phase IIb/III", label: "Randomized Controlled Trial" },
  { value: "14 Months", label: "Follow-up Period" },
  { value: "2020", label: "Published in Alzheimer\u2019s & Dementia" },
]

export default function AmbarSeriesPage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="tpe-hero" id="intro">
        <div className="tpe-hero-inner">
          <nav className="ambar-breadcrumb reveal">
            <Link href="/blog">Journal</Link>
            <span>/</span>
            <span>The AMBAR Series</span>
          </nav>
          <h1 className="h-display reveal">
            The AMBAR{" "}
            <span className="serif-italic accent-text">Series</span>
          </h1>
          <p
            className="tpe-hero-sub reveal"
            style={{ marginTop: "1.5rem" }}
          >
            A four-part analysis of the landmark AMBAR trial &mdash; the
            largest and most rigorous study of plasma exchange for
            Alzheimer&apos;s disease. From the raw clinical data to the
            systemic barriers preventing adoption, this series covers
            everything physicians and families need to understand about
            the evidence.
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
            4 Articles &middot; by Dr. Allen P. Green, M.D.
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

      {/* ===== INTRO ===== */}
      <section className="site-section">
        <div className="site-container">
          <div className="alz-evidence-intro reveal" style={{ maxWidth: 820 }}>
            <p className="body-lg">
              In 2020, researchers published results from the AMBAR trial
              (<em>Alzheimer Management By Albumin Replacement</em>) &mdash;
              a multicenter, randomized, double-blind, placebo-controlled
              study across 41 sites in the United States and Spain. It
              remains the largest and most rigorous clinical trial ever
              conducted on therapeutic plasma exchange for Alzheimer&apos;s
              disease.
            </p>
            <p className="body-lg" style={{ marginTop: "1rem" }}>
              The results showed that plasma exchange with albumin
              replacement slowed cognitive and functional decline by
              52&ndash;71% compared to placebo in patients with moderate
              Alzheimer&apos;s disease. Despite these findings, most
              neurologists remain unaware of the trial. This series
              examines the data, the independent validation, and the
              systemic factors behind the disconnect.
            </p>
          </div>
        </div>
      </section>

      {/* ===== READING PATH ===== */}
      <section
        className="site-section"
        style={{ background: "var(--bg-alt)" }}
      >
        <div className="site-container">
          <div className="section-label-line reveal">
            <span className="label-text">Reading Path</span>
          </div>
          <h2
            className="h-lg reveal"
            style={{ marginBottom: "2.5rem" }}
          >
            The Complete{" "}
            <span className="serif-italic accent-text">Analysis</span>
          </h2>

          <div className="ambar-reading-path">
            {readingPath.map((card) => (
              <Link
                key={card.num}
                href={card.href}
                className="ambar-reading-card reveal"
              >
                <span className="ambar-reading-num">{card.num}</span>
                <span className="ambar-reading-label">{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.excerpt}</p>
                <span className="ambar-reading-link">
                  Read article &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="site-section">
        <div className="site-container">
          <blockquote className="ambar-series-quote reveal">
            <p>
              The AMBAR trial didn&apos;t just show that plasma exchange
              slows Alzheimer&apos;s decline &mdash; it showed that the
              benefit occurs regardless of whether patients have high or
              low amyloid levels. This suggests the mechanism extends
              beyond amyloid removal to a broader restoration of the
              blood&apos;s protective environment.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ===== CTA ===== */}
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
            If you or a loved one has been diagnosed with Alzheimer&apos;s
            disease, a discovery call with Dr. Green can help you understand
            whether therapeutic plasma exchange is appropriate for your
            situation. There is no obligation, and the conversation is
            complimentary.
          </p>
          <div className="cta-actions reveal">
            <a
              href="https://www.globalapheresis.com/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Book Discovery Call <span className="arrow">&rarr;</span>
            </a>
          </div>
          <div className="tpe-cta-links reveal">
            <div className="tpe-cta-link-row">
              <Link href="/blog" className="tpe-cta-pillar-link">
                &larr; Back to Journal
              </Link>
            </div>
            <span
              style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.5)",
                marginTop: "0.5rem",
                display: "block",
              }}
            >
              Learn more about TPE:
            </span>
            <div className="tpe-cta-link-row">
              <Link href="/tpe-alzheimers" className="tpe-cta-pillar-link">
                Alzheimer&apos;s
              </Link>
              <span className="tpe-cta-pillar-sep">&middot;</span>
              <Link href="/tpe-longevity" className="tpe-cta-pillar-link">
                Longevity
              </Link>
              <span className="tpe-cta-pillar-sep">&middot;</span>
              <Link href="/tpe-autoimmune" className="tpe-cta-pillar-link">
                Autoimmune
              </Link>
              <span className="tpe-cta-pillar-sep">&middot;</span>
              <Link href="/tpe-detox" className="tpe-cta-pillar-link">
                Detox
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
