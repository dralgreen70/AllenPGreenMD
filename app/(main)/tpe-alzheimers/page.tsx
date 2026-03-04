import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Therapeutic Plasma Exchange for Alzheimer's Disease | Dr. Allen P. Green, M.D.",
  description:
    "TPE removes amyloid-β and inflammatory proteins linked to Alzheimer's. The AMBAR trial demonstrated plasma exchange slowed cognitive and functional decline in mild and moderate Alzheimer's disease. Learn about the evidence, the protocol, and how TPE compares to other treatments.",
  openGraph: {
    title: "TPE for Alzheimer's Disease & Cognitive Decline",
    description:
      "Clinical evidence for therapeutic plasma exchange in Alzheimer's — AMBAR trial results, mechanism of action, treatment protocol, and comparison with anti-amyloid antibodies.",
    url: "https://allenpgreenmd.com/tpe-alzheimers",
  },
}

const ambarResults = [
  {
    headline: "52% less functional decline",
    subline: "compared to placebo",
    detail: "ADCS-ADL \u00B7 p = .03",
  },
  {
    headline: "66% less cognitive decline",
    subline: "compared to placebo",
    detail: "ADAS-Cog \u00B7 p = .06 (trend)",
  },
  {
    headline: "71% less clinical dementia decline",
    subline: "compared to placebo",
    detail: "CDR-SB \u00B7 p = .002",
  },
  {
    headline: "100% less global clinical decline",
    subline: "compared to placebo",
    detail: "ADCS-CGIC \u00B7 p < .0001",
  },
]

const argentinaResults = [
  {
    headline: "45% less cognitive decline",
    subline: "compared to controls",
    detail: "MMSE \u00B7 p < .001",
  },
  {
    headline: "88% less immediate memory decline",
    subline: "compared to controls",
    detail: "p < .001",
  },
  {
    headline: "74% less delayed memory decline",
    subline: "compared to controls",
    detail: "p = .04",
  },
]

const comparisonData = [
  {
    treatment: "Therapeutic Plasma Exchange (TPE)",
    mechanism:
      "Removes full spectrum of neurotoxic and inflammatory factors from blood (amyloid-\u03B2, cytokines, oxidized proteins); replaces with protective albumin",
    evidence:
      "AMBAR trial \u2014 52\u201371% less cognitive and functional decline; 2025 Argentina real-world study confirming results",
    administration:
      "In-clinic procedure, 2\u20134 hours per session. Protocol: 6 weekly sessions followed by monthly maintenance",
    ariaRisk:
      "No ARIA risk. Most common side effects are mild (tingling from citrate, temporary fatigue)",
    stage: "Mild to moderate Alzheimer\u2019s disease",
  },
  {
    treatment: "Lecanemab (Leqembi)",
    mechanism:
      "Anti-amyloid monoclonal antibody; targets soluble amyloid-\u03B2 protofibrils and plaques",
    evidence:
      "Clarity AD trial \u2014 27% less decline on CDR-SB at 18 months (p < .001). FDA fully approved July 2023",
    administration:
      "IV infusion every 2 weeks. Requires amyloid PET or CSF confirmation. Regular MRI monitoring",
    ariaRisk:
      "~13% ARIA-E (brain edema/effusions); ~17% ARIA-H (microhemorrhages). Higher risk in ApoE4 carriers. Rare fatal cases reported",
    stage:
      "Early-stage AD (MCI and mild dementia) with confirmed amyloid pathology",
  },
  {
    treatment: "Donanemab (Kisunla)",
    mechanism:
      "Anti-amyloid monoclonal antibody; targets deposited amyloid-\u03B2 plaques (N3pG form)",
    evidence:
      "TRAILBLAZER-ALZ 2 \u2014 ~35% less decline on CDR-SB at 18 months. FDA approved July 2024. Treatment can stop when amyloid cleared",
    administration:
      "Monthly IV infusion. Requires amyloid PET confirmation. Regular MRI monitoring",
    ariaRisk:
      "~24% ARIA-E; ~31% ARIA-H. Significantly higher than lecanemab. ApoE4 homozygotes at greatest risk. Deaths reported",
    stage: "Early-stage AD with confirmed amyloid pathology",
  },
  {
    treatment: "Standard Symptomatic Therapies (Donepezil, Rivastigmine, Galantamine, Memantine)",
    mechanism:
      "Symptomatic \u2014 increases acetylcholine levels or modulates glutamate to improve neural signaling. Does not modify disease course",
    evidence:
      "Modest, temporary improvement in cognition and function. Decades of clinical use with well-understood safety profiles",
    administration: "Oral daily pill or transdermal patch. No imaging requirements",
    ariaRisk:
      "No ARIA risk. Common side effects include nausea, diarrhea, insomnia",
    stage: "Mild to severe AD (symptom management only)",
  },
]

const tableColumns = [
  { key: "mechanism", label: "Mechanism" },
  { key: "evidence", label: "Key Evidence" },
  { key: "administration", label: "Administration" },
  { key: "ariaRisk", label: "ARIA Risk" },
  { key: "stage", label: "Stage Targeted" },
]

export default function TpeAlzheimersPage() {
  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Therapeutic Plasma Exchange for Alzheimer's Disease",
    description:
      "Evidence-based guide to TPE for Alzheimer's \u2014 AMBAR trial results, mechanism, treatment protocol, and comparison with lecanemab, donanemab, and other treatments.",
    url: "https://allenpgreenmd.com/tpe-alzheimers",
    about: {
      "@type": "MedicalCondition",
      name: "Alzheimer's Disease",
      alternateName: ["AD", "Alzheimer Disease"],
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
    specialty: "Clinical Pathology",
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
                Alzheimer&apos;s &amp; Cognitive Decline
              </span>
            </div>
            <h1 className="h-display reveal">
              Therapeutic Plasma Exchange for{" "}
              <span className="serif-italic accent-text">
                Alzheimer&apos;s Disease
              </span>
            </h1>
            <p
              className="tpe-hero-sub reveal"
              style={{ marginTop: "1.5rem" }}
            >
              The AMBAR trial demonstrated that plasma exchange with albumin
              replacement slowed cognitive and functional decline in mild and
              moderate Alzheimer&apos;s disease &mdash; with some mild-stage
              patients showing improvement from baseline.
            </p>
            <div className="tpe-hero-anchor reveal">
              <p className="body-lg">
                Alzheimer&apos;s disease is driven in part by the accumulation
                of toxic proteins and inflammatory compounds in the blood and
                brain.{" "}
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
                addresses this directly &mdash; removing amyloid-&beta;,
                inflammatory cytokines, and other neurotoxic factors from
                circulation, and replacing them with protective albumin. This
                approach has been validated in the largest randomized controlled
                trial ever conducted on plasma exchange for Alzheimer&apos;s
                disease.
              </p>
            </div>
            <div className="tpe-hero-badges reveal">
              <span className="tpe-badge">
                Board-Certified Clinical Pathologist
              </span>
              <span className="tpe-badge-divider">&middot;</span>
              <span className="tpe-badge">500+ TPE Procedures</span>
              <span className="tpe-badge-divider">&middot;</span>
              <span className="tpe-badge">
                Associate Medical Director,{" "}
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
              </span>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: THE PROBLEM ===== */}
        <section
          className="site-section"
          id="the-problem"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="tpe-science-grid">
              <div className="tpe-science-content">
                <div className="section-label-line reveal">
                  <span className="label-text">The Disease</span>
                </div>
                <h2 className="h-lg reveal" style={{ marginBottom: "2rem" }}>
                  What Happens in{" "}
                  <span className="serif-italic accent-text">
                    Alzheimer&apos;s Disease
                  </span>
                </h2>

                <div className="tpe-science-text reveal">
                  <p className="body-lg">
                    Alzheimer&apos;s disease is characterized by the progressive
                    accumulation of two abnormal proteins in the brain:
                    amyloid-&beta; plaques and neurofibrillary tangles made of
                    tau protein. These deposits damage neurons, disrupt synaptic
                    communication, and trigger chronic neuroinflammation &mdash;
                    a sustained immune response that compounds the injury over
                    time.
                  </p>

                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    What many people don&apos;t realize is that the brain does
                    not exist in isolation. Amyloid-&beta; and other toxic
                    proteins circulate in the blood as well as the brain, and
                    the two compartments are in constant equilibrium across the
                    blood-brain barrier. When plasma concentrations of
                    amyloid-&beta; are high, the brain has a harder time
                    clearing its own toxic load. This is the insight behind the
                    &ldquo;peripheral sink hypothesis&rdquo; &mdash; by reducing
                    amyloid-&beta; levels in the blood, you create a
                    concentration gradient that helps pull amyloid out of the
                    brain.
                  </p>

                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    Beyond amyloid, Alzheimer&apos;s patients carry elevated
                    levels of inflammatory cytokines (IL-6, TNF-&alpha;,
                    IL-1&beta;), oxidized lipids, complement proteins, and other
                    factors in their plasma that sustain neuroinflammation. These
                    compounds cross the blood-brain barrier and amplify the
                    damage caused by amyloid and tau. Standard drug treatments
                    do not address this plasma-borne inflammatory burden.
                  </p>

                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    Therapeutic plasma exchange removes the full spectrum of
                    these harmful circulating factors in a single procedure
                    &mdash; amyloid-&beta;, inflammatory cytokines, oxidized
                    proteins, autoantibodies, complement &mdash; and replaces
                    them with 5% albumin, which itself binds and neutralizes
                    amyloid-&beta; and has potent anti-inflammatory and
                    antioxidant properties. No other intervention addresses the
                    peripheral compartment this comprehensively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: THE EVIDENCE — AMBAR TRIAL ===== */}
        <section className="site-section" id="ambar-trial">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">The Evidence</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              The AMBAR Trial &mdash; Landmark{" "}
              <span className="serif-italic accent-text">Evidence</span>
            </h2>

            <div className="alz-evidence-intro reveal">
              <p className="body-lg">
                The AMBAR study (Alzheimer&apos;s Management By Albumin
                Replacement) was a Phase 2b/3, multicenter, randomized,
                double-blind, placebo-controlled clinical trial conducted across
                41 sites in Spain and the United States. It is the largest
                randomized controlled trial ever performed on therapeutic plasma
                exchange for Alzheimer&apos;s disease.
              </p>
              <p className="body-lg" style={{ marginTop: "1rem" }}>
                322 patients with mild-to-moderate Alzheimer&apos;s disease were
                enrolled. Patients were randomized into three active treatment
                arms (plasma exchange with different doses of albumin, with or
                without intravenous immunoglobulin) and one placebo arm (sham
                plasma exchange). Treatment involved two phases: 6 weeks of
                weekly conventional TPE followed by 12 months of monthly
                low-volume plasma exchange.
              </p>
            </div>

            {/* AMBAR results cards */}
            <div className="alz-results-grid reveal">
              {ambarResults.map((r, i) => (
                <div
                  key={i}
                  className={`alz-result-card reveal reveal-d${Math.min(i + 1, 5)}`}
                >
                  <div className="alz-result-headline">{r.headline}</div>
                  <div className="alz-result-subline">{r.subline}</div>
                  <div className="alz-result-detail">{r.detail}</div>
                </div>
              ))}
            </div>

            {/* Mild subgroup callout */}
            <div className="alz-subgroup-callout reveal">
              <div className="alz-subgroup-label">
                Mild Alzheimer&apos;s (MMSE 22&ndash;26)
              </div>
              <p>
                <strong>Stabilization observed</strong> &mdash; no significant
                decline from baseline during the treatment period, with some
                patients showing improvement.
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
                The AMBAR trial&apos;s author list includes Dr. Dobri Kiprov
                &mdash; one of the founders of modern therapeutic apheresis and{" "}
                <Link
                  href="/about"
                  style={{
                    color: "var(--accent)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  Dr. Green&apos;s
                </Link>{" "}
                colleague at{" "}
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
                . This direct connection to the landmark study informs the
                clinical protocols used at Global Apheresis today.
              </p>
            </div>

            <div className="alz-publication-cite reveal">
              <span className="alz-cite-label">Publication</span>
              Boada M, L&oacute;pez OL, Olazar&aacute;n J, et al.{" "}
              <em>Alzheimer&apos;s &amp; Dementia.</em> 2020;16(10):1412&ndash;1425.
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: REAL-WORLD CONFIRMATION ===== */}
        <section
          className="site-section"
          id="argentina-study"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Independent Validation</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Real-World{" "}
              <span className="serif-italic accent-text">Validation</span>
            </h2>

            <div className="alz-evidence-intro reveal">
              <p className="body-lg">
                In 2025, an independent research group in Argentina published
                results from a real-world cohort study evaluating TPE with
                albumin replacement in 32 patients with mild-to-moderate
                Alzheimer&apos;s disease, compared to a historical control group
                of 194 patients. The protocol was based on the AMBAR trial
                design.
              </p>
            </div>

            <div className="alz-evidence-intro reveal" style={{ marginTop: "1.5rem" }}>
              <p className="body-lg">
                Language, executive function, and attention were also better
                preserved in the treatment group. The intervention was
                well-tolerated with manageable side effects.
              </p>
              <p className="body-lg" style={{ marginTop: "1rem" }}>
                This study provides independent validation of the AMBAR results
                in a real-world clinical setting, outside the controlled
                environment of a sponsored trial. It demonstrates that the
                benefits of TPE for Alzheimer&apos;s are reproducible.
              </p>
            </div>

            <div className="alz-argentina-results reveal">
              {argentinaResults.map((r, i) => (
                <div key={i} className="alz-argentina-stat">
                  <span className="alz-argentina-headline">
                    {r.headline}
                  </span>
                  <span className="alz-argentina-subline">{r.subline}</span>
                  <span className="alz-argentina-detail">{r.detail}</span>
                </div>
              ))}
            </div>

            <div className="alz-publication-cite reveal">
              <span className="alz-cite-label">Publication</span>
              Taragano F, Seinhart D, Epstein P, et al.{" "}
              <em>Journal of Alzheimer&apos;s Disease.</em>{" "}
              2025;108(1):129&ndash;141.
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: COMPARISON TABLE ===== */}
        <section className="site-section" id="comparison">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Treatment Landscape</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              How TPE Compares to Other Alzheimer&apos;s{" "}
              <span className="serif-italic accent-text">Treatments</span>
            </h2>

            <p
              className="body-lg reveal"
              style={{ maxWidth: 820, marginBottom: "2.5rem" }}
            >
              The Alzheimer&apos;s treatment landscape has expanded
              significantly. Understanding how therapeutic plasma exchange fits
              alongside FDA-approved therapies helps patients and families make
              informed decisions.
            </p>

            {/* Desktop table */}
            <div className="alz-table-wrapper reveal">
              <table className="alz-comparison-table">
                <thead>
                  <tr>
                    <th className="alz-th-treatment">Treatment</th>
                    {tableColumns.map((col) => (
                      <th key={col.key}>{col.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i === 0 ? "alz-row-highlight" : ""}>
                      <td className="alz-td-treatment">{row.treatment}</td>
                      <td>{row.mechanism}</td>
                      <td>{row.evidence}</td>
                      <td>{row.administration}</td>
                      <td>{row.ariaRisk}</td>
                      <td>{row.stage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards */}
            <div className="alz-comparison-cards reveal">
              {comparisonData.map((row, i) => (
                <details
                  key={i}
                  className={`alz-compare-card ${i === 0 ? "alz-compare-card-highlight" : ""}`}
                  open={i === 0}
                >
                  <summary className="alz-compare-card-name">
                    <span>{row.treatment}</span>
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
                  <div className="alz-compare-card-body">
                    {tableColumns.map((col) => (
                      <div key={col.key} className="alz-compare-card-row">
                        <span className="alz-compare-card-label">
                          {col.label}
                        </span>
                        <span>
                          {row[col.key as keyof typeof row]}
                        </span>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            {/* Contextual note below table */}
            <div className="alz-table-note reveal">
              <p className="body-md">
                TPE and the anti-amyloid antibodies (lecanemab, donanemab) take
                fundamentally different approaches to the same problem. The
                antibodies target amyloid-&beta; specifically with high
                precision but carry the risk of ARIA &mdash; brain swelling and
                microbleeds that require regular MRI monitoring and can be
                serious, especially in ApoE4 carriers. TPE takes a broader
                approach, removing not just amyloid-&beta; but the full
                inflammatory environment that sustains neurodegeneration. The
                two approaches are not mutually exclusive &mdash; some
                clinicians are exploring combination protocols. The
                cholinesterase inhibitors and memantine remain appropriate for
                symptom management but do not address underlying disease
                processes.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: THE PROTOCOL ===== */}
        <section
          className="process-section site-section"
          id="protocol"
        >
          <div className="site-container">
            <div className="section-header">
              <div className="section-header-text">
                <div className="section-label-line reveal">
                  <span className="label-text">The Protocol</span>
                </div>
                <h2 className="h-lg reveal" style={{ color: "white" }}>
                  What Treatment{" "}
                  <span
                    className="serif-italic"
                    style={{ color: "var(--accent-light)" }}
                  >
                    Looks Like
                  </span>
                </h2>
              </div>
            </div>
            <div className="alz-protocol-grid">
              <div className="alz-protocol-card reveal reveal-d1">
                <div className="process-step-num">CANDIDACY</div>
                <h3>Who Is a Candidate</h3>
                <p>
                  TPE for Alzheimer&apos;s disease is typically most appropriate
                  for patients with mild-to-moderate disease who are motivated
                  and have caregiver support. Patients should be in generally
                  good health with adequate vascular access. Dr. Green evaluates
                  each patient individually during the consultation to determine
                  candidacy.
                </p>
              </div>
              <div className="alz-protocol-card reveal reveal-d2">
                <div className="process-step-num">PHASE 01</div>
                <h3>Intensive Treatment (Weeks 1&ndash;6)</h3>
                <p>
                  Based on the AMBAR trial design, the initial phase consists of
                  weekly TPE sessions over approximately 6 weeks. Each session
                  involves a full plasma volume exchange &mdash; your plasma is
                  removed and replaced with 5% albumin solution. This intensive
                  phase achieves a rapid reduction in circulating
                  amyloid-&beta;, inflammatory cytokines, and other neurotoxic
                  factors. For patients traveling to our Mill Valley clinic, we
                  can arrange compressed or flexible scheduling to accommodate
                  logistics &mdash; the specific timing is tailored during your
                  consultation.
                </p>
              </div>
              <div className="alz-protocol-card reveal reveal-d3">
                <div className="process-step-num">PHASE 02</div>
                <h3>Maintenance Treatment (Monthly)</h3>
                <p>
                  After the intensive phase, patients transition to monthly
                  maintenance sessions. These lower-volume exchanges sustain the
                  benefits achieved during the intensive phase, preventing
                  re-accumulation of harmful plasma factors. The AMBAR trial
                  maintained patients for 12 months in this phase and showed
                  continued benefit.
                </p>
              </div>
              <div className="alz-protocol-card reveal reveal-d4">
                <div className="process-step-num">MONITORING</div>
                <h3>Assessment &amp; Adjustment</h3>
                <p>
                  Dr. Green tracks treatment response through regular clinical
                  assessments and laboratory markers. Cognitive testing is
                  performed at baseline and at regular intervals to document
                  objective changes. Adjustments to the protocol are made based
                  on individual response.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: CTA ===== */}
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
              whether TPE is appropriate for your situation. There is no
              obligation, and the conversation is complimentary.
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
