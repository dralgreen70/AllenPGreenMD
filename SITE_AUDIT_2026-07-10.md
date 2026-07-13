# allenpgreenmd.com — Site Audit & Game Plan

**Prepared:** July 10, 2026
**Scope:** Full codebase review of the Next.js site (24 blog posts, 15 pages), technical SEO, structured data, content architecture, and internal linking. Findings are drawn from the live repo, cross-checked against `SITE_CONVENTIONS.md` and the project brief.

---

## The short version

This is a well-built site with a strong technical and editorial foundation. It is not a site that needs rescuing; it is a site that needs finishing and compounding. The bones (framework, schema, metadata, content architecture) are in better shape than most physician-author sites. The gaps are mostly loose ends: a handful of house-style violations that slipped in before the rules existed, one orphaned page, thin internal linking to your hub and conversion pages, and a few pieces of pending work already queued in your own notes.

The biggest opportunity is not fixing what's broken. It's turning the machinery you already have (pillar pages, two content series, `llms.txt`, research-database access) into a repeatable growth motion for the marketing and research goals you described.

---

## What's working (pros)

**Technical foundation is solid.** Next.js App Router on Vercel, every image served through `next/image` (zero raw `<img>` tags), a dynamically generated sitemap that auto-includes new posts, GA4 installed, and a genuinely strong security posture (full Content-Security-Policy, `X-Frame-Options`, `nosniff`, referrer policy). Legacy `/journal → /blog` URLs are handled with permanent redirects, including the one renamed slug. This is the kind of hygiene that usually gets skipped.

**Structured data is sophisticated and mostly correct.** Each post generates `Article` schema with a proper author `@id`, publisher, `dateModified`, `mainEntityOfPage`, optional `keywords`, and even a `ScholarlyArticle` citation block when frontmatter supplies it. `BreadcrumbList` is on every post. Site-wide you have `WebSite` and `Organization` schema with `sameAs` links to LinkedIn and YouTube, plus `FAQPage` markup on the posts where it matters. This is a real ranking asset and it's already built.

**Metadata coverage is complete.** Every page and post has title, description, Open Graph, Twitter card, and a self-referencing canonical on the non-www domain. Canonical discipline is consistent, which matters given the www/non-www split with the Global Apheresis side.

**Content architecture shows topical authority.** Twenty-four posts, most in the healthy 1,200–3,600 word range, organized into four condition pillars and two long-form series (AMBAR, PFAS) with dedicated landing pages. This hub-and-spoke structure is exactly what search engines reward for demonstrating depth in a niche.

**You're ahead on AI visibility.** `llms.txt` and `llms-full.txt` are present and well-written. Most sites, including most clinics, have neither. As answer engines (ChatGPT, Perplexity, Google AI) become a bigger share of how patients find physicians, this is a head start worth protecting and extending.

**Editorial governance is unusually disciplined.** The conventions file and project brief enforce a consistent clinical voice, verified citation handling, and canonical facts. That consistency is itself an E-E-A-T signal.

---

## What needs work (cons)

**Em dashes in 15 of 24 posts.** Your house rule is no em dashes anywhere, and the newer polished posts follow it, but roughly two-thirds of the library still contains them (mostly the older AMBAR posts and pre-rule content). This is cosmetic, but it's the single most widespread inconsistency and it's a clean, low-risk fix.

**Internal linking to hubs and conversion pages is thin.** Across the whole site, `/pfas-series` is linked once, `/ambar-series` twice, and `/contact` twice. Your pillar pages are well cross-linked, but the series landing pages and the contact page (where conversions happen) are starved of internal link equity.

**Freshness signals are underused.** Only 3 of 24 posts carry an `updated` field, so `dateModified` defaults to the original publish date for everything else. Regularly refreshed medical content that signals its recency tends to hold rankings better.

**A few thin posts.** Four sit under ~870 words: `goop-plasma-exchange` (639), `tpe-revolutionizing-health-longevity` (752), `career-around-plasma-exchange` (844), and `albumin-safety-plasma-exchange` (866). Each is a candidate to either expand into something rankable or fold into a stronger neighbor.

**Keywords frontmatter is used on only 1 of 24 posts.** The schema generator supports it; the content doesn't supply it. Minor, but it's free structured-data richness you've already wired up.

**One legacy slug carries a forbidden brand word.** The URL `tpe-revolutionizing-health-longevity` still contains "revolutionizing" even though the post title was already corrected to "Transforming." Low priority because changing it means adding a redirect, but worth noting for brand consistency.

**One genuine piece of pending content.** The PFAS Part 5 fertility post is still unwritten. (Note: the project brief also lists an AMBAR landing refresh and a `/media` launch as pending, but both are stale entries. The AMBAR refresh is already live, and `/media` is intentionally unpublished until there's press to feature.)

---

## The game plan

### Phase 1 — Quick wins (this week, low risk)

These are fast, mechanical, and safe. Each follows your existing "grep-first, specific before/after, verify" prompt discipline.

1. **Site-wide em dash scrub.** Grep all 15 affected posts, replace em dashes with commas, colons, or sentence breaks, and preserve en dashes in numeric ranges. Report matches before editing.
2. **Internal-linking pass for hubs and conversion.** Add contextual links to `/pfas-series`, `/ambar-series`, and `/contact` from relevant posts and pillar pages so link equity flows to them.
3. **Refresh the project brief.** Several §7 "pending" items are already done (AMBAR refresh) or intentionally deferred (`/media`). Pruning stale notes keeps future sessions from chasing ghosts.

### Phase 2 — Content and SEO depth (2–4 weeks)

5. **Keyword clustering + content strategy.** Run a keyword-cluster and content-strategy pass over the TPE condition space to map what you already cover against what patients actually search, and surface the gaps worth writing next.
6. **Write PFAS Part 5** (the fertility post), the highest-value piece of unwritten content, then flip the landing-page card from "Coming Soon" to live.
7. **Address the thin posts.** Expand `goop` and `albumin-safety` into rankable standalone pieces, or consolidate the weakest into stronger neighbors with redirects.
8. **Backfill `keywords` frontmatter and `updated` timestamps** on refreshed posts to enrich schema and freshness signals.

### Phase 3 — Authority and growth motion (ongoing)

9. **Research-backed content cadence.** Use the connected PubMed and ClinicalTrials.gov tools to keep posts current and to source new pieces, adding `ScholarlyArticle` citations as you go. This turns your research access into a content engine.
10. **AI-visibility tracking.** Build on your `llms.txt` lead by monitoring how you appear in ChatGPT, Perplexity, and Google AI answers for TPE queries, and optimize for the ones where a competitor currently gets cited instead of you.
11. **Competitor gap analysis.** Map your coverage and positioning against other apheresis and longevity clinics to find the topics and search terms where you can own the answer.
12. **Marketing motion.** Your newsletter infrastructure (subscribe API + inline component) and LinkedIn strategy are already partly built. Once Supermetrics is connected, tie campaign data back into which content actually drives patients, and formalize a publishing-plus-LinkedIn cadence.

---

## Suggested first move

Phase 1 items 1–3 are the cleanest starting point: high certainty, low risk, immediately visible, and they set a tidy baseline before the bigger content work. I can execute any of them now following your established prompt conventions, starting with the em dash scrub since it's the most widespread and the safest.
