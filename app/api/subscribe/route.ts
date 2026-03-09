import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

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

    const url = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${emailHash}`

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
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
