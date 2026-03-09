"use client"

import { useNewsletterForm } from "@/hooks/use-newsletter-form"

export function FooterNewsletter() {
  const { email, setEmail, status, errorMessage, handleSubmit } =
    useNewsletterForm({ downloadPdfOnSuccess: false })

  if (status === "success" || status === "already-subscribed") {
    return (
      <p className="footer-newsletter-success">
        {status === "success"
          ? "Subscribed! Check your email to confirm."
          : "You\u2019re already subscribed!"}
      </p>
    )
  }

  return (
    <>
      <p className="footer-newsletter-tagline">
        Evidence-based insights on TPE and longevity &mdash; monthly.
      </p>
      <form onSubmit={handleSubmit} className="footer-newsletter-form">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="footer-newsletter-input"
          required
          disabled={status === "loading"}
          aria-label="Email address"
        />
        <button
          type="submit"
          className="footer-newsletter-btn"
          disabled={status === "loading"}
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="footer-newsletter-error">{errorMessage}</p>
      )}
    </>
  )
}
