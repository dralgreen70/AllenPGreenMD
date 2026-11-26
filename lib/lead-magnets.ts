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

// Chapter 11 of Old Blood, New Life, cut from the print interior.
const PFAS: LeadMagnet = {
  path: "/downloads/OldBloodNewLife_FreeChapter_Ch11.pdf",
  headline: "Read Chapter 11 Free: Forever Chemicals and the Blood",
  sub: "The full chapter on microplastics, PFAS, and what removing them from the blood can and cannot do, from Old Blood, New Life. Free with The Apheresis Report.",
  button: "Send Me the Chapter",
}

// Default magnet: Chapter 14 of Old Blood, New Life (the longevity chapter).
const GENERIC: LeadMagnet = {
  path: "/downloads/OldBloodNewLife_FreeChapter_Ch14.pdf",
  headline: "Read a Free Chapter of Old Blood, New Life",
  sub: "Chapter 14, \"Running the Clock Backward,\" on whether plasma exchange can slow biological aging. Free with The Apheresis Report, a monthly email on the science of the blood.",
  button: "Send Me the Chapter",
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
