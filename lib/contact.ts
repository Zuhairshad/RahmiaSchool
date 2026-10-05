// Shared by the contact form and the /api/contact route.
import { programs, programOrder } from "@/app/programs/[slug]/data";
import { RULES } from "@/lib/admission";

export const GENERAL_ENQUIRY = "General enquiry / Admissions";

export const CONTACT_PROGRAMS = [...programOrder.map((slug) => programs[slug].title), GENERAL_ENQUIRY];

export const CONTACT_LIMITS = { name: 60, phone: 16, email: 100, message: 2000 };

export type ContactFields = {
  name: string;
  phone: string;
  email: string;
  program: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function matches(rule: { pattern: string }, value: string) {
  return new RegExp(`^(?:${rule.pattern})$`, "v").test(value);
}

/** Returns a user-facing error message, or null when every field is valid. */
export function validateContact(f: ContactFields): string | null {
  if (!matches(RULES.name, f.name)) return "Please enter your name using letters only.";
  if (f.phone && !matches(RULES.phone, f.phone)) return "Please enter a valid Pakistani mobile number, e.g. 03001234567.";
  if (f.email.length > CONTACT_LIMITS.email || !EMAIL_RE.test(f.email)) return "Please enter a valid email address.";
  if (f.program && !CONTACT_PROGRAMS.includes(f.program)) return "Please select a program from the list.";
  if (!f.message) return "Please write a message.";
  if (f.message.length > CONTACT_LIMITS.message) return `Message must be under ${CONTACT_LIMITS.message} characters.`;
  return null;
}
