import Link from "next/link"

export function TrainingDifference() {
  return (
    <section
      style={{
        background: "var(--bg-alt)",
        padding: "7rem 4rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              width: 35,
              height: 1.5,
              background: "var(--accent)",
              display: "block",
            }}
          />
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
            Why the Training Matters
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: "2rem",
          }}
        >
          Trained inside the field that{" "}
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              color: "var(--accent)",
            }}
          >
            created apheresis
          </span>
        </h2>

        <p className="body-lg" style={{ marginBottom: "1.25rem" }}>
          Therapeutic plasma exchange is a procedure within transfusion medicine
          &mdash; the branch of clinical pathology concerned with blood and its
          components. Most physicians now offering it in wellness and longevity
          clinics arrived from other fields: emergency medicine, radiology,
          family practice, or functional medicine.
        </p>
        <p className="body-lg" style={{ marginBottom: "1.75rem" }}>
          Dr. Green came to it from inside the discipline &mdash; a
          Board-Certified Clinical Pathologist who trained in therapeutic
          apheresis at UT Southwestern Medical Center and has performed over 500
          TPE procedures. Few physicians offering plasma exchange today trained
          in the discipline that created it. Dr. Green is one of them.
        </p>

        <Link href="/about" className="btn btn-outline">
          The training behind the treatment{" "}
          <span className="arrow">&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
