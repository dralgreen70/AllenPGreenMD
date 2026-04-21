import Image from "next/image"

const tags = [
  "Board Certified",
  "UT Southwestern",
  "Clinical Pathologist",
  "ASFA Member",
  "Air Force Veteran",
]

export function AboutSection() {
  return (
    <section id="about" style={{ background: "var(--bg)", padding: "7rem 4rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr", gap: "5rem", alignItems: "start" }}>
          {/* LEFT: Photo */}
          <div style={{ position: "relative" }}>
            {/* Corner accent */}
            <div
              style={{
                position: "absolute",
                top: -10,
                left: -10,
                width: 80,
                height: 80,
                borderTop: "2px solid var(--accent)",
                borderLeft: "2px solid var(--accent)",
                zIndex: 2,
              }}
            />
            {/* Photo */}
            <div
              style={{
                aspectRatio: "3/4",
                overflow: "hidden",
                position: "relative",
                background: "#ddd",
              }}
            >
              <Image
                src="/images/drgreen_vest.webp"
                alt="Dr. Allen P. Green, Board-Certified Clinical Pathologist and therapeutic plasma exchange specialist"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2rem" }}>
              {tags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "6px 12px",
                    background: "#EEF4F7",
                    border: "none",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#1a3a5c",
                    letterSpacing: "0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span style={{ width: 35, height: 1.5, background: "var(--accent)", display: "block" }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  color: "var(--accent)",
                }}
              >
                Meet Dr. Green
              </span>
            </div>

            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.15 }}>
              Dr. Allen P.{" "}
              <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "var(--accent)" }}>
                Green
              </span>
            </h2>

            <p
              style={{
                marginTop: "0.75rem",
                color: "var(--text-secondary)",
                fontWeight: 400,
                fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                lineHeight: 1.3,
              }}
            >
              Board-Certified Clinical Pathologist & Apheresis Specialist
            </p>

            <div
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontSize: "1.35rem",
                color: "var(--navy)",
                lineHeight: 1.5,
                margin: "2rem 0",
                paddingLeft: "1.5rem",
                borderLeft: "3px solid var(--accent)",
              }}
            >
              {
                "\u201CI\u2019ve supervised over 500 therapeutic plasma exchange procedures. Every one has deepened my understanding of what this treatment can do.\u201D"
              }
            </div>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Board-certified in Clinical Pathology. Associate Medical Director
              at Global Apheresis. Trained under Dr. Dobri Kiprov, one of the
              physicians who established TPE as a clinical discipline.
            </p>

            <a
              href="/about"
              className="btn btn-outline"
              style={{ marginTop: "2rem" }}
            >
              Read full bio <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
