"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Section } from "@/components/Section";

type FormState = {
  category: "research" | "business" | "society";
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
};

type ApiErrorCode =
  | "missing_or_invalid_category"
  | "missing_required_fields"
  | "invalid_email"
  | "smtp_not_configured"
  | "internal_error";

function mapError(code: ApiErrorCode | string | undefined) {
  switch (code) {
    case "missing_required_fields":
      return "Please fill in all required fields.";
    case "missing_or_invalid_category":
      return "Please select an inquiry category.";
    case "invalid_email":
      return "Please enter a valid email address.";
    case "smtp_not_configured":
      return "Email delivery is temporarily unavailable. Please try again later.";
    default:
      return "Failed to send. Please try again later.";
  }
}

export default function EnContactPage() {
  const [form, setForm] = useState<FormState>({
    category: "research",
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const requiredMissing = useMemo(() => {
    return !form.name.trim() || !form.email.trim() || !form.message.trim() || !form.category;
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;

    if (requiredMissing) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale: "en" }),
      });

      const json = (await res.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: ApiErrorCode }
        | null;

      if (!res.ok || !json || ("ok" in json && json.ok !== true)) {
        const code = json && "error" in json ? json.error : "unknown_error";
        throw new Error(mapError(code));
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send.");
    }
  }

  return (
    <div className="pt-10 pb-12">
      <div className="max-w-[720px]">
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          Contact
        </h1>
      </div>

      <Section title="Notice">
        <p>
          Personal information such as your name, address, phone number,
          and inquiry details will be used solely for responding to your inquiry,
          unless you have given explicit consent for other purposes.
        </p>
        <p className="mt-6">
          For detailed information on how we handle personal data,
          please refer to our{" "}
          <Link
            href="/en/privacy"
            className="underline decoration-black/20 hover:text-neutral-950"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <p className="mt-6">
          * If you use domain-specific email filtering,
          please allow emails from “@oslab.co.jp”.
          <br />
          * If you do not receive our reply,
          please check your spam folder.
        </p>
      </Section>

      <Section title="Form">
        <form onSubmit={onSubmit} className="max-w-[720px] space-y-6">
          <label className="block">
            <div className="text-xs tracking-[0.22em] text-neutral-700">
              Inquiry Category / お問い合わせ種別{" "}
              <span className="ml-2 text-neutral-500">*</span>
            </div>
            <div className="mt-3 flex flex-col gap-3 text-sm text-neutral-900">
              {([
                { value: "research", label: "Research" },
                { value: "business", label: "Business" },
                { value: "society", label: "Society" },
              ] as const).map((opt) => (
                <label key={opt.value} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="category"
                    value={opt.value}
                    checked={form.category === opt.value}
                    onChange={() => setForm((p) => ({ ...p, category: opt.value }))}
                    className="h-3 w-3 accent-neutral-900"
                    required
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </label>

          <Field
            label="Name / お名前"
            required
            value={form.name}
            onChange={(v) => setForm((p) => ({ ...p, name: v }))}
          />
          <Field
            label="Email address / メールアドレス"
            required
            type="email"
            value={form.email}
            onChange={(v) => setForm((p) => ({ ...p, email: v }))}
          />
          <Field
            label="Phone number (optional) / 電話番号（任意）"
            value={form.phone}
            onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
          />
          <Field
            label="Company / Organization (optional) / 会社・所属（任意）"
            value={form.organization}
            onChange={(v) => setForm((p) => ({ ...p, organization: v }))}
          />
          <Textarea
            label="Inquiry content / お問い合わせ内容"
            required
            value={form.message}
            onChange={(v) => setForm((p) => ({ ...p, message: v }))}
          />

          <div className="pt-2">
            <button
              type="submit"
              disabled={requiredMissing || status === "sending"}
              className="text-sm text-neutral-900 underline decoration-black/20 disabled:cursor-not-allowed disabled:text-neutral-500"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>

            {status === "sent" ? (
              <p className="mt-4 text-sm text-neutral-800">Sent. We will reply by email.</p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 text-sm text-neutral-800">
                {errorMessage ?? "Failed to send. Please try again later."}
              </p>
            ) : null}
          </div>
        </form>
      </Section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-xs tracking-[0.22em] text-neutral-700">
        {label}
        {required ? <span className="ml-2 text-neutral-500">*</span> : null}
      </div>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-b border-black/15 bg-transparent py-2 text-sm text-neutral-900 outline-none placeholder:text-neutral-500 focus:border-black/30"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-xs tracking-[0.22em] text-neutral-700">
        {label}
        {required ? <span className="ml-2 text-neutral-500">*</span> : null}
      </div>
      <textarea
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        className="mt-3 w-full resize-none border-b border-black/15 bg-transparent py-2 text-sm leading-7 text-neutral-900 outline-none placeholder:text-neutral-500 focus:border-black/30"
      />
    </label>
  );
}

