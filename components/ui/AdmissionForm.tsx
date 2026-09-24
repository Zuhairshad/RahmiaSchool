"use client";

import { useState, useRef, type CSSProperties } from "react";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [childName, setChildName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const fd = new FormData(e.currentTarget);
    const body = {
      guardian: fd.get("guardian"),
      childName: fd.get("childName"),
      childAge: fd.get("childAge"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      program: fd.get("program"),
      notes: fd.get("notes"),
    };

    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
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
          Thank you for applying to RAHMA Model School. Our admissions team will contact you within two business days to schedule a parent meeting.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setChildName("");
            formRef.current?.reset();
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
    <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div className="admission-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <label style={labelStyle} htmlFor="admission-guardian">
            Parent / Guardian Name
          </label>
          <input id="admission-guardian" name="guardian" required placeholder="Muhammad Ahmed" style={fieldStyle} />
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
          <input id="admission-phone" name="phone" required placeholder="+92 3XX XXXXXXX" style={fieldStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="admission-email">
          Email Address
        </label>
        <input
          id="admission-email"
          name="email"
          type="email"
          required
          placeholder="muhammadahmed@gmail.com"
          style={fieldStyle}
        />
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

      {status === "error" && (
        <p style={{ color: "#e53e3e", fontSize: "0.85rem", margin: 0 }}>
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: status === "loading" ? "#a0e8d8" : "var(--color-brand-teal)",
          color: "#000",
          fontWeight: 700,
          padding: "14px 32px",
          borderRadius: 100,
          fontSize: "0.95rem",
          border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          alignSelf: "flex-start",
          fontFamily: "var(--font-body)",
          transition: "background 0.2s",
        }}
      >
        {status === "loading" ? "Sending…" : "Submit Application"}
      </button>
    </form>
  );
}
