import type { Metadata } from "next";
import { TickerStrip } from "@/components/home/shared";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import BenefitSection from "@/components/home/BenefitSection";
import PresentationSection from "@/components/home/PresentationSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingTabs from "@/components/home/PricingTabs";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "RAHMA Model School | Inspiring Young Minds for a Bright Future",
  description:
    "Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.",
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
          .feature-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 809px) {
          .benefit-grid { grid-template-columns: 1fr !important; }
          .benefit-grid > div:first-child { height: 400px !important; }
          .benefit-bottom-grid { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <HeroSection />
      <TickerStrip />
      <AboutSection />
      <BenefitSection />
      <PresentationSection />
      <TickerStrip />
      <ProgramsSection />
      <FeatureSection />
      <TestimonialsSection />
      <PricingTabs />
      <BlogSection />
      <CtaSection />
    </>
  );
}
