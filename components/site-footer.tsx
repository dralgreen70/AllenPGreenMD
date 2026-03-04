import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link href="/" className="footer-brand">
          Dr. Allen P. <span>Green</span>, MD
        </Link>
        <ul className="footer-links">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/tpe">What is TPE?</Link></li>
          <li><Link href="/research">Research</Link></li>
          <li><Link href="/blog">Journal</Link></li>
          <li><a href="https://www.globalapheresis.com/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        Associate Medical Director, Global Apheresis | Board-Certified Clinical Pathologist
        <br />
        &copy; 2026 Dr. Allen P. Green, MD. All rights reserved.
      </div>
    </footer>
  )
}
