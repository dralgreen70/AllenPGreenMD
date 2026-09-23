import Image from "next/image"
import { BOOK, BOOK_COVER } from "@/lib/book"
import { BookBuyLink } from "@/components/book-buy-link"


interface BookCalloutProps {
  /** One sentence tying this post's subject to the book. Written per post. */
  note: string
  /** Placement id for analytics and retailer attribution. */
  placement: string
}

/**
 * In-article book callout.
 *
 * Deliberately built on .post-callout-light, the same chrome the posts already
 * use for an aside, so it reads as part of the article rather than an insert.
 * The label is a <div>, not a heading, which is how the existing callouts do it
 * -- that also keeps it out of the document outline, so it cannot disturb the
 * h2/h3 hierarchy of the post it sits inside.
 */
export function BookCallout({ note, placement }: BookCalloutProps) {
  return (
    <aside className="post-callout-light post-book-callout">
      <Image
        src={BOOK_COVER.src}
        alt={BOOK_COVER.alt}
        width={BOOK_COVER.width}
        height={BOOK_COVER.height}
        // Without an explicit sizes, Next builds the srcset from the 1000px
        // intrinsic width and ships a far larger file than this 84px slot needs.
        sizes="(max-width: 640px) 96px, 84px"
        className="post-book-callout-cover"
      />
      <div className="post-book-callout-text">
        <div className="post-callout-light-label">From the book</div>
        <div className="post-callout-light-body">{note}</div>
        <BookBuyLink placement={placement}>
          Buy the paperback <span className="arrow">&rarr;</span>
        </BookBuyLink>
        {/* The byline is carried by the cover art and the image alt text, so
            this line stays short enough not to wrap beside the button. */}
        <div className="post-book-callout-meta">
          {BOOK.title} &middot; {BOOK.format}, ${BOOK.price}
        </div>
      </div>
    </aside>
  )
}
