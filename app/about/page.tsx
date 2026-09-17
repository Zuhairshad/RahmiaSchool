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
