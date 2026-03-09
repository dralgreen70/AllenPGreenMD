"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "success" | "already-subscribed" | "error"

interface UseNewsletterFormOptions {
  downloadPdfOnSuccess?: boolean
}

export function useNewsletterForm(options: UseNewsletterFormOptions = {}) {
  const [email, setEmail] = useState("")
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
        body: JSON.stringify({ email }),
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
        if (options.downloadPdfOnSuccess) {
          const link = document.createElement("a")
          link.href = "/downloads/AMBAR_Evidence_Guide.pdf"
          link.download = "AMBAR_Evidence_Guide.pdf"
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

  return { email, setEmail, status, errorMessage, handleSubmit }
}
