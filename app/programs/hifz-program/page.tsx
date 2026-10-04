import type { Metadata } from "next";
import { programs } from "../[slug]/data";
import HifzHero from "@/components/hifz/HifzHero";
import HifzTicker from "@/components/hifz/HifzTicker";
import HifzAbout from "@/components/hifz/HifzAbout";
import HifzJourney from "@/components/hifz/HifzJourney";
import HifzFeatures from "@/components/hifz/HifzFeatures";
import HifzVideoSection from "@/components/hifz/HifzVideoSection";
import HifzSubjects from "@/components/hifz/HifzSubjects";
import HifzFaq from "@/components/hifz/HifzFaq";
import HifzCta from "@/components/hifz/HifzCta";
import type { HifzProgram } from "@/components/hifz/shared";

const data = programs["hifz-program"];

const program: HifzProgram = {
  title: data.title,
  badge: data.badge,
  tagline: data.tagline,
  description: data.description,
  pills: data.pills ?? [],
  subjects: data.subjects,
  sections: data.sections,
  enrollHref: data.enrollHref ?? "/admission",
};

export const metadata: Metadata = {
  title: `${data.title} | Hifz Program | RAHMA Model School`,
  description: data.tagline,
};

export default function HifzProgramPage() {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hifz-feature-card { transition: transform 0.2s ease; }
        .hifz-feature-card:hover { transform: translateY(-4px); }
        .hifz-faq-btn:focus-visible { outline: 2px solid var(--color-brand-purple-deep); outline-offset: -2px; border-radius: 20px; }

        @media (max-width: 1379px) {
          .hifz-hero-h1 { font-size: 60px !important; }
          .hifz-hero-grid { gap: 48px !important; }
          .hifz-hero-chip { display: none !important; }
          .hifz-title-heading { width: 620px !important; }
          .hifz-about-grid { grid-template-columns: minmax(0, 1fr) 360px !important; gap: 48px !important; }
          .hifz-timeline { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; row-gap: 32px !important; }
          .hifz-timeline-line { display: none !important; }
          .hifz-journey-head { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          .hifz-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .hifz-subjects-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }

        @media (max-width: 810px) {
          /* Hero */
          .hifz-hero { min-height: 0 !important; padding: 48px 20px 60px !important; }
          .hifz-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hifz-hero-h1 { font-size: 42px !important; }
          .hifz-hero-badge { font-size: 10px !important; letter-spacing: 0.08em !important; }
          .hifz-hero-tagline { font-size: 16px !important; }
          .hifz-hero-pills > div { padding: 14px 12px !important; }
          .hifz-hero-pill-value { font-size: 18px !important; }
          .hifz-hero-photo { justify-self: center !important; max-width: 340px !important; margin-right: 18px; }

          /* Ticker */
          .hifz-ticker-text { font-size: 18px !important; }

          /* Shared headings */
          .hifz-h2 { font-size: 32px !important; line-height: 1.2 !important; }

          /* About */
          .hifz-title-row { flex-direction: column !important; gap: 8px !important; }
          .hifz-title-heading { width: 100% !important; flex-shrink: 1 !important; font-size: 28px !important; }
          .hifz-about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hifz-about-lead { font-size: 19px !important; }
          .hifz-about-photo { max-width: 340px; width: calc(100% - 18px); margin: 0 auto 0 18px; }
          .hifz-stats-row { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 28px 20px !important; }
          .hifz-stat-divider { display: none !important; }
          .hifz-stat-value { font-size: 32px !important; }

          /* Journey */
          .hifz-journey-panel { padding: 48px 20px !important; border-radius: 22px !important; }
          .hifz-journey-head { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          .hifz-timeline { grid-template-columns: 1fr !important; row-gap: 0 !important; }
          .hifz-timeline-step { flex-direction: row !important; gap: 16px !important; padding-bottom: 20px; }
          .hifz-timeline-step:not(:last-child)::before {
            content: ""; position: absolute; left: 23px; top: 48px; bottom: 0; width: 2px; background: rgba(255,255,255,0.2);
          }
          .hifz-timeline-card { padding: 20px 18px !important; }

          /* Features */
          .hifz-feature-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .hifz-feature-card { min-height: 0 !important; padding: 28px 24px !important; }

          /* Videos */
          .hifz-video-section { padding: 60px 20px !important; }
          .hifz-video-grid { grid-template-columns: minmax(0, 340px) !important; gap: 28px !important; }
          .hifz-video-title { font-size: 24px !important; }
          .video-play-btn { width: 68px !important; height: 68px !important; }

          /* Subjects + photos */
          .hifz-subject-list { grid-template-columns: 1fr !important; gap: 12px !important; }
          .hifz-photo-strip { display: block !important; columns: 2; column-gap: 12px; }
          .hifz-photo { margin-bottom: 12px; break-inside: avoid; border-radius: 16px !important; }

          /* FAQ */
          .hifz-faq-btn { padding: 18px 18px !important; }
          .hifz-faq-q { font-size: 16px !important; }
          .hifz-faq-a { padding: 0 18px 20px !important; font-size: 15px !important; }

          /* CTA */
          .cta-avatar { display: none !important; }
          .hifz-cta-section { padding: 0 20px 40px !important; }
          .cta-inner { padding: 60px 20px !important; }
          .cta-heading { font-size: 32px !important; line-height: 1.2 !important; }
        }
      `}</style>
      <HifzHero program={program} />
      <HifzTicker />
      <HifzAbout description={program.description} />
      <HifzJourney />
      <HifzFeatures sections={program.sections} />
      <HifzVideoSection />
      <HifzSubjects subjects={program.subjects} enrollHref={program.enrollHref} />
      <HifzFaq />
      <HifzCta enrollHref={program.enrollHref} />
    </>
  );
}
