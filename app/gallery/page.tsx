import type { Metadata } from "next";
import GalleryBanner from "@/components/gallery/GalleryBanner";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaSection from "@/components/home/CtaSection";
import { galleryCategories, galleryPhotos } from "@/lib/gallery";

export const metadata: Metadata = {
  title: { absolute: "Gallery | RAHMA Model School" },
  description:
    "Photos from RAHMA Model School: celebrations, classrooms, study trips, sports days and community events.",
};

export default function GalleryPage() {
  return (
    <>
      <style>{`
        @media (max-width: 810px) {
          .gallery-banner { padding: 64px 20px 32px !important; }
          .gallery-banner-row { flex-direction: column !important; gap: 24px !important; align-items: flex-start !important; }
          .gallery-banner-h1 { font-size: 40px !important; line-height: 1.2 !important; }
        }
      `}</style>
      <GalleryBanner />
      <GalleryGrid photos={galleryPhotos} categories={galleryCategories} />
      <CtaSection />
    </>
  );
}
