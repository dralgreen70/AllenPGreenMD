import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug, getRelatedPosts, markdownToHtml } from "@/lib/blog"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { NewsletterInline } from "@/components/newsletter-inline"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.frontmatter.title} | Dr. Allen Green MD`,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      authors: [post.frontmatter.author],
      ...(post.frontmatter.image && {
        images: [`https://allenpgreenmd.com${post.frontmatter.image}`],
      }),
    },
  }
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00")
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const fullHtml = markdownToHtml(post.content)

  // Split references out of the post body so they can be rendered separately
  const refSplit = fullHtml.split(/<h2>References<\/h2>/)
  const htmlContent = refSplit[0]
  const referencesHtml = refSplit.length > 1 ? refSplit[1] : ""

  const relatedPosts = getRelatedPosts(slug, 3)

  const shareUrl = `https://allenpgreenmd.com/blog/${slug}`
  const shareTitle = encodeURIComponent(post.frontmatter.title)
  const shareText = encodeURIComponent(post.frontmatter.excerpt)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    datePublished: `${post.frontmatter.date}T00:00:00-08:00`,
    dateModified: `${post.frontmatter.date}T00:00:00-08:00`,
    url: `https://allenpgreenmd.com/blog/${slug}`,
    ...(post.frontmatter.image && {
      image: `https://allenpgreenmd.com${post.frontmatter.image}`,
    }),
    author: {
      "@type": "Person",
      name: "Allen P. Green, MD",
      url: "https://allenpgreenmd.com/about",
    },
    publisher: {
      "@type": "Person",
      name: "Allen P. Green, MD",
      url: "https://allenpgreenmd.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://allenpgreenmd.com/blog/${slug}`,
    },
  }

  return (
    <main className="post-page">
      <Script
        id={`schema-article-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero Image */}
      {post.frontmatter.image && (
        <div className="post-hero-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.frontmatter.image}
            alt={
              slug === "goop-plasma-exchange"
                ? "Treatment room at Global Apheresis, Mill Valley, California — apheresis chair and machine with waterfront views of Marin."
                : slug === "tpe-for-healthcare-providers"
                ? "Spectra Optia apheresis machine and treatment chair at Global Apheresis in Mill Valley, California"
                : slug === "tpe-revolutionizing-health-longevity"
                ? "The Global Apheresis clinic in Mill Valley, California, where Dr. Allen P. Green performs therapeutic plasma exchange"
                : post.frontmatter.title
            }
            style={post.frontmatter.imagePosition ? { objectPosition: post.frontmatter.imagePosition } : undefined}
          />
        </div>
      )}

      {/* Hero */}
      <header className="post-hero" style={post.frontmatter.image ? { paddingTop: "3rem" } : undefined}>
        <div className="post-hero-inner">
          <div className="post-hero-meta">
            <span className="post-hero-date">{formatDate(post.frontmatter.date)}</span>
            <span className="post-hero-divider">|</span>
            <span className="post-hero-readtime">{post.readTime} min read</span>
          </div>
          <h1 className="post-hero-title">{post.frontmatter.title}</h1>
          <p className="post-hero-excerpt">{post.frontmatter.excerpt}</p>
          <div className="post-hero-author">
            <div className="post-hero-author-avatar">AG</div>
            <div>
              <div className="post-hero-author-name">{post.frontmatter.author}</div>
              <div className="post-hero-author-role">Associate Medical Director, Global Apheresis</div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="post-content-wrapper">
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      {/* 1. References (collapsible, if present) */}
      {referencesHtml && (
        <section className="post-references-section">
          <div className="post-references-inner">
            <details className="post-references-details">
              <summary>References &#9662;</summary>
              <div dangerouslySetInnerHTML={{ __html: referencesHtml }} />
            </details>
          </div>
        </section>
      )}

      {/* 2. Share */}
      <section className="post-share-section">
        <div className="post-share-inner">
          <h3 className="post-share-heading">Share this article</h3>
          <div className="post-share-buttons">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="post-share-btn"
              aria-label="Share on Twitter"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter / X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="post-share-btn"
              aria-label="Share on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:?subject=${shareTitle}&body=${shareText}%0A%0A${shareUrl}`}
              className="post-share-btn"
              aria-label="Share via Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="post-cta-section">
        <div className="post-cta-inner">
          {slug === "tpe-for-healthcare-providers" ? (
            <>
              <h3 className="post-cta-heading">Considering TPE for your practice?</h3>
              <p className="post-cta-text">
                Connect with the Global Apheresis team to discuss the affiliate
                partnership program and whether your practice is a good fit.
              </p>
              <a
                href="https://www.globalapheresis.com/affiliate-partners"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Contact Global Apheresis
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
            </>
          ) : (
            <>
              <h3 className="post-cta-heading">Have questions about TPE?</h3>
              <p className="post-cta-text">
                Schedule a complimentary discovery call to discuss your goals and
                whether therapeutic plasma exchange may be appropriate for you.
              </p>
              <a
                href="https://globalapheresis.com/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Schedule a Discovery Call
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
            </>
          )}
        </div>
      </section>

      {/* 3.5. Newsletter */}
      <NewsletterInline slug={slug} tags={post.frontmatter.tags} />

      {/* 4. Author Bio */}
      <section className="post-author-bio">
        <div className="post-author-bio-inner">
          <div className="post-author-bio-avatar">AG</div>
          <div className="post-author-bio-text">
            <h3>About Dr. Allen P. Green</h3>
            <p>
              Dr. Allen P. Green is a Board-Certified Clinical Pathologist
              specializing in therapeutic plasma exchange for longevity,
              Alzheimer&rsquo;s disease, autoimmune conditions, and environmental
              detoxification. Trained at UT Southwestern Medical Center under
              Dr. Ravi Sarode, Dr. Green has performed over 500 TPE procedures
              and has published multiple peer-reviewed papers in apheresis and
              transfusion medicine. He serves as Associate Medical Director at
              Global Apheresis in Mill Valley, California.
            </p>
            <div className="post-author-bio-links">
              <Link href="/about">
                Learn More About Dr. Green <span className="arrow">&rarr;</span>
              </Link>
              <Link href="/research">
                View Research <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="post-related">
          <div className="post-related-inner">
            <h3 className="post-related-heading">More from the Journal</h3>
            <div className="post-related-grid">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="post-related-card"
                >
                  <span className="post-related-date">
                    {formatDate(rp.frontmatter.date)}
                  </span>
                  <h4>{rp.frontmatter.title}</h4>
                  <p>{rp.frontmatter.excerpt}</p>
                  <span className="post-related-link">
                    Read More <span className="arrow">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Back to Journal */}
      <div className="post-footer">
        <Link href="/blog" className="btn btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Journal
        </Link>
      </div>
    </main>
  )
}
