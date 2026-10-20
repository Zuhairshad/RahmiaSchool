// The site's page order, shared by the phone/tablet menu and the footer so the
// two always list the same pages in the same order. Change it here, not in
// either component.
export const MENU_LINKS: { href: string; label: string; donate?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#vision", label: "Our Vision" },
  // Non-breaking spaces keep "Sadqa e Jaria" together, so when the label wraps
  // (footer on phones) it breaks as "Assistance in / Sadqa e Jaria".
  { href: "/donate", label: "Assistance in Sadqa\u00a0e\u00a0Jaria", donate: true },
  { href: "/programs", label: "Programs" },
  { href: "/student-life", label: "Student Life" },
  { href: "/facilities", label: "Facilities" },
  { href: "/teachers", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Fee Structure" },
  { href: "/admission", label: "Admission" },
  { href: "/contact", label: "Contact" },
];

// Entries that open their sub-pages with a + (phone menu and footer).
// Change the sub-pages here and both update.
export const ABOUT_LINKS = [
  { href: "/about/management", label: "Management" },
  { href: "/about", label: "RMS" },
];

export const PROGRAM_LINKS = [
  { href: "/programs", label: "Academic Programs" },
  { href: "/programs/hifz-program", label: "Hifz Program" },
];

export const MENU_GROUPS: Record<string, { href: string; label: string }[]> = {
  "/about": ABOUT_LINKS,
  "/programs": PROGRAM_LINKS,
};
