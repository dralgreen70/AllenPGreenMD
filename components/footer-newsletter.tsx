"use client"

import { useNewsletterForm } from "@/hooks/use-newsletter-form"

export function FooterNewsletter() {
  const { email, setEmail, hp, setHp, status, errorMessage, handleSubmit } =
    useNewsletterForm({ source: "footer" })

  if (status === "success" || status === "already-subscribed") {
    return (
      <p className="footer-newsletter-success">
        {status === "success"
          ? "You’re subscribed to the Apheresis Report."
          : "You’re already subscribed!"}
      </p>
    )
  }

  return (
    <>
      <p className="footer-newsletter-tagline">
        Evidence-based insights on TPE and longevity, monthly.
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
