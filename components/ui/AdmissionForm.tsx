"use client";

import { useState, useRef, type CSSProperties } from "react";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import {
  ADMISSION_PROGRAMS,
  GENDERS,
  LIMITS,
  MAX_AGE,
  MAX_PHOTO_BYTES,
  MIN_AGE,
  PHOTO_SIZE_ERROR,
  PHOTO_TYPE_ERROR,
  PHOTO_TYPES,
  RULES,
} from "@/lib/admission";

const nastaliq = Noto_Nastaliq_Urdu({ subsets: ["arabic"], weight: ["400", "600"], display: "swap" });

const GENDER_URDU: Record<string, string> = { Male: "لڑکا", Female: "لڑکی" };

const fieldStyle: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #e0e0e0",
  borderRadius: 10,
  fontSize: "0.875rem",
  background: "#fff",
  outline: "none",
  fontFamily: "var(--font-body)",
  color: "#000",
};

const selectStyle: CSSProperties = { ...fieldStyle, appearance: "none" };

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "#444",
  marginBottom: 6,
};

/** English label with its Urdu translation alongside, for parents more comfortable in Urdu. */
function Label({ htmlFor, en, ur }: { htmlFor: string; en: string; ur: string }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{ ...labelStyle, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}
    >
      <span>{en}</span>
      <span
        lang="ur"
        dir="rtl"
        className={nastaliq.className}
        style={{ fontWeight: 600, fontSize: "0.8rem", color: "#555", lineHeight: 1.9, textAlign: "right" }}
      >
        {ur}
      </span>
    </label>
  );
}

const hintStyle: CSSProperties = { fontSize: "0.75rem", color: "#888", margin: "6px 0 0" };

export default function AdmissionForm({ defaultProgram = "" }: { defaultProgram?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [childName, setChildName] = useState("");
  const [hasSibling, setHasSibling] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function fail(message: string) {
    setErrorMsg(message);
    setStatus("error");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const photo = fd.get("photo");
    if (photo instanceof File && photo.size > 0) {
      if (!PHOTO_TYPES.includes(photo.type)) return fail(PHOTO_TYPE_ERROR);
      if (photo.size > MAX_PHOTO_BYTES) return fail(PHOTO_SIZE_ERROR);
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        body: fd,
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => null);
        fail(data?.error ?? "");
      }
    } catch {
      fail("");
    }
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "24px 8px" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "var(--color-brand-teal)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontSize: "1.6rem",
          }}
          aria-hidden
        >
          ✓
        </div>
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "#000", marginBottom: 8 }}>
          Application received{childName ? ` for ${childName}` : ""}!
        </h3>
        <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Thank you for applying to RAHMA Model School. Our admissions team will contact you within two business days to schedule a parent meeting.
        </p>
        <p
          lang="ur"
          dir="rtl"
          className={nastaliq.className}
          style={{ color: "var(--color-body-text)", fontSize: "0.85rem", lineHeight: 2.2, marginTop: 8 }}
        >
          رحمہ ماڈل اسکول میں درخواست دینے کا شکریہ۔ ہماری داخلہ ٹیم دو کاروباری دنوں میں والدین سے ملاقات کے لیے آپ سے رابطہ کرے گی۔
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setChildName("");
            setHasSibling("");
            formRef.current?.reset();
          }}
          style={{
            marginTop: 20,
            background: "transparent",
            border: "1px solid #d5d5d5",
            color: "#000",
            fontWeight: 600,
            padding: "10px 22px",
            borderRadius: 100,
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          Submit another application / نئی درخواست
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <p
        lang="ur"
        dir="rtl"
        className={nastaliq.className}
        style={{
          margin: 0,
          padding: "10px 14px",
          background: "var(--color-tint-green)",
          borderRadius: 10,
          fontSize: "0.85rem",
          lineHeight: 2,
          color: "#333",
        }}
      >
        آپ یہ فارم اردو یا انگریزی میں پُر کر سکتے ہیں۔ فون نمبر، شناختی کارڈ نمبر اور عمر انگریزی ہندسوں میں لکھیں، مثلاً 03001234567۔
      </p>
      <div className="admission-form-grid">
        <div>
          <Label htmlFor="admission-guardian" en="Parent / Guardian Name" ur="سرپرست کا نام" />
          <input
            id="admission-guardian"
            dir="auto"
            name="guardian"
            required
            maxLength={60}
            pattern={RULES.name.pattern}
            title={RULES.name.title}
            autoComplete="name"
            placeholder="Muhammad Ahmed"
            style={fieldStyle}
          />
        </div>
        <div>
          <Label htmlFor="admission-cnic" en="Guardian CNIC" ur="سرپرست کا شناختی کارڈ نمبر" />
          <input
            id="admission-cnic"
            name="guardianCnic"
            required
            maxLength={15}
            pattern={RULES.cnic.pattern}
            title={RULES.cnic.title}
            inputMode="numeric"
            placeholder="XXXXX-XXXXXXX-X"
            style={fieldStyle}
          />
        </div>
      </div>

      <div className="admission-form-grid">
        <div>
          <Label htmlFor="admission-child" en="Child's Name" ur="بچے کا نام" />
          <input
            id="admission-child"
            dir="auto"
            name="childName"
            required
            maxLength={60}
            pattern={RULES.name.pattern}
            title={RULES.name.title}
            placeholder="Child's full name"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            style={fieldStyle}
          />
        </div>
        <div>
          <Label htmlFor="admission-gender" en="Gender" ur="جنس" />
          <select id="admission-gender" name="gender" required defaultValue="" style={selectStyle}>
            <option value="" disabled>
              Select gender / جنس منتخب کریں
            </option>
            {GENDERS.map((g) => (
              <option key={g} value={g}>
                {g} / {GENDER_URDU[g]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="admission-form-grid">
        <div>
          <Label htmlFor="admission-age" en="Child's Age (years)" ur="بچے کی عمر (سال)" />
          <input
            id="admission-age"
            name="childAge"
            type="number"
            required
            min={MIN_AGE}
            max={MAX_AGE}
            step={1}
            placeholder="e.g. 5"
            style={fieldStyle}
          />
        </div>
        <div>
          <Label htmlFor="admission-phone" en="Phone Number" ur="فون نمبر" />
          <input
            id="admission-phone"
            name="phone"
            type="tel"
            required
            maxLength={16}
            pattern={RULES.phone.pattern}
            title={RULES.phone.title}
            autoComplete="tel"
            placeholder="+92 3XX XXXXXXX"
            style={fieldStyle}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="admission-email" en="Email Address" ur="ای میل ایڈریس" />
        <input
          id="admission-email"
          name="email"
          type="email"
          required
          maxLength={LIMITS.email}
          autoComplete="email"
          placeholder="muhammadahmed@gmail.com"
          style={fieldStyle}
        />
      </div>

      <div>
        <Label htmlFor="admission-address" en="Residential Address" ur="رہائشی پتہ" />
        <input
          id="admission-address"
          dir="auto"
          name="address"
          required
          minLength={LIMITS.address.min}
          maxLength={LIMITS.address.max}
          autoComplete="street-address"
          placeholder="House, street, area, city"
          style={fieldStyle}
        />
      </div>

      <div className="admission-form-grid">
        <div>
          <Label htmlFor="admission-prev-school" en="Previous School / Class" ur="سابقہ اسکول / کلاس" />
          <input
            id="admission-prev-school"
            dir="auto"
            name="previousSchool"
            maxLength={LIMITS.previousSchool}
            placeholder="e.g. ABC School, Class 2"
            style={fieldStyle}
          />
        </div>
        <div>
          <Label htmlFor="admission-income" en="Monthly Income (PKR)" ur="ماہانہ آمدنی (روپے)" />
          <input
            id="admission-income"
            name="monthlyIncome"
            maxLength={12}
            pattern={RULES.income.pattern}
            title={RULES.income.title}
            inputMode="numeric"
            placeholder="e.g. 40000"
            style={fieldStyle}
          />
        </div>
      </div>

      <div className="admission-form-grid">
        <div>
          <Label htmlFor="admission-sibling" en="Any sibling already enrolled?" ur="کیا کوئی بہن بھائی پہلے سے داخل ہے؟" />
          <select
            id="admission-sibling"
            name="hasSibling"
            required
            value={hasSibling}
            onChange={(e) => setHasSibling(e.target.value)}
            style={selectStyle}
          >
            <option value="" disabled>
              Select / منتخب کریں
            </option>
            <option value="Yes">Yes / ہاں</option>
            <option value="No">No / نہیں</option>
          </select>
        </div>
        {hasSibling === "Yes" && (
          <div>
            <Label htmlFor="admission-sibling-details" en="Sibling Name / Class" ur="بہن بھائی کا نام / کلاس" />
            <input
              id="admission-sibling-details"
            dir="auto"
              name="siblingDetails"
              required
              minLength={LIMITS.siblingDetails.min}
              maxLength={LIMITS.siblingDetails.max}
              placeholder="e.g. Ali Ahmed, Class 4"
              style={fieldStyle}
            />
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="admission-photo" en="B-Form or Passport Size Picture" ur="ب فارم یا پاسپورٹ سائز تصویر" />
        <input
          id="admission-photo"
          name="photo"
          type="file"
          accept={PHOTO_TYPES.join(",")}
          style={{ ...fieldStyle, padding: "10px 14px" }}
        />
        <p style={hintStyle}>
          JPG, PNG or PDF, up to 4 MB.{" "}
          <span lang="ur" dir="rtl" className={nastaliq.className}>
            زیادہ سے زیادہ سائز چار ایم بی
          </span>
        </p>
      </div>

      <div>
        <Label htmlFor="admission-program" en="Program of Interest" ur="مطلوبہ پروگرام" />
        <select id="admission-program" name="program" required defaultValue={defaultProgram} style={selectStyle}>
          <option value="" disabled>
            Select a Program / پروگرام منتخب کریں
          </option>
          {ADMISSION_PROGRAMS.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="admission-notes" en="Additional Information" ur="اضافی معلومات" />
        <textarea
          id="admission-notes"
          dir="auto"
          name="notes"
          maxLength={LIMITS.notes}
          placeholder="Any special needs, questions, or notes about your child..."
          rows={4}
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </div>

      {status === "error" && (
        <p style={{ color: "#e53e3e", fontSize: "0.85rem", margin: 0, whiteSpace: "pre-line" }}>
          {errorMsg || "Something went wrong. Please try again or call us directly. / کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں یا ہمیں کال کریں۔"}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: status === "loading" ? "#a0e8d8" : "var(--color-brand-teal)",
          color: "#000",
          fontWeight: 700,
          padding: "14px 32px",
          borderRadius: 100,
          fontSize: "0.95rem",
          border: "none",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          alignSelf: "flex-start",
          fontFamily: "var(--font-body)",
          transition: "background 0.2s",
        }}
      >
        {status === "loading" ? "Sending… / بھیجا جا رہا ہے" : "Submit Application / درخواست جمع کریں"}
      </button>
    </form>
  );
}
