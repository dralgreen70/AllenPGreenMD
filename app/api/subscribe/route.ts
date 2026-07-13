import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(req: NextRequest) {
  try {
    const { email, name, source, hp } = await req.json()

    // Honeypot: real users never fill this hidden field. Bots do.
    // Return a success shape so bots get no signal, but do not subscribe.
    if (hp) {
      return NextResponse.json({ success: true, alreadySubscribed: false })
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const SERVER = process.env.MAILCHIMP_SERVER_PREFIX

    if (!API_KEY || !AUDIENCE_ID || !SERVER) {
      return NextResponse.json(
        { error: "Newsletter service is not configured." },
        { status: 500 }
      )
    }

    const emailHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex")

    const base = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}`
    const authHeaders = {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    }

    // Optional first name -> Mailchimp FNAME merge field
    const mergeFields: Record<string, string> = {}
    if (typeof name === "string" && name.trim()) {
      mergeFields.FNAME = name.trim().slice(0, 80)
    }

    const response = await fetch(`${base}/members/${emailHash}`, {
      method: "PUT",
      headers: authHeaders,
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        ...(Object.keys(mergeFields).length > 0 && {
          merge_fields: mergeFields,
        }),
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      const msg =
        data.title === "Member In Compliance State"
          ? "This email was previously unsubscribed. Please re-subscribe through the confirmation email."
          : "Subscription failed. Please try again."
      return NextResponse.json({ error: msg }, { status: 400 })
    }

    // Tag the subscriber by signup source so we can see what converts.
    // Best-effort: never fail the signup if tagging errors.
    const cleanSource =
      typeof source === "string" && source.trim()
        ? source.trim().slice(0, 60)
        : "website"
    try {
      await fetch(`${base}/members/${emailHash}/tags`, {
        method: "POST",
        headers: authHeaders,
        body: JSON.stringify({
          tags: [{ name: `source:${cleanSource}`, status: "active" }],
        }),
      })
    } catch {
      // ignore tagging failures
    }

    return NextResponse.json({
      success: true,
      alreadySubscribed: data.status === "subscribed",
    })
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
