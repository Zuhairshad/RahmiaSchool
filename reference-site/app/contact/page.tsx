import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

function WavyUnderline() {
  return (
    <svg viewBox="0 0 220 14" style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 14 }} preserveAspectRatio="none">
      <path d="M 4 10 Q 55 2 110 10 Q 165 18 216 10" fill="none" stroke="#FCB520" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* Hero */}
      <section style={{ position: "relative", minHeight: 280, background: "#1a1a1a", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg,#0d0d0d 60%,#1a2a18 100%)", opacity: 0.92 }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "80px 32px", width: "100%" }}>
          <p style={{ color: "#09D89A", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>✦ Contact</p>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
            Get in touch with us{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              today
              <svg viewBox="0 0 160 14" style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 14 }} preserveAspectRatio="none">
                <path d="M 4 10 Q 40 2 80 10 Q 120 18 156 10" fill="none" stroke="#FCB520" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#fff", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "flex-start" }}>

          {/* Left */}
          <div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2, marginBottom: 16 }}>
              Reach out to our<br />team{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                today
                <WavyUnderline />
              </span>
            </h2>
            <p style={{ color: "#575757", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 32 }}>
              Get in touch with our team for any questions, support, or detailed information about our programs and admission process.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#D7FDCF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.1rem" }}>📍</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#000", marginBottom: 4 }}>Address</p>
                  <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.6 }}>Bagga Sheikhan, Near Rawat<br />Rawalpindi, Pakistan</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#EBE1FD", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.1rem" }}>📞</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#000", marginBottom: 4 }}>Phone</p>
                  <p style={{ color: "#575757", fontSize: "0.875rem" }}>+92 331 5947506</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#FEEECE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.1rem" }}>✉️</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#000", marginBottom: 4 }}>Email</p>
                  <p style={{ color: "#575757", fontSize: "0.875rem" }}>adminrawat@rahmapk.org</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#D7FDCF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.1rem" }}>🕐</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#000", marginBottom: 4 }}>Office Hours</p>
                  <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.6 }}>Monday–Friday: 9:00 AM – 5:00 PM<br />Saturday–Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#FCFAED", borderRadius: 20, padding: "36px 32px" }}>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#000", marginBottom: 6 }}>Start Learning Journey</h3>
            <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: 24, lineHeight: 1.6 }}>
              Fill out the form with your child's details so we can understand their needs and support their early learning growth.
            </p>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Full name</label>
                  <input placeholder="John doe" style={{ width: "100%", padding: "11px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Phone number</label>
                  <input placeholder="+880 123 456 7890" style={{ width: "100%", padding: "11px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none" }} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Email address</label>
                  <input placeholder="john.doe@example.com" type="email" style={{ width: "100%", padding: "11px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Program of interest</label>
                  <select style={{ width: "100%", padding: "11px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none", appearance: "none" }}>
                    <option value="">Select your Program</option>
                    <option>Little Explorer Program</option>
                    <option>Creative Minds Program</option>
                    <option>Happy Learners Program</option>
                    <option>Smart Thinkers Program</option>
                    <option>Middle School Program</option>
                    <option>Bright Starters Program</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Message</label>
                <textarea placeholder="Enter your message..." rows={4} style={{ width: "100%", padding: "11px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none", resize: "vertical" }} />
              </div>
              <button type="submit" style={{ background: "#09D89A", color: "#000", fontWeight: 700, padding: "13px 28px", borderRadius: 100, fontSize: "0.9rem", border: "none", cursor: "pointer", alignSelf: "flex-start" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
