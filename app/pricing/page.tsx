import type { Metadata } from "next";
import { Container, SectionLabel, WavyUnderline, Button, PricingCard } from "@/components/ui";
import { extraCharges, feeRows, formatFee } from "@/lib/fees";

export const metadata: Metadata = {
  title: "Fee Structure & Admissions",
};

export default function PricingPage() {
  return (
    <div>
      <style>{`
        .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: stretch; }
        @media (max-width: 810px) { .pricing-grid { grid-template-columns: 1fr; } }
        .fee-row { display: grid; grid-template-columns: 1.6fr 1fr; gap: 16px; align-items: center; padding: 18px 24px; border-top: 1px solid #ebebeb; }
        .fee-row-head { border-top: none; background: var(--color-tint-purple); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-brand-purple-deep); }
        .fee-extras { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
        .fee-label { display: none; }
        @media (max-width: 810px) {
          .fee-row { grid-template-columns: 1fr; gap: 6px; padding: 16px 20px; }
          .fee-row-head { display: none; }
          .fee-extras { grid-template-columns: 1fr; }
          .fee-label { display: inline; color: #888; font-weight: 600; }
        }
      `}</style>

      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 0 60px", textAlign: "center" }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SectionLabel>Fee Structure</SectionLabel>
          </div>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              color: "var(--color-ink)",
              lineHeight: 1.2,
            }}
          >
            Affordable education for{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              every family
              <WavyUnderline />
            </span>
          </h1>
          <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 560, margin: "16px auto 0" }}>
            RAHMA Model School is committed to making quality education accessible. Contact us directly for current fee details
          </p>
        </Container>
      </section>

      {/* Fee table */}
      <section style={{ background: "var(--color-paper)", padding: "0 0 60px" }}>
        <Container>
          <div style={{ border: "1px solid #ebebeb", borderRadius: 20, overflow: "hidden", background: "#fff" }}>
            <div className="fee-row fee-row-head" aria-hidden>
              <span>Level</span>
              <span>Fee per month</span>
            </div>
            {feeRows.map((r) => (
              <div key={r.level} className="fee-row" style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#000" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700 }}>{r.level}</div>
                  <div style={{ color: "var(--color-body-text)", fontSize: "0.85rem" }}>{r.classes}</div>
                </div>
                <div><span className="fee-label">Fee per month: </span>{formatFee(r.monthly)}</div>
              </div>
            ))}
          </div>
          <div className="fee-extras">
            {extraCharges.map((c) => (
              <div key={c.label} style={{ background: "var(--color-tint-green)", borderRadius: 16, padding: "20px 24px", fontFamily: "var(--font-body)" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-body-text)", marginBottom: 6 }}>{c.label}</div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 700, color: "#000" }}>{formatFee(c.amount)}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 0 80px" }}>
        <Container>
          <div className="pricing-grid">
            <PricingCard
              title="Preschool & Primary"
              description="Affordable, community-focused fee structure for Preschool and Primary families"
              price="Contact us"
              variant="standard"
              ctaHref="/contact"
              features={[
                "Safe and nurturing environment",
                "Play-based & Montessori learning",
                "Quran & Islamic studies",
                "Creative arts and crafts",
                "Regular progress updates",
              ]}
            />
            <PricingCard
              title="Middle, High School & Hifz"
              description="Class 6–10 and our Hifz with Understanding program: a full subject curriculum, co-curriculars and Quranic training under one roof"
              price="Contact us"
              variant="premium"
              ctaHref="/contact"
              features={[
                "Full subject curriculum",
                "Science lab & computer room",
                "Co-curricular activities",
                "Hifz with Urdu translation & Tajweed",
                "Parent progress reports",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-brand-teal)", padding: "64px 0", textAlign: "center" }}>
        <Container>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>
            Join our learning community today
          </h2>
          <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>
            Quality education made accessible for every family in Bagga Sheikhan, Rawat and surrounding areas
          </p>
          <Button href="/contact" variant="dark">
            Enroll now
          </Button>
        </Container>
      </section>
    </div>
  );
}
