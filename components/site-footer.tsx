import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        {/* Column 1 — Identity */}
        <div className="footer-col footer-col-identity">
          <Link href="/" className="footer-brand">
            Dr. Allen P. <span>Green</span>, MD
          </Link>
          <p className="footer-credentials">
            Board-Certified Clinical Pathologist
            <br />
            Associate Medical Director, Global Apheresis
          </p>
          <address className="footer-address">
            655 Redwood Highway, Suite 370
            <br />
            Mill Valley, CA 94941
          </address>
        </div>

        {/* Column 2 — Site Links */}
        <div className="footer-col footer-col-links">
          <div className="footer-link-group">
            <h4 className="footer-group-label">Pages</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/tpe">What is TPE?</Link>
              </li>
              <li>
                <Link href="/research">Research</Link>
              </li>
              <li>
                <Link href="/blog">Journal</Link>
              </li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h4 className="footer-group-label">Applications</h4>
            <ul className="footer-links">
              <li>
                <Link href="/tpe-alzheimers">
                  Alzheimer&apos;s &amp; Cognitive Decline
                </Link>
              </li>
              <li>
                <Link href="/tpe-longevity">
                  Longevity &amp; Biological Age
                </Link>
              </li>
              <li>
                <Link href="/tpe-autoimmune">Autoimmune Conditions</Link>
              </li>
              <li>
                <Link href="/tpe-detox">
                  Detoxification &amp; Environmental Toxins
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3 — Contact */}
        <div className="footer-col footer-col-contact">
          <div className="footer-link-group">
            <h4 className="footer-group-label">Get Started</h4>
            <a
              href="https://www.globalapheresis.com/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-btn"
            >
              Book a Discovery Call <span className="arrow">&rarr;</span>
            </a>
          </div>
          <div className="footer-link-group">
            <h4 className="footer-group-label">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:+14159281352">(415) 928-1352</a>
              </li>
              <li>
                <a href="mailto:info@globalapheresis.com">
                  info@globalapheresis.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h4 className="footer-group-label">Practice</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.globalapheresis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Global Apheresis
                  <svg
                    className="footer-ext-icon"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3.5 1.5h7v7M10.5 1.5L1.5 10.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        &copy; 2026 Dr. Allen P. Green, MD. All rights reserved.
      </div>
    </footer>
  )
}
