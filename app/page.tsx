import type { Metadata } from "next";
import { TickerStrip } from "@/components/home/shared";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import BenefitSection from "@/components/home/BenefitSection";
import PresentationSection from "@/components/home/PresentationSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import VisionSection from "@/components/home/VisionSection";
import PricingTabs from "@/components/home/PricingTabs";
// import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "RAHMA Model School | Where Education and Faith Build Character",
  description:
    "Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future",
};

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .about-card { transition: transform 0.2s ease; }
        .about-card:hover { transform: translateY(-4px); }
        .program-card { transition: transform 0.2s ease; }
        .program-card:hover { transform: translateY(-4px); }
        .feature-card { transition: transform 0.2s ease; }
        .feature-card:hover { transform: translateY(-4px); }
        .blog-card { transition: transform 0.2s ease; }
        .blog-card:hover { transform: translateY(-4px); }
        @media (max-width: 1379px) {
          .benefit-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .benefit-grid > div:first-child { height: 500px !important; }
          .programs-grid { grid-template-columns: 1fr !important; }
          /* Tablets: keep the photo beside the text, just narrower */
          .vision-layout { gap: 48px !important; }
          .vision-photo-col { width: 360px !important; margin-top: 0 !important; }
        }
        @media (min-width: 811px) and (max-width: 1379px) {
          .vision-section { padding-top: 100px !important; }
        }
        /* Where /#vision lands: 40px above the section top, as before, while the
           photo sits beside the text (section top padding + 40) */
        .vision-content { scroll-margin-top: 220px; }
        /* clip, not hidden: overflow: hidden makes the section a scroll container,
           and the jump to /#vision then can't land above the section's top edge.
           hidden stays as the fallback for browsers without clip (Safari < 16). */
        .vision-section { overflow: hidden; overflow: clip; }
        @media (max-width: 1379px) { .vision-content { scroll-margin-top: 140px; } }
        @media (max-width: 1023px) {
          /* Photo stacks above the text: land on the heading, just below the nav bar */
          .vision-content { scroll-margin-top: 96px; }
          .vision-layout { flex-direction: column !important; gap: 40px !important; }
          .vision-photo-col { width: 100% !important; max-width: 440px !important; margin-top: 0 !important; align-self: center; }
          .vision-photo-col img { margin-top: 0 !important; height: 520px !important; object-fit: cover; object-position: center 35%; }
        }
        @media (max-width: 810px) {
          /* ── Benefit section (existing) ── */
          .benefit-grid { grid-template-columns: 1fr !important; }
          .benefit-grid > div:first-child { height: 400px !important; }
          .benefit-bottom-grid { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: 1fr !important; }

          /* ── Hero ── */
          .hero-section { min-height: 800px !important; padding: 80px 20px 60px !important; }
          .hero-pill-label { font-size: 10px !important; letter-spacing: 0.08em !important; }
          .hero-h1 { font-size: 35px !important; }

          /* ── Presentation section ── */
          .presentation-section { padding: 200px 20px 60px !important; min-height: 0 !important; }

          /* ── About section ── */
          .about-title-row { flex-direction: column !important; gap: 16px !important; }
          .about-heading-wrapper { width: 100% !important; flex-shrink: 1 !important; }
          .about-heading { font-size: 20px !important; font-weight: 400 !important; line-height: 1.3 !important; }
          .about-stats-row { flex-wrap: wrap !important; gap: 24px !important; }
          .about-stats-row > div { flex: 1 1 140px !important; }
          .about-cards-row { height: auto !important; flex-wrap: wrap !important; }
          .about-cards-row .about-card { width: 100% !important; flex-shrink: 1 !important; min-height: 200px !important; }
          .about-cards-row > div:nth-child(2) { min-height: 260px !important; flex: 1 1 100% !important; }

          /* ── Benefit section rows ── */
          .benefit-row-1 { flex-direction: column !important; gap: 32px !important; }
          .benefit-image-wrapper { width: 100% !important; min-width: 0 !important; height: 300px !important; }
          .benefit-row-2 { flex-direction: column !important; gap: 32px !important; }
          .benefit-row2-title { width: 100% !important; max-width: 100% !important; flex-shrink: 1 !important; }
          .benefit-ticker-wrapper { display: none !important; }

          /* ── Programs section ── */
          .programs-heading { font-size: 32px !important; line-height: 1.2 !important; }
          .program-card-link { height: auto !important; }
          .program-card-inner { flex-direction: column !important; }
          .program-card-content { width: 100% !important; flex-shrink: 1 !important; }
          .program-card-image { display: none !important; }

          /* ── Vision section ── */
          .vision-layout { flex-direction: column !important; gap: 40px !important; }
          .vision-photo-col { width: 100% !important; margin-top: 0 !important; }
          .vision-photo-col img { margin-top: 0 !important; object-fit: cover; width: 100% !important; height: 500px !important; }
          .vision-stats { grid-template-columns: 1fr 1fr !important; }


          /* ── CTA section ── */
          .cta-avatar { display: none !important; }

          /* ── Pricing section ── */
          .pricing-header { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
          .pricing-heading { font-size: 32px !important; line-height: 1.2 !important; }
          .pricing-cards-grid { grid-template-columns: 1fr !important; }
          .pricing-large-card-inner { flex-direction: column !important; }
          .pricing-image-panel { width: 100% !important; min-height: 220px !important; position: relative !important; }

          /* ── Blog section ── */
          .blog-heading { font-size: 32px !important; line-height: 1.2 !important; }
          .blog-grid { grid-template-columns: 1fr !important; }

          /* ── CTA section ── */
          .cta-inner { padding: 60px 20px !important; }
          .cta-heading { font-size: 32px !important; line-height: 1.2 !important; }
        }
        @media (min-width: 420px) and (max-width: 810px) {
          .hero-section { min-height: 900px !important; }
        }
      `}</style>
      <HeroSection />
      <TickerStrip />
      <AboutSection />
      <BenefitSection />
      <PresentationSection />
      <TickerStrip />
      <VisionSection />

      <ProgramsSection />
      <PricingTabs />
      {/* <BlogSection /> */}
      <CtaSection />
    </>
  );
}
