import Link from "next/link"

export function TrainingCallout() {
  return (
    <section className="site-section" style={{ background: "var(--bg)" }}>
      <div className="site-container">
        <div
          className="reveal"
          style={{
            maxWidth: 820,
            margin: "0 auto",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderLeft: "3px solid var(--accent)",
            borderRadius: "var(--radius)",
            padding: "2.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "var(--accent)",
              marginBottom: "1.25rem",
            }}
          >
            Why the Training Matters
          </div>

          <p className="body-lg" style={{ marginBottom: "1rem" }}>
            Therapeutic plasma exchange is a procedure within transfusion
            medicine &mdash; the branch of clinical pathology concerned with
            blood and its components. Most physicians now offering it arrived
            from other fields: emergency medicine, radiology, family practice, or
            functional medicine. Dr. Green came to it from inside the discipline
            &mdash; a Board-Certified Clinical Pathologist who trained in
            therapeutic apheresis at UT Southwestern Medical Center and has
            performed over 500 TPE procedures.
          </p>
          <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
            Few physicians offering plasma exchange today trained in the
            discipline that created it. Dr. Green is one of them.
          </p>

          <Link
            href="/about"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "var(--accent)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            About Dr. Green&apos;s training{" "}
            <span className="arrow">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
