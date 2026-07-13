"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "success" | "already-subscribed" | "error"

interface UseNewsletterFormOptions {
  /** Path to a lead-magnet PDF to download on success, or null for no download. */
  magnetPath?: string | null
  /** Where this signup happened, e.g. "footer", "sitewide", "blog:slug". */
  source?: string
}

export function useNewsletterForm(options: UseNewsletterFormOptions = {}) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [hp, setHp] = useState("") // honeypot: must stay empty for humans
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          source: options.source,
          hp: hp || undefined,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setErrorMessage(data.error || "Something went wrong. Please try again.")
        return
      }

      if (data.alreadySubscribed) {
        setStatus("already-subscribed")
      } else {
        setStatus("success")
        if (options.magnetPath) {
          const link = document.createElement("a")
          link.href = options.magnetPath
          link.download = options.magnetPath.split("/").pop() || "guide.pdf"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
      }
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  return {
    email,
    setEmail,
    name,
    setName,
    hp,
    setHp,
    status,
    errorMessage,
    handleSubmit,
  }
}
