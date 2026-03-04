export function PlexSection() {
  return (
    <section className="plex-section site-section" id="plex">
      <div className="site-container">
        <div className="plex-grid">
          <div className="plex-visual reveal-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Me_Receiving_PLEX-69hcDq11DxsKWNVBmYWPnNPRMhjkt5.jpg"
              alt="Dr. Allen P. Green receiving a therapeutic plasma exchange procedure with the Amicus Separator"
              loading="eager"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                position: "relative",
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
