import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Locale = "en" | "ja";

type InquiryCategory = "research" | "business" | "society";

type ContactPayload = {
  locale: Locale;
  category: InquiryCategory;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  message: string;
};

function isInquiryCategory(value: unknown): value is InquiryCategory {
  return value === "research" || value === "business" || value === "society";
}

function formatCategoryForSubject(category: InquiryCategory) {
  switch (category) {
    case "research":
      return "Research";
    case "business":
      return "Business";
    case "society":
      return "Society";
  }
}

function isValidEmail(email: string) {
  // Minimal sanity check (avoid strict validation).
  return /.+@.+\..+/.test(email);
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Partial<ContactPayload>;

    const locale: Locale = payload.locale === "ja" ? "ja" : "en";
    const categoryRaw = payload.category;
    const name = (payload.name ?? "").trim();
    const email = (payload.email ?? "").trim();
    const phone = (payload.phone ?? "").trim();
    const organization = (payload.organization ?? "").trim();
    const message = (payload.message ?? "").trim();

    if (!isInquiryCategory(categoryRaw)) {
      return NextResponse.json(
        { ok: false, error: "missing_or_invalid_category" },
        { status: 400 },
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "missing_required_fields" },
        { status: 400 },
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.CONTACT_FROM || "no-reply@oslab.co.jp";

    if (!host || !port || !user || !pass) {
      return NextResponse.json(
        { ok: false, error: "smtp_not_configured" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass },
    });

    const submittedAt = new Date().toISOString();

    const subject = `[Contact][${formatCategoryForSubject(categoryRaw)}] ${name}`;

    const text = [
      `Inquiry Category: ${formatCategoryForSubject(categoryRaw)} (${categoryRaw})`,
      `Locale: ${locale}`,
      `Submitted at: ${submittedAt}`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "(empty)"}`,
      `Company / Organization: ${organization || "(empty)"}`,
      "",
      "Inquiry:",
      message,
      "",
    ].join("\n");

    await transporter.sendMail({
      to: "kenji@oslab.co.jp",
      from,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "internal_error" }, { status: 500 });
  }
}
