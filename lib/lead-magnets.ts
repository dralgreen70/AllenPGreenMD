// Topic-matched lead magnets. `path: null` means subscribe-only (the copy is
// still topic-matched); set a path once the PDF exists to activate the download.

export interface LeadMagnet {
  path: string | null
  headline: string
  sub: string
  button: string
}

const AMBAR: LeadMagnet = {
  path: "/downloads/AMBAR_Evidence_Guide.pdf",
  headline: "The AMBAR Evidence Guide",
  sub: "The landmark trial results, independent validation, and drug comparisons summarized in one shareable PDF, free to download.",
  button: "Send Me the Guide",
}

// PFAS PDF not yet created: topic-matched copy, subscribe-only for now.
const PFAS: LeadMagnet = {
  path: null,
  headline: "Forever Chemicals and Your Blood",
  sub: "What the PFAS research actually shows, and where plasma exchange fits, delivered with the monthly Apheresis Journal.",
  button: "Subscribe",
}

const GENERIC: LeadMagnet = {
  path: null,
  headline: "Stay Current on the Science",
  sub: "New research, clinical insights, and updates on therapeutic plasma exchange, delivered monthly.",
  button: "Subscribe",
}

export function magnetForTags(tags: string[]): LeadMagnet {
  const t = tags.map((x) => x.toLowerCase().trim())
  if (t.some((x) => ["ambar", "alzheimers", "research"].includes(x)))
    return AMBAR
  if (
    t.some((x) =>
      ["pfas", "microplastics", "forever chemicals", "environmental toxins"].includes(
        x
      )
    )
  )
    return PFAS
  return GENERIC
}
