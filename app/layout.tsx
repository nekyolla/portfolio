import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Newsreader } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import Providers from "@/components/providers/Providers";
import { themeInitScript } from "@/components/providers/theme";
import { profile } from "@/data/profile";

// Fonts are downloaded at build time and self-hosted — visitors never hit Google's servers.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const title = `${profile.name} — ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.nickname}`,
  },
  description: profile.bio,
  applicationName: `${profile.nickname} Portfolio`,
  keywords: [
    profile.name,
    profile.nickname,
    "portfolio",
    "informatics engineering",
    "Universitas Airlangga",
    "machine learning",
    "data science",
    "artificial intelligence",
    "backend engineer",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${profile.nickname} Portfolio`,
    title,
    description: profile.bio,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.bio,
  },
  formatDetection: { email: false, telephone: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#131312" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      // data-theme is set by the inline script before React hydrates
      suppressHydrationWarning
      className={`${newsreader.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only rounded-full bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100]"
        >
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
