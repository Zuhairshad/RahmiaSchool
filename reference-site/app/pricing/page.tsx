import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Pricing Plans" };

function WavyUnderline() {
  return (
    <svg viewBox="0 0 220 14" style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 14 }} preserveAspectRatio="none">
      <path d="M 4 10 Q 55 2 110 10 Q 165 18 216 10" fill="none" stroke="#FCB520" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0l1.3 3.7H10L7 6l1.1 3.7L5 7.6 1.9 9.7 3 6 0 3.7h3.7L5 0z" fill="#FCB520"/></svg>
      <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>{children}</span>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* Header */}
      <section style={{ background: "#fff", padding: "72px 32px 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Pricing Plans</SectionLabel>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Choose the right<br />plan{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              today
              <WavyUnderline />
            </span>
          </h1>
          {/* Monthly/Yearly toggle */}
          <div style={{ display: "inline-flex", background: "#f0f0f0", borderRadius: 100, padding: 4, marginTop: 32, gap: 4 }}>
            <button style={{ background: "#3D2F6B", color: "#fff", border: "none", borderRadius: 100, padding: "8px 24px", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer" }}>Monthly</button>
            <button style={{ background: "transparent", color: "#888", border: "none", borderRadius: 100, padding: "8px 24px", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer" }}>Yearly</button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section style={{ background: "#FCFAED", padding: "60px 32px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 24, alignItems: "start" }}>

          {/* Standard */}
          <div style={{ background: "#D7FDCF", borderRadius: 20, padding: "32px 28px" }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#000", marginBottom: 8 }}>Standard Admission</h2>
            <p style={{ color: "#575757", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 24 }}>
              Quality early education with professional support, regular parent communication, and standard co-curricular activities.
            </p>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.4rem", fontWeight: 800, color: "#000" }}>PKR 2,500</span>
              <span style={{ color: "#888", fontSize: "0.875rem" }}>/month</span>
            </div>
            <Link href="/admission" style={{ display: "inline-block", background: "rgba(0,0,0,0.1)", color: "#000", fontWeight: 700, padding: "11px 24px", borderRadius: 100, fontSize: "0.875rem", marginBottom: 28 }}>
              Get started today →
            </Link>
            <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>What&apos;s included</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {["Safe and nurturing environment", "Play-based learning activities", "Daily snacks", "Creative arts and crafts", "Regular progress updates"].map(f => (
                <li key={f} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.875rem", color: "#444" }}>
                  <span style={{ color: "#09D89A", fontWeight: 700 }}>✓</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium */}
          <div style={{ background: "#EBE1FD", borderRadius: 20, overflow: "hidden" }}>
            <div style={{ padding: "32px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#000" }}>Premium Enrollment</h2>
                <span style={{ background: "#3D2F6B", color: "#fff", fontSize: "0.7rem", fontWeight: 700, padding: "4px 12px", borderRadius: 100, letterSpacing: "0.06em" }}>POPULAR</span>
              </div>
              <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 24 }}>
                Comprehensive education with priority support, priority parent communication, and enhanced co-curricular activities.
              </p>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2.8rem", fontWeight: 800, color: "#000" }}>PKR 5,000</span>
                <span style={{ color: "#888", fontSize: "0.875rem" }}>/month</span>
              </div>
              <Link href="/admission" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#3D2F6B", color: "#fff", fontWeight: 700, padding: "12px 24px", borderRadius: 100, fontSize: "0.875rem", marginBottom: 28 }}>
                Get started today
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#3D2F6B", fontSize: "0.75rem" }}>→</span>
              </Link>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#444", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.06em" }}>What&apos;s included</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Structured learning programs", "Interactive group activities", "Healthy meals and snacks", "Weekly progress reports", "Priority parent support", "Islamic studies integrated daily"].map(f => (
                  <li key={f} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.875rem", color: "#444" }}>
                    <span style={{ color: "#3D2F6B", fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* Image placeholder */}
            <div style={{ height: 180, background: "rgba(61,47,107,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "rgba(61,47,107,0.3)", fontSize: "0.8rem", fontWeight: 600 }}>[ Classroom photo ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#09D89A", padding: "64px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>Not sure which plan is right?</h2>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>Contact us and we'll help you choose the best fit for your child.</p>
        <Link href="/contact" style={{ background: "#000", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 100, fontSize: "0.95rem", display: "inline-block" }}>
          Talk to Us
        </Link>
      </section>
    </div>
  );
}
