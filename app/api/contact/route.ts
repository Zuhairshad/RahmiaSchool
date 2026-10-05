import { Resend } from "resend";
import { NextResponse } from "next/server";
import { validateContact, type ContactFields } from "@/lib/contact";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string, last = false) {
  const border = last ? "" : " border-bottom: 1px solid #eee;";
  return `
            <tr>
              <td style="padding: 10px 0;${border} font-weight: 600; color: #444; width: 140px; vertical-align: top;">${label}</td>
              <td dir="auto" style="padding: 10px 0;${border} color: #000; white-space: pre-wrap;">${value ? escapeHtml(value) : "—"}</td>
            </tr>`;
}

export async function POST(req: Request) {
  // Enquiries go to the same inbox as admissions unless CONTACT_TO_EMAIL is set.
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.ADMISSION_TO_EMAIL || "";
  const FROM_EMAIL = process.env.ADMISSION_FROM_EMAIL || "RAHMA Website <onboarding@resend.dev>";
  try {
    const body = await req.json().catch(() => null);
    const field = (name: keyof ContactFields) => {
      const value = body?.[name];
      return typeof value === "string" ? value.trim() : "";
    };

    const f: ContactFields = {
      name: field("name"),
      phone: field("phone"),
      email: field("email"),
      program: field("program"),
      message: field("message"),
    };

    const invalid = validateContact(f);
    if (invalid) {
      return NextResponse.json({ error: invalid }, { status: 400 });
    }

    // Instantiated per request so a missing key doesn't break the build.
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: f.email,
      subject: `New Website Enquiry – ${f.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #000; margin-bottom: 4px;">New Website Enquiry</h2>
          <p style="color: #888; font-size: 14px; margin-bottom: 28px;">Sent from the contact form on the RAHMA Model School website.</p>

          <table style="width: 100%; border-collapse: collapse;">
            ${row("Name", f.name)}
            ${row("Phone", f.phone)}
            ${row("Email", f.email)}
            ${row("Program", f.program)}
            ${row("Message", f.message, true)}
          </table>

          <p style="margin-top: 28px; font-size: 13px; color: #aaa;">
            Reply to this email to contact ${escapeHtml(f.name)} directly at ${escapeHtml(f.email)}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Email send error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
