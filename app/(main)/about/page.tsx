import type { Metadata } from "next"
import Link from "next/link"
import { Ticker } from "@/components/ticker"

export const metadata: Metadata = {
  title: "Dr. Allen P. Green, M.D. | Therapeutic Plasma Exchange Specialist",
  description:
    "Board-certified in Clinical Pathology. Associate Medical Director at Global Apheresis. 500+ therapeutic plasma exchange procedures. Trained under Dr. Dobri Kiprov.",
}

const timelineEvents = [
  {
    year: "2016",
    title: "Medical University of South Carolina, M.D.",
    desc: "Discovered revolutionary aging research using therapeutic plasma exchange for longevity and Alzheimer\u2019s disease through independent study.",
  },
  {
    year: "2020\u20132024",
    title: "UT Southwestern Medical Center",
    desc: "Clinical Pathology residency. Trained in therapeutic apheresis under Dr. Ravi Sarode. Supervised and performed hundreds of apheresis procedures.",
  },
  {
    year: "2025",
    title: "Longevity Clinic, Dallas",
    desc: "Established TPE protocols for Alzheimer\u2019s disease and cognitive enhancement at a leading longevity clinic. Introduced therapeutic plasma exchange in a clinical setting where it had never been offered.",
  },
  {
    year: "2026\u2013Present",
    title: "Associate Medical Director, Global Apheresis",
    desc: "Working alongside Dr. Dobri Kiprov in Mill Valley, CA. Leading comprehensive apheresis programs utilizing therapeutic plasma exchange, cellular collection, and emerging lipid apheresis.",
  },
]

const credentials = [
  {
    label: "Education & Residency",
    items: [
      "Medical University of South Carolina \u2014 Doctor of Medicine",
      "UT Southwestern Medical Center, Dallas \u2014 Residency in Clinical Pathology",
      "Trained in therapeutic apheresis under Dr. Ravi Sarode, one of the leading apheresis educators in the country",
    ],
  },
  {
    label: "Board Certification",
    items: [
      "Board-Certified in Clinical Pathology (American Board of Pathology)",
      "Clinical Pathology is the laboratory medicine and transfusion medicine specialty that directly encompasses apheresis \u2014 the medical specialty most relevant to TPE",
    ],
  },
  {
    label: "Military Service",
    items: ["United States Air Force veteran"],
  },
  {
    label: "Professional Memberships",
    items: ["American Society for Apheresis (ASFA)"],
  },
]

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Allen P. Green",
    honorificPrefix: "Dr.",
    honorificSuffix: "M.D.",
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
    description:
      "Board-certified physician specializing in therapeutic plasma exchange. Over 500 TPE procedures performed.",
    knowsAbout: [
      "Therapeutic Plasma Exchange",
      "Plasmapheresis",
      "Apheresis",
      "Clinical Pathology",
      "Alzheimer's Disease Treatment",
      "Biological Age Reversal",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Medical University of South Carolina",
      },
      {
        "@type": "EducationalOrganization",
        name: "UT Southwestern Medical Center",
      },
    ],
    memberOf: {
      "@type": "MedicalOrganization",
      name: "American Society for Apheresis",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main>
        {/* ===== SECTION 1: HERO ===== */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <div className="about-hero-text">
              <div className="section-label-line reveal">
                <span className="label-text">About</span>
              </div>
              <h1 className="h-display reveal">
                Dr. Allen P.{" "}
                <span className="serif-italic accent-text">Green</span>
              </h1>
              <p className="about-hero-tagline reveal">
                Board-Certified Physician.{" "}
                <span className="serif-italic">
                  Therapeutic Plasma Exchange Specialist.
                </span>
              </p>
            </div>
            <div className="about-hero-photo reveal-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me_amicus-MZRtkfKGLeHHpGc0uTG48lLTobF3fj.jpeg"
                alt="Dr. Allen P. Green, MD with the Amicus Separator"
                loading="eager"
                fetchPriority="high"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              <div className="about-hero-photo-overlay">
                <span className="about-hero-photo-name">
                  Dr. Allen P. Green, MD
                </span>
                <span className="about-hero-photo-title">
                  Associate Medical Director, Global Apheresis
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SCROLLING CREDENTIAL BAR ===== */}
        <Ticker
          items={[
            { label: "CERTIFICATION", value: "Board-Certified Clinical Pathologist" },
            { label: "TRAINING", value: "UT Southwestern" },
            { label: "SERVICE", value: "Air Force Veteran" },
            { label: "EXPERIENCE", value: "500+ TPE Procedures" },
            { label: "ROLE", value: "Associate Medical Director, Global Apheresis" },
          ]}
        />

        {/* ===== SECTION 2: PULL QUOTE + BIO ===== */}
        <section className="site-section" style={{ background: "var(--bg)" }}>
          <div className="site-container">
            <div className="about-bio-grid">
              <div className="about-bio-content">
                <div
                  className="about-quote reveal"
                  style={{ fontSize: "1.45rem", margin: "0 0 2.5rem" }}
                >
                  {
                    "\u201CWhen I learned that aging and disease travel through our own blood, everything clicked. Therapeutic plasma exchange doesn\u2019t just treat symptoms \u2014 it goes to the source.\u201D"
                  }
                </div>

                <div className="about-bio-text reveal">
                  <p className="body-lg">
                    Dr. Allen P. Green is a board-certified physician specializing
                    in{" "}
                    <Link href="/tpe" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                      therapeutic plasma exchange
                    </Link>{" "}
                    (TPE) and an Associate Medical Director at Global Apheresis in
                    Mill Valley, California. He has personally supervised over 500
                    TPE procedures &mdash; one of the highest individual case
                    volumes among private practice apheresis physicians in the
                    United States.
                  </p>
                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    Dr. Green&apos;s clinical focus spans the full range of TPE
                    applications: from{" "}
                    <Link href="/tpe-alzheimers" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                      Alzheimer&apos;s disease and cognitive decline
                    </Link>{" "}
                    to{" "}
                    <Link href="/tpe-longevity" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                      biological age optimization
                    </Link>
                    ,{" "}
                    <Link href="/tpe-autoimmune" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                      autoimmune conditions
                    </Link>
                    , and{" "}
                    <Link href="/tpe-detox" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                      environmental toxin reduction
                    </Link>
                    . His approach combines rigorous evidence-based medicine with a
                    commitment to treating each patient as a whole person &mdash;
                    not a diagnosis.
                  </p>
                  <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                    Before joining Global Apheresis, Dr. Green established TPE
                    protocols for Alzheimer&apos;s disease and cognitive
                    enhancement at a leading longevity clinic in Dallas, bringing
                    therapeutic apheresis into a clinical setting where it had
                    never been offered before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: TRAINING & CREDENTIALS ===== */}
        <section
          className="site-section"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Training & Credentials</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "3rem" }}>
              A Foundation in Clinical{" "}
              <span className="serif-italic accent-text">Excellence</span>
            </h2>
            <div className="credentials-grid">
              {credentials.map((group, i) => (
                <div
                  key={i}
                  className={`credential-card reveal reveal-d${i + 1}`}
                >
                  <div className="credential-label">{group.label}</div>
                  <ul className="credential-list">
                    {group.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: MENTORSHIP & GLOBAL APHERESIS ===== */}
        <section className="site-section" style={{ background: "var(--bg)" }}>
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Mentorship</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "3rem" }}>
              Trained by a{" "}
              <span className="serif-italic accent-text">Pioneer</span>
            </h2>
            <div className="mentorship-grid">
              <div className="mentorship-photo reveal-left">
                <div className="mentorship-photo-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dobri_and_I_GA-xWLrNYBYXjhg6A3hSnBJIr0tsauWLO.jpeg"
                    alt="Dr. Allen P. Green with Dr. Dobri Kiprov at Global Apheresis"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
                <p className="mentorship-photo-caption">
                  <span style={{ fontWeight: 600, color: "var(--text)" }}>
                    With Dr. Dobri Kiprov
                  </span>{" "}
                  at Global Apheresis &mdash; a pioneer in therapeutic plasma
                  exchange and key mentor in Dr. Green&apos;s career.
                </p>
              </div>
              <div className="mentorship-text reveal-right">
                <p className="body-lg">
                  Dr. Green trained under and now works alongside Dr. Dobri
                  Kiprov, M.D. &mdash; one of the physicians who established
                  therapeutic plasma exchange as a clinical discipline. Dr.
                  Kiprov was the first U.S. physician to pass the Hemapheresis
                  Practitioner Exam, a founding member of the American Society
                  for Apheresis (ASFA) and The Journal of Clinical Apheresis,
                  and has overseen more than 15,000 therapeutic apheresis
                  treatments over four decades.
                </p>
                <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                  As Associate Medical Director at Global Apheresis, Dr. Green
                  brings a next-generation perspective to a practice with an
                  unmatched depth of clinical experience. The combination
                  &mdash; Dr. Kiprov&apos;s pioneering legacy and Dr.
                  Green&apos;s hands-on procedural volume &mdash; makes Global
                  Apheresis one of the most experienced therapeutic apheresis
                  practices in the country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: CAREER TIMELINE ===== */}
        <section
          className="timeline-section site-section"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Career Journey</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1rem" }}>
              From Medical School to 500{" "}
              <span className="serif-italic accent-text">Procedures</span>
            </h2>
            <div className="about-timeline-with-photo">
              <div className="about-timeline-photo reveal-left">
                <div
                  style={{
                    borderRadius: "var(--radius)",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me_Receiving_PLEX-69hcDq11DxsKWNVBmYWPnNPRMhjkt5.jpg"
                    alt="Dr. Allen P. Green receiving a therapeutic plasma exchange procedure"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      padding: "1rem 1.25rem",
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{ fontWeight: 600, color: "var(--text)" }}
                    >
                      Dr. Green receiving TPE
                    </span>{" "}
                    &mdash; he believes in the treatment enough to undergo it
                    personally.
                  </div>
                </div>
              </div>
              <div className="timeline">
                {timelineEvents.map((e, i) => (
                  <div key={i} className="timeline-item reveal">
                    <div className="timeline-year">{e.year}</div>
                    <div className="timeline-dot-wrapper">
                      <div className="timeline-dot" />
                    </div>
                    <div className="timeline-content">
                      <h4>{e.title}</h4>
                      <p>{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: CLINICAL PHILOSOPHY ===== */}
        <section className="site-section" style={{ background: "var(--bg)" }}>
          <div className="site-container">
            <div className="philosophy-section">
              <div className="section-label-line reveal">
                <span className="label-text">Philosophy</span>
              </div>
              <h2 className="h-lg reveal" style={{ marginBottom: "2rem" }}>
                Medicine the Way It{" "}
                <span className="serif-italic accent-text">Should Be</span>
              </h2>
              <div className="philosophy-text reveal">
                <p className="body-lg">
                  Every patient who comes to me has usually been through the
                  conventional system already &mdash; and it hasn&apos;t been
                  enough. They&apos;re looking for a physician who will listen,
                  who will look at the full picture, and who has a tool that can
                  actually move the needle.
                </p>
                <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                  Therapeutic plasma exchange isn&apos;t a magic bullet. But for
                  the right patient, at the right time, with the right clinical
                  reasoning behind it &mdash; it&apos;s one of the most powerful
                  interventions in medicine. My job is figuring out when
                  it&apos;s the right tool, being honest when it&apos;s not, and
                  walking beside my patients through the process either way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: RESEARCH & PUBLICATIONS CTA ===== */}
        <section
          className="site-section"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Research</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "2rem" }}>
              Published{" "}
              <span className="serif-italic accent-text">Research</span>
            </h2>
            <div className="research-summary reveal">
              <p className="body-lg">
                Dr. Green has authored six peer-reviewed publications in journals
                including the Journal of Clinical Apheresis, Annals of
                Hematology, Transfusion and Apheresis Science, and Blood
                Vessels, Thrombosis &amp; Hemostasis. His research spans{" "}
                <Link href="/tpe" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  therapeutic plasma exchange
                </Link>{" "}
                technique, coagulation disorders, and apheresis clinical
                practice. He has presented original research at the American
                Society for Apheresis (ASFA) annual conference &mdash; including
                an oral presentation on anticoagulation management during TPE
                &mdash; and delivered an invited lecture on TPE mechanisms at UT
                Southwestern.
              </p>
              <Link
                href="/research"
                className="btn btn-outline"
                style={{ marginTop: "2rem" }}
              >
                View full publication list{" "}
                <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: CTA ===== */}
        <section className="cta-section">
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
              Schedule a free discovery call to discuss whether therapeutic
              plasma exchange is right for you.
            </p>
            <div className="cta-actions reveal">
              <a
                href="https://globalapheresis.com/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Book a Discovery Call{" "}
                <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
