import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.ADMISSION_TO_EMAIL!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { guardian, childName, childAge, phone, email, program, notes } = body;

    if (!guardian || !childName || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "RAHMA Admissions <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Admission Application – ${childName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #000; margin-bottom: 4px;">New Admission Application</h2>
          <p style="color: #888; font-size: 14px; margin-bottom: 28px;">Received via RAHMA Model School website</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #444; width: 160px;">Parent / Guardian</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #000;">${guardian}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #444;">Child's Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #000;">${childName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #444;">Child's Age</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #000;">${childAge || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #444;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #000;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #444;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #000;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #444;">Program</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #000;">${program || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; color: #444; vertical-align: top;">Notes</td>
              <td style="padding: 10px 0; color: #000;">${notes || "—"}</td>
            </tr>
          </table>

          <p style="margin-top: 28px; font-size: 13px; color: #aaa;">
            Reply to this email to contact ${guardian} directly at ${email}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
