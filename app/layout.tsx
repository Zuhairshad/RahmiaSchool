import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Nunito_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fragment-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "RAHMA Model School", template: "%s | RAHMA Model School" },
  description:
    "RAHMA Model School provides quality education with strong moral values and character development to prepare students for a successful future. Located in Bagga Sheikhan, Near Rawat, Rawalpindi, Pakistan.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${fragmentMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
