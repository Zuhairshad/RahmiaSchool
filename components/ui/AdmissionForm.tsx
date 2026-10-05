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
import { filterAmount, filterCnic, filterDigits, filterName, filterPhone, filterSchool } from "@/lib/input-filters";
import { useFieldErrors } from "./useFieldErrors";

const nastaliq = Noto_Nastaliq_Urdu({ subsets: ["arabic"], weight: ["400", "600"], display: "swap" });

// Whole numbers from MIN_AGE (2) to MAX_AGE (18).
const AGE_PATTERN = "[2-9]|1[0-8]";

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

const FIELD_MESSAGES: Record<string, string> = {
  guardian: "Letters only, in English or Urdu (no numbers or symbols).\nصرف حروف لکھیں، ہندسے یا علامات نہیں۔",
  guardianCnic: "Enter the 13-digit CNIC, e.g. 37405-1234567-1.\n13 ہندسوں کا شناختی کارڈ نمبر لکھیں۔",
  childName: "Letters only, in English or Urdu (no numbers or symbols).\nصرف حروف لکھیں، ہندسے یا علامات نہیں۔",
  gender: "Please select the child's gender.\nبراہ کرم بچے کی جنس منتخب کریں۔",
  childAge: `Age must be a whole number from ${MIN_AGE} to ${MAX_AGE}.\nعمر ${MIN_AGE} سے ${MAX_AGE} سال کے درمیان لکھیں۔`,
  phone: "Enter a Pakistani mobile number, e.g. 03001234567 or +92 300 1234567.\nدرست موبائل نمبر لکھیں، مثلاً 03001234567۔",
  email: "Enter a valid email address, e.g. name@gmail.com.\nدرست ای میل ایڈریس لکھیں۔",
  address: "Enter your full address (at least 10 characters, including area and city).\nمکمل پتہ لکھیں (کم از کم 10 حروف)۔",
  previousSchool: "Enter the school's name and class, e.g. ABC School, Class 2 (not just a number).\nاسکول کا نام اور کلاس لکھیں، صرف ہندسے نہیں۔",
  monthlyIncome: "Digits only, e.g. 40000.\nصرف ہندسے لکھیں، مثلاً 40000۔",
  hasSibling: "Please choose Yes or No.\nبراہ کرم ہاں یا نہیں منتخب کریں۔",
  siblingDetails: "Enter the sibling's name and class, e.g. Ali Ahmed, Class 4.\nبہن بھائی کا نام اور کلاس لکھیں۔",
  program: "Please select a program.\nبراہ کرم پروگرام منتخب کریں۔",
};

const hintStyle: CSSProperties = { fontSize: "0.75rem", color: "#888", margin: "6px 0 0" };

export default function AdmissionForm({ defaultProgram = "" }: { defaultProgram?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [childName, setChildName] = useState("");
  const [hasSibling, setHasSibling] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const { field, errorFor, borderFor, validateAll, reset } = useFieldErrors(FIELD_MESSAGES);

  function fail(message: string) {
    setErrorMsg(message);
    setStatus("error");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    if (!validateAll(e.currentTarget)) return;

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
            reset();
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
    <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
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
            {...field("guardian", filterName)}
            required
            maxLength={60}
            pattern={RULES.name.pattern}
            title={RULES.name.title}
            autoComplete="name"
            placeholder="Muhammad Ahmed"
            style={{ ...fieldStyle, ...borderFor("guardian") }}
          />
          {errorFor("guardian")}
        </div>
        <div>
          <Label htmlFor="admission-cnic" en="Guardian CNIC" ur="سرپرست کا شناختی کارڈ نمبر" />
          <input
            id="admission-cnic"
            {...field("guardianCnic", filterCnic)}
            required
            maxLength={15}
            pattern={RULES.cnic.pattern}
            title={RULES.cnic.title}
            inputMode="numeric"
            placeholder="XXXXX-XXXXXXX-X"
            style={{ ...fieldStyle, ...borderFor("guardianCnic") }}
          />
          {errorFor("guardianCnic")}
        </div>
      </div>

      <div className="admission-form-grid">
        <div>
          <Label htmlFor="admission-child" en="Child's Name" ur="بچے کا نام" />
          <input
            id="admission-child"
            dir="auto"
            {...field("childName")}
            required
            maxLength={60}
            pattern={RULES.name.pattern}
            title={RULES.name.title}
            placeholder="Child's full name"
            value={childName}
            onChange={(e) => setChildName(filterName(e.target.value))}
            style={{ ...fieldStyle, ...borderFor("childName") }}
          />
          {errorFor("childName")}
        </div>
        <div>
          <Label htmlFor="admission-gender" en="Gender" ur="جنس" />
          <select id="admission-gender" {...field("gender")} required defaultValue="" style={{ ...selectStyle, ...borderFor("gender") }}>
            <option value="" disabled>
              Select gender / جنس منتخب کریں
            </option>
            {GENDERS.map((g) => (
              <option key={g} value={g}>
                {g} / {GENDER_URDU[g]}
              </option>
            ))}
          </select>
          {errorFor("gender")}
        </div>
      </div>

      <div className="admission-form-grid">
        <div>
          <Label htmlFor="admission-age" en="Child's Age (years)" ur="بچے کی عمر (سال)" />
          <input
            id="admission-age"
            {...field("childAge", filterDigits)}
            required
            inputMode="numeric"
            maxLength={2}
            pattern={AGE_PATTERN}
            placeholder="e.g. 5"
            style={{ ...fieldStyle, ...borderFor("childAge") }}
          />
          {errorFor("childAge")}
        </div>
        <div>
          <Label htmlFor="admission-phone" en="Phone Number" ur="فون نمبر" />
          <input
            id="admission-phone"
            {...field("phone", filterPhone)}
            type="tel"
            required
            maxLength={16}
            pattern={RULES.phone.pattern}
            title={RULES.phone.title}
            autoComplete="tel"
            placeholder="+92 3XX XXXXXXX"
            style={{ ...fieldStyle, ...borderFor("phone") }}
          />
          {errorFor("phone")}
        </div>
      </div>

      <div>
        <Label htmlFor="admission-email" en="Email Address" ur="ای میل ایڈریس" />
        <input
          id="admission-email"
          {...field("email")}
          type="email"
          required
          maxLength={LIMITS.email}
          pattern={RULES.email.pattern}
          autoComplete="email"
          placeholder="muhammadahmed@gmail.com"
          style={{ ...fieldStyle, ...borderFor("email") }}
        />
        {errorFor("email")}
      </div>

      <div>
        <Label htmlFor="admission-address" en="Residential Address" ur="رہائشی پتہ" />
        <input
          id="admission-address"
          dir="auto"
          {...field("address")}
          required
          minLength={LIMITS.address.min}
          maxLength={LIMITS.address.max}
          pattern={RULES.address.pattern}
          autoComplete="street-address"
          placeholder="House, street, area, city"
          style={{ ...fieldStyle, ...borderFor("address") }}
        />
        {errorFor("address")}
      </div>

      <div className="admission-form-grid">
        <div>
          <Label htmlFor="admission-prev-school" en="Previous School / Class" ur="سابقہ اسکول / کلاس" />
          <input
            id="admission-prev-school"
            dir="auto"
            {...field("previousSchool", filterSchool)}
            maxLength={LIMITS.previousSchool}
            pattern={RULES.school.pattern}
            placeholder="e.g. ABC School, Class 2"
            style={{ ...fieldStyle, ...borderFor("previousSchool") }}
          />
          {errorFor("previousSchool")}
        </div>
        <div>
          <Label htmlFor="admission-income" en="Monthly Income (PKR)" ur="ماہانہ آمدنی (روپے)" />
          <input
            id="admission-income"
            {...field("monthlyIncome", filterAmount)}
            maxLength={12}
            pattern={RULES.income.pattern}
            title={RULES.income.title}
            inputMode="numeric"
            placeholder="e.g. 40000"
            style={{ ...fieldStyle, ...borderFor("monthlyIncome") }}
          />
          {errorFor("monthlyIncome")}
        </div>
      </div>

      <div className="admission-form-grid">
        <div>
          <Label htmlFor="admission-sibling" en="Any sibling already enrolled?" ur="کیا کوئی بہن بھائی پہلے سے داخل ہے؟" />
          <select
            id="admission-sibling"
            {...field("hasSibling")}
            required
            value={hasSibling}
            onChange={(e) => setHasSibling(e.target.value)}
            style={{ ...selectStyle, ...borderFor("hasSibling") }}
          >
            <option value="" disabled>
              Select / منتخب کریں
            </option>
            <option value="Yes">Yes / ہاں</option>
            <option value="No">No / نہیں</option>
          </select>
          {errorFor("hasSibling")}
        </div>
        {hasSibling === "Yes" && (
          <div>
            <Label htmlFor="admission-sibling-details" en="Sibling Name / Class" ur="بہن بھائی کا نام / کلاس" />
            <input
              id="admission-sibling-details"
              dir="auto"
              {...field("siblingDetails", filterSchool)}
              required
              minLength={LIMITS.siblingDetails.min}
              maxLength={LIMITS.siblingDetails.max}
              pattern={RULES.school.pattern}
              placeholder="e.g. Ali Ahmed, Class 4"
              style={{ ...fieldStyle, ...borderFor("siblingDetails") }}
            />
            {errorFor("siblingDetails")}
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
        <select id="admission-program" {...field("program")} required defaultValue={defaultProgram} style={{ ...selectStyle, ...borderFor("program") }}>
          <option value="" disabled>
            Select a Program / پروگرام منتخب کریں
          </option>
          {ADMISSION_PROGRAMS.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        {errorFor("program")}
      </div>

      <div>
        <Label htmlFor="admission-notes" en="Additional Information" ur="اضافی معلومات" />
        <textarea
          id="admission-notes"
          dir="auto"
          {...field("notes")}
          maxLength={LIMITS.notes}
          placeholder="Any special needs, questions, or notes about your child..."
          rows={4}
          style={{ ...fieldStyle, resize: "vertical", ...borderFor("notes") }}
        />
        {errorFor("notes")}
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
