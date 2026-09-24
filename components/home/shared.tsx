import Link from "next/link";

/* ── DATA ─────────────────────────────────────────────── */

export const stats = [
  { value: "218", label: "Enrolled Students" },
  { value: "14", label: "Qualified Teachers" },
  { value: "13", label: "Classrooms" },
  { value: "12+", label: "Years of Excellence" },
];

export const programs = [
  {
    num: "01",
    title: "Preschool (Play Group – Nursery – Prep)",
    tag: "Play Group to Prep",
    tagColor: "#09d89a",
    desc: "Learning through play and hands-on activities, focusing on colours, shapes, numbers, social skills, and building reading and writing readiness in a safe, loving environment.",
    bg: "#d7fdcf",
    image: "/assets/images/i2ECgxjZP2t8RjEmI8skh28jRbQ-09736a12.avif",
  },
  {
    num: "02",
    title: "Primary School (Class 1–5)",
    tag: "Grades 1–5",
    tagColor: "#520080",
    desc: "Strong academics and character development through concept-based and interactive teaching, covering English, Urdu, Maths, Science, Islamiat, Computer Studies, and General Knowledge.",
    bg: "#ebe1fd",
    image: "/assets/images/Sfm9js53gBOL3V13gpQtyyxQPf8-334437a4.avif",
  },
  {
    num: "03",
    title: "Middle & High School (Class 6–10)",
    tag: "Grades 6–10",
    tagColor: "#fcb520",
    desc: "Deeper understanding, analytical thinking, and board exam preparation in Science and Arts subjects, with career counselling and leadership development for future-ready graduates.",
    bg: "#feeecd",
    image: "/assets/images/yZKDsRUleMx3BoVzta3YgXn9l5A-8b5af1ba.avif",
  },
];

export const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2L9.5 9.5H2l6 4.4-2.3 7L12 16.8l6.3 4.1-2.3-7 6-4.4h-7.5L12 2z" fill="#fcb520" />
      </svg>
    ),
    title: "Play-Based Learning",
    desc: "Children learn through interactive play, engaging activities, and exploration that build social skills and a love of learning from the earliest years.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="#09d89a" />
      </svg>
    ),
    title: "Safe & Caring Environment",
    desc: "We provide a secure, friendly, and supportive atmosphere where every child feels confident to learn, grow, and reach their full potential.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="4" fill="#520080" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#520080" />
      </svg>
    ),
    title: "Qualified & Dedicated Teachers",
    desc: "Our experienced RAHMATES teachers use interactive, student-centred teaching methods to make learning enjoyable, meaningful, and effective for every child.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 3H4a1 1 0 00-1 1v3M17 3h3a1 1 0 011 1v3M3 17v3a1 1 0 001 1h3M17 21h3a1 1 0 001-1v-3" stroke="#fcb520" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 9h6M9 12h6M9 15h4" stroke="#09d89a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Co-Curricular Activities",
    desc: "Students participate in debates, sports, science exhibitions, arts, and educational events that develop leadership, communication, and confidence.",
  },
];

export const testimonials = [
  {
    name: "Muhammad Rizwan",
    role: "School Parent",
    text: "A wonderful school that balances academics and character. My child has grown so much in confidence and knowledge since joining RAHMA Model School. The teachers are caring and the environment is truly excellent.",
    image: "/assets/images/ZjZ4G0VsZ76Rs48VIacTqvdWFo-ec9c7da0.avif",
  },
  {
    name: "Ayesha Malik",
    role: "Parent of Grade 5 Student",
    text: "Our child has become more confident and curious since joining RAHMA. The teachers are incredibly supportive and truly care about every student's academic, moral, and social development. We couldn't be happier.",
    image: "/assets/images/Vi1ACTpArCU8a158EXq2wfU1gWY-a2326075.avif",
  },
];

export const aboutCards = [
  {
    bg: "#d7fdcf",
    value: "218",
    label: "Students Enrolled",
    sublabel: "Growing with us every year",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#09d89a" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#09d89a" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#09d89a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    bg: "#ebe1fd",
    value: "14",
    label: "Qualified Teachers",
    sublabel: "Dedicated to every child's success",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="#520080" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const TICKER_TEXT = "Where growth begins";

/* ── ARROW BUTTON ────────────────────────────────────── */

export function ArrowButton({
  href,
  children,
  variant = "white",
  className = "",
}: {
  href: string;
  children: string;
  variant?: "white" | "purple" | "dark";
  className?: string;
}) {
  const styles: Record<string, { bg: string; text: string; circleBg: string; circleText: string }> = {
    white: { bg: "#fff", text: "#000", circleBg: "#fcb520", circleText: "#000" },
    purple: { bg: "#520080", text: "#fff", circleBg: "#fff", circleText: "#520080" },
    dark: { bg: "#000", text: "#fff", circleBg: "#520080", circleText: "#fff" },
  };
  const s = styles[variant];
  return (
    <Link
      href={href}
      className={`arrow-btn${className ? " " + className : ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 20,
        padding: "9px 11px 9px 20px",
        borderRadius: 50,
        background: s.bg,
        color: s.text,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 16,
        lineHeight: "24px",
        textDecoration: "none",
      }}
    >
      {children}
      <span
        style={{
          width: 35,
          height: 35,
          borderRadius: "50%",
          background: s.circleBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            fill={s.circleText}
            d="M11.133 15.55a.833.833 0 01-.591-1.383l4.166-4.125-4.166-4.125a.833.833 0 111.183-1.175l4.708 4.708a.833.833 0 010 1.183l-4.708 4.709a.83.83 0 01-.592.208"
          />
          <path fill={s.circleText} d="M15.834 10.833H4.167a.833.833 0 110-1.667h11.667a.833.833 0 010 1.667" />
        </svg>
      </span>
    </Link>
  );
}

/* ── EYEBROW LABEL ───────────────────────────────────── */

export function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <span style={{ color: light ? "rgba(255,255,255,0.5)" : "#888", fontSize: 16, lineHeight: "24px" }}>→</span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 500,
          lineHeight: "24px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: light ? "#fff" : "#000",
        }}
      >
        {children}
      </span>
    </div>
  );
}

/* ── TICKER STRIP ────────────────────────────────────── */

export function TickerStrip() {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div
      style={{
        background: "#d7fdcf",
        padding: "20px 0",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "ticker-scroll 20s linear infinite",
        }}
      >
        {[...items, ...items].map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "0 20px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 24,
                fontWeight: 500,
                lineHeight: "32px",
                color: "#000",
              }}
            >
              {TICKER_TEXT}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="#09d89a" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
