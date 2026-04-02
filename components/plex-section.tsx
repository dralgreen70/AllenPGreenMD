import Image from "next/image"

export function PlexSection() {
  return (
    <section className="plex-section site-section" id="plex">
      <div className="site-container">
        <div className="plex-grid">
          <div className="plex-visual reveal-left">
            <Image
              src="/images/dr-green-receiving-plasma-exchange.jpg"
              alt="Dr. Allen Green receiving therapeutic plasma exchange -- firsthand clinical experience"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                zIndex: 1,
              }}
            />
            <div className="plex-visual-label">
              <div className="dot" />
              <span>PLEX Procedure in Action</span>
            </div>
          </div>
          <div className="plex-content reveal-right">
            <div className="section-label-line">
              <span className="label-text">The Science</span>
            </div>
            <h2 className="h-lg">
              What is{" "}
              <span className="serif-italic accent-text">
                Therapeutic Plasma Exchange?
              </span>
            </h2>
            <p className="body-lg" style={{ marginTop: "1.25rem" }}>
              Therapeutic Plasma Exchange (TPE) is a medical procedure that
              filters and replaces blood plasma to remove harmful circulating
              factors &mdash; from autoantibodies to inflammatory proteins to
              environmental toxins. It&apos;s one of the most versatile treatments
              in medicine, with over 80 recognized clinical applications.
            </p>
            <a
              href="/tpe"
              className="btn btn-accent"
              style={{ marginTop: "2rem" }}
            >
              Learn more <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
