import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "What is Therapeutic Plasma Exchange (TPE)? | Dr. Allen P. Green, M.D.",
  description:
    "Therapeutic plasma exchange (TPE) removes old plasma and replaces it with albumin solution, clearing inflammatory compounds linked to aging and disease. Learn how TPE works, what to expect, and its clinical applications.",
  openGraph: {
    title: "What is Therapeutic Plasma Exchange (TPE)?",
    description:
      "A comprehensive guide to therapeutic plasma exchange — how it works, what it treats, and why it matters for longevity and disease management.",
    url: "https://allenpgreenmd.com/tpe",
  },
}

const faqItems = [
  {
    q: "What is the difference between TPE, PLEX, and plasmapheresis?",
    a: "These terms are used interchangeably. Therapeutic plasma exchange (TPE) is the clinical term. PLEX is the common medical abbreviation. Plasmapheresis technically refers to any procedure that separates plasma from blood, but in practice it\u2019s used synonymously with TPE. At Global Apheresis, we use all three terms to mean the same procedure.",
  },
  {
    q: "Is TPE FDA-approved?",
    a: "TPE is an FDA-cleared medical procedure with established indications recognized by the American Society for Apheresis (ASFA). ASFA publishes evidence-based guidelines categorizing TPE indications by strength of evidence \u2014 from Category I (first-line treatment) through Category IV. The specific indication determines the category; for example, many autoimmune conditions are Category I, while Alzheimer\u2019s disease is currently Category III (optimum role not established, decision-making should be individualized).",
  },
  {
    q: "How many sessions will I need?",
    a: "This depends entirely on your goals and clinical situation. Autoimmune flares may require a focused series of 5\u20137 sessions. Alzheimer\u2019s protocols (based on the AMBAR trial design) involve structured series over weeks to months. Longevity and optimization patients may do periodic maintenance sessions \u2014 for example, quarterly or twice yearly. Dr. Green develops a personalized protocol during your consultation.",
  },
  {
    q: "Does insurance cover TPE?",
    a: "Insurance coverage depends on the indication. TPE for established medical conditions (such as myasthenia gravis, TTP, or Guillain-Barr\u00e9 syndrome) is typically covered. TPE for longevity optimization or off-label applications may not be covered by insurance. The Global Apheresis team can discuss costs and options during your discovery call.",
  },
  {
    q: "What are the risks or side effects?",
    a: "TPE is considered very safe when performed by a trained specialist. The most common side effects are mild and temporary: tingling or numbness around the lips or fingers (from citrate anticoagulant, easily managed with calcium supplementation), mild fatigue, light-headedness, or coolness during the procedure. Serious complications \u2014 including allergic reactions, infection at the IV site, or significant drops in blood pressure \u2014 are rare. Dr. Green monitors patients throughout every procedure.",
  },
  {
    q: "How is TPE different from IV therapy, ozone therapy, or other blood treatments?",
    a: "TPE is fundamentally different from IV infusions, ozone therapy, or chelation. Those treatments add substances to your blood. TPE removes your entire plasma volume and replaces it \u2014 it is a full exchange, not a supplement. This makes it the most comprehensive blood-based intervention available, addressing the full spectrum of accumulated harmful compounds rather than targeting one substance at a time.",
  },
  {
    q: "Where is the procedure performed?",
    a: "Dr. Green performs TPE at Global Apheresis, located at 655 Redwood Highway, Suite 370, Mill Valley, CA 94941. The facility is purpose-built for apheresis procedures with advanced equipment and a comfortable patient environment.",
  },
]

const applicationCards = [
  {
    title: "Alzheimer\u2019s Disease & Cognitive Decline",
    desc: "TPE removes amyloid-\u03B2 and inflammatory proteins linked to neurodegeneration. The landmark AMBAR trial (322 patients) demonstrated that plasma exchange with albumin replacement slowed cognitive and functional decline in mild and moderate Alzheimer\u2019s disease \u2014 with some mild-stage patients showing improvement from baseline.",
    href: "/tpe-alzheimers",
    delay: "reveal-d1",
  },
  {
    title: "Longevity & Biological Age Reversal",
    desc: "Research has shown that diluting old plasma and replacing it with albumin rejuvenates tissues, activates stem cells, and reverses biomarkers of aging across multiple organ systems. TPE is the most direct clinical application of this science.",
    href: "/tpe-longevity",
    delay: "reveal-d2",
  },
  {
    title: "Autoimmune Conditions",
    desc: "TPE removes pathogenic autoantibodies, immune complexes, and inflammatory mediators driving autoimmune disease. It is an established treatment for conditions including myasthenia gravis, Guillain-Barr\u00e9 syndrome, multiple sclerosis, CIDP, and many others \u2014 with multiple ASFA Category I and II indications.",
    href: "/tpe-autoimmune",
    delay: "reveal-d3",
  },
  {
    title: "Detoxification & Environmental Toxins",
    desc: "Modern life exposes us to persistent organic pollutants, heavy metals, and environmental toxins that accumulate in plasma. TPE physically removes these compounds, offering a direct detoxification approach that supplements the body\u2019s natural elimination pathways.",
    href: "/tpe-detox",
    delay: "reveal-d4",
  },
]

const steps = [
  {
    num: "STEP 01",
    title: "Consultation & Evaluation",
    desc: "Before any procedure, Dr. Green conducts a comprehensive evaluation. This includes medical history review, current medications, lab work (CBC, CMP, coagulation panel, inflammatory markers), and a discussion of goals \u2014 whether longevity optimization, cognitive support, autoimmune management, or detoxification. A personalized treatment plan is developed based on your specific needs.",
  },
  {
    num: "STEP 02",
    title: "Vascular Access",
    desc: "Two peripheral IV lines are placed, one in each arm \u2014 similar to a routine blood draw. The procedure is performed in a comfortable clinical setting at Global Apheresis in Mill Valley, CA.",
  },
  {
    num: "STEP 03",
    title: "Plasma Separation & Exchange",
    desc: "Blood flows through an advanced apheresis device that uses centrifugal technology to gently separate plasma from blood cells. The old plasma \u2014 containing accumulated inflammatory compounds, toxins, and senescent factors \u2014 is removed and discarded. It is replaced in real time with fresh 5% albumin solution.",
  },
  {
    num: "STEP 04",
    title: "Return & Recovery",
    desc: "Your blood cells, now suspended in clean albumin solution, are returned to your body through the second IV line. The entire procedure typically takes 2\u20134 hours. Most patients find it comfortable and well-tolerated \u2014 many read, work on their laptops, or rest during the session. There is minimal downtime; most patients resume normal activities the same day.",
  },
  {
    num: "STEP 05",
    title: "Follow-Up & Protocol",
    desc: "Treatment protocols are tailored to each patient\u2019s goals. Some applications (such as Alzheimer\u2019s support) follow structured multi-session protocols. Others (longevity optimization) may involve periodic maintenance sessions. Dr. Green monitors your response through follow-up labs and ongoing clinical assessment.",
  },
]

const benefits = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: "Clears Age-Related Compounds",
    desc: "Removes inflammatory cytokines (IL-6, TNF-\u03B1), oxidized lipids, senescent cell secretions, and misfolded proteins that accumulate with age. These compounds impair cellular function and drive the chronic low-grade inflammation known as \u201Cinflammaging.\u201D",
    delay: "reveal-d1",
  },
  {
    icon: '<path d="M21.5 2v6h-6"/><path d="M2.5 22v-6h6"/><path d="M22.1 11.5A10 10 0 0 0 3.5 4.3l-1 1.2"/><path d="M1.9 12.5a10 10 0 0 0 18.6 7.2l1-1.2"/>',
    title: "Resets Cellular Signaling",
    desc: "Aged plasma carries signaling molecules that tell your tissues to behave old. By replacing this environment with clean albumin, TPE restores youthful intercellular communication \u2014 organ systems begin functioning as they did at a younger biological age.",
    delay: "reveal-d2",
  },
  {
    icon: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
    title: "Reduces Systemic Inflammation",
    desc: "Albumin is a potent antioxidant and anti-inflammatory protein. The replacement solution actively suppresses inflammatory pathways, not just through dilution but through albumin\u2019s direct biochemical properties.",
    delay: "reveal-d3",
  },
  {
    icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    title: "Activates Stem Cell Populations",
    desc: "Research has demonstrated that removing aged plasma factors and providing a clean signaling environment reawakens dormant stem cells, enhancing the body\u2019s natural regenerative and repair capacity.",
    delay: "reveal-d4",
  },
  {
    icon: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    title: "Improves Cognitive Function",
    desc: "By clearing neurotoxic proteins (including amyloid-\u03B2 and inflammatory mediators that cross the blood-brain barrier), TPE has shown cognitive benefits in both Alzheimer\u2019s patients and those seeking cognitive optimization.",
    delay: "reveal-d5",
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    title: "Supports Immune Rebalancing",
    desc: "For patients with autoimmune conditions, TPE removes the pathogenic antibodies and immune complexes driving disease activity, allowing the immune system to reset toward healthier function.",
    delay: "reveal-d5",
  },
]

export default function TpePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "What is Therapeutic Plasma Exchange (TPE)?",
    description:
      "Comprehensive guide to therapeutic plasma exchange — mechanism, process, benefits, clinical applications, and frequently asked questions.",
    url: "https://allenpgreenmd.com/tpe",
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
      medicalSpecialty: "Clinical Pathology",
    },
    about: {
      "@type": "MedicalProcedure",
      name: "Therapeutic Plasma Exchange",
      alternateName: ["TPE", "PLEX", "Plasmapheresis"],
      procedureType: "Therapeutic",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalWebPageSchema),
        }}
      />
      <main>
        {/* ===== SECTION 1: HERO / INTRO ===== */}
        <section className="tpe-hero" id="intro">
          <div className="tpe-hero-inner">
            <div className="section-label-line reveal">
              <span className="label-text">The Foundation</span>
            </div>
            <h1 className="h-display reveal">
              What is Therapeutic Plasma{" "}
              <span className="serif-italic accent-text">Exchange?</span>
            </h1>
            <p
              className="tpe-hero-sub reveal"
              style={{ marginTop: "1.5rem" }}
            >
              A clinically validated procedure that removes aged plasma and
              replaces it with fresh albumin solution &mdash; clearing the
              inflammatory compounds, oxidized proteins, and senescent factors
              that drive aging and disease.
            </p>
            <div className="tpe-hero-anchor reveal">
              <p className="body-lg">
                Therapeutic plasma exchange (TPE), also called plasmapheresis
                or PLEX, is the most direct way to address what accumulates in
                your blood over time. By removing old plasma and replacing it
                with 5% albumin &mdash; a powerful antioxidant and
                anti-inflammatory protein &mdash; TPE resets the biochemical
                environment your cells operate in. The result is reduced
                inflammation, improved cellular signaling, and a measurable
                shift toward younger biological function.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: THE SCIENCE — WHY PLASMA MATTERS ===== */}
        <section
          className="site-section"
          id="science"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="tpe-science-grid">
              <div className="tpe-science-content">
                <div className="section-label-line reveal">
                  <span className="label-text">The Science</span>
                </div>
                <h2 className="h-lg reveal" style={{ marginBottom: "2rem" }}>
                  Why Plasma{" "}
                  <span className="serif-italic accent-text">Matters</span>
                </h2>

                <div className="tpe-science-text reveal">
                  <p className="body-lg">
                    Plasma is the liquid portion of your blood, comprising
                    roughly 55% of total blood volume. It carries proteins,
                    hormones, nutrients, antibodies, and waste products. Every
                    cell in your body is influenced by what&apos;s circulating
                    in plasma &mdash; it is the medium through which your
                    organs communicate, your immune system operates, and your
                    tissues receive the signals that determine how they
                    function.
                  </p>

                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    Over time, plasma becomes a reservoir of everything that
                    has gone wrong. Inflammatory cytokines (IL-6, TNF-&alpha;,
                    and others) accumulate. Oxidized LDL builds up. Senescent
                    cells secrete a cocktail of damaging molecules known as
                    the SASP &mdash; the senescence-associated secretory
                    phenotype. Autoantibodies, environmental toxins, and
                    misfolded proteins (including amyloid-&beta; and
                    tau-related fragments linked to{" "}
                    <Link
                      href="/tpe-alzheimers"
                      style={{
                        color: "var(--accent)",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      Alzheimer&apos;s disease
                    </Link>
                    ) all collect in this fluid. The plasma that once
                    nourished your cells increasingly tells them to inflame,
                    degrade, and age.
                  </p>

                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    This is where the dilution hypothesis becomes critical.
                    Research has demonstrated that simply diluting old plasma
                    &mdash; replacing it with saline and albumin &mdash;
                    rejuvenates tissues, activates stem cells, and reverses
                    markers of aging in multiple organ systems. This insight
                    emerged from parabiosis research and has been validated in
                    subsequent human studies. The implication is striking: much
                    of what we call &ldquo;aging&rdquo; may be driven not by
                    what the body lacks, but by what has accumulated in the
                    blood.
                  </p>

                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    And the replacement fluid matters. 5% albumin isn&apos;t
                    just a filler. It is the most abundant protein in human
                    plasma, a potent antioxidant that binds and neutralizes
                    toxins, and has well-documented anti-inflammatory
                    properties. Replacing plasma with albumin solution
                    provides active therapeutic benefit &mdash; not just
                    dilution, but a biochemical reset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: HOW TPE WORKS — THE PROCESS ===== */}
        <section className="process-section site-section" id="process">
          <div className="site-container">
            <div className="section-header">
              <div className="section-header-text">
                <div className="section-label-line reveal">
                  <span className="label-text">The Procedure</span>
                </div>
                <h2 className="h-lg reveal" style={{ color: "white" }}>
                  How TPE Works &mdash; Step by{" "}
                  <span
                    className="serif-italic"
                    style={{ color: "var(--accent-light)" }}
                  >
                    Step
                  </span>
                </h2>
                <p className="body-lg reveal" style={{ marginTop: "1rem" }}>
                  A safe, well-established procedure performed by{" "}
                  <Link
                    href="/about"
                    style={{
                      color: "var(--accent-light)",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Dr. Green
                  </Link>{" "}
                  in a comfortable clinical setting with advanced apheresis
                  equipment.
                </p>
              </div>
            </div>
            <div className="process-steps tpe-process-steps">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`process-step reveal reveal-d${Math.min(i + 1, 5)}`}
                >
                  <div className="process-step-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="process-footer reveal">
              <p>
                <strong>Session Duration:</strong> Each TPE session typically
                takes 2&ndash;4 hours. Most patients find the procedure
                comfortable and well-tolerated.
              </p>
              <a
                href="https://globalapheresis.com/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Schedule a Call <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: CLINICAL APPLICATIONS ===== */}
        <section
          className="conditions-section site-section"
          id="applications"
        >
          <div className="site-container">
            <div className="section-header">
              <div className="section-header-text">
                <div className="section-label-line reveal">
                  <span className="label-text">Applications</span>
                </div>
                <h2 className="h-lg reveal">
                  Clinical Applications of Therapeutic Plasma{" "}
                  <span className="serif-italic accent-text">Exchange</span>
                </h2>
              </div>
            </div>
            <p
              className="body-lg reveal"
              style={{
                maxWidth: 820,
                marginBottom: "2.5rem",
                marginTop: "-2rem",
              }}
            >
              TPE is not a single-purpose procedure. Its mechanism &mdash;
              clearing harmful plasma contents and replacing them with
              protective albumin &mdash; has demonstrated clinical relevance
              across multiple areas of medicine. At{" "}
              <a
                href="https://globalapheresis.com"
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
              , Dr. Green applies TPE in four primary domains:
            </p>
            <div className="conditions-grid">
              {applicationCards.map((c, i) => (
                <Link
                  key={i}
                  href={c.href}
                  className={`condition-card reveal ${c.delay}`}
                >
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <span className="condition-card-link">
                    Learn more <span className="arrow">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: BENEFITS — EXPANDED DETAIL ===== */}
        <section
          className="benefits-section site-section"
          id="benefits"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-header">
              <div className="section-header-text">
                <div className="section-label-line reveal">
                  <span className="label-text">Transformative Results</span>
                </div>
                <h2 className="h-lg reveal">
                  The Benefits of Therapeutic Plasma{" "}
                  <span className="serif-italic accent-text">Exchange</span>
                </h2>
              </div>
            </div>
            <div className="benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} className={`benefit-card reveal ${b.delay}`}>
                  <div className="benefit-icon">
                    <svg
                      viewBox="0 0 24 24"
                      dangerouslySetInnerHTML={{ __html: b.icon }}
                    />
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: WHAT TO EXPECT — PATIENT EXPERIENCE ===== */}
        <section
          className="site-section"
          id="what-to-expect"
          style={{ background: "var(--bg)" }}
        >
          <div className="site-container">
            <div className="tpe-expect-content">
              <div className="section-label-line reveal">
                <span className="label-text">Patient Experience</span>
              </div>
              <h2 className="h-lg reveal" style={{ marginBottom: "2.5rem" }}>
                What to{" "}
                <span className="serif-italic accent-text">Expect</span>
              </h2>

              <div className="tpe-expect-grid">
                <div className="tpe-expect-card reveal reveal-d1">
                  <div className="tpe-expect-card-label">
                    Before Your First Session
                  </div>
                  <p className="body-md">
                    Dr. Green will order baseline lab work (CBC, CMP,
                    coagulation studies, and inflammatory markers) and review
                    your medical history. Come to your appointment in
                    comfortable clothes with sleeves that can be rolled up
                    above the elbow. Feel free to bring a laptop, book, or
                    headphones. Plan a light snack for afterward.
                  </p>
                </div>

                <div className="tpe-expect-card reveal reveal-d2">
                  <div className="tpe-expect-card-label">
                    During the Procedure
                  </div>
                  <p className="body-md">
                    The session takes 2&ndash;4 hours. You&apos;ll be seated
                    in a comfortable reclining chair with two IVs placed, one
                    in each arm. Mild tingling or coolness is normal &mdash;
                    this is from the citrate anticoagulant and is easily
                    managed. Most patients describe the experience as no more
                    uncomfortable than giving blood. Many read, work, or rest
                    throughout.
                  </p>
                </div>

                <div className="tpe-expect-card reveal reveal-d3">
                  <div className="tpe-expect-card-label">
                    After the Procedure
                  </div>
                  <p className="body-md">
                    Mild fatigue is common for a few hours. Most patients
                    resume normal activities the same day. Some report feeling
                    noticeably better within 24&ndash;48 hours &mdash;
                    improved energy, mental clarity, and reduced joint
                    stiffness. Dr. Green follows up with post-procedure labs
                    and clinical assessment.
                  </p>
                </div>

                <div className="tpe-expect-card reveal reveal-d4">
                  <div className="tpe-expect-card-label">Safety Profile</div>
                  <p className="body-md">
                    TPE is one of the most well-established procedures in
                    transfusion medicine, with decades of clinical use across
                    thousands of hospitals worldwide. When performed by a
                    trained specialist, serious complications are rare. Dr.
                    Green has personally performed over 500 TPE procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: FAQ ===== */}
        <section
          className="site-section"
          id="faq"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="tpe-faq-content">
              <div className="section-label-line reveal">
                <span className="label-text">Common Questions</span>
              </div>
              <h2 className="h-lg reveal" style={{ marginBottom: "2.5rem" }}>
                Frequently Asked{" "}
                <span className="serif-italic accent-text">Questions</span>
              </h2>

              <div className="tpe-faq-list">
                {faqItems.map((item, i) => (
                  <details
                    key={i}
                    className={`tpe-faq-item reveal reveal-d${Math.min(i + 1, 5)}`}
                  >
                    <summary className="tpe-faq-question">
                      <span>{item.q}</span>
                      <svg
                        className="tpe-faq-chevron"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="tpe-faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: CTA ===== */}
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
                Get Started
              </span>
            </div>
            <h2 className="h-lg reveal">
              Ready to Learn{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--accent-light)" }}
              >
                More?
              </span>
            </h2>
            <p className="reveal">
              Schedule a complimentary discovery call with Dr. Green to discuss
              whether therapeutic plasma exchange is right for your goals.
            </p>
            <div className="cta-actions reveal">
              <a
                href="https://globalapheresis.com/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Book Discovery Call <span className="arrow">&rarr;</span>
              </a>
            </div>
            <div className="tpe-cta-links reveal">
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Or explore specific applications:
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
    </>
  )
}
