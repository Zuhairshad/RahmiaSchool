import type { Metadata } from "next";
import { Container, SectionLabel, WavyUnderline, Button, PricingCard, CtaImageRow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Fee Structure & Admissions",
};

export default function PricingPage() {
  return (
    <div>
      <style>{`
        .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: stretch; }
        @media (max-width: 810px) { .pricing-grid { grid-template-columns: 1fr; } }
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
            RAHMA Model School is committed to making quality education accessible. Contact us directly for current fee details and information on merit and need-based scholarships.
          </p>
        </Container>
      </section>

      {/* Plans */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 0 80px" }}>
        <Container>
          <div className="pricing-grid">
            <PricingCard
              title="Preschool & Primary"
              description="Affordable, community-focused fee structure with merit and need-based scholarships available upon request."
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
              title="Middle & High School"
              description="Comprehensive academic programs covering all subjects, laboratory work, co-curriculars, and examination preparation."
              price="Contact us"
              variant="premium"
              ctaHref="/contact"
              image="/assets/images/yJpmVxeiLLChpwpGjaX5dl1UO64-bd4e3ad9.avif"
              imageWidth={840}
              imageHeight={1308}
              features={[
                "Full subject curriculum",
                "Science lab & computer room",
                "Co-curricular activities",
                "Exam preparation support",
                "Parent progress reports",
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
