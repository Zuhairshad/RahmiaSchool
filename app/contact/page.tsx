// NOTE ON SOURCE FIDELITY: reference-site/public/contact.html is a broken /
// empty Framer export (only ~13 data-framer-name nodes total, all belonging
// to the "Made with Framer" badge widget; body text strips down to just the
// <title> tag and the Framer marketing footer — no nav, no sections, no
// form). Only the <title> ("Contact Us | RAHMA Model School Rawat") is real.
// The contact details below are cross-checked against real content found on
// OTHER pages: the phone number and office hours come verbatim from
// admission.html's real "General inquiry" / "Opening hours" cards, and the
// address fragment "Bagga Sheikhan, Near Rawat, Rawalpindi" is pulled from
// about.html. The email address is a best-guess (no real email address is
// present anywhere in reference-site/public/**).

import type { Metadata } from "next";
import { Container, WavyUnderline, ContactForm } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
};

const contactCards = [
  {
    bg: "var(--color-tint-green)",
    icon: "📍",
    title: "Address",
    lines: ["Bagga Sheikhan, Near Rawat", "Rawalpindi, Pakistan"],
  },
  {
    bg: "var(--color-tint-purple)",
    icon: "📞",
    title: "Phone",
    lines: ["+92 331 5947506"],
  },
  {
    bg: "var(--color-tint-cream)",
    icon: "✉️",
    title: "Email",
    lines: ["adminrawat@rahmapk.org"],
  },
  {
    bg: "var(--color-tint-green)",
    icon: "🕐",
    title: "Office Hours",
    lines: ["Monday – Friday: 8:00 am – 2:00 pm", "Saturday: 8:00 am – 1:00 pm · Sunday: Closed"],
  },
];

export default function ContactPage() {
  return (
    <div>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 56px; align-items: start; }
        @media (max-width: 810px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ position: "relative", minHeight: 260, background: "var(--color-nav-bg)", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(120deg, var(--color-dark-bg-deep) 60%, #1a2a18 100%)",
            opacity: 0.92,
          }}
        />
        <Container style={{ position: "relative" }}>
          <p
            style={{
              color: "var(--color-brand-teal)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            ✦ Contact
          </p>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
            }}
          >
            Get in touch with us{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              today
              <WavyUnderline />
            </span>
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section style={{ background: "var(--color-paper)", padding: "72px 0" }}>
        <Container>
          <div className="contact-grid">
            {/* Left */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#000",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                Reach out to our
                <br />
                team{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  today
                  <WavyUnderline />
                </span>
              </h2>
              <p style={{ color: "var(--color-body-text)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 32 }}>
                Get in touch with our team for any questions, support, or detailed information about our programs and
                admission process.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {contactCards.map((c) => (
                  <div key={c.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: c.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "1.1rem",
                      }}
                      aria-hidden
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#000", marginBottom: 4 }}>{c.title}</p>
                      {c.lines.map((line) => (
                        <p key={line} style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ background: "var(--color-bg-cream)", borderRadius: 20, padding: "36px 32px" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "#000", marginBottom: 6 }}>
                Start Learning Journey
              </h3>
              <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: 24, lineHeight: 1.6 }}>
                Fill out the form with your child&apos;s details so we can understand their needs and support their
                early learning growth.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
