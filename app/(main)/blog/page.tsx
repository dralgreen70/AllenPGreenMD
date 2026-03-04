import { getAllPosts } from "@/lib/blog"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Journal | Dr. Allen Green MD – Clinical Perspectives on TPE",
  description:
    "Clinical perspectives on therapeutic plasma exchange, longevity medicine, and the science of healthy aging from Dr. Allen P. Green, MD.",
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00")
  return d
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase()
}

/* ── YouTube video IDs ── */
/* Replace these with the actual video IDs from https://www.youtube.com/@globalapheresis */
const EXPLAINER_VIDEO_ID = "REPLACE_EXPLAINER_ID"
const TESTIMONIAL_VIDEO_ID = "REPLACE_TESTIMONIAL_ID"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="journal-page">
      {/* ── 1. HERO ── */}
      <header className="tpe-hero" style={{ textAlign: "center" }}>
        <div className="tpe-hero-inner">
          <div
            className="section-label-line reveal"
            style={{ justifyContent: "center" }}
          >
            <span className="label-text">The PLEX Journal</span>
          </div>
          <h1
            className="h-display reveal"
            style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}
          >
            <span className="serif-italic accent-text">Journal</span>
          </h1>
          <p
            className="tpe-hero-sub reveal"
            style={{ maxWidth: "720px", margin: "1.25rem auto 0" }}
          >
            Clinical perspectives on therapeutic plasma exchange, longevity
            medicine, and the science of healthy aging — from Dr. Allen P.
            Green.
          </p>
        </div>
      </header>

      {/* ── 2. FEATURED POSTS GRID ── */}
      <section className="site-section" style={{ paddingTop: "3rem" }}>
        <div className="site-container">
          <div className="section-header" style={{ marginBottom: "2rem" }}>
            <div className="section-header-text">
              <h2 className="h-lg reveal">
                Latest{" "}
                <span className="serif-italic accent-text">Posts</span>
              </h2>
            </div>
          </div>

          {posts.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                fontStyle: "italic",
                padding: "3rem 0",
              }}
            >
              Posts coming soon.
            </p>
          ) : (
            <div
              className="blog-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              }}
            >
              {posts.map((post, i) => {
                const isExternal = post.frontmatter.external
                const href = isExternal
                  ? post.frontmatter.externalUrl
                  : `/blog/${post.slug}`

                return (
                  <a
                    key={post.slug}
                    href={href}
                    className={`blog-card reveal reveal-d${(i % 3) + 1}`}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {isExternal && (
                      <div className="blog-card-external-badge">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </div>
                    )}
                    <div className="blog-card-img">
                      {post.frontmatter.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.frontmatter.image}
                          alt={post.frontmatter.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center 20%",
                            display: "block",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            color: "var(--accent-light)",
                          }}
                        >
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.5 2v6a2 2 0 0 0 2 2h6" />
                            <path d="M16 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8l6 6v8z" />
                            <path d="M9 13h6" />
                            <path d="M9 17h3" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="blog-card-date">
                          {formatDate(post.frontmatter.date)}
                        </span>
                        <span className="blog-card-readtime">
                          {post.readTime} min read
                        </span>
                      </div>
                      <h3>{post.frontmatter.title}</h3>
                      <p>{post.frontmatter.excerpt}</p>
                      <span className="blog-card-link">
                        {isExternal ? (
                          <>
                            {"Read on DrPlexMD.com "}
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </>
                        ) : (
                          <>
                            Read More <span className="arrow">&rarr;</span>
                          </>
                        )}
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── 3. FROM THE CLINIC — VIDEO SECTION ── */}
      <section className="site-section" style={{ background: "var(--bg-alt)" }}>
        <div className="site-container">
          <div className="section-header" style={{ marginBottom: "2rem" }}>
            <div className="section-header-text">
              <div className="section-label-line reveal">
                <span className="label-text">Video</span>
              </div>
              <h2 className="h-lg reveal">
                From the{" "}
                <span className="serif-italic accent-text">Clinic</span>
              </h2>
              <p className="section-subtitle reveal" style={{ maxWidth: "600px" }}>
                Video from Global Apheresis, where Dr. Green practices.
              </p>
            </div>
          </div>

          <div className="blog-video-grid reveal">
            <div className="blog-video-embed">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${EXPLAINER_VIDEO_ID}`}
                title="What is Therapeutic Plasma Exchange – Global Apheresis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="blog-video-embed">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${TESTIMONIAL_VIDEO_ID}`}
                title="Patient Testimonial – Global Apheresis"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div
            className="reveal"
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            <a
              href="https://www.youtube.com/@globalapheresis"
              target="_blank"
              rel="noopener noreferrer"
              className="tpe-cta-btn"
              style={{ display: "inline-flex" }}
            >
              View More on YouTube
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <p
            className="reveal"
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              lineHeight: 1.6,
            }}
          >
            Videos produced by Global Apheresis. Dr. Allen P. Green serves as
            Associate Medical Director.
          </p>
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <section className="cta-section site-section">
        <div className="site-container" style={{ textAlign: "center" }}>
          <h2 className="h-lg reveal">
            Ready to learn if TPE is{" "}
            <span className="serif-italic accent-text">right for you?</span>
          </h2>
          <p
            className="body-lg reveal"
            style={{
              maxWidth: "600px",
              margin: "1rem auto 2rem",
              color: "var(--text-secondary)",
            }}
          >
            Schedule a complimentary discovery call with our clinical team to
            discuss your goals and whether therapeutic plasma exchange may be
            appropriate.
          </p>
          <div className="cta-actions reveal">
            <a
              href="https://globalapheresis.com/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a Discovery Call
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <Link href="/tpe" className="btn btn-outline">
              Learn About TPE
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
