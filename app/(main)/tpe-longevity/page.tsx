import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Therapeutic Plasma Exchange for Longevity & Biological Age Reversal | Dr. Allen P. Green, M.D.",
  description:
    "Research has shown that therapeutic plasma exchange reduces biological age by up to 2.6 years, rejuvenates the proteome, and reverses aging biomarkers. Learn about the science of plasma dilution and how TPE is being applied for longevity at Global Apheresis.",
  openGraph: {
    title: "TPE for Longevity & Biological Age Reversal",
    description:
      "The science behind plasma exchange for aging \u2014 parabiosis research, the dilution hypothesis, and clinical studies showing measurable biological age reduction.",
    url: "https://allenpgreenmd.com/tpe-longevity",
  },
}

const fuentealbaResults = [
  {
    headline: "Up to 2.6 years of biological age reduction",
    subline: "measured across epigenetic clocks",
    detail: "Randomized, placebo-controlled",
  },
  {
    headline: "Coordinated molecular rejuvenation",
    subline: "across epigenome, proteome, metabolome, glycome, and immune cells",
    detail: "Multi-omics analysis",
  },
  {
    headline: "Safe and well-tolerated",
    subline: "only two adverse events requiring discontinuation across all subjects",
    detail: "One related to IVIG, not TPE",
  },
]

const mechanismCards = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    title: "Clears the Senescent Secretome",
    desc: "As you age, senescent (damaged, non-dividing) cells accumulate throughout your body. These cells release a cocktail of inflammatory molecules known as the SASP \u2014 the senescence-associated secretory phenotype. These factors circulate in your plasma and drive inflammation, tissue damage, and further senescence in neighboring cells. TPE physically removes these circulating SASP factors.",
  },
  {
    icon: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
    title: "Reduces Chronic Inflammation",
    desc: "Age-related chronic low-grade inflammation \u2014 \u201Cinflammaging\u201D \u2014 is driven by elevated plasma levels of cytokines like IL-6, TNF-\u03B1, and IL-1\u03B2. This sustained inflammatory state damages tissues, impairs immune function, and accelerates every hallmark of aging. TPE removes these inflammatory mediators and replaces them with albumin, which has direct anti-inflammatory properties.",
  },
  {
    icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    title: "Restores Regenerative Signaling",
    desc: "Aged plasma carries signaling molecules that actively suppress tissue regeneration \u2014 telling your stem cells to stay dormant and your repair mechanisms to slow down. Research has shown that removing these inhibitory signals and providing a clean signaling environment reawakens regenerative pathways. The Kim et al. study demonstrated restoration of pro-regenerative regulators to youthful levels after TPE.",
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    title: "Rebalances the Proteome",
    desc: "Your blood plasma contains thousands of proteins that regulate cellular function across every organ system. With age, this proteome becomes dysregulated \u2014 certain proteins become overexpressed while protective proteins decline. TPE resets the plasma protein environment, producing what researchers describe as a \u201Cglobal shift to a younger systemic proteome.\u201D",
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: "Removes Accumulated Toxins",
    desc: "Over a lifetime, environmental toxins (persistent organic pollutants, heavy metals, endocrine disruptors) accumulate in your plasma. These compounds contribute to oxidative stress, DNA damage, and accelerated aging. TPE physically removes these toxins \u2014 an application explored in more detail on the Detoxification page.",
    link: "/tpe-detox",
    linkText: "Detoxification page",
  },
  {
    icon: '<path d="M21.5 2v6h-6"/><path d="M2.5 22v-6h6"/><path d="M22.1 11.5A10 10 0 0 0 3.5 4.3l-1 1.2"/><path d="M1.9 12.5a10 10 0 0 0 18.6 7.2l1-1.2"/>',
    title: "Epigenetic Rejuvenation",
    desc: "The Fuentealba et al. study showed that TPE produces measurable changes in the epigenome \u2014 the chemical modifications that control which genes are turned on or off. These epigenetic changes are reflected in biological age clocks, the most validated tools for measuring how fast your body is truly aging. TPE shifted these clocks younger by up to 2.6 years.",
  },
]

export default function TpeLongevityPage() {
  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Therapeutic Plasma Exchange for Longevity & Biological Age Reversal",
    description:
      "Evidence-based guide to TPE for longevity \u2014 parabiosis research, the plasma dilution hypothesis, and clinical studies demonstrating measurable biological age reduction.",
    url: "https://allenpgreenmd.com/tpe-longevity",
    about: {
      "@type": "MedicalTherapy",
      name: "Therapeutic Plasma Exchange for Longevity",
      description:
        "Application of therapeutic plasma exchange to reduce biological age and address systemic molecular drivers of aging",
    },
    author: {
      "@type": "Physician",
      name: "Allen P. Green, M.D.",
      jobTitle: "Associate Medical Director",
      worksFor: {
        "@type": "MedicalClinic",
        name: "Global Apheresis",
        address: {
          "@type": "PostalAddress",
          streetAddress: "655 Redwood Highway, Suite 370",
          addressLocality: "Mill Valley",
          addressRegion: "CA",
          postalCode: "94941",
        },
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageSchema),
        }}
      />
      <main>
        {/* ===== SECTION 1: HERO ===== */}
        <section className="tpe-hero" id="intro">
          <div className="tpe-hero-inner">
            <div className="section-label-line reveal">
              <span className="label-text">
                Longevity &amp; Biological Age
              </span>
            </div>
            <h1 className="h-display reveal">
              Therapeutic Plasma Exchange for{" "}
              <span className="serif-italic accent-text">Longevity</span>
            </h1>
            <p
              className="tpe-hero-sub reveal"
              style={{ marginTop: "1.5rem" }}
            >
              Research has demonstrated that replacing aged plasma with albumin
              solution rejuvenates tissues, activates stem cells, and measurably
              reduces biological age &mdash; by up to 2.6 years in a randomized
              controlled trial.
            </p>
            <div className="tpe-hero-anchor reveal">
              <p className="body-lg">
                Aging is not just about time &mdash; it&apos;s about what
                accumulates in your blood. Decades of research, from parabiosis
                experiments in mice to human clinical trials, have shown that
                the molecular composition of your plasma directly drives how
                fast your body ages.{" "}
                <Link
                  href="/tpe"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Therapeutic plasma exchange
                </Link>{" "}
                is the most direct way to intervene: removing the aged plasma
                environment and replacing it with clean, protective albumin.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: THE SCIENCE ===== */}
        <section
          className="site-section"
          id="the-science"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="tpe-science-grid">
              <div className="tpe-science-content">
                <div className="section-label-line reveal">
                  <span className="label-text">The Research</span>
                </div>
                <h2 className="h-lg reveal" style={{ marginBottom: "2rem" }}>
                  The Science of Blood and{" "}
                  <span className="serif-italic accent-text">Aging</span>
                </h2>

                <div className="tpe-science-text reveal">
                  <h3
                    className="lon-narrative-heading"
                    style={{ marginTop: 0 }}
                  >
                    Parabiosis &mdash; Where It Started
                  </h3>
                  <p className="body-lg">
                    The foundational insight came from parabiosis research
                    &mdash; experiments in which the circulatory systems of old
                    and young mice were surgically connected. Researchers at UC
                    Berkeley found something remarkable: old mice sharing blood
                    with young mice showed reversal of age-related decline
                    across multiple organ systems &mdash; muscle, liver, brain,
                    and bone. But here was the critical surprise: the young mice
                    aged. This demonstrated that aging isn&apos;t just about
                    losing youthful factors &mdash; it&apos;s driven by the
                    accumulation of harmful factors in old blood.
                  </p>

                  <h3 className="lon-narrative-heading">
                    The Dilution Breakthrough
                  </h3>
                  <p className="body-lg">
                    The next question was whether you even needed young blood. In
                    2020, the same UC Berkeley team (led by Irina and Michael
                    Conboy) demonstrated that you didn&apos;t. Simply diluting
                    old blood plasma &mdash; replacing it with saline and
                    albumin, with no young blood components at all &mdash;
                    produced the same rejuvenating effects in mice. Muscle repair
                    improved, liver fibrosis decreased, neuroinflammation
                    declined, and neurogenesis increased. The implication was
                    profound: aging may be driven not by what the body lacks, but
                    by what it has accumulated.
                  </p>

                  <h3 className="lon-narrative-heading">
                    Translation to Humans &mdash; Kim et al. (2022)
                  </h3>
                  <p className="body-lg">
                    Working with Dr. Dobri Kiprov at{" "}
                    <a
                      href="https://www.globalapheresis.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--accent)",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      Global Apheresis
                    </a>
                    , the Berkeley researchers brought this insight to humans. In
                    a clinical study published in <em>GeroScience</em>, they
                    showed that multiple rounds of TPE in human subjects produced
                    a global shift toward a younger systemic proteome. The study
                    identified 10 novel protein biomarkers of biological age and
                    demonstrated that TPE:
                  </p>

                  <ul className="lon-findings-list">
                    <li>
                      Restored pro-regenerative, anticancer, and apoptotic
                      regulators to youthful levels
                    </li>
                    <li>
                      Produced youthful profiles of myeloid and lymphoid markers
                      in circulating cells
                    </li>
                    <li>Reduced cellular senescence markers</li>
                    <li>Reduced DNA damage markers</li>
                    <li>
                      Normalized key signaling pathways (JAK-STAT, MAPK,
                      TGF-beta, NF-&kappa;B, Toll-like receptor) toward youthful
                      balance
                    </li>
                  </ul>
                </div>

                <div className="alz-publication-cite reveal">
                  <span className="alz-cite-label">Publication</span>
                  Kim D, Kiprov DD, Luellen C, et al. &ldquo;Old plasma dilution
                  reduces human biological age: a clinical study.&rdquo;{" "}
                  <em>GeroScience.</em> 2022;44(6):2701&ndash;2720.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: FUENTEALBA 2025 EVIDENCE ===== */}
        <section className="site-section" id="evidence">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Landmark Trial</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Measuring Rejuvenation &mdash; The 2025 Clinical{" "}
              <span className="serif-italic accent-text">Trial</span>
            </h2>

            <div className="alz-evidence-intro reveal">
              <p className="body-lg">
                In 2025, a randomized, placebo-controlled trial published in{" "}
                <em>Aging Cell</em> provided the strongest evidence to date that
                TPE measurably reduces biological age. Conducted at the Buck
                Institute for Research on Aging in collaboration with Dr.
                Kiprov, this study used multi-omics analysis (epigenomics,
                proteomics, metabolomics, glycomics, and immune cell profiling)
                to comprehensively measure the biological effects of TPE.
              </p>
              <p className="body-lg" style={{ marginTop: "1rem" }}>
                42 healthy adults over age 50 were randomized to different TPE
                regimens or placebo. The regimens included TPE alone and TPE
                combined with intravenous immunoglobulin (IVIG), administered
                in paired sessions &mdash; two treatments in a single week,
                followed by a three-week break, repeated over three cycles for
                a total of six procedures. A monthly TPE arm was also included.
                Treatments were single-blinded. The study tracked changes
                across multiple biological aging clocks and molecular systems.
              </p>
            </div>

            {/* Key findings cards */}
            <div className="alz-results-grid lon-results-grid reveal">
              {fuentealbaResults.map((r, i) => (
                <div
                  key={i}
                  className={`alz-result-card reveal reveal-d${i + 1}`}
                >
                  <div className="alz-result-headline">{r.headline}</div>
                  <div className="alz-result-subline">{r.subline}</div>
                  <div className="alz-result-detail">{r.detail}</div>
                </div>
              ))}
            </div>

            {/* Significance callout */}
            <div className="alz-subgroup-callout reveal">
              <div className="alz-subgroup-label">
                Why This Matters
              </div>
              <p>
                This is the first randomized, placebo-controlled trial to
                demonstrate biological age reduction from TPE using multi-omics
                measurement. It doesn&apos;t just show that blood markers change
                &mdash; it shows coordinated rejuvenation across multiple
                biological systems simultaneously. The study was conducted at
                the Buck Institute, one of the world&apos;s leading aging
                research institutions, lending significant credibility to the
                findings. TPE with IVIG in the paired-session protocol showed the
                most robust rejuvenation response.
              </p>
            </div>

            {/* Kiprov connection */}
            <div className="alz-kiprov-note reveal">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="alz-kiprov-icon"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <p>
                Both the Kim et al. and Fuentealba et al. studies feature Dr.
                Dobri Kiprov as a co-author. The TPE procedures in these studies
                were performed at Global Apheresis &mdash; the same facility
                where{" "}
                <Link
                  href="/about"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Dr. Green
                </Link>{" "}
                practices today. The longevity protocols used at Global
                Apheresis are directly informed by this research.
              </p>
            </div>

            <div className="alz-publication-cite reveal">
              <span className="alz-cite-label">Publication</span>
              Fuentealba M, Kiprov D, Schneider K, et al. &ldquo;Multi-omics
              analysis reveals biomarkers that contribute to biological age
              rejuvenation in response to single-blinded randomized
              placebo-controlled therapeutic plasma exchange.&rdquo;{" "}
              <em>Aging Cell.</em> 2025;(8):e70103.
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: MECHANISM BREAKDOWN ===== */}
        <section
          className="benefits-section site-section"
          id="mechanisms"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-header">
              <div className="section-header-text">
                <div className="section-label-line reveal">
                  <span className="label-text">Mechanisms of Action</span>
                </div>
                <h2 className="h-lg reveal">
                  How TPE Addresses the Mechanisms of{" "}
                  <span className="serif-italic accent-text">Aging</span>
                </h2>
              </div>
            </div>
            <div className="benefits-grid">
              {mechanismCards.map((card, i) => (
                <div
                  key={i}
                  className={`benefit-card reveal reveal-d${Math.min(i + 1, 5)}`}
                >
                  <div className="benefit-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: card.icon }}
                    />
                  </div>
                  <h3>{card.title}</h3>
                  {card.link ? (
                    <p>
                      {card.desc.split(card.linkText!)[0]}
                      <Link
                        href={card.link}
                        style={{
                          color: "var(--accent)",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                        }}
                      >
                        {card.linkText}
                      </Link>
                      {card.desc.split(card.linkText!)[1]}
                    </p>
                  ) : (
                    <p>{card.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: LONGEVITY PROTOCOL ===== */}
        <section className="process-section site-section" id="protocol">
          <div className="site-container">
            <div className="section-header">
              <div className="section-header-text">
                <div className="section-label-line reveal">
                  <span className="label-text">The Protocol</span>
                </div>
                <h2 className="h-lg reveal" style={{ color: "white" }}>
                  The Longevity{" "}
                  <span
                    className="serif-italic"
                    style={{ color: "var(--accent-light)" }}
                  >
                    Protocol
                  </span>
                </h2>
              </div>
            </div>
            <div className="alz-protocol-grid">
              <div className="alz-protocol-card reveal reveal-d1">
                <div className="process-step-num">WHO IT&apos;S FOR</div>
                <h3>The Longevity Patient</h3>
                <p>
                  TPE for longevity is typically sought by proactive,
                  health-conscious individuals who are already investing in their
                  long-term health &mdash; through nutrition, exercise, and other
                  optimization strategies &mdash; and want to address the
                  molecular environment that underlies aging at its source. There
                  is no minimum age, but the published research has focused on
                  adults over 50.
                </p>
              </div>
              <div className="alz-protocol-card reveal reveal-d2">
                <div className="process-step-num">THE PROTOCOL</div>
                <h3>Individualized Treatment</h3>
                <p>
                  Longevity-focused TPE at Global Apheresis is not a
                  one-size-fits-all program. Dr. Green develops individualized
                  protocols based on your health profile, goals, and baseline
                  biomarkers. Common approaches include an initial intensive
                  series (multiple sessions over a compressed period) to achieve
                  a significant plasma reset, followed by periodic maintenance
                  sessions &mdash; quarterly, bi-annually, or as determined by
                  your response. For patients traveling to Mill Valley, flexible
                  scheduling can be arranged.
                </p>
              </div>
              <div className="alz-protocol-card reveal reveal-d3">
                <div className="process-step-num">MONITORING</div>
                <h3>Objective Measurement</h3>
                <p>
                  Biological age and relevant biomarkers are tracked at baseline
                  and over time. This objective measurement allows Dr. Green to
                  assess your response to treatment and adjust your protocol
                  accordingly. The goal is not guesswork &mdash; it is
                  measurable, data-driven optimization.
                </p>
              </div>
              <div className="alz-protocol-card reveal reveal-d4">
                <div className="process-step-num">COMPLEMENTARY</div>
                <h3>Part of a Broader Strategy</h3>
                <p>
                  TPE works alongside &mdash; not instead of &mdash; other
                  longevity strategies. Exercise, nutrition, sleep optimization,
                  and targeted supplementation all complement the systemic reset
                  that TPE provides. Dr. Green can discuss how TPE fits into
                  your broader longevity program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: CTA ===== */}
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
              Start the{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--accent-light)" }}
              >
                Conversation
              </span>
            </h2>
            <p className="reveal">
              Whether you&apos;re exploring longevity interventions for the
              first time or looking to add TPE to an existing optimization
              program, a discovery call with Dr. Green is the place to start.
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
                <Link href="/tpe" className="tpe-cta-pillar-link">
                  &larr; Back to What is TPE?
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
                Explore other applications:
              </span>
              <div className="tpe-cta-link-row">
                <Link
                  href="/tpe-alzheimers"
                  className="tpe-cta-pillar-link"
                >
                  Alzheimer&apos;s
                </Link>
                <span className="tpe-cta-pillar-sep">&middot;</span>
                <Link
                  href="/tpe-autoimmune"
                  className="tpe-cta-pillar-link"
                >
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
    </>
  )
}
