import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Therapeutic Plasma Exchange for Autoimmune Conditions | Dr. Allen P. Green, M.D.",
  description:
    "TPE is an established first-line treatment for many autoimmune conditions, removing the pathogenic antibodies and immune complexes that drive disease. Learn about ASFA-recognized indications, how TPE works for autoimmune disease, and treatment at Global Apheresis.",
  openGraph: {
    title: "TPE for Autoimmune Conditions",
    description:
      "Therapeutic plasma exchange for autoimmune disease — established indications, mechanism of action, conditions treated, and what to expect.",
    url: "https://allenpgreenmd.com/tpe-autoimmune",
  },
}

/* ── Category I Conditions ── */
const categoryI = [
  {
    name: "Myasthenia Gravis (MG)",
    desc: "An autoimmune condition in which antibodies attack acetylcholine receptors at the neuromuscular junction, causing muscle weakness and fatigue. TPE removes anti-AChR antibodies from circulation, providing rapid improvement — particularly critical during myasthenic crisis, where respiratory muscles are affected.",
    category: "ASFA Category I for moderate-to-severe MG and myasthenic crisis",
  },
  {
    name: "Guillain-Barré Syndrome (GBS)",
    desc: "An acute autoimmune attack on the peripheral nervous system, causing progressive weakness that can lead to paralysis. TPE removes the autoantibodies driving nerve damage and is one of two first-line treatments (alongside IVIG). Most effective when initiated early in the disease course.",
    category: "ASFA Category I",
  },
  {
    name: "Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)",
    desc: "The chronic counterpart to GBS — an ongoing autoimmune attack on peripheral nerve myelin causing progressive weakness and sensory changes. TPE removes circulating autoantibodies and inflammatory mediators that sustain the demyelination.",
    category: "ASFA Category I",
  },
  {
    name: "Neuromyelitis Optica Spectrum Disorder (NMOSD)",
    desc: "A severe autoimmune condition affecting the optic nerves and spinal cord, often caused by anti-aquaporin-4 antibodies. TPE removes these pathogenic antibodies and is used during acute attacks, particularly when steroid treatment is insufficient.",
    category: "ASFA Category I for acute attacks",
  },
  {
    name: "Anti-NMDA Receptor Encephalitis",
    desc: "An autoimmune encephalitis caused by antibodies against NMDA receptors in the brain, presenting with psychiatric symptoms, seizures, and movement disorders. TPE removes the pathogenic antibodies from circulation.",
    category: "ASFA Category I",
  },
  {
    name: "Thrombotic Thrombocytopenic Purpura (TTP)",
    desc: "A life-threatening condition in which autoantibodies against ADAMTS13 cause widespread blood clotting in small vessels. TPE is the definitive treatment — removing the autoantibodies and replacing ADAMTS13.",
    category: "ASFA Category I",
    note: "Dr. Green has published research on optimizing treatment in TTP — Yates et al., Blood Vessels, Thrombosis & Hemostasis, 2024.",
  },
]

/* ── Category II Conditions ── */
const categoryII = [
  {
    name: "Multiple Sclerosis (MS) — Acute Attacks",
    desc: "For acute MS relapses that do not respond adequately to high-dose corticosteroids, TPE is an established second-line treatment. It removes inflammatory mediators and autoantibodies contributing to the acute demyelinating attack.",
    category: "ASFA Category II for steroid-refractory acute attacks",
  },
  {
    name: "Systemic Lupus Erythematosus (SLE)",
    desc: "In severe lupus — particularly with renal involvement (lupus nephritis) or catastrophic presentations — TPE removes autoantibodies (including anti-dsDNA), immune complexes, and complement-activating factors.",
    category: "ASFA Category II for severe manifestations",
  },
  {
    name: "Systemic Sclerosis (Scleroderma)",
    desc: "An autoimmune condition causing fibrosis of the skin and internal organs. TPE removes circulating autoantibodies and inflammatory mediators that drive the fibrotic process.",
    note: "Dr. Green presented research on TPE response in systemic sclerosis at the ASFA 2023 Annual Meeting — a poster examining outcomes in two patients.",
  },
]

/* ── Publications ── */
const publications = [
  "Optimizing caplacizumab dosing in immune-mediated TTP (Yates, Green, Sarode et al., Blood Vessels, Thrombosis & Hemostasis, 2024)",
  "TPE response in systemic sclerosis (ASFA 2023 poster)",
  "TPE in hyperviscosity syndrome associated with juvenile rheumatoid arthritis (Green et al., J Clin Apheresis, 2021)",
]

export default function TpeAutoimmunePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Therapeutic Plasma Exchange for Autoimmune Conditions",
    description:
      "Guide to TPE for autoimmune disease — ASFA-recognized indications, mechanism of action, conditions treated, clinical experience, and treatment protocols.",
    url: "https://allenpgreenmd.com/tpe-autoimmune",
    about: {
      "@type": "MedicalTherapy",
      name: "Therapeutic Plasma Exchange for Autoimmune Disease",
      description:
        "Application of therapeutic plasma exchange to remove pathogenic autoantibodies and immune complexes in autoimmune conditions",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <main>
        {/* ===== SECTION 1: HERO ===== */}
        <section className="tpe-hero" id="intro">
          <div className="tpe-hero-inner">
            <div className="section-label-line reveal">
              <span className="label-text">Autoimmune Conditions</span>
            </div>
            <h1 className="h-display reveal">
              Therapeutic Plasma Exchange for Autoimmune{" "}
              <span className="serif-italic accent-text">Disease</span>
            </h1>
            <p className="tpe-hero-sub reveal">
              TPE is one of the most established treatments in apheresis medicine
              &mdash; recognized as first-line therapy for multiple autoimmune
              conditions by the American Society for Apheresis.
            </p>
            <div className="tpe-hero-anchor reveal">
              <p className="body-lg">
                Autoimmune diseases occur when the immune system produces
                antibodies that attack the body&apos;s own tissues. These
                pathogenic autoantibodies, along with inflammatory immune
                complexes and cytokines, circulate in the blood &mdash; and
                that&apos;s exactly where{" "}
                <Link
                  href="/tpe"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  therapeutic plasma exchange
                </Link>{" "}
                intervenes. By removing the plasma that carries these
                disease-driving factors and replacing it with clean albumin
                solution, TPE can rapidly reduce disease activity and support
                recovery.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: MECHANISM ===== */}
        <section
          className="site-section"
          id="mechanism"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Mechanism of Action</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Why TPE Works for Autoimmune{" "}
              <span className="serif-italic accent-text">Disease</span>
            </h2>

            <div className="tpe-science-grid">
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <h3 className="lon-narrative-heading">
                    The Autoimmune Cycle
                  </h3>
                  <p className="body-lg">
                    In autoimmune disease, the immune system generates antibodies
                    (autoantibodies) that mistakenly target the body&apos;s own
                    tissues &mdash; nerve cells, muscle receptors, blood vessel
                    walls, or organs depending on the condition. These
                    autoantibodies circulate in the blood, continuously reaching
                    their targets and sustaining the attack. Alongside them,
                    inflammatory cytokines and immune complexes amplify the
                    damage, creating a self-perpetuating cycle of immune
                    activation and tissue destruction.
                  </p>

                  <h3 className="lon-narrative-heading">
                    How TPE Breaks the Cycle
                  </h3>
                  <p className="body-lg">
                    Therapeutic plasma exchange physically removes these
                    pathogenic factors from circulation. In a single procedure, a
                    full plasma volume exchange can remove approximately 60&ndash;70%
                    of circulating autoantibodies, immune complexes, complement
                    factors, and inflammatory cytokines. By rapidly reducing the
                    concentration of disease-driving molecules, TPE can halt or
                    slow the immune attack, giving the body &mdash; and
                    concurrent immunosuppressive therapies &mdash; room to work.
                  </p>

                  <h3 className="lon-narrative-heading">
                    The Albumin Advantage
                  </h3>
                  <p className="body-lg">
                    The replacement fluid &mdash; 5% albumin solution &mdash; is
                    immunologically neutral. It does not contain the
                    autoantibodies or inflammatory mediators that were removed. It
                    does provide physiologic oncotic support and carries inherent
                    anti-inflammatory and antioxidant properties. The result is a
                    cleaner immunological environment that supports immune
                    rebalancing.
                  </p>

                  <h3 className="lon-narrative-heading">
                    Complementing Other Therapies
                  </h3>
                  <p className="body-lg">
                    TPE is most effective as part of a comprehensive treatment
                    approach. It works alongside immunosuppressive medications,
                    corticosteroids, and targeted biologic therapies. While these
                    medications take days to weeks to reach full effect, TPE
                    provides immediate reduction in disease-driving factors
                    &mdash; making it particularly valuable during acute flares,
                    rapid deterioration, or as a bridge to longer-term
                    immunotherapy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: CONDITIONS TREATED ===== */}
        <section className="site-section" id="conditions">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">ASFA-Recognized Indications</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Conditions Treated with Therapeutic Plasma{" "}
              <span className="serif-italic accent-text">Exchange</span>
            </h2>

            <div className="alz-evidence-intro reveal">
              <p className="body-lg">
                The American Society for Apheresis (ASFA) publishes
                evidence-based guidelines that categorize TPE indications by the
                strength of clinical evidence. Category I indicates TPE is a
                standard first-line therapy. Category II indicates TPE is
                well-established as second-line or supportive treatment. Many
                autoimmune conditions carry Category I or II designations
                &mdash; reflecting decades of clinical evidence and thousands of
                patients treated.
              </p>
            </div>

            {/* Clinical context callout */}
            <div className="alz-subgroup-callout reveal">
              <div className="alz-subgroup-label">
                Important Clinical Context
              </div>
              <p>
                Many Category I conditions &mdash; such as myasthenic crisis,
                acute GBS, and TTP &mdash; present as medical emergencies that
                are treated in hospital-based apheresis units. At{" "}
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
                ,{" "}
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
                focuses on outpatient autoimmune applications: chronic
                maintenance TPE for conditions like CIDP and refractory
                myasthenia gravis, management of autoimmune conditions that
                don&apos;t require inpatient care, and ongoing support for
                patients whose acute hospital-based treatment is complete but who
                benefit from continued TPE.{" "}
                <strong>
                  If your condition is emergent or urgent, please call 911 or go
                  to your nearest emergency room.
                </strong>
              </p>
            </div>

            {/* Category I */}
            <div className="auto-category-label reveal">
              <span className="auto-category-badge">Category I</span>
              <span className="auto-category-desc">
                First-Line Therapy
              </span>
            </div>
            <div className="auto-conditions-grid reveal">
              {categoryI.map((c, i) => (
                <div
                  key={i}
                  className={`auto-condition-card reveal reveal-d${Math.min(i + 1, 5)}`}
                >
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <div className="auto-condition-category">{c.category}</div>
                  {c.note && (
                    <div className="auto-condition-note">{c.note}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Category II */}
            <div
              className="auto-category-label reveal"
              style={{ marginTop: "3rem" }}
            >
              <span className="auto-category-badge">Category II</span>
              <span className="auto-category-desc">
                Second-Line / Supportive Therapy
              </span>
            </div>
            <div className="auto-conditions-grid reveal">
              {categoryII.map((c, i) => (
                <div
                  key={i}
                  className={`auto-condition-card reveal reveal-d${Math.min(i + 1, 5)}`}
                >
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  {"category" in c && c.category && (
                    <div className="auto-condition-category">{c.category}</div>
                  )}
                  {c.note && (
                    <div className="auto-condition-note">{c.note}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional indications note */}
            <div className="alz-kiprov-note reveal" style={{ marginTop: "2rem" }}>
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
                TPE is recognized for numerous additional autoimmune and
                inflammatory conditions beyond those listed above, including
                autoimmune hemolytic anemia, pemphigus vulgaris, vasculitis
                syndromes, and others. ASFA guidelines categorize over 80
                conditions where apheresis may be indicated. Dr. Green evaluates
                each patient&apos;s specific condition and clinical situation to
                determine whether TPE is appropriate.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: DR. GREEN'S EXPERIENCE ===== */}
        <section
          className="site-section"
          id="experience"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Clinical Background</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Clinical Experience in Autoimmune{" "}
              <span className="serif-italic accent-text">Apheresis</span>
            </h2>

            <div className="tpe-science-grid">
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <p className="body-lg">
                    Dr. Green&apos;s training in therapeutic apheresis at UT
                    Southwestern Medical Center, under Dr. Ravi Sarode, provided
                    deep experience in autoimmune indications. His residency
                    included extensive hands-on management of TPE for conditions
                    ranging from TTP and myasthenia gravis to GBS and systemic
                    sclerosis.
                  </p>
                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    His published research touches directly on autoimmune
                    applications:
                  </p>

                  <ul className="lon-findings-list">
                    {publications.map((pub, i) => (
                      <li key={i}>{pub}</li>
                    ))}
                  </ul>

                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    This clinical and research experience informs the autoimmune
                    protocols used at{" "}
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
                    </a>{" "}
                    today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: WHAT TO EXPECT — PROTOCOL ===== */}
        <section className="process-section site-section" id="protocol">
          <div className="site-container">
            <div className="section-header">
              <div className="section-header-text">
                <div className="section-label-line reveal">
                  <span className="label-text">Treatment</span>
                </div>
                <h2 className="h-lg reveal" style={{ color: "white" }}>
                  What Treatment Looks{" "}
                  <span
                    className="serif-italic"
                    style={{ color: "var(--accent-light)" }}
                  >
                    Like
                  </span>
                </h2>
              </div>
            </div>
            <div className="alz-protocol-grid">
              <div className="alz-protocol-card reveal reveal-d1">
                <div className="process-step-num">ACUTE CARE</div>
                <h3>Acute Flares</h3>
                <p>
                  When autoimmune disease flares &mdash; increased weakness in
                  myasthenia gravis, worsening symptoms in CIDP, or a lupus
                  flare &mdash; a focused series of 5&ndash;7 TPE sessions over
                  1&ndash;2 weeks can rapidly reduce circulating autoantibodies
                  and bring disease activity under control. These sessions are
                  coordinated with your neurologist or rheumatologist and are
                  appropriate once any acute emergency has been stabilized.
                </p>
              </div>
              <div className="alz-protocol-card reveal reveal-d2">
                <div className="process-step-num">ONGOING</div>
                <h3>Chronic Management</h3>
                <p>
                  For chronic conditions like CIDP or refractory autoimmune
                  disease, TPE may be used as ongoing maintenance &mdash;
                  periodic sessions to keep autoantibody levels suppressed and
                  disease activity controlled. Frequency is tailored to your
                  clinical response.
                </p>
              </div>
              <div className="alz-protocol-card reveal reveal-d3">
                <div className="process-step-num">COORDINATED</div>
                <h3>Working With Your Team</h3>
                <p>
                  TPE for autoimmune conditions is most effective as part of a
                  coordinated treatment plan. Dr. Green works alongside your
                  existing specialists &mdash; neurologists, rheumatologists,
                  hematologists &mdash; to integrate TPE into your overall
                  management. He does not replace your primary specialist; he
                  adds the apheresis expertise.
                </p>
              </div>
              <div className="alz-protocol-card reveal reveal-d4">
                <div className="process-step-num">LOGISTICS</div>
                <h3>For Patients Traveling</h3>
                <p>
                  Flexible scheduling can be arranged for patients coming to Mill
                  Valley from outside the Bay Area. Contact our office to discuss
                  logistics for out-of-area treatment.
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
              Discuss Your{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--accent-light)" }}
              >
                Condition
              </span>
            </h2>
            <p className="reveal">
              If you&apos;ve been diagnosed with an autoimmune condition and want
              to understand whether therapeutic plasma exchange could be part of
              your treatment plan, schedule a complimentary discovery call with
              Dr. Green.
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
                <Link href="/tpe-longevity" className="tpe-cta-pillar-link">
                  Longevity
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
