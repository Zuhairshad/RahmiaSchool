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
