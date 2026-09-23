/**
 * Canonical facts for Old Blood, New Life.
 *
 * This is the ONLY module in the codebase that names the retailer host.
 * Everything user-facing links to /book/buy, which reads its destination from
 * the environment and 302s. Keeping one definition here means the ASIN, price,
 * and byline can never drift between the /book page, the press kit, the
 * JSON-LD, and the in-article callout.
 */
export const BOOK = {
  title: "Old Blood, New Life",
  // Em dash, matching the cover art and the retail listing. Not a comma.
  subtitle: "How Cleaning the Blood Became Medicine — and Where It Goes Next",
  // Byline order matches the printed cover and the title page.
  authors: "Allen P. Green, MD, and Dobri Kiprov, MD",
  publisher: "Sanguine House",
  datePublished: "2026-08-28",
  format: "Paperback",
  price: "18.99",
  priceCurrency: "USD",
  pages: 293,
  isbn: "979-8-9970143-1-5",
  asin: "B0HH86RWKJ",
} as const

/** Cover thumbnail for in-body use. 1000x1500 on disk; 2:3, same as the print file. */
export const BOOK_COVER = {
  src: "/images/book/old-blood-new-life-cover-web.jpg",
  width: 1000,
  height: 1500,
  alt: `Cover of ${BOOK.title} by ${BOOK.authors}`,
} as const

/**
 * The retail listing. Referenced by the /book/buy redirect as its fallback and
 * by the Book JSON-LD, which should name the real retailer rather than a
 * redirect. Never link to this directly from markup.
 */
export const RETAIL_URL = `https://www.amazon.com/dp/${BOOK.asin}`

export const REVIEW_URL = `https://www.amazon.com/review/create-review?asin=${BOOK.asin}`

/**
 * Buy link for a given placement. The placement id rides along as ?src= so GA
 * and the retailer's attribution report agree on which callout earned the click.
 * Must satisfy /^[a-z0-9-]{1,40}$/ or the redirect drops it.
 */
export function buyHref(placement: string): string {
  return `/book/buy?src=${placement}`
}
