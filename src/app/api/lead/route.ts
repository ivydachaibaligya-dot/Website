import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const webhookSecret = process.env.LEAD_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json({ error: "The inquiry form is still being connected. Please email hello@iaurevant.com directly." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please complete the inquiry form." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const need = typeof body.need === "string" ? body.need.trim() : "";
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || company.length > 120 || !need || need.length > 2000) {
    return NextResponse.json({ error: "Please check your name, email, and inquiry details." }, { status: 400 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: webhookSecret, name, email, company, need, source: "Ivy Embone portfolio chatbot", submittedAt: new Date().toISOString() }),
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data?.ok !== true) {
      console.error("Lead webhook rejected submission:", response.status, data);
      return NextResponse.json({ error: "Your inquiry could not be saved. Please email hello@iaurevant.com." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json({ error: "Your inquiry could not be sent just now. Please email hello@iaurevant.com." }, { status: 502 });
  }
}
