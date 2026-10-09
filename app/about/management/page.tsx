import type { Metadata } from "next";
import { Eyebrow } from "@/components/home/shared";

export const metadata: Metadata = {
  title: "Management | RAHMA Model School Rawat",
  description: "The management team of RAHMA Model School, Rawat, Rawalpindi",
};

export default function ManagementPage() {
  return (
    <>
      <style>{`
        @media (max-width: 810px) {
          .management-section { padding: 120px 20px 96px !important; }
          .management-h1 { font-size: 40px !important; line-height: 1.2 !important; }
        }
      `}</style>
      <section className="management-section" style={{ background: "#ffffff", padding: "200px 30px 160px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 21 }}>
          <Eyebrow>Management</Eyebrow>
          <h1
            className="management-h1"
            style={{ fontFamily: "var(--font-heading)", fontSize: 72, fontWeight: 700, lineHeight: "79.2px", color: "#000", margin: 0 }}
          >
            Coming soon
          </h1>
        </div>
      </section>
    </>
  );
}
