"use client"

import { usePathname } from "next/navigation"
import { useNewsletterForm } from "@/hooks/use-newsletter-form"

export function NewsletterSitewide() {
  const pathname = usePathname()
  const { email, setEmail, hp, setHp, status, errorMessage, handleSubmit } =
    useNewsletterForm({
      magnetPath: "/downloads/AMBAR_Evidence_Guide.pdf",
      source: "sitewide",
    })

  // The /book page has its own book-launch email capture. Rendering the global
  // Apheresis Report signup there too would stack two identical asks, so suppress it.
  if (pathname === "/book") return null

  return (
    <section className="newsletter-sitewide">
      <div className="newsletter-sitewide-inner">
        <div className="newsletter-inline-label">Newsletter</div>
        <h2 className="newsletter-sitewide-heading">
          The Apheresis{" "}
          <span style={{ fontStyle: "italic" }}>Report</span>
        </h2>
        <p className="newsletter-sitewide-sub">
          Evidence-based insights on plasma exchange, longevity medicine, and
          healthy aging, from the clinic to your inbox. New subscribers receive
          the AMBAR Evidence Guide.
        </p>

        {status === "success" ? (
          <p className="newsletter-message newsletter-message--success">
            Your guide is downloading. You&rsquo;re now subscribed to the
            Apheresis Report.
          </p>
        ) : status === "already-subscribed" ? (
          <p className="newsletter-message newsletter-message--already">
            You&rsquo;re already subscribed.
          </p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
                disabled={status === "loading"}
                aria-label="Email address"
              />
              <input
                type="text"
                name="company"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                  opacity: 0,
                }}
              />
              <button
                type="submit"
                className="newsletter-btn"
                disabled={status === "loading"}
              >
                {status === "loading"
                  ? "Sending..."
                  : "Subscribe & Download the Guide"}
              </button>
            </form>
            {status === "error" && (
              <p className="newsletter-message newsletter-message--error">
                {errorMessage}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
