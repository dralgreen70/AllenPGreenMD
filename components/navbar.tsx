"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [journalDropdownOpen, setJournalDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleNav = useCallback(() => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : ""
      return !prev
    })
  }, [])

  const closeNav = useCallback(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
    setJournalDropdownOpen(false)
    document.body.style.overflow = ""
  }, [])

  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setDropdownOpen((prev) => !prev)
    }
  }, [])

  const toggleJournalDropdown = useCallback((e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setJournalDropdownOpen((prev) => !prev)
    }
  }, [])

  return (
    <>
      <div
        className={`nav-overlay${menuOpen ? " active" : ""}`}
        onClick={closeNav}
        style={{ display: "block" }}
      />
      <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-brand" onClick={closeNav}>
          <span className="nav-mark">AG</span>
          <span className="nav-brand-text">
            Dr. Allen P. <span>Green</span>, MD
          </span>
        </Link>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <Link href="/about" onClick={closeNav}>
              Dr. Green
            </Link>
          </li>
          <li>
            <Link href="/tpe" onClick={closeNav}>
              What is TPE?
            </Link>
          </li>
          <li className={`nav-dropdown${dropdownOpen ? " open" : ""}`}>
            <a href="#" className="nav-dropdown-trigger" onClick={toggleDropdown}>
              Applications
              <svg className="nav-dropdown-arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 1l4 4 4-4" />
              </svg>
            </a>
            <div className="nav-dropdown-menu">
              <Link href="/tpe-alzheimers" onClick={closeNav}>
                Alzheimer&apos;s &amp; Cognitive Decline
              </Link>
              <Link href="/tpe-longevity" onClick={closeNav}>
                Longevity &amp; Biological Age
              </Link>
              <Link href="/tpe-autoimmune" onClick={closeNav}>
                Autoimmune Conditions
              </Link>
              <Link href="/tpe-detox" onClick={closeNav}>
                Detoxification &amp; Environmental Toxins
              </Link>
            </div>
          </li>
          <li>
            <Link href="/research" onClick={closeNav}>
              Research
            </Link>
          </li>
          <li className={`nav-dropdown${journalDropdownOpen ? " open" : ""}`}>
            <a href="#" className="nav-dropdown-trigger" onClick={toggleJournalDropdown}>
              Journal
              <svg className="nav-dropdown-arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 1l4 4 4-4" />
              </svg>
            </a>
            <div className="nav-dropdown-menu">
              <Link href="/blog" onClick={closeNav}>
                All Posts
              </Link>
              <Link href="/ambar-series" onClick={closeNav}>
                The AMBAR Series
              </Link>
            </div>
          </li>
          <li>
            <a
              href="https://www.globalapheresis.com/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
              onClick={closeNav}
            >
              Discovery Call
            </a>
          </li>
        </ul>
        <button
          className={`nav-toggle${menuOpen ? " active" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </>
  )
}
