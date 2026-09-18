import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionLabel, WavyUnderline, Button } from "@/components/ui";
import { programs, programOrder } from "./[slug]/data";

export const metadata: Metadata = {
  title: "Academic Programs | RAHMA Model School",
  description:
    "RAHMA Model School offers Montessori, Primary (Class 1–5), and Middle School (Class 6–7) programmes grounded in a comprehensive national curriculum and Islamic values.",
};

const calendarMonths = [
  {
    month: "April 2026",
    events: [
      { date: "01 Apr", event: "New Session Begins" },
      { date: "07 Apr", event: "World Health Day" },
      { date: "10 Apr", event: "Eid Party" },
      { date: "23 Apr", event: "World Books Day" },
      { date: "27 Apr", event: "Assessments" },
    ],
  },
  {
    month: "May 2026",
    events: [
      { date: "01 May", event: "Labour Day" },
      { date: "11 May", event: "Teacher's Day" },
      { date: "15 May", event: "Qirat Competition" },
      { date: "26 May", event: "1st Term Examination" },
    ],
  },
  {
    month: "June 2026",
    events: [
      { date: "20 Jun", event: "Parent–Teacher Meeting (PTM)" },
      { date: "—", event: "Summer Holidays Begin" },
    ],
  },
  {
    month: "July 2026",
    events: [
      { date: "10, 17, 24", event: "Teacher's Training Days" },
    ],
  },
  {
    month: "August 2026",
    events: [
      { date: "03 Aug", event: "School Reopens" },
      { date: "08 Aug", event: "Project Presentation" },
      { date: "14 Aug", event: "Independence Day Celebration" },
      { date: "18 Aug", event: "Spelling Bee Competition" },
      { date: "27 Aug", event: "Math Competition" },
    ],
  },
  {
    month: "September 2026",
    events: [
      { date: "06 Sep", event: "Defence Day" },
      { date: "15 Sep", event: "Assessments" },
      { date: "17 Sep", event: "Storytelling Competition" },
      { date: "22 Sep", event: "World Peace Day" },
    ],
  },
  {
    month: "October 2026",
    events: [
      { date: "01 Oct", event: "Grandparents Day" },
      { date: "15 Oct", event: "Assessments" },
      { date: "16 Oct", event: "World Food Day" },
    ],
  },
  {
    month: "November 2026",
    events: [
      { date: "05 Nov", event: "Model Making Competition (Sci & Geo)" },
      { date: "09 Nov", event: "Iqbal Day / Debate Competition" },
      { date: "17 Nov", event: "School Trip" },
      { date: "20 Nov", event: "2nd Term Examination" },
    ],
  },
  {
    month: "December 2026",
    events: [
      { date: "01 Dec", event: "Sports Gala" },
      { date: "10 Dec", event: "Literature Activity" },
      { date: "15 Dec", event: "Art & Crafts Competition" },
      { date: "22 Dec", event: "Parent–Teacher Meeting (PTM)" },
    ],
  },
  {
    month: "January 2027",
    events: [
      { date: "01 Jan", event: "Winter Holidays" },
      { date: "20–21 Jan", event: "Science Fair" },
      { date: "26 Jan", event: "Project Presentation" },
      { date: "27 Jan", event: "Assessments" },
    ],
  },
  {
    month: "February 2027",
    events: [
      { date: "04 Feb", event: "Assessments" },
      { date: "10 Feb", event: "Essay Writing Competition" },
      { date: "20 Feb", event: "Final Examinations" },
    ],
  },
  {
    month: "March 2027",
    events: [
      { date: "12 Mar", event: "Annual Programme / Prize Distribution" },
      { date: "15 Mar", event: "New Session Begins" },
    ],
  },
];

const tintColors = ["var(--color-tint-green)", "var(--color-tint-purple)", "var(--color-tint-cream)"];

export default function ProgramsPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px 60px" }}>
        <Container>
          <SectionLabel>Academic Programmes</SectionLabel>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              color: "var(--color-ink)",
              lineHeight: 1.2,
              maxWidth: 600,
            }}
          >
            Programmes designed for{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              every stage
              <WavyUnderline />
            </span>
          </h1>
          <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 620, marginTop: 16 }}>
            From Montessori to Middle School, RAHMA Model School offers a structured, values-driven curriculum covering Prep through Class 7 — preparing every RAHMATE for academic excellence and lifelong character.
          </p>
        </Container>
      </section>

      {/* Programme Cards */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 32px 80px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
              gap: 24,
            }}
          >
            {programOrder.map((slug) => {
              const p = programs[slug];
              return (
                <div
                  key={slug}
                  style={{
                    background: p.tintVar,
                    borderRadius: 20,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ position: "relative", height: 220 }}>
                    <Image
                      src={p.image.src}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 810px) 100vw, 33vw"
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        background: p.accentVar,
                        color: p.textOnAccent === "light" ? "#fff" : "#000",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        padding: "5px 12px",
                        borderRadius: 100,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {p.classes.toUpperCase()}
                    </span>
                  </div>

                  <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.15rem", color: "var(--color-ink)" }}>
                      {p.title}
                    </h2>
                    <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                      {p.tagline}
                    </p>

                    {/* Subjects */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                      {p.subjects.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          style={{
                            background: "rgba(0,0,0,0.07)",
                            padding: "3px 10px",
                            borderRadius: 100,
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            color: "#444",
                          }}
                        >
                          {s.split(" (")[0]}
                        </span>
                      ))}
                      {p.subjects.length > 4 && (
                        <span style={{ background: "rgba(0,0,0,0.07)", padding: "3px 10px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 600, color: "#444" }}>
                          +{p.subjects.length - 4} more
                        </span>
                      )}
                    </div>

                    <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                      <span style={{ background: "rgba(0,0,0,0.07)", padding: "4px 12px", borderRadius: 100, fontSize: "0.75rem", fontWeight: 600, color: "#444" }}>
                        {p.ageRange}
                      </span>
                      <span style={{ background: "rgba(0,0,0,0.07)", padding: "4px 12px", borderRadius: 100, fontSize: "0.75rem", fontWeight: 600, color: "#444" }}>
                        {p.programType}
                      </span>
                    </div>

                    <Link
                      href={`/programs/${slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--color-ink)",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        marginTop: 8,
                      }}
                    >
                      View details &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Curriculum Overview */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px" }}>
        <Container>
          <SectionLabel>Curriculum</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              color: "var(--color-ink)",
              marginBottom: 8,
              maxWidth: 560,
            }}
          >
            Our curriculum includes
          </h2>
          <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 600, marginBottom: 40 }}>
            A national curriculum delivered through concept-based teaching — every subject builds academic skill, critical thinking, and Islamic character simultaneously.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 16 }}>
            {[
              { subject: "English", desc: "Grammar, comprehension, essay writing, and oral communication" },
              { subject: "Urdu", desc: "Literature, grammar, composition, and Urdu calligraphy" },
              { subject: "Mathematics", desc: "Arithmetic, algebra, geometry, and logical reasoning" },
              { subject: "General Science", desc: "Biology, chemistry, and physics concepts with lab practicals" },
              { subject: "Islamiat & Quran", desc: "Nazra, tafseer, Hadith, Islamic history, and moral values" },
              { subject: "Social Studies", desc: "Pakistan Studies, geography, and civic responsibilities" },
              { subject: "Computer Studies", desc: "Digital literacy, MS Office, and internet fundamentals" },
              { subject: "General Knowledge", desc: "Current affairs, world knowledge, and critical awareness" },
              { subject: "Geography", desc: "Physical and human geography, maps, landforms, and environmental awareness" },
            ].map((item, i) => (
              <div
                key={item.subject}
                style={{
                  background: tintColors[i % 3],
                  borderRadius: 16,
                  padding: "20px 22px",
                }}
              >
                <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-ink)", marginBottom: 6 }}>
                  {item.subject}
                </p>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.82rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Academic Calendar 2026–27 */}
      <section style={{ background: "var(--color-dark-bg)", padding: "72px 32px" }}>
        <Container>
          <p style={{ color: "var(--color-brand-teal)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
            &#10022; Academic Year 2026–27
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            Activity &amp; Examination Calendar
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 580, marginBottom: 48 }}>
            Prep Classes to Class 7 — full academic year schedule including term exams, assessments, competitions, and co-curricular events.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
              gap: 20,
            }}
          >
            {calendarMonths.map((m, i) => (
              <div
                key={m.month}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Month header */}
                <div
                  style={{
                    background: i % 3 === 0 ? "var(--color-brand-teal)" : i % 3 === 1 ? "#520080" : "#fcb520",
                    padding: "12px 20px",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: i % 3 === 2 ? "#000" : "#fff", margin: 0 }}>
                    {m.month}
                  </p>
                </div>
                {/* Events */}
                <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {m.events.map((ev) => (
                    <div key={ev.event} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "var(--color-brand-teal)",
                          minWidth: 52,
                          flexShrink: 0,
                          paddingTop: 1,
                        }}
                      >
                        {ev.date}
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                        {ev.event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-brand-teal)", padding: "64px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>
          Enroll your child today
        </h2>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Join a school where academic excellence, Islamic values, and a vibrant student life come together for every RAHMATE.
        </p>
        <Button href="/admission" variant="dark">
          Start Admission
        </Button>
      </section>
    </div>
  );
}
