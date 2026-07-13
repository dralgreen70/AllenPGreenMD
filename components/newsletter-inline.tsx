"use client"

import { useNewsletterForm } from "@/hooks/use-newsletter-form"
import { magnetForTags } from "@/lib/lead-magnets"

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
  const magnet = magnetForTags(tagList)

  const { email, setEmail, hp, setHp, status, errorMessage, handleSubmit } =
    useNewsletterForm({ magnetPath: magnet.path, source: `blog:${slug}` })

  return (
    <section className="newsletter-inline">
      <div className="newsletter-inline-inner">
        <div className="newsletter-inline-label">Newsletter</div>
        <h3 className="newsletter-inline-heading">{magnet.headline}</h3>
        <p className="newsletter-inline-sub">{magnet.sub}</p>

        {status === "success" ? (
          <p className="newsletter-message newsletter-message--success">
            {magnet.path
              ? "Your guide is downloading. You’re now subscribed to the Apheresis Journal."
              : "You’re subscribed to the Apheresis Journal. Watch for the next issue."}
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
                {status === "loading" ? "Sending..." : magnet.button}
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
