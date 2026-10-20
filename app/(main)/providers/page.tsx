import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "TPE for Your Practice: A Provider Guide | Allen P. Green, MD",
  description:
    "What it takes to offer therapeutic plasma exchange in an outpatient practice: equipment, staffing, protocols, and the two routes to get there.",
  openGraph: {
    title: "TPE for Your Practice | Allen P. Green, MD",
    description:
      "What it takes to offer therapeutic plasma exchange in an outpatient practice: equipment, staffing, protocols, and the two routes to get there.",
    url: "https://allenpgreenmd.com/providers",
    siteName: "Allen P. Green, MD",
    images: [{ url: "https://allenpgreenmd.com/images/me-and-amicus.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TPE for Your Practice | Allen P. Green, MD",
    description:
      "Equipment, staffing, protocols, and cost structure for offering therapeutic plasma exchange in an outpatient practice.",
    images: ["https://allenpgreenmd.com/images/me-and-amicus.jpg"],
  },
  alternates: {
    canonical: "https://allenpgreenmd.com/providers",
  },
}

/* ── What a program actually requires ── */
const requirements = [
  {
    name: "The Apheresis Device",
    aka: "Capital, Not Consumable",
    desc: "Two FDA-cleared machines are available in the United States: the Fresenius Kabi Amicus and the Terumo Spectra Optia. Both are over $100,000 new. This is the line item clinics plan for, and it is rarely the one that sinks a program.",
  },
  {
    name: "Disposables and Replacement Fluid",
    aka: "Roughly $1,500 Per Procedure",
    desc: "Single-use tubing kits, filters, and collection sets run several hundred dollars per patient. Albumin as replacement fluid can approach $1,000 per procedure depending on exchange volume. Together, roughly $1,500 per procedure in direct consumables.",
  },
  {
    name: "Nursing Hours",
    aka: "The Line Most Clinics Omit",
    desc: "Best practice is a nurse with the patient for the entire procedure, monitoring for adverse events and recording vitals every 15 to 20 minutes. Many programs staff two nurses, because some complications are genuinely easier to manage with a second pair of hands. These hours are not optional and they are not in the $1,500.",
  },
  {
    name: "Physician Supervision",
    aka: "Available, Not Nominal",
    desc: "A physician or advanced practice provider supervises the procedure. What separates programs is depth of apheresis experience: whether the person backing up the nurse has managed a citrate reaction or a mid-procedure flow problem before, and is genuinely reachable the moment it happens.",
  },
  {
    name: "Protocols",
    aka: "Written Before the First Patient",
    desc: "Exchange volumes, replacement fluid, session frequency, patient selection, contraindications, and adverse event pathways. Programs that develop these after launch develop them under pressure.",
  },
  {
    name: "Patient Acquisition",
    aka: "The Quiet Cost",
    desc: "Outpatient TPE is largely cash-pay. A clinic without an existing patient population that both qualifies clinically and can fund the procedure is buying a machine before it has demand.",
  },
]

export default function ProvidersPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://allenpgreenmd.com/providers",
    url: "https://allenpgreenmd.com/providers",
    name: "TPE for Your Practice: A Provider Guide",
    description:
      "What it takes to offer therapeutic plasma exchange in an outpatient practice: equipment, staffing, protocols, and the two routes to get there.",
    author: {
      "@type": "Person",
      "@id": "https://allenpgreenmd.com/#physician",
      name: "Allen P. Green, M.D.",
      url: "https://allenpgreenmd.com/about",
    },
    about: {
      "@type": "MedicalProcedure",
      name: "Therapeutic Plasma Exchange",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Script
        id="schema-breadcrumb-providers"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allenpgreenmd.com"},{"@type":"ListItem","position":2,"name":"For Providers","item":"https://allenpgreenmd.com/providers"}]}) }}
      />
      <main>
        {/* ===== SECTION 1: HERO ===== */}
        <section className="tpe-hero" id="intro">
          <div className="tpe-hero-inner">
            <div className="section-label-line reveal">
              <span className="label-text">For Providers &amp; Practices</span>
            </div>
            <h1 className="h-display reveal">
              Therapeutic Plasma Exchange for{" "}
              <span className="serif-italic accent-text">Your Practice</span>
            </h1>
            <p className="tpe-hero-sub reveal">
              Therapeutic plasma exchange has moved steadily out of hospital
              acute care and into outpatient medicine. It is one of the most
              substantive procedural expansions available to a longevity,
              regenerative, or integrative practice, and one of the most
              operationally demanding. This page is the honest version of what
              the decision involves.
            </p>
            <div className="tpe-hero-anchor reveal">
              <p className="body-lg">
                <strong>In short:</strong> offering TPE requires an apheresis
                device, roughly $1,500 per procedure in disposables and albumin,
                dedicated nursing for the full length of every procedure,
                apheresis-experienced physician supervision, and written
                protocols before the first patient. Practices reach that either
                by building a program independently or by joining an established
                one. Most underestimate the staffing, not the machine.
              </p>
            </div>
            <div className="tpe-hero-anchor reveal" style={{ marginTop: "1.25rem" }}>
              <p className="body-lg">
                <strong>Disclosure:</strong> I am a{" "}
                <Link
                  href="/about"
                  style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  Board-Certified Clinical Pathologist
                </Link>{" "}
                and Associate Medical Director at Global Apheresis, which runs an
                affiliate partnership program for practices adding TPE. I have a
                commercial interest in that program. I have written this page the
                way I would want it written if I were the one reading it, which
                means it includes the reasons not to do this.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: WHAT IT TAKES ===== */}
        <section
          className="site-section"
          id="requirements"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">What It Takes</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              The Costs Clinics Plan For, and the Ones They{" "}
              <span className="serif-italic accent-text">Miss</span>
            </h2>

            <div className="alz-evidence-intro reveal">
              <p className="body-lg">
                Most practices price this procedure off the consumables, and the
                consumables are the easy part. Disposables and albumin come to
                roughly $1,500 per procedure. That figure is also where a
                meaningful number of failed programs started, because it excludes
                the machine, every nursing hour, physician supervision, protocol
                development, training, and patient acquisition. A clinic that
                reads $1,500 as its cost per procedure has not costed the
                procedure. It has costed the supply closet.
              </p>
            </div>

            <div className="detox-toxin-grid">
              {requirements.map((r, i) => (
                <div
                  key={i}
                  className={`detox-toxin-card reveal reveal-d${Math.min(i + 1, 5)}`}
                >
                  <h3>{r.name}</h3>
                  <div className="detox-toxin-aka">{r.aka}</div>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: PATIENT POPULATION ===== */}
        <section className="site-section" id="patients">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Before Anything Else</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Does Your Patient Population Actually{" "}
              <span className="serif-italic accent-text">Support This?</span>
            </h2>

            <div className="tpe-science-grid">
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <p className="body-lg">
                    This question comes before equipment, financing, and
                    staffing, and it disqualifies more practices than any other.
                    The American Society for Apheresis describes over 100
                    indications in its most recent guidelines, and most of them
                    belong in a hospital, either because the presentation is
                    acute or because the payor pathway is already built there.
                    Guillain-Barre syndrome, CIDP, and multiple sclerosis are
                    treated in that setting for good reason.
                  </p>

                  <h3 className="lon-narrative-heading">
                    What Outpatient Programs Actually Treat
                  </h3>
                  <p className="body-lg">
                    In practice, outpatient programs serve patients interested in
                    general health and{" "}
                    <Link
                      href="/tpe-longevity"
                      style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      longevity
                    </Link>
                    , post-viral syndromes including Long COVID, mild cognitive
                    decline, and{" "}
                    <Link
                      href="/tpe-alzheimers"
                      style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Alzheimer&apos;s disease
                    </Link>
                    . The evidence base for these indications is growing, and
                    hospital systems routinely turn these patients away even when
                    they offer to pay cash. That gap is the actual opportunity.
                    It is also worth stating plainly that TPE for Alzheimer&apos;s
                    is ASFA Category III, and your consent conversations should
                    reflect that.
                  </p>

                  <h3 className="lon-narrative-heading">
                    The Financial Reality
                  </h3>
                  <p className="body-lg">
                    Insurance does not typically cover longevity or wellness
                    indications, so these patients pay out of pocket. Outpatient
                    programs price procedures in a wide range depending on
                    location, overhead, and protocol design, which I have broken
                    down from the patient side in{" "}
                    <Link
                      href="/blog/how-much-does-plasmapheresis-cost"
                      style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      the cost of therapeutic plasma exchange
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/blog/does-insurance-cover-plasma-exchange"
                      style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      what insurance does and does not cover
                    </Link>
                    . If your patients cannot fund a series of procedures, the
                    rest of this page is academic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: TRAINING, AND THE CERTIFICATION QUESTION ===== */}
        <section
          className="site-section"
          id="training"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Training</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              There Is No TPE{" "}
              <span className="serif-italic accent-text">Certification</span>
            </h2>

            <div className="alz-evidence-intro reveal">
              <p className="body-lg">
                This is worth saying clearly, because practices search for it and
                because the word gets used loosely. There is no accrediting body
                that certifies a physician or a clinic to perform therapeutic
                plasma exchange, and no board certification in the procedure
                itself. Anyone offering you a TPE certification is offering you a
                training course and a piece of paper. The paper is not a
                credential.
              </p>
            </div>

            <div className="tpe-science-grid" style={{ marginTop: "2rem" }}>
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <p className="body-lg">
                    That does not make training optional. It makes it your
                    responsibility rather than a box to check. Staff need to be
                    genuinely informed about indications, contraindications,
                    timing, parameter selection, and adverse events. The
                    supervising physician should be comfortable with the machine,
                    though in most programs the nurse is the real technical
                    expert. Global Apheresis runs hands-on training for
                    physicians and clinical staff in Dr. Kiprov&apos;s protocols.
                    What that covers for a given practice is part of the
                    partnership conversation.
                  </p>

                  <h3 className="lon-narrative-heading">
                    What Actually Substitutes for a Credential
                  </h3>
                  <p className="body-lg">
                    Procedure volume under supervision, and access to someone who
                    has already solved the problem you are about to hit. Dr.
                    Dobri Kiprov is one of the physicians who established
                    therapeutic plasma exchange as a clinical discipline and has
                    overseen more than 15,000 treatments. I have supervised over
                    500 TPE procedures, and my training pathway ran through
                    clinical pathology and transfusion medicine, which is the
                    discipline the procedure actually belongs to. That is the
                    kind of thing worth asking about, from us or from anyone
                    else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: THE TWO ROUTES ===== */}
        <section className="site-section" id="routes">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Two Routes</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Build It, or{" "}
              <span className="serif-italic accent-text">Join One</span>
            </h2>

            <div className="tpe-science-grid">
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <h3 className="lon-narrative-heading">Building Independently</h3>
                  <p className="body-lg">
                    Source the machine, negotiate the disposables and albumin
                    supply, write your own protocols, arrange your own training,
                    and carry the medical direction yourself. This is entirely
                    doable, and it is the right answer for a practice that
                    already has apheresis or comparable procedural depth in
                    house. You keep the margin and you own every decision. You
                    also own the learning curve, and in a procedure where the
                    patient&apos;s blood is outside their body, the learning curve
                    has a cost that is not denominated in dollars.
                  </p>

                  <h3 className="lon-narrative-heading">
                    Joining an Established Program
                  </h3>
                  <p className="body-lg">
                    The alternative is an affiliate partnership, which is what
                    Global Apheresis offers: a turnkey arrangement covering the
                    machine, nursing staff, supplies, and protocols, with medical
                    directorship, hands-on training, and ongoing clinical
                    consultation. Scope and terms depend on the practice and are
                    settled in the contract, so there is no published price, and
                    anyone quoting you one sight unseen is guessing. The affiliate
                    network already spans clinics in several states, so part of
                    that first conversation is whether a given market is open.
                  </p>

                  <h3 className="lon-narrative-heading">How to Choose</h3>
                  <p className="body-lg">
                    The comparison people reach for first is the wrong one.
                    Setting an affiliate fee against $1,500 in consumables
                    compares a program to a supply line. The real comparison is
                    total cost to a safe, staffed, protocolled first procedure,
                    and then to a program with enough volume to stay competent.
                    Run that number honestly for both routes. If you have the
                    procedural infrastructure already, build. If you are starting
                    from a practice that has never run an extracorporeal
                    procedure, the structured route is usually cheaper than it
                    looks and the independent route is usually more expensive
                    than it looks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: WHO SHOULD NOT DO THIS ===== */}
        <section
          className="site-section"
          id="reality-check"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Reality Check</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              When the Answer Is{" "}
              <span className="serif-italic accent-text">No</span>
            </h2>

            <div className="alz-evidence-intro reveal">
              <p className="body-lg">
                I would rather talk a practice out of this than watch it launch
                badly. A program that starts underprepared does not just fail
                commercially. It produces a bad outcome, and bad outcomes in
                outpatient apheresis set back every practice doing this
                carefully. Reasons to wait:
              </p>
            </div>

            <div className="tpe-science-grid" style={{ marginTop: "2rem" }}>
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <p className="body-lg">
                    Your patient population cannot fund a series of procedures,
                    or does not have clear indications. You are counting on
                    insurance. You intend to staff a procedure with a nurse who
                    is also covering other patients. You cannot name who is
                    managing a citrate reaction at 2pm on a Thursday. You are
                    buying the machine first and building demand second. Or the
                    decision is being driven by the fact that a competitor down
                    the road started offering it, which is the worst reason on
                    this list and the most common one.
                  </p>
                  <p className="body-lg">
                    None of these are permanent disqualifications. They are
                    sequencing problems. The practices that do this well
                    generally fixed them before buying anything. For the full
                    operational detail, including phased implementation
                    timelines, the long version is in{" "}
                    <Link
                      href="/blog/tpe-for-healthcare-providers"
                      style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      the clinical implementation guide
                    </Link>
                    .
                  </p>
                </div>
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
              Physician to{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--accent-light)" }}
              >
                Physician
              </span>
            </h2>
            <p className="reveal">
              If you are evaluating TPE for your practice, the affiliate program
              is the right place to start that conversation. The first call is
              with Dr. Kiprov and me, not a sales team, and it is as useful if
              you conclude the answer is no.
            </p>
            <div className="cta-actions reveal">
              <a
                href="https://www.globalapheresis.com/affiliates"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Schedule a Physician Call <span className="arrow">&rarr;</span>
              </a>
            </div>
            <div className="reveal" style={{ marginTop: "1rem" }}>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.75)" }}>
                Or call Global Apheresis directly at{" "}
                <a href="tel:+14159281352" style={{ color: "var(--accent-light)" }}>
                  (415) 928-1352
                </a>
                .
              </p>
            </div>
            <div className="tpe-cta-links reveal">
              <div className="tpe-cta-link-row">
                <Link href="/blog/tpe-for-healthcare-providers" className="tpe-cta-pillar-link">
                  Read the full implementation guide
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
                Clinical background:
              </span>
              <div className="tpe-cta-link-row">
                <Link href="/tpe" className="tpe-cta-pillar-link">
                  What is TPE?
                </Link>
                <span className="tpe-cta-pillar-sep">&middot;</span>
                <Link href="/research/tpe-evidence" className="tpe-cta-pillar-link">
                  Evidence Base
                </Link>
                <span className="tpe-cta-pillar-sep">&middot;</span>
                <Link href="/about" className="tpe-cta-pillar-link">
                  About Dr. Green
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
