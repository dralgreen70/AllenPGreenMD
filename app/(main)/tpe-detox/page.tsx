import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title:
    "Therapeutic Plasma Exchange for Detoxification & Environmental Toxins | Dr. Allen P. Green, M.D.",
  description:
    "Environmental toxins like PFAS, heavy metals, and persistent organic pollutants accumulate in your blood over a lifetime. TPE physically removes the plasma that carries them. Learn how therapeutic plasma exchange approaches detoxification at Global Apheresis.",
  openGraph: {
    title: "TPE for Detoxification & Environmental Toxins",
    description:
      "How therapeutic plasma exchange removes environmental toxins, PFAS, persistent organic pollutants, and heavy metals from circulation.",
    url: "https://allenpgreenmd.com/tpe-detox",
  },
}

/* ── Toxin categories ── */
const toxinCategories = [
  {
    name: "PFAS",
    aka: '"Forever Chemicals"',
    desc: "Per- and polyfluoroalkyl substances found in non-stick cookware, water-resistant clothing, food packaging, and contaminated drinking water. PFAS have half-lives of 3\u20138+ years in the human body and are found in the blood of nearly all Americans tested.",
    icon: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />',
  },
  {
    name: "Persistent Organic Pollutants (POPs)",
    aka: "PCBs, Dioxins, Pesticides",
    desc: "PCBs, dioxins, organochlorine pesticides, and flame retardants that persist in the environment and bioaccumulate through the food chain. Many are lipophilic \u2014 stored in fat tissue \u2014 but they also circulate in the blood bound to plasma proteins, which is how TPE can remove them.",
    icon: '<circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />',
  },
  {
    name: "Heavy Metals",
    aka: "Mercury, Lead, Cadmium, Arsenic",
    desc: "Mercury, lead, cadmium, and arsenic from dietary sources, dental materials, occupational exposure, and environmental contamination. These bind to plasma proteins and accumulate in tissues over time.",
    icon: '<path d="M2 22l10-10M16 8l-4.2 4.2M22 2l-6 6" /><circle cx="12" cy="12" r="2" />',
  },
  {
    name: "Endocrine Disruptors",
    aka: "BPA, Phthalates, Parabens",
    desc: "BPA, phthalates, parabens, and other synthetic compounds that interfere with hormonal signaling. Found in plastics, personal care products, and food packaging.",
    icon: '<path d="M12 2a10 10 0 1010 10" /><path d="M12 2v10l7-7" />',
  },
  {
    name: "Inflammatory Byproducts",
    aka: "AGEs, Oxidized Lipids",
    desc: "Advanced glycation end products (AGEs), oxidized lipids, and other metabolic waste products that accumulate with age and contribute to chronic inflammation.",
    icon: '<path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />',
  },
]

/* ── Patient profiles ── */
const patientProfiles = [
  {
    label: "DOCUMENTED EXPOSURE",
    title: "Elevated Toxin Levels",
    desc: "Individuals with documented elevated toxin levels \u2014 through environmental toxin panels, heavy metal testing, or PFAS testing \u2014 who want active intervention beyond exposure reduction alone.",
  },
  {
    label: "OCCUPATIONAL / GEOGRAPHIC",
    title: "Exposure History",
    desc: "People with occupational or geographic exposure histories \u2014 living near industrial sites, agricultural areas, or military bases with known PFAS contamination.",
  },
  {
    label: "CHRONIC SYMPTOMS",
    title: "Suspected Toxic Burden",
    desc: "Patients with chronic symptoms \u2014 fatigue, brain fog, hormonal disruption, inflammatory conditions \u2014 where environmental toxic burden is a suspected contributing factor.",
  },
  {
    label: "PROACTIVE",
    title: "Optimization & Prevention",
    desc: "Health-conscious individuals pursuing proactive detoxification as part of a broader longevity and optimization program.",
  },
]

export default function TpeDetoxPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Therapeutic Plasma Exchange for Detoxification & Environmental Toxins",
    description:
      "Guide to TPE for environmental detoxification — mechanism of toxin removal, types of toxins addressed, emerging research, and treatment at Global Apheresis.",
    url: "https://allenpgreenmd.com/tpe-detox",
    about: {
      "@type": "MedicalTherapy",
      name: "Therapeutic Plasma Exchange for Detoxification",
      description:
        "Application of therapeutic plasma exchange to remove environmental toxins, persistent organic pollutants, heavy metals, and endocrine disruptors from circulation",
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
              <span className="label-text">
                Detoxification &amp; Environmental Toxins
              </span>
            </div>
            <h1 className="h-display reveal">
              Therapeutic Plasma Exchange for{" "}
              <span className="serif-italic accent-text">Detoxification</span>
            </h1>
            <p className="tpe-hero-sub reveal">
              Your body accumulates environmental toxins over a lifetime &mdash;
              persistent organic pollutants, PFAS, heavy metals, and
              inflammatory byproducts that your liver and kidneys were never
              designed to fully clear. TPE removes the plasma that carries them.
            </p>
            <div className="tpe-hero-anchor reveal">
              <p className="body-lg">
                Detoxification is one of the most misused words in wellness.
                Most &ldquo;detox&rdquo; products rely on vague claims and
                unverified mechanisms.{" "}
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
                is different &mdash; it is a medical procedure that physically
                separates and removes your plasma, along with the protein-bound
                toxins it carries, and replaces it with clean albumin solution.
                The mechanism is direct, measurable, and performed under
                physician supervision.
              </p>
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
            <div className="section-label-line reveal">
              <span className="label-text">The Problem</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              The Toxin Burden You Can&apos;t{" "}
              <span className="serif-italic accent-text">See</span>
            </h2>

            <div className="alz-evidence-intro reveal">
              <p className="body-lg">
                Your liver and kidneys are remarkable filtration systems &mdash;
                but they have limits. They evolved to handle naturally occurring
                metabolic waste, not the synthetic chemical landscape of the 21st
                century. Persistent organic pollutants, PFAS compounds, heavy
                metals, endocrine disruptors, and microplastic-associated
                chemicals enter your body through food, water, air, and consumer
                products. Many of these substances resist natural metabolism.
                They bind to plasma proteins &mdash; particularly albumin &mdash;
                and circulate in your blood for months, years, or indefinitely.
              </p>
            </div>

            {/* Toxin category cards */}
            <div className="detox-toxin-grid">
              {toxinCategories.map((t, i) => (
                <div
                  key={i}
                  className={`detox-toxin-card reveal reveal-d${Math.min(i + 1, 5)}`}
                >
                  <div className="detox-toxin-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: t.icon }}
                    />
                  </div>
                  <h3>{t.name}</h3>
                  <div className="detox-toxin-aka">{t.aka}</div>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="tpe-science-grid" style={{ marginTop: "2.5rem" }}>
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <p className="body-lg">
                    This cumulative toxic burden doesn&apos;t announce itself
                    with acute symptoms. Instead, it contributes to chronic
                    low-grade inflammation, oxidative stress, immune
                    dysregulation, hormonal disruption, and accelerated
                    biological aging. Research has linked persistent organic
                    pollutant exposure to increased risk of metabolic disease,
                    neurodegenerative conditions, and cancer. The challenge is
                    that these toxins are difficult to test for comprehensively
                    and even harder to remove through conventional means.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: HOW TPE ADDRESSES TOXIN BURDEN ===== */}
        <section className="site-section" id="mechanism">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Mechanism of Action</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Why TPE Works for{" "}
              <span className="serif-italic accent-text">Detoxification</span>
            </h2>

            <div className="tpe-science-grid">
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <h3 className="lon-narrative-heading">The Mechanism</h3>
                  <p className="body-lg">
                    Therapeutic plasma exchange removes your plasma &mdash; the
                    liquid portion of your blood that carries proteins, hormones,
                    nutrients, antibodies, and, critically, toxins. In a single
                    TPE procedure, approximately 60&ndash;70% of your plasma
                    volume is removed and replaced with 5% albumin solution. Any
                    toxin that is circulating in your plasma at the time of the
                    exchange &mdash; whether bound to albumin, associated with
                    other plasma proteins, or dissolved in the plasma itself
                    &mdash; is physically removed from your body.
                  </p>

                  <h3 className="lon-narrative-heading">
                    What Makes TPE Different
                  </h3>
                  <p className="body-lg">
                    Most detoxification products claim to support the liver, bind
                    toxins in the gut, or stimulate elimination pathways. These
                    approaches are indirect at best and unverified at worst. TPE
                    does not rely on your body&apos;s processing capacity. It
                    bypasses the liver and kidneys entirely by physically
                    removing the plasma that contains the toxins. The distinction
                    is mechanical, not pharmacological &mdash; and that
                    directness is what separates TPE from supplement-based
                    detoxification.
                  </p>

                  <h3 className="lon-narrative-heading">
                    The Albumin Replacement
                  </h3>
                  <p className="body-lg">
                    The replacement fluid &mdash; clean, purified 5% albumin
                    &mdash; is not just a placeholder. Albumin is the
                    body&apos;s primary transport protein, and it has inherent
                    antioxidant and anti-inflammatory properties. Fresh albumin
                    provides new binding capacity for toxins that may mobilize
                    from tissue stores after the exchange, supporting ongoing
                    clearance in the days following each procedure.
                  </p>

                  <h3 className="lon-narrative-heading">
                    An Honest Note on Limitations
                  </h3>
                  <p className="body-lg">
                    TPE removes what is circulating in your plasma at the time of
                    the procedure. Many environmental toxins &mdash; particularly
                    lipophilic compounds like POPs and PFAS &mdash; are also
                    stored in adipose tissue and other organs. These
                    tissue-stored toxins can gradually re-enter circulation after
                    TPE, which is why a series of treatments is often more
                    effective than a single session. TPE reduces the circulating
                    toxic burden and can lower total body levels over successive
                    treatments, but it is not a one-time removal of all
                    accumulated toxins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: EMERGING RESEARCH ===== */}
        <section
          className="site-section"
          id="evidence"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Research</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              The Evidence{" "}
              <span className="serif-italic accent-text">Base</span>
            </h2>

            <div className="alz-evidence-intro reveal">
              <p className="body-lg">
                The application of TPE specifically for environmental toxin
                removal is an emerging area of clinical investigation. While
                TPE&apos;s ability to remove plasma-bound substances is
                well-established across decades of use in autoimmune and
                hematologic medicine, research specifically measuring toxin
                clearance through TPE is newer.
              </p>
            </div>

            {/* Australian PFAS Trial */}
            <div className="tpe-science-grid" style={{ marginTop: "2rem" }}>
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <h3 className="lon-narrative-heading">
                    The Australian Firefighter PFAS Trial (2022)
                  </h3>
                  <p className="body-lg">
                    The strongest direct evidence for plasma-based PFAS removal
                    comes from a randomized clinical trial published in{" "}
                    <em>JAMA Network Open</em>. Researchers enrolled 285
                    Australian firefighters with elevated PFAS levels from
                    occupational exposure to firefighting foams. Participants
                    were randomized to donate plasma every 6 weeks, donate whole
                    blood every 12 weeks, or be observed for 12 months.
                  </p>
                  <p className="body-lg" style={{ marginTop: "1rem" }}>
                    Both plasma and blood donation significantly reduced serum
                    PFOS levels compared to observation alone, but plasma
                    donation was the only intervention that also significantly
                    reduced PFHxS levels. The study authors noted that plasma
                    donation may be more efficient because PFAS concentrations in
                    serum are approximately twice those in whole blood, and each
                    plasma donation removes a larger volume (up to 800 mL vs.
                    470 mL for whole blood).
                  </p>
                  <p className="body-lg" style={{ marginTop: "1rem" }}>
                    Critically, this study used standard plasma donation &mdash;
                    not therapeutic plasma exchange. TPE removes substantially
                    more plasma per session and replaces it with albumin, which
                    provides fresh binding capacity for toxins mobilizing from
                    tissue stores. While no randomized trial has directly
                    measured PFAS reduction from TPE specifically, the
                    mechanistic logic is clear: if removing 800 mL of plasma
                    significantly lowers PFAS levels, removing several times that
                    volume in a single TPE session &mdash; and doing so
                    repeatedly &mdash; would be expected to produce a
                    substantially greater reduction.
                  </p>
                </div>
              </div>
            </div>

            <div className="alz-publication-cite reveal">
              <span className="alz-cite-label">Publication</span>
              Gasiorowski R, Forbes MK, Silver G, et al. &ldquo;Effect of plasma
              and blood donations on levels of perfluoroalkyl and polyfluoroalkyl
              substances in firefighters in Australia: a randomized clinical
              trial.&rdquo; <em>JAMA Network Open.</em> 2022;5(4):e226257.
            </div>

            {/* 2025 Synthetic Chemical Study */}
            <div className="tpe-science-grid" style={{ marginTop: "2.5rem" }}>
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <h3 className="lon-narrative-heading">
                    Synthetic Chemical Removal (2025)
                  </h3>
                  <p className="body-lg">
                    A 2025 study published in <em>Medical Hypotheses</em>{" "}
                    evaluated whether serial TPE sessions could reduce levels of
                    synthetic chemicals in healthy adults. Researchers tested 91
                    adults for 38 synthetic chemicals &mdash; including
                    pesticides, herbicides, phenols, volatile organics, parabens,
                    acrylamides, and phthalates. Participants who underwent
                    3&ndash;5 TPE sessions combined with nutritional
                    supplementation showed significant reductions in synthetic
                    chemical levels, with reductions sustained at six-month
                    follow-up.
                  </p>
                </div>
              </div>
            </div>

            {/* POPs and Alzheimer's connection */}
            <div className="tpe-science-grid" style={{ marginTop: "2rem" }}>
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <h3 className="lon-narrative-heading">
                    POPs and the Alzheimer&apos;s Connection
                  </h3>
                  <p className="body-lg">
                    Researchers have noted that persistent organic pollutants
                    have emerged as a novel risk factor for dementia and that
                    plasma exchange can effectively remove them. This observation
                    connects the detoxification and{" "}
                    <Link
                      href="/tpe-alzheimers"
                      style={{
                        color: "var(--accent)",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      Alzheimer&apos;s applications
                    </Link>{" "}
                    of TPE &mdash; the removal of circulating neurotoxic
                    pollutants may be one of the mechanisms by which TPE provides
                    cognitive benefit beyond amyloid-&beta; reduction.
                  </p>
                </div>
              </div>
            </div>

            {/* Honest framing callout */}
            <div className="alz-subgroup-callout reveal" style={{ marginTop: "2rem" }}>
              <div className="alz-subgroup-label">Honest Framing</div>
              <p>
                This is an active area of research, not a settled science. The
                mechanistic rationale is strong &mdash; TPE removes plasma,
                plasma carries toxins, therefore TPE removes circulating toxins.
                But large-scale clinical trials specifically measuring health
                outcomes from toxin-focused TPE have not yet been completed.{" "}
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
                stays current with the evolving evidence and applies it within a
                framework of clinical judgment and individualized patient
                assessment.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: WHO THIS IS FOR ===== */}
        <section className="site-section" id="who">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Patient Profiles</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Who This Is{" "}
              <span className="serif-italic accent-text">For</span>
            </h2>

            <div className="auto-conditions-grid">
              {patientProfiles.map((p, i) => (
                <div
                  key={i}
                  className={`auto-condition-card reveal reveal-d${Math.min(i + 1, 5)}`}
                >
                  <div className="auto-condition-category" style={{ borderTop: "none", paddingTop: 0, marginTop: 0, marginBottom: "0.6rem" }}>
                    {p.label}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Protocol overview */}
            <div className="tpe-science-grid" style={{ marginTop: "2.5rem" }}>
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <h3 className="lon-narrative-heading">
                    What the Protocol Looks Like
                  </h3>
                  <p className="body-lg">
                    Detoxification-focused TPE at{" "}
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
                    typically involves a series of sessions &mdash; often
                    3&ndash;5 over a condensed period &mdash; to achieve
                    meaningful reduction in circulating toxin levels. For
                    patients with documented high toxin burdens, additional
                    sessions or periodic maintenance may be recommended. Dr.
                    Green works with your existing environmental medicine or
                    functional medicine provider, or can guide you through
                    appropriate testing to establish baseline levels and track
                    results.
                  </p>

                  <h3 className="lon-narrative-heading">
                    For Patients Traveling
                  </h3>
                  <p className="body-lg">
                    Flexible scheduling can be arranged for patients coming to
                    Mill Valley from outside the Bay Area.
                  </p>
                </div>
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
              Take the First{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--accent-light)" }}
              >
                Step
              </span>
            </h2>
            <p className="reveal">
              If you&apos;re concerned about environmental toxin exposure and
              want to understand whether TPE could help reduce your circulating
              toxic burden, schedule a complimentary discovery call with Dr.
              Green.
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
                <Link
                  href="/tpe-autoimmune"
                  className="tpe-cta-pillar-link"
                >
                  Autoimmune
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
