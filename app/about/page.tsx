import type { Metadata } from "next";
import { TickerStrip } from "@/components/home/shared";
import BannerSection from "@/components/about/BannerSection";
import FullImageSection from "@/components/about/FullImageSection";
import StorySection from "@/components/about/StorySection";
import TeacherSection from "@/components/about/TeacherSection";
import ValuesSection from "@/components/about/ValuesSection";
import FaqSection from "@/components/about/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About Us | RAHMA Model School Rawat",
  description:
    "Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.",
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 810px) {
          .about-banner-row { flex-direction: column !important; gap: 32px !important; align-items: flex-start !important; }
          .about-banner-h1 { font-size: 40px !important; line-height: 1.2 !important; }
          .about-teacher-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .values-row { flex-direction: column !important; gap: 40px !important; }
          .values-image { width: 100% !important; flex-shrink: 1 !important; height: 280px !important; }
        }
        @media (max-width: 1200px) {
          .about-teacher-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
      <BannerSection />
      <FullImageSection />
      <TickerStrip />
      <StorySection />
      <TeacherSection />
      <ValuesSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
