"use client"

import { buyHref } from "@/lib/book"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

interface BookBuyLinkProps {
  /** Placement id, e.g. "post-jersey-pfas-crisis". Lowercase, digits, hyphens. */
  placement: string
  children: React.ReactNode
  className?: string
}

/**
 * Buy link that reports the click to GA4 before handing off to /book/buy.
 *
 * GA4 sends events via sendBeacon, so the hit survives the navigation without
 * having to delay it. This is the site's first custom event; the property is
 * already configured in the root layout.
 */
export function BookBuyLink({
  placement,
  children,
  className = "btn btn-accent",
}: BookBuyLinkProps) {
  return (
    <a
      href={buyHref(placement)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        window.gtag?.("event", "book_buy_click", {
          placement,
          book: "old-blood-new-life",
        })
      }}
    >
      {children}
    </a>
  )
}
