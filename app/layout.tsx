import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nekyolla Portfolio",
  description:
    "Informatics engineering student at Universitas Airlangga, focused on Data Science, Machine Learning, and Artificial Intelligence. Building AI solutions with real, measurable impact for society.",
  keywords: [
    "portfolio",
    "informatics engineering",
    "developer",
    "full-stack",
    "machine learning",
    "next.js",
  ],
  authors: [{ name: "Nekyolla" }],
  openGraph: {
    title: "Nekyolla Portfolio",
    description:
      "Informatics engineering student at Universitas Airlangga, focused on Data Science, Machine Learning, and Artificial Intelligence. Building AI solutions with real, measurable impact for society.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#000000" }}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
