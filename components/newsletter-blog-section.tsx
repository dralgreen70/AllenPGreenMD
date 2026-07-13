"use client"

import { useNewsletterForm } from "@/hooks/use-newsletter-form"

export function NewsletterBlogSection() {
  const { email, setEmail, hp, setHp, status, errorMessage, handleSubmit } =
    useNewsletterForm({
      magnetPath: "/downloads/AMBAR_Evidence_Guide.pdf",
      source: "blog-index",
    })

  return (
    <section className="newsletter-blog-section">
      <div className="newsletter-blog-inner">
        <div className="newsletter-inline-label">Newsletter</div>
        <h2 className="newsletter-blog-heading">
          The Apheresis Journal{" "}
          <span style={{ fontStyle: "italic" }}>Newsletter</span>
        </h2>
        <p className="newsletter-blog-sub">
          Evidence-based insights on plasma exchange, longevity medicine, and
          healthy aging, from the clinic to your inbox. New subscribers receive
          the AMBAR Evidence Guide.
        </p>

        {status === "success" ? (
          <p className="newsletter-message newsletter-message--success">
            Your guide is downloading. You&rsquo;re now subscribed to the
            Apheresis Journal.
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
