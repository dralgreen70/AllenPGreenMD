import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Research & Publications | Allen P. Green, M.D.",
  description:
    "Peer-reviewed publications and conference research by Allen P. Green, M.D. -- therapeutic plasma exchange, transfusion medicine, apheresis, and hematology.",
  openGraph: {
    title: "Research & Publications | Allen P. Green, M.D.",
    description:
      "Peer-reviewed publications and conference research by Allen P. Green, M.D. -- therapeutic plasma exchange, transfusion medicine, apheresis, and hematology.",
    url: "https://allenpgreenmd.com/research",
    siteName: "Allen P. Green, MD",
    images: [{ url: "https://allenpgreenmd.com/images/me-and-amicus.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Publications | Allen P. Green, M.D.",
    description:
      "Peer-reviewed publications and conference research by Allen P. Green, M.D. -- therapeutic plasma exchange, transfusion medicine, apheresis, and hematology.",
    images: ["https://allenpgreenmd.com/images/me-and-amicus.jpg"],
  },
  alternates: {
    canonical: "https://allenpgreenmd.com/research",
  },
}

/* ── Peer-Reviewed Publications ── */
const publications = [
  {
    year: "2026",
    authors: "Kiprov DD,",
    greenName: "Green AP,",
    authorsTail: "Boyinapalli P.",
    title:
      "Technological advances in selective plasma adsorption: The MTx.100 column and the emergence of subtractive precision medicine.",
    journal: "Transfusion and Apheresis Science",
    journalYear: "2026;65(4):104484",
    desc: "Reviews the MTx.100 selective adsorption column as a shift beyond non-selective plasma exchange toward subtractive precision medicine, targeting pathogenic cytokines and protein-bound toxins while sparing protective immunoglobulins, coagulation factors, and albumin.",
    link: "https://www.trasci.com/article/S1473-0502(26)00116-3/abstract",
  },
  {
    year: "2026",
    type: "Editorial",
    authors: "",
    greenName: "Green A,",
    authorsTail: "Kiprov D.",
    title:
      "Therapeutic apheresis in transition: New indications and the emergence of precision apheresis.",
    journal: "Transfusion and Apheresis Science",
    journalYear: "2026;65:104480",
    desc: "Opening editorial for the guest-edited theme issue, framing the field's shift from non-selective plasma exchange toward precision apheresis and introducing the four contributions that map that transition.",
    link: "https://www.trasci.com/article/S1473-0502(26)00112-6/abstract",
  },
  {
    year: "2024",
    citation:
      'Yates SG, Hofmann SL, Ibrahim IF, Shen YMP, **Green AP**, Sarode R. Tailoring caplacizumab administration using ADAMTS13 activity for immune-mediated thrombotic thrombocytopenic purpura. *Blood Vessels, Thrombosis & Hemostasis.* 2024.',
    authors: "Yates SG, Hofmann SL, Ibrahim IF, Shen YMP,",
    greenName: "Green AP,",
    authorsTail: "Sarode R.",
    title:
      "Tailoring caplacizumab administration using ADAMTS13 activity for immune-mediated thrombotic thrombocytopenic purpura.",
    journal: "Blood Vessels, Thrombosis & Hemostasis",
    journalYear: "2024",
    desc: "Demonstrates a personalized approach to caplacizumab dosing guided by ADAMTS13 activity monitoring, optimizing treatment duration and outcomes in immune-mediated TTP.",
    link: "https://doi.org/10.1016/j.bvth.2024.100010",
  },
  {
    year: "2023",
    authors: "",
    greenName: "Green A,",
    authorsTail:
      "Jones H, Nero A, Ibrahim IF, Sarode R, et al.",
    title:
      "A case of hyperhemolysis syndrome in sickle cell disease and concomitant COVID-19.",
    journal: "Transfusion and Apheresis Science",
    journalYear: "2023",
    desc: "Reports a novel case highlighting the intersection of hyperhemolysis syndrome in sickle cell disease complicated by concurrent SARS-CoV-2 infection.",
    link: "https://pubmed.ncbi.nlm.nih.gov/37149492/",
  },
  {
    year: "2022",
    authors: "",
    greenName: "Green A,",
    authorsTail:
      "Shen YP, Nelson AT, Sarode R, et al.",
    title:
      "Successful use of lenalidomide to treat refractory acquired von Willebrand disease associated with monoclonal gammopathy.",
    journal: "Annals of Hematology",
    journalYear: "2022",
    desc: "First reported use of lenalidomide for refractory acquired von Willebrand disease in the setting of monoclonal gammopathy \u2014 a novel therapeutic approach.",
    link: "https://link.springer.com/article/10.1007/s00277-022-04991-9",
  },
  {
    year: "2021",
    authors:
      "Garc\u00EDa R, Hussain A, \u2026",
    greenName: "Green A,",
    authorsTail: "et al.",
    title:
      "Identification of potential antiviral compounds against SARS-CoV-2 structural and non-structural protein targets: A pharmacoinformatics study of the CAS COVID-19 dataset.",
    journal: "Computers in Biology and Medicine",
    journalYear: "2021",
    desc: "Machine-learning and molecular-docking pharmacoinformatics screen of the CAS COVID-19 compound dataset to identify candidate SARS-CoV-2 antivirals.",
    link: "https://pubmed.ncbi.nlm.nih.gov/33895457/",
  },
  {
    year: "2021",
    authors: "Narasimhan M, \u2026",
    greenName: "Green A,",
    authorsTail: "et al.",
    title:
      "Clinical evaluation of the Abbott Alinity SARS-CoV-2 spike-specific quantitative IgG and IgM assays among infected, recovered, and vaccinated groups.",
    journal: "Journal of Clinical Microbiology",
    journalYear: "2021",
    desc: "Clinical validation of COVID-19 antibody assays, supporting diagnostic accuracy during the pandemic.",
    link: "https://pubmed.ncbi.nlm.nih.gov/33827901/",
  },
  {
    year: "2021",
    authors: "",
    greenName: "Green A,",
    authorsTail:
      "Gonzalez A, Alperin J, et al.",
    title:
      "The utility of therapeutic plasma exchange in hyperviscosity syndrome associated with juvenile rheumatoid arthritis: A case report.",
    journal: "Journal of Clinical Apheresis",
    journalYear: "2021",
    desc: "Demonstrates the application of TPE for hyperviscosity syndrome in the context of juvenile rheumatoid arthritis \u2014 directly relevant to the autoimmune applications of apheresis.",
    link: "https://pubmed.ncbi.nlm.nih.gov/33945169/",
  },
]

/* ── 2026 Theme Issue (Co-Guest Editor) ── */
const themeIssue = [
  {
    type: "Editorial",
    title:
      "Therapeutic apheresis in transition: New indications and the emergence of precision apheresis.",
    authors: "Green A, Kiprov D.",
    link: "https://www.trasci.com/article/S1473-0502(26)00112-6/abstract",
  },
  {
    type: "Review",
    title:
      "Therapeutic plasma exchange in Alzheimer's disease: From clinical trial to real-world evidence.",
    authors: "Khatri BO.",
    link: "https://www.trasci.com/article/S1473-0502(26)00113-8/abstract",
  },
  {
    type: "Review",
    title:
      "Therapeutic plasma exchange and immunomodulatory strategies in post-infectious syndromes: A review of immune dysregulation in PTLDS, long COVID, ME/CFS, and PANS/PANDAS.",
    authors: "Kaplan G.",
    link: "https://www.trasci.com/article/S1473-0502(26)00114-X/fulltext",
  },
  {
    type: "Review",
    title:
      "Lipoprotein apheresis: From familial hypercholesterolemia and elevated lipoprotein(a) to emerging roles in peripheral arterial and renal disease.",
    authors: "Nadim M, Akgun Y.",
    link: "https://www.trasci.com/article/S1473-0502(26)00115-1/abstract",
  },
  {
    type: "Review",
    title:
      "Technological advances in selective plasma adsorption: The MTx.100 column and the emergence of subtractive precision medicine.",
    authors: "Kiprov DD, Green AP, Boyinapalli P.",
    link: "https://www.trasci.com/article/S1473-0502(26)00116-3/abstract",
  },
]

/* ── Conference Abstracts & Posters ── */
const abstracts = [
  {
    year: "2024",
    conference: "American Society for Apheresis (ASFA) Annual Conference",
    type: "Poster Presentation",
    title: "Sodium citrate anticoagulant for apheresis port patency",
    desc: "Evaluating sodium citrate as an anticoagulant lock solution for maintaining apheresis port patency \u2014 addressing a practical clinical challenge in serial TPE patients.",
  },
  {
    year: "2023",
    conference:
      "American Society for Apheresis (ASFA) Annual Meeting, Minneapolis, MN",
    type: "Poster Abstract (Co-Author)",
    title:
      "Response to therapeutic plasma exchange in two patients with systemic sclerosis",
    authors: "Webb CB, Green A, Wodajo A, et al.",
    desc: "Co-authored abstract examining TPE outcomes in systemic sclerosis patients \u2014 contributing to the evidence base for apheresis in autoimmune fibrotic conditions.",
  },
  {
    year: "2022",
    conference: "AABB Annual Meeting",
    type: "Poster Presentation",
    title:
      "The impact of Rh/K antigen matching for chronic red cell exchanges in sickle cell disease",
    desc: "Evaluating the clinical impact of extended antigen matching protocols in chronic transfusion support for sickle cell patients.",
  },
]

/* ── Invited Presentations ── */
const presentations = [
  {
    year: "2024",
    venue:
      "American Society for Apheresis (ASFA) Annual Conference, Las Vegas",
    type: "Oral Presentation",
    title:
      "Continued unfractionated heparin infusion during therapeutic plasma exchange: a retrospective analysis",
    desc: "Retrospective analysis evaluating the safety and efficacy of maintaining heparin infusions during TPE procedures, informing anticoagulation management best practices.",
  },
  {
    year: "2024",
    venue:
      "UT Southwestern Medical Center, Department of Pathology \u2014 Update in Pathophysiology lecture series",
    type: "Oral Presentation",
    title:
      "Therapeutic Plasma Exchange: A Deep Dive into Mechanisms and Therapeutic Potential",
    desc: "Presentation covering the mechanistic basis of TPE and its expanding therapeutic applications, delivered to the department where Dr. Green completed his residency training.",
  },
]

export default function ResearchPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": "https://allenpgreenmd.com/#physician",
      name: "Allen P. Green, M.D.",
      url: "https://allenpgreenmd.com/about",
      medicalSpecialty: "Pathology",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Board Certification",
        name: "Board-Certified in Clinical Pathology",
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://allenpgreenmd.com"},{"@type":"ListItem","position":2,"name":"Research","item":"https://allenpgreenmd.com/research"}]}) }}
      />
      <main>
        {/* ===== SECTION 1: HERO ===== */}
        <section className="tpe-hero" id="intro">
          <div className="tpe-hero-inner">
            <div className="section-label-line reveal">
              <span className="label-text">Research &amp; Publications</span>
            </div>
            <h1 className="h-display reveal">
              Published{" "}
              <span className="serif-italic accent-text">Research</span>
            </h1>
            <p className="tpe-hero-sub reveal">
              <Link
                href="/about"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Dr. Green
              </Link>
              &apos;s research spans{" "}
              <Link
                href="/tpe"
                style={{
                  color: "var(--accent)",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                therapeutic plasma exchange
              </Link>
              , transfusion medicine, apheresis technologies, and hematology
              &mdash; with publications in peer-reviewed journals and
              presentations at national conferences.
            </p>
            <div className="tpe-hero-anchor reveal">
              <p className="body-lg">
                Clinical research is the foundation of evidence-based practice.
                Dr. Green has contributed to the literature on apheresis
                optimization, novel treatment approaches in hematology, and
                diagnostic validation &mdash; work that directly informs the
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

            {/* Publication count summary */}
            <div className="tpe-hero-badges reveal" style={{ borderTop: "1px solid var(--border)", marginTop: "2.5rem", paddingTop: "2rem", display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
              <span className="tpe-badge">8 Publications</span>
              <span className="tpe-badge-divider">&middot;</span>
              <span className="tpe-badge">Guest Editor, 2026 Theme Issue</span>
              <span className="tpe-badge-divider">&middot;</span>
              <span className="tpe-badge">3 Conference Abstracts</span>
              <span className="tpe-badge-divider">&middot;</span>
              <span className="tpe-badge">2 Oral Presentations</span>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: PEER-REVIEWED PUBLICATIONS ===== */}
        <section
          className="site-section"
          id="publications"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Peer-Reviewed</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "2rem" }}>
              Peer-Reviewed{" "}
              <span className="serif-italic accent-text">Publications</span>
            </h2>

            <div className="research-pub-list">
              {publications.map((p, i) => (
                <div
                  key={i}
                  className={`research-pub-item reveal reveal-d${Math.min((i % 3) + 1, 3)}`}
                >
                  <div className="research-pub-year">{p.year}</div>
                  <div className="research-pub-body">
                    <div className="research-pub-type">
                      {"type" in p && p.type ? p.type : "Journal Article"}
                    </div>
                    <h3 className="research-pub-title">{p.title}</h3>
                    <p className="research-pub-authors">
                      {p.authors}{p.authors ? " " : ""}
                      <strong>{p.greenName}</strong> {p.authorsTail}
                    </p>
                    <p className="research-pub-journal">
                      <em>{p.journal}.</em> {p.journalYear}.
                    </p>
                    <p className="research-pub-desc">{p.desc}</p>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-pub-link"
                      >
                        View Paper
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 2B: EDITORIAL & THEME ISSUE ===== */}
        <section className="site-section" id="editorial">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Editorial</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Guest-Edited{" "}
              <span className="serif-italic accent-text">Theme Issue</span>
            </h2>

            <div
              className="alz-evidence-intro reveal"
              style={{ maxWidth: 820, marginBottom: "2.5rem" }}
            >
              <p className="body-lg">
                Dr. Green served as co-guest editor of a 2026 theme issue of{" "}
                <em>Transfusion and Apheresis Science</em>,{" "}
                &ldquo;Therapeutic Apheresis: Novel Indications and Emerging
                Technologies,&rdquo; convened with Dr. Dobri Kiprov. The issue
                maps the field&apos;s shift from non-selective plasma exchange
                toward selective, component-targeted apheresis across
                neurodegeneration, post-infectious immune dysregulation,
                cardiovascular and renal disease, and emerging column
                technology. Dr. Green co-authored the opening editorial and a
                review of selective adsorption technology.
              </p>
            </div>

            <div className="research-pub-list">
              {themeIssue.map((a, i) => (
                <div
                  key={i}
                  className={`research-pub-item research-pub-item--light research-pub-item--noyear reveal reveal-d${Math.min((i % 3) + 1, 3)}`}
                >
                  <div className="research-pub-body">
                    <div className="research-pub-type">{a.type}</div>
                    <h3 className="research-pub-title">{a.title}</h3>
                    <p className="research-pub-authors">{a.authors}</p>
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="research-pub-link"
                    >
                      View Paper
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: CONFERENCE ABSTRACTS ===== */}
        <section className="site-section" id="abstracts">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Conference Work</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "2rem" }}>
              Conference Abstracts &amp;{" "}
              <span className="serif-italic accent-text">Posters</span>
            </h2>

            <div className="research-pub-list">
              {abstracts.map((a, i) => (
                <div
                  key={i}
                  className={`research-pub-item research-pub-item--light reveal reveal-d${i + 1}`}
                >
                  <div className="research-pub-year">{a.year}</div>
                  <div className="research-pub-body">
                    <div className="research-pub-type">{a.type}</div>
                    <h3 className="research-pub-title">{a.title}</h3>
                    {"authors" in a && a.authors && (
                      <p className="research-pub-authors">{a.authors}</p>
                    )}
                    <p className="research-pub-journal">
                      <em>{a.conference}</em>
                    </p>
                    <p className="research-pub-desc">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: INVITED PRESENTATIONS ===== */}
        <section
          className="site-section"
          id="presentations"
          style={{ background: "var(--bg-alt)" }}
        >
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Presentations</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "2rem" }}>
              Oral{" "}
              <span className="serif-italic accent-text">Presentations</span>
            </h2>

            <div className="research-pub-list">
              {presentations.map((p, i) => (
                <div
                  key={i}
                  className={`research-pub-item research-pub-item--light reveal reveal-d${i + 1}`}
                >
                  <div className="research-pub-year">{p.year}</div>
                  <div className="research-pub-body">
                    <div className="research-pub-type">{p.type}</div>
                    <h3 className="research-pub-title">{p.title}</h3>
                    <p className="research-pub-journal">
                      <em>{p.venue}</em>
                    </p>
                    <p className="research-pub-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: RESEARCH AT GLOBAL APHERESIS ===== */}
        <section className="site-section" id="global-apheresis">
          <div className="site-container">
            <div className="section-label-line reveal">
              <span className="label-text">Research Environment</span>
            </div>
            <h2 className="h-lg reveal" style={{ marginBottom: "1.25rem" }}>
              Research at Global{" "}
              <span className="serif-italic accent-text">Apheresis</span>
            </h2>

            <div className="tpe-science-grid">
              <div className="tpe-science-content">
                <div className="tpe-science-text reveal">
                  <p className="body-lg">
                    Dr. Green&apos;s personal research in apheresis optimization
                    and{" "}
                    <Link
                      href="/tpe-autoimmune"
                      style={{
                        color: "var(--accent)",
                        textDecoration: "underline",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      autoimmune therapeutics
                    </Link>{" "}
                    complements a broader research environment at Global
                    Apheresis. The facility has been the clinical site for
                    landmark studies in TPE and aging &mdash; including the Kim
                    et al. study on plasma dilution and biological age (
                    <em>GeroScience</em>, 2022) and the Fuentealba et al.
                    randomized trial on biological age rejuvenation (
                    <em>Aging Cell</em>, 2025), both conducted in collaboration
                    with Dr. Dobri Kiprov. While these studies are not Dr.
                    Green&apos;s publications, the protocols and insights they
                    generated directly inform clinical practice at Global
                    Apheresis.
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
                Contact
              </span>
            </div>
            <h2 className="h-lg reveal">
              Have Questions About Our{" "}
              <span
                className="serif-italic"
                style={{ color: "var(--accent-light)" }}
              >
                Research?
              </span>
            </h2>
            <p className="reveal">
              Dr. Green welcomes inquiries from patients, referring physicians,
              and research collaborators. Schedule a discovery call to discuss
              how published research informs the treatment protocols at Global
              Apheresis.
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
                <Link href="/about" className="tpe-cta-pillar-link">
                  &larr; Back to About Dr. Green
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
