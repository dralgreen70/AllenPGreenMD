"use client"

import { useNewsletterForm } from "@/hooks/use-newsletter-form"

function parseTags(tags?: string): string[] {
  if (!tags) return []
  return tags.split(",").map((t) => t.trim()).filter(Boolean)
}

interface NewsletterInlineProps {
  slug: string
  tags?: string
}

export function NewsletterInline({ slug, tags }: NewsletterInlineProps) {
  const tagList = parseTags(tags)
  const isAmbarVariant = tagList.some((t) =>
    ["ambar", "alzheimers", "research"].includes(t)
  )

  const { email, setEmail, status, errorMessage, handleSubmit } =
    useNewsletterForm({ downloadPdfOnSuccess: isAmbarVariant })

  const headline = isAmbarVariant
    ? "The AMBAR Evidence Guide"
    : "Stay Current on the Science"

  const subhead = isAmbarVariant
    ? "The landmark trial results, independent validation, and drug comparisons summarized in one shareable PDF \u2014 free to download."
    : "New research, clinical insights, and updates on therapeutic plasma exchange \u2014 delivered monthly."

  const buttonText = isAmbarVariant ? "Send Me the Guide" : "Subscribe"

  return (
    <section className="newsletter-inline">
      <div className="newsletter-inline-inner">
        <div className="newsletter-inline-label">Newsletter</div>
        <h3 className="newsletter-inline-heading">{headline}</h3>
        <p className="newsletter-inline-sub">{subhead}</p>

        {status === "success" ? (
          <p className="newsletter-message newsletter-message--success">
            {isAmbarVariant
              ? "Your guide is downloading. Check your email to confirm your subscription."
              : "You\u2019re in! Check your email to confirm your subscription."}
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
                {status === "loading" ? "Sending..." : buttonText}
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
