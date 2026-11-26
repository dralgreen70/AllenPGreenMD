/**
 * Outbound links to the Global Apheresis Discovery Call.
 *
 * Every Discovery Call link on the site goes through discoveryHref() so each
 * click arrives at globalapheresis.com carrying UTM tags. Global's analytics
 * (Wix / GA4) then reports allenpgreenmd.com as the source and the placement
 * as utm_content, which answers "did this call come from my site?"
 *
 * Do not add rel="noreferrer" to these links: it strips the Referer header,
 * which made every click from this site look like direct traffic to Global.
 * target="_blank" already implies noopener in modern browsers; rel="noopener"
 * is kept for clarity.
 *
 * placement must satisfy /^[a-z0-9-]{1,60}$/ (same spirit as buyHref).
 */
export const DISCOVERY_CALL_URL =
  "https://www.globalapheresis.com/free-consultation"

export function discoveryHref(placement: string): string {
  const content = /^[a-z0-9-]{1,60}$/.test(placement) ? placement : "unknown"
  const params = new URLSearchParams({
    utm_source: "allenpgreenmd",
    utm_medium: "referral",
    utm_campaign: "discovery-call",
    utm_content: content,
  })
  return `${DISCOVERY_CALL_URL}?${params.toString()}`
}
