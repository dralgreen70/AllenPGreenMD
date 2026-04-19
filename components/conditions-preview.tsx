import { Brain, Activity, Shield, Droplets } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const conditions: Array<{
  title: string
  desc: string
  href: string
  delay: string
  Icon: LucideIcon
  accent: string
  accentHover: string
}> = [
  {
    title: "Alzheimer\u2019s & Cognitive Decline",
    desc: "The AMBAR trial showed TPE slowed cognitive decline by 52\u201371% \u2014 with zero risk of ARIA.",
    href: "/tpe-alzheimers",
    delay: "reveal-d1",
    Icon: Brain,
    accent: "#4A7C9B",
    accentHover: "#3F6E8B",
  },
  {
    title: "Longevity & Biological Age",
    desc: "The Buck Institute measured a 2.61-year biological age reduction using 35 epigenetic clocks.",
    href: "/tpe-longevity",
    delay: "reveal-d2",
    Icon: Activity,
    accent: "#5B8F6C",
    accentHover: "#4F7F5E",
  },
  {
    title: "Autoimmune Conditions",
    desc: "TPE is first-line treatment for over a dozen autoimmune conditions \u2014 backed by ASFA Category I evidence.",
    href: "/tpe-autoimmune",
    delay: "reveal-d3",
    Icon: Shield,
    accent: "#B07D5C",
    accentHover: "#9C6D4F",
  },
  {
    title: "Detoxification & Environmental Toxins",
    desc: "PFAS, microplastics, mold. When toxins bind to blood proteins, TPE removes them at the source.",
    href: "/tpe-detox",
    delay: "reveal-d4",
    Icon: Droplets,
    accent: "#6B8CAE",
    accentHover: "#5E7E9E",
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
          {conditions.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className={`condition-card condition-card--accented reveal ${c.delay}`}
              style={
                {
                  "--card-accent": c.accent,
                  "--card-accent-hover": c.accentHover,
                } as React.CSSProperties
              }
            >
              <span
                className="condition-card-icon"
                aria-hidden="true"
                style={{ color: c.accent }}
              >
                <c.Icon size={30} strokeWidth={1.6} />
              </span>
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
