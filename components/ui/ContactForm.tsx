"use client";

import { useState, type CSSProperties, type FormEvent } from "react";

const programs = [
  "Little Explorer Program",
  "Creative Minds Program",
  "Happy Learners Program",
  "Smart Thinkers Program",
  "Middle School Program",
  "Bright Starters Program",
];

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
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
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
          process or give us a call.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
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
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="contact-name">
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            placeholder="John Doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={fieldStyle}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="contact-phone">
            Phone number
          </label>
          <input id="contact-phone" name="phone" placeholder="+92 300 0000000" style={fieldStyle} />
        </div>
      </div>
      <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="contact-email">
            Email address
          </label>
          <input id="contact-email" name="email" type="email" required placeholder="john.doe@example.com" style={fieldStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="contact-program">
            Program of interest
          </label>
          <select id="contact-program" name="program" defaultValue="" style={{ ...fieldStyle, appearance: "none" }}>
            <option value="">Select your program</option>
            {programs.map((p) => (
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
          name="message"
          placeholder="Enter your message..."
          rows={4}
          required
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </div>
      <button
        type="submit"
        style={{
          background: "var(--color-brand-teal)",
          color: "#000",
          fontWeight: 700,
          padding: "13px 28px",
          borderRadius: 100,
          fontSize: "0.9rem",
          border: "none",
          cursor: "pointer",
          alignSelf: "flex-start",
          fontFamily: "var(--font-body)",
        }}
      >
        Send Message
      </button>
    </form>
  );
}
