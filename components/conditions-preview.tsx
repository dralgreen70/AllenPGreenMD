const conditions = [
  {
    title: "Alzheimer\u2019s & Cognitive Decline",
    desc: "The AMBAR trial showed TPE slowed cognitive decline by 52\u201371% \u2014 with zero risk of ARIA.",
    href: "/tpe-alzheimers",
    delay: "reveal-d1",
  },
  {
    title: "Longevity & Biological Age",
    desc: "The Buck Institute measured a 2.61-year biological age reduction using 35 epigenetic clocks.",
    href: "/tpe-longevity",
    delay: "reveal-d2",
  },
  {
    title: "Autoimmune Conditions",
    desc: "TPE is first-line treatment for over a dozen autoimmune conditions \u2014 backed by ASFA Category I evidence.",
    href: "/tpe-autoimmune",
    delay: "reveal-d3",
  },
  {
    title: "Detoxification & Environmental Toxins",
    desc: "PFAS, microplastics, mold. When toxins bind to blood proteins, TPE removes them at the source.",
    href: "/tpe-detox",
    delay: "reveal-d4",
  },
]

export function ConditionsPreview() {
  return (
    <section className="conditions-section site-section" id="applications">
      <div className="site-container">
        <div className="section-header">
          <div className="section-header-text">
            <div className="section-label-line reveal">
              <span className="label-text">Applications</span>
            </div>
            <h2 className="h-lg reveal">
              Applications of Therapeutic Plasma{" "}
              <span className="serif-italic accent-text">Exchange</span>
            </h2>
          </div>
        </div>
        <div className="conditions-grid">
          {conditions.map((c, i) => (
            <a
              key={i}
              href={c.href}
              className={`condition-card reveal ${c.delay}`}
            >
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span className="condition-card-link">
                Learn more <span className="arrow">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
