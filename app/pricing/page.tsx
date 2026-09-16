import type { Metadata } from "next";
import { Container, SectionLabel, WavyUnderline, Button, PricingCard, CtaImageRow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Fee Structure & Admissions",
};

export default function PricingPage() {
  return (
    <div>
      <style>{`
        .pricing-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 24px; align-items: start; }
        @media (max-width: 810px) { .pricing-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 0 60px", textAlign: "center" }}>
        <Container>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SectionLabel>Pricing Plans</SectionLabel>
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
            Choose the right
            <br />
            plan{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              today
              <WavyUnderline />
            </span>
          </h1>
        </Container>
      </section>

      {/* Plans */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 0 80px" }}>
        <Container>
          <div className="pricing-grid">
            <PricingCard
              title="Basic care"
              description="Affordable, community-focused fee structure with merit and need-based scholarships available upon request."
              price="$100.00"
              variant="standard"
              ctaHref="/admission"
              features={[
                "Safe and nurturing environment",
                "Play-based learning activities",
                "Daily snacks included",
                "Creative arts and crafts",
                "Regular progress updates",
              ]}
            />
            <PricingCard
              title="Smart start"
              description="Comprehensive academic programs covering all subjects, laboratory work, co-curriculars, and examination preparation."
              price="$500.00"
              variant="premium"
              ctaHref="/admission"
              image="/assets/images/yJpmVxeiLLChpwpGjaX5dl1UO64-bd4e3ad9.avif"
              imageWidth={840}
              imageHeight={1308}
              features={[
                "Structured learning programs",
                "Interactive group activities",
                "Healthy meals and snacks",
                "Weekly progress reports",
                "Priority parent support",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-brand-teal)", padding: "64px 0", textAlign: "center" }}>
        <Container>
          <CtaImageRow />
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>
            Join our learning community today
          </h2>
          <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>
            Quality education made accessible for every family in Bagga Sheikhan, Rawat and surrounding areas.
          </p>
          <Button href="/contact" variant="dark">
            Enroll now
          </Button>
        </Container>
      </section>
    </div>
  );
}
