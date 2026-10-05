// Keystroke-level filters for form inputs: each strips characters the field can never
// contain, so wrong input is blocked while typing instead of only failing on submit.
// Urdu/Arabic-Indic digits are converted to English digits so parents can type either.

function toLatinDigits(value: string) {
  return value.replace(/[٠-٩۰-۹]/g, (d) => String((d.charCodeAt(0) & 0xf) % 10));
}

/** Letters in any script (so Urdu names work), spaces, dots, apostrophes and the Urdu ZWNJ. */
export function filterName(value: string) {
  return value.replace(/[^\p{L}\p{M} .'‌]/gu, "").replace(/^\s+/, "");
}

/** Digits, spaces and dashes, with an optional leading +. */
export function filterPhone(value: string) {
  return toLatinDigits(value)
    .replace(/[^\d+ -]/g, "")
    .replace(/(?!^)\+/g, "");
}

/** Digits only, auto-formatted as XXXXX-XXXXXXX-X. */
export function filterCnic(value: string) {
  const d = toLatinDigits(value).replace(/\D/g, "").slice(0, 13);
  if (d.length <= 5) return d;
  if (d.length <= 12) return `${d.slice(0, 5)}-${d.slice(5)}`;
  return `${d.slice(0, 5)}-${d.slice(5, 12)}-${d.slice(12)}`;
}

/** Digits only (age). */
export function filterDigits(value: string) {
  return toLatinDigits(value).replace(/\D/g, "");
}

/** Digits and thousands separators (income). */
export function filterAmount(value: string) {
  return toLatinDigits(value).replace(/[^\d,]/g, "");
}

/** Free text for school / class names: letters, digits and common punctuation, no symbols like @ $ %. */
export function filterSchool(value: string) {
  return toLatinDigits(value).replace(/[^\p{L}\p{M}\d .,'()/#&\u060C\u06D4\u200C-]/gu, "").replace(/^\s+/, "");
}
