"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { RULES } from "@/lib/admission";
import { CONTACT_LIMITS, CONTACT_PROGRAMS } from "@/lib/contact";
import { filterName, filterPhone } from "@/lib/input-filters";
import { useFieldErrors } from "./useFieldErrors";

const FIELD_MESSAGES: Record<string, string> = {
  name: "Letters only (no numbers or symbols)",
  phone: "Enter a Pakistani mobile number, e.g. 03001234567 or +92 300 1234567",
  email: "Enter a valid email address, e.g. name@gmail.com",
  message: "Please write your message",
};


const fieldStyle: CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid #e0e0e0",
  borderRadius: 10,
  fontSize: "0.875rem",
  background: "#fff",
  outline: "none",
  fontFamily: "var(--font-body)",
  color: "#000",
};

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "#444",
  marginBottom: 6,
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const { field, errorFor, borderFor, validateAll, reset } = useFieldErrors(FIELD_MESSAGES);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateAll(e.currentTarget)) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please try again or call us");
      }
    } catch {
      setError("Could not send your message. Please check your connection and try again");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "24px 8px" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "var(--color-brand-teal)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: "1.6rem",
          }}
          aria-hidden
        >
          ✓
        </div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "#000", marginBottom: 8 }}>
          Message sent{name ? `, thank you ${name.split(" ")[0]}!` : "!"}
        </h3>
        <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Our team will get back to you within one business day. In the meantime, feel free to explore our admission
          process or give us a call
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            reset();
          }}
          style={{
            marginTop: 20,
            background: "transparent",
            border: "1px solid #d5d5d5",
            color: "#000",
            fontWeight: 600,
            padding: "10px 22px",
            borderRadius: 100,
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="contact-name">
            Full name
          </label>
          <input
            id="contact-name"
            {...field("name")}
            placeholder="Muhammad Ahmed"
            required
            maxLength={CONTACT_LIMITS.name}
            pattern={RULES.name.pattern}
            autoComplete="name"
            value={name}
            onChange={(e) => setName(filterName(e.target.value))}
            style={{ ...fieldStyle, ...borderFor("name") }}
          />
          {errorFor("name")}
        </div>
        <div>
          <label style={labelStyle} htmlFor="contact-phone">
            Phone number
          </label>
          <input
            id="contact-phone"
            {...field("phone", filterPhone)}
            type="tel"
            maxLength={CONTACT_LIMITS.phone}
            pattern={RULES.phone.pattern}
            autoComplete="tel"
            placeholder="+92 3XX XXXXXXX"
            style={{ ...fieldStyle, ...borderFor("phone") }}
          />
          {errorFor("phone")}
        </div>
      </div>
      <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="contact-email">
            Email address
          </label>
          <input
            id="contact-email"
            {...field("email")}
            type="email"
            required
            maxLength={CONTACT_LIMITS.email}
            pattern={RULES.email.pattern}
            autoComplete="email"
            placeholder="muhammadahmed@gmail.com"
            style={{ ...fieldStyle, ...borderFor("email") }}
          />
          {errorFor("email")}
        </div>
        <div>
          <label style={labelStyle} htmlFor="contact-program">
            Program of interest
          </label>
          <select id="contact-program" name="program" defaultValue="" style={{ ...fieldStyle, appearance: "none" }}>
            <option value="">Select your program</option>
            {CONTACT_PROGRAMS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          {...field("message")}
          placeholder="Assalam o Alaikum, I would like to enquire about..."
          rows={4}
          required
          maxLength={CONTACT_LIMITS.message}
          style={{ ...fieldStyle, resize: "vertical", ...borderFor("message") }}
        />
        {errorFor("message")}
      </div>
      {error && (
        <p role="alert" style={{ color: "#c0392b", fontSize: "0.85rem", margin: 0 }}>
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        style={{
          background: "var(--color-brand-teal)",
          color: "#000",
          fontWeight: 700,
          padding: "13px 28px",
          borderRadius: 100,
          fontSize: "0.9rem",
          border: "none",
          cursor: sending ? "wait" : "pointer",
          opacity: sending ? 0.7 : 1,
          alignSelf: "flex-start",
          fontFamily: "var(--font-body)",
        }}
      >
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
