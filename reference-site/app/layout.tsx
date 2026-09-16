import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: { default: "RAHMA Model School", template: "%s | RAHMA Model School" },
  description:
    "RAHMA Model School provides quality education with strong moral values and character development to prepare students for a successful future. Located in Bagga Sheikhan, Near Rawat, Rawalpindi, Pakistan.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
