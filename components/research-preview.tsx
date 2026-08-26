import Link from "next/link"

const featured = [
  {
    type: "Editorial",
    year: "2026",
    title:
      "Therapeutic Apheresis in Transition: New Indications and the Emergence of Precision Apheresis",
    authors: "Green A, Kiprov D",
    journal: "Transfusion and Apheresis Science",
    desc: "Opening editorial for the guest-edited theme issue, framing the field's shift from non-selective plasma exchange toward precision apheresis.",
    link: "https://www.trasci.com/article/S1473-0502(26)00112-6/abstract",
  },
  {
    type: "Review Article",
    year: "2026",
    title:
      "Technological Advances in Selective Plasma Adsorption: The MTx.100 Column and the Emergence of Subtractive Precision Medicine",
    authors: "Kiprov DD, Green AP, Boyinapalli P",
    journal: "Transfusion and Apheresis Science",
    desc: "Reviews selective adsorption as a move beyond non-selective exchange — targeting pathogenic cytokines and protein-bound toxins while sparing immunoglobulins, coagulation factors, and albumin.",
    link: "https://www.trasci.com/article/S1473-0502(26)00116-3/abstract",
  },
  {
    type: "Journal Article",
    year: "2024",
    title:
      "Tailoring Caplacizumab Administration Using ADAMTS13 Activity for Immune-Mediated Thrombotic Thrombocytopenic Purpura",
    authors: "Yates SG, Hofmann SL, Ibrahim IF, Shen YMP, Green AP, Sarode R",
    journal: "Blood Vessels, Thrombosis & Hemostasis",
    desc: "Demonstrates a personalized approach to caplacizumab dosing guided by ADAMTS13 activity monitoring, optimizing treatment outcomes in iTTP.",
    link: "https://doi.org/10.1016/j.bvth.2024.100010",
  },
]

export function ResearchPreview() {
  return (
    <section className="publications-section site-section" id="research">
      <div className="site-container">
        <div className="section-header">
          <div className="section-header-text">
            <div className="section-label-line reveal">
              <span className="label-text">Published Research</span>
            </div>
            <h2 className="h-lg reveal">
              Research &{" "}
              <span className="serif-italic accent-text">Publications</span>
            </h2>
            <p className="section-subtitle reveal" style={{ maxWidth: "680px" }}>
              Peer-reviewed contributions spanning hematology, apheresis
              medicine, and transfusion science.
            </p>
          </div>
        </div>
        <div className="pub-cards-grid">
          {featured.map((p, i) => (
            <div key={i} className={`pub-card reveal reveal-d${i + 1}`}>
              <div className="pub-card-header">
                <span className="pub-card-type">{p.type}</span>
                <span className="pub-card-year">{p.year}</span>
              </div>
              <div className="pub-card-body">
                <h3 className="pub-card-title">{p.title}</h3>
                <p className="pub-card-authors">{p.authors}</p>
                <p className="pub-card-journal">{p.journal}</p>
                <p className="pub-card-desc">{p.desc}</p>
                {p.link !== "#" && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-card-link"
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
        <div className="reveal" style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/research" className="view-all-link">
            View All Publications&nbsp;<span className="arrow">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
