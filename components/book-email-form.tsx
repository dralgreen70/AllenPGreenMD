"use client"

import { useNewsletterForm } from "@/hooks/use-newsletter-form"

export function BookEmailForm() {
  const { email, setEmail, hp, setHp, status, errorMessage, handleSubmit } =
    useNewsletterForm({ source: "book-launch" })

  if (status === "success" || status === "already-subscribed") {
    return (
      <p className="book-signup-msg book-signup-msg--success">
        {status === "success"
          ? "You're on the list. We'll email you once when Old Blood, New Life is available, and not before."
          : "You're already subscribed. We'll email you when the book is out."}
      </p>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="book-signup-form">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="book-signup-input"
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
          className="book-signup-btn"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Notify me"}
        </button>
      </form>
      {status === "error" && (
        <p className="book-signup-msg book-signup-msg--error">{errorMessage}</p>
      )}
    </>
  )
}
