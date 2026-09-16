"use client";

import { useState, type CSSProperties, type FormEvent } from "react";

const programs = [
  "Junior Section (Play Group, Nursery, Prep)",
  "Primary School (Class 1 – 5)",
  "Middle School (Class 6 – 8)",
  "High School (Class 9 – 10)",
];

const fieldStyle: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
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

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [childName, setChildName] = useState("");

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
          Application received{childName ? ` for ${childName}` : ""}!
        </h3>
        <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Thank you for applying to RAHMA Model School. Our admissions team will contact you within two business days
          to schedule a parent meeting.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setChildName("");
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
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="admission-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <label style={labelStyle} htmlFor="admission-guardian">
            Parent / Guardian Name
          </label>
          <input id="admission-guardian" name="guardian" required placeholder="Full name" style={fieldStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="admission-child">
            Child&apos;s Name
          </label>
          <input
            id="admission-child"
            name="childName"
            required
            placeholder="Child's full name"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            style={fieldStyle}
          />
        </div>
      </div>
      <div className="admission-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <label style={labelStyle} htmlFor="admission-age">
            Child&apos;s Age
          </label>
          <input id="admission-age" name="childAge" placeholder="e.g. 5 years" style={fieldStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="admission-phone">
            Phone Number
          </label>
          <input id="admission-phone" name="phone" required placeholder="+92 300 0000000" style={fieldStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle} htmlFor="admission-program">
          Program of Interest
        </label>
        <select id="admission-program" name="program" defaultValue="" style={{ ...fieldStyle, appearance: "none" }}>
          <option value="">Select a Program</option>
          {programs.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>
      <div>
        <label style={labelStyle} htmlFor="admission-notes">
          Additional Information
        </label>
        <textarea
          id="admission-notes"
          name="notes"
          placeholder="Any special needs, questions, or notes about your child..."
          rows={4}
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </div>
      <button
        type="submit"
        style={{
          background: "var(--color-brand-teal)",
          color: "#000",
          fontWeight: 700,
          padding: "14px 32px",
          borderRadius: 100,
          fontSize: "0.95rem",
          border: "none",
          cursor: "pointer",
          alignSelf: "flex-start",
          fontFamily: "var(--font-body)",
        }}
      >
        Submit Application
      </button>
    </form>
  );
}
