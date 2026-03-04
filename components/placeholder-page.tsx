import Link from "next/link"

interface PlaceholderPageProps {
  label: string
  title: string
  titleAccent: string
  description: string
}

export function PlaceholderPage({
  label,
  title,
  titleAccent,
  description,
}: PlaceholderPageProps) {
  return (
    <main>
      <section className="placeholder-hero">
        <div className="placeholder-hero-inner">
          <div className="section-label-line" style={{ justifyContent: "center" }}>
            <span className="label-text">{label}</span>
          </div>
          <h1 className="h-lg" style={{ textAlign: "center" }}>
            {title}{" "}
            <span className="serif-italic accent-text">{titleAccent}</span>
          </h1>
          <p className="placeholder-hero-sub">{description}</p>
        </div>
      </section>
      <section className="placeholder-body">
        <div className="site-container" style={{ textAlign: "center" }}>
          <p className="placeholder-coming-soon">Content coming soon.</p>
          <Link href="/" className="btn btn-outline" style={{ marginTop: "2rem", display: "inline-flex" }}>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}
