import { NextRequest, NextResponse } from "next/server"
import { RETAIL_URL } from "@/lib/book"

/**
 * /book/buy -- the single outbound door to the retailer.
 *
 * Every buy link on the site points here so the destination and its attribution
 * tagging can change without touching markup, and so clicks are countable.
 *
 * Environment:
 *   BOOK_BUY_URL         destination (default: the Amazon listing)
 *   BOOK_ATTRIBUTION_QS  querystring merged into it, e.g. "tag=xxxx-20"
 */

const SRC_PATTERN = /^[a-z0-9-]{1,40}$/

/** Placement id travels to the retailer under Amazon's subtag parameter. */
const SRC_PARAM = "ascsubtag"

// The ?src= value varies per request, so this must not be statically rendered.
export const dynamic = "force-dynamic"

function safeUrl(candidate: string): URL | null {
  try {
    const url = new URL(candidate)
    // Guard against a misconfigured env var smuggling in javascript: or data:.
    if (url.protocol !== "https:" && url.protocol !== "http:") return null
    return url
  } catch {
    return null
  }
}

export function GET(request: NextRequest) {
  const target =
    safeUrl(process.env.BOOK_BUY_URL ?? "") ?? safeUrl(RETAIL_URL)!

  // Attribution params are merged key by key rather than concatenated, so a
  // stray "?" or "&" in the env var cannot corrupt the URL.
  const attribution = process.env.BOOK_ATTRIBUTION_QS
  if (attribution) {
    new URLSearchParams(attribution.replace(/^[?&]+/, "")).forEach(
      (value, key) => target.searchParams.set(key, value)
    )
  }

  // Validate before the value goes anywhere near the outbound URL. Anything
  // that fails the pattern is dropped outright -- never escaped and passed on.
  const src = request.nextUrl.searchParams.get("src")
  if (src && SRC_PATTERN.test(src)) {
    target.searchParams.set(SRC_PARAM, src)
  }

  return NextResponse.redirect(target, {
    status: 302,
    headers: {
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  })
}
