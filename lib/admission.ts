// Shared by the admission form (HTML `pattern` attributes) and the API route
// (server-side re-validation). Patterns are written to be valid under the
// `v` regex flag, which is how browsers compile `pattern` attributes.

export const HIFZ_PROGRAM = "Hifz with Understanding (Grade 4 – 8)";

export const ADMISSION_PROGRAMS = [
  "Montessori Programme (Play Group, Nursery, Prep)",
  "Primary School (Class 1 – 5)",
  "Middle School (Class 6 – 7)",
  HIFZ_PROGRAM,
];

export const GENDERS = ["Male", "Female"];

export const MIN_AGE = 2;
export const MAX_AGE = 18;

export const MAX_PHOTO_BYTES = 4 * 1024 * 1024;
export const PHOTO_TYPES = ["image/jpeg", "image/png", "application/pdf"];
export const PHOTO_TYPE_ERROR = "The picture must be a JPG, PNG or PDF file.\nتصویر JPG، PNG یا PDF فائل ہونی چاہیے۔";
export const PHOTO_SIZE_ERROR = "The picture is too large. Please upload a file under 4 MB.\nتصویر بہت بڑی ہے۔ براہ کرم 4 MB سے چھوٹی فائل اپ لوڈ کریں۔";

export const RULES = {
  name: {
    // Letters in any script (so Urdu names work), plus spaces, dots, apostrophes and the
    // zero-width non-joiner Urdu keyboards insert. Digits are rejected.
    pattern: "[\\p{L}\\p{M}][\\p{L}\\p{M} .'\\u200C]{1,59}",
    title: "Letters only (2–60 characters), in English or Urdu / صرف حروف، اردو یا انگریزی میں",
  },
  phone: {
    pattern: "(\\+92 ?|0)3\\d{2}[ \\-]?\\d{7}",
    title: "Pakistani mobile number, e.g. +92 300 1234567 or 03001234567 / موبائل نمبر، مثلاً 03001234567",
  },
  cnic: {
    pattern: "\\d{5}-?\\d{7}-?\\d",
    title: "13-digit CNIC, e.g. 37405-1234567-1 / 13 ہندسوں کا شناختی کارڈ نمبر",
  },
  school: {
    // Must contain at least one letter, so a bare number like "123" is rejected.
    pattern: "(?=.*\\p{L})[\\p{L}\\p{M}\\d .,'\\(\\)\\/#&\\-\\u060C\\u06D4\\u200C]{2,100}",
    title: "School name and class, e.g. ABC School, Class 2 / اسکول کا نام اور کلاس",
  },
  address: {
    pattern: "(?=.*\\p{L})[\\s\\S]{10,200}",
    title: "Full address with house, street, area and city / مکمل پتہ",
  },
  email: {
    pattern: "[^\\s@]+@[^\\s@]+\\.[^\\s@]+",
    title: "Email address, e.g. name@gmail.com / ای میل ایڈریس",
  },
  income: {
    pattern: "\\d[\\d,]{0,11}",
    title: "Amount in rupees using digits only, e.g. 40000 / صرف ہندسے، مثلاً 40000",
  },
} as const;

export const LIMITS = {
  email: 100,
  address: { min: 10, max: 200 },
  previousSchool: 100,
  siblingDetails: { min: 3, max: 100 },
  notes: 1000,
};

/** English message with its Urdu translation on the next line. */
export function bilingual(en: string, ur: string) {
  return `${en}\n${ur}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function matches(rule: { pattern: string }, value: string) {
  return new RegExp(`^(?:${rule.pattern})$`, "v").test(value);
}

export type AdmissionFields = {
  guardian: string;
  guardianCnic: string;
  childName: string;
  gender: string;
  childAge: string;
  phone: string;
  email: string;
  address: string;
  previousSchool: string;
  monthlyIncome: string;
  hasSibling: string;
  siblingDetails: string;
  program: string;
  notes: string;
};

/** Returns a user-facing error message, or null when every field is valid. */
export function validateAdmission(f: AdmissionFields): string | null {
  if (!matches(RULES.name, f.guardian)) return bilingual("Please enter a valid parent / guardian name.", "براہ کرم سرپرست کا درست نام لکھیں۔");
  if (!matches(RULES.cnic, f.guardianCnic)) return bilingual("Please enter a valid 13-digit guardian CNIC.", "براہ کرم سرپرست کا 13 ہندسوں والا درست شناختی کارڈ نمبر لکھیں۔");
  if (!matches(RULES.name, f.childName)) return bilingual("Please enter a valid child's name.", "براہ کرم بچے کا درست نام لکھیں۔");
  if (!GENDERS.includes(f.gender)) return bilingual("Please select the child's gender.", "براہ کرم بچے کی جنس منتخب کریں۔");

  const age = Number(f.childAge);
  if (!Number.isInteger(age) || age < MIN_AGE || age > MAX_AGE) {
    return bilingual(`Child's age must be a whole number between ${MIN_AGE} and ${MAX_AGE}.`, `بچے کی عمر ${MIN_AGE} سے ${MAX_AGE} سال کے درمیان ہونی چاہیے۔`);
  }

  if (!matches(RULES.phone, f.phone)) return bilingual("Please enter a valid Pakistani mobile number.", "براہ کرم درست موبائل نمبر لکھیں۔");
  if (f.email.length > LIMITS.email || !EMAIL_RE.test(f.email)) return bilingual("Please enter a valid email address.", "براہ کرم درست ای میل ایڈریس لکھیں۔");

  if (!matches(RULES.address, f.address) || f.address.length > LIMITS.address.max) {
    return bilingual(`Residential address must be ${LIMITS.address.min}–${LIMITS.address.max} characters.`, `رہائشی پتہ ${LIMITS.address.min} سے ${LIMITS.address.max} حروف کا ہونا چاہیے۔`);
  }
  if (f.previousSchool && !matches(RULES.school, f.previousSchool)) {
    return bilingual("Please enter the previous school's name and class, e.g. ABC School, Class 2.", "براہ کرم سابقہ اسکول کا نام اور کلاس لکھیں، مثلاً ABC اسکول، کلاس 2۔");
  }
  if (f.monthlyIncome && !matches(RULES.income, f.monthlyIncome)) {
    return bilingual("Monthly income should contain digits only.", "ماہانہ آمدنی میں صرف ہندسے لکھیں۔");
  }

  if (f.hasSibling !== "Yes" && f.hasSibling !== "No") return bilingual("Please tell us if a sibling is already enrolled.", "براہ کرم بتائیں کہ کیا کوئی بہن بھائی پہلے سے داخل ہے۔");
  if (
    f.hasSibling === "Yes" &&
    (!matches(RULES.school, f.siblingDetails) || f.siblingDetails.length < LIMITS.siblingDetails.min || f.siblingDetails.length > LIMITS.siblingDetails.max)
  ) {
    return bilingual("Please enter the enrolled sibling's name and class.", "براہ کرم داخل بہن بھائی کا نام اور کلاس لکھیں۔");
  }

  if (!ADMISSION_PROGRAMS.includes(f.program)) return bilingual("Please select a program.", "براہ کرم پروگرام منتخب کریں۔");
  if (f.notes.length > LIMITS.notes) return bilingual(`Additional information must be under ${LIMITS.notes} characters.`, `اضافی معلومات ${LIMITS.notes} حروف سے کم ہونی چاہیے۔`);

  return null;
}
