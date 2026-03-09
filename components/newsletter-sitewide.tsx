"use client"

import { useNewsletterForm } from "@/hooks/use-newsletter-form"

export function NewsletterSitewide() {
  const { email, setEmail, status, errorMessage, handleSubmit } =
    useNewsletterForm({ downloadPdfOnSuccess: true })

  return (
    <section className="newsletter-sitewide">
      <div className="newsletter-sitewide-inner">
        <div className="newsletter-inline-label">Newsletter</div>
        <h2 className="newsletter-sitewide-heading">
          The PLEX{" "}
          <span style={{ fontStyle: "italic" }}>Journal</span>
        </h2>
        <p className="newsletter-sitewide-sub">
          Evidence-based insights on plasma exchange, longevity medicine, and
          healthy aging &mdash; from the clinic to your inbox. New subscribers
          receive the AMBAR Evidence Guide.
        </p>

        {status === "success" ? (
          <p className="newsletter-message newsletter-message--success">
            Your guide is downloading. Check your email to confirm your
            subscription.
          </p>
        ) : status === "already-subscribed" ? (
          <p className="newsletter-message newsletter-message--already">
            You&rsquo;re already subscribed! Check your inbox for past issues.
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
