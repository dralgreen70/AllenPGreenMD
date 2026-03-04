const benefits = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    title: "Clears Age-Related Compounds",
    desc: "Removes inflammatory molecules, oxidized proteins, and senescent factors that accumulate with age.",
    delay: "reveal-d1",
  },
  {
    icon: '<path d="M21.5 2v6h-6"/><path d="M2.5 22v-6h6"/><path d="M22.1 11.5A10 10 0 0 0 3.5 4.3l-1 1.2"/><path d="M1.9 12.5a10 10 0 0 0 18.6 7.2l1-1.2"/>',
    title: "Resets Body Systems",
    desc: "Restores optimal signaling between organs, resetting metabolic, immune, and regenerative systems.",
    delay: "reveal-d2",
  },
  {
    icon: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
    title: "Reduces Inflammation",
    desc: "Albumin replacement provides powerful antioxidant and anti-inflammatory effects throughout the body.",
    delay: "reveal-d3",
  },
  {
    icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    title: "Activates Stem Cells",
    desc: "Fresh plasma awakens dormant stem cells, enhancing your body\u2019s natural regenerative capacity.",
    delay: "reveal-d4",
  },
  {
    icon: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    title: "Boosts Overall Health",
    desc: "Patients report increased energy, improved cognition, and enhanced physical performance.",
    delay: "reveal-d5",
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    title: "Combats Disease",
    desc: "Addresses underlying inflammatory and degenerative processes to prevent and manage chronic disease.",
    delay: "reveal-d5",
  },
]

export function BenefitsSection() {
  return (
    <section className="benefits-section site-section" id="benefits">
      <div className="site-container">
        <div className="section-header">
          <div className="section-header-text">
            <div className="section-label-line reveal">
              <span className="label-text">Transformative Results</span>
            </div>
            <h2 className="h-lg reveal">
              How Therapeutic Plasma Exchange Transforms{" "}
              <span className="serif-italic accent-text">Your Health</span>
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
        <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
          <a href="/tpe" className="btn btn-outline">
            See how TPE works <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
