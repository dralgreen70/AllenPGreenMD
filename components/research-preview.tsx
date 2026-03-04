import Link from "next/link"

const featured = [
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
  {
    type: "Journal Article",
    year: "2021",
    title:
      "The Utility of Therapeutic Plasma Exchange in Hyperviscosity Syndrome Associated with Juvenile Rheumatoid Arthritis",
    authors: "Green A, Gonzalez A, Alperin J, Burner J, Yates S",
    journal: "Journal of Clinical Apheresis",
    desc: "Case report demonstrating successful use of therapeutic plasma exchange for managing hyperviscosity syndrome in juvenile rheumatoid arthritis.",
    link: "https://pubmed.ncbi.nlm.nih.gov/33945169/",
  },
  {
    type: "Journal Article",
    year: "2022",
    title:
      "Successful Use of Lenalidomide to Treat Refractory Acquired von Willebrand Disease Associated with Monoclonal Gammopathy",
    authors: "Green A, Shen YP, Nelson AT, Sarode R, et al.",
    journal: "Annals of Hematology",
    desc: "First reported use of lenalidomide for refractory acquired von Willebrand disease in the setting of monoclonal gammopathy.",
    link: "https://link.springer.com/article/10.1007/s00277-022-04991-9",
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
          <Link href="/research" className="tpe-cta-btn">
            View All Publications
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
