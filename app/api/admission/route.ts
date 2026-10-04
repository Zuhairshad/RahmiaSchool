import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import {
  MAX_PHOTO_BYTES,
  PHOTO_SIZE_ERROR,
  PHOTO_TYPE_ERROR,
  PHOTO_TYPES,
  validateAdmission,
  type AdmissionFields,
} from "@/lib/admission";
import { buildAdmissionPdf, type Upload } from "@/lib/admission-pdf";

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
              <td style="padding: 10px 0;${border} font-weight: 600; color: #444; width: 160px; vertical-align: top;">${label}</td>
              <td dir="auto" style="padding: 10px 0;${border} color: #000;">${value ? escapeHtml(value) : "—"}</td>
            </tr>`;
}

function safeFilename(value: string) {
  return value.replace(/[^A-Za-z0-9 ._-]/g, "").trim() || "applicant";
}

export async function POST(req: Request) {
  const GMAIL_USER = process.env.GMAIL_USER ?? "";
  const TO_EMAIL = process.env.ADMISSION_TO_EMAIL || GMAIL_USER;
  try {
    const fd = await req.formData();
    const field = (name: string) => {
      const value = fd.get(name);
      return typeof value === "string" ? value.trim() : "";
    };

    const f: AdmissionFields = {
      guardian: field("guardian"),
      guardianCnic: field("guardianCnic"),
      childName: field("childName"),
      gender: field("gender"),
      childAge: field("childAge"),
      phone: field("phone"),
      email: field("email"),
      address: field("address"),
      previousSchool: field("previousSchool"),
      monthlyIncome: field("monthlyIncome"),
      hasSibling: field("hasSibling"),
      siblingDetails: field("siblingDetails"),
      program: field("program"),
      notes: field("notes"),
    };

    const invalid = validateAdmission(f);
    if (invalid) {
      return NextResponse.json({ error: invalid }, { status: 400 });
    }

    let upload: Upload | null = null;
    const photo = fd.get("photo");
    if (photo instanceof File && photo.size > 0) {
      if (!PHOTO_TYPES.includes(photo.type)) {
        return NextResponse.json({ error: PHOTO_TYPE_ERROR }, { status: 400 });
      }
      if (photo.size > MAX_PHOTO_BYTES) {
        return NextResponse.json({ error: PHOTO_SIZE_ERROR }, { status: 413 });
      }
      upload = {
        name: photo.name || "b-form-or-photo",
        type: photo.type,
        bytes: new Uint8Array(await photo.arrayBuffer()),
      };
    }

    const submittedAt = new Date();
    const pdf = await buildAdmissionPdf(f, upload, submittedAt);
    const datePart = submittedAt.toLocaleDateString("en-CA", {
      timeZone: "Asia/Karachi",
    });

    const attachments = [
      {
        filename: `Admission - ${safeFilename(f.childName)} - ${datePart}.pdf`,
        content: Buffer.from(pdf.bytes),
      },
    ];
    if (upload && !pdf.mergedUpload) {
      attachments.push({
        filename: upload.name,
        content: Buffer.from(upload.bytes),
      });
    }

    // Sent through Gmail SMTP using a Google App Password (not the account password).
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });

    try {
      await transporter.sendMail({
        from: `"RAHMA Admissions" <${GMAIL_USER}>`,
        to: TO_EMAIL,
        replyTo: f.email,
        subject: `New Admission Application – ${f.childName}`,
        attachments,
        html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #000; margin-bottom: 4px;">New Admission Application</h2>
          <p style="color: #888; font-size: 14px; margin-bottom: 28px;">Received via RAHMA Model School website. The full application is attached as a PDF.</p>

          <table style="width: 100%; border-collapse: collapse;">
            ${row("Parent / Guardian", f.guardian)}
            ${row("Guardian CNIC", f.guardianCnic)}
            ${row("Child's Name", f.childName)}
            ${row("Gender", f.gender)}
            ${row("Child's Age", f.childAge)}
            ${row("Phone", f.phone)}
            ${row("Email", f.email)}
            ${row("Residential Address", f.address)}
            ${row("Previous School / Class", f.previousSchool)}
            ${row("Monthly Income", f.monthlyIncome)}
            ${row("Sibling Enrolled", f.hasSibling)}
            ${f.hasSibling === "Yes" ? row("Sibling Name / Class", f.siblingDetails) : ""}
            ${row("Program", f.program)}
            ${row("B-Form / Picture", upload ? (pdf.mergedUpload ? "Included in PDF" : "Attached separately") : "")}
            ${row("Notes", f.notes, true)}
          </table>

          <p style="margin-top: 28px; font-size: 13px; color: #aaa;">
            Reply to this email to contact ${escapeHtml(f.guardian)} directly at ${escapeHtml(f.email)}.
          </p>
        </div>
      `,
      });
    } catch (error) {
      console.error("Email send error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
