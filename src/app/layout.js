import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Masjid Huda | Prayer Times in Scarborough",
  description:
    "Prayer times and information for Masjid Huda in Scarborough, near the intersection of Lawrence Avenue East and Midland Avenue.",
  keywords: [
    "Masjid Huda",
    "Masjid Huda Scarborough",
    "Scarborough masjid",
    "Lawrence and Midland masjid",
    "Lawrence Avenue East mosque",
    "Midland Avenue mosque",
    "namaz timings",
    "Prudential Drive",
    "Islamic prayer",
    "mosque Scarborough",
  ],
  authors: [{ name: "Masjid Huda" }],
  creator: "Masjid Huda",
  publisher: "Masjid Huda",
  applicationName: "Masjid Huda Prayer Times",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico?v=2",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Masjid Huda | Scarborough Prayer Times",
    description:
      "Find prayer times and information for Masjid Huda in Scarborough, near Lawrence Avenue East and Midland Avenue.",
    url: "https://www.masjidhuda.com/",
    siteName: "Masjid Huda",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/masjid-huda-logo.jpeg",
        alt: "Masjid Huda logo",
      },
    ],
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.masjidhuda.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ background: "#fff" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Mosque",
              name: "Masjid Huda",
              url: "https://www.masjidhuda.com/",
              description:
                "Masjid Huda prayer times and information in Scarborough, near Lawrence Avenue East and Midland Avenue.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "411, 301 Prudential Drive",
                postalCode: "M1P 4V3",
                addressLocality: "Scarborough",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              areaServed: "Scarborough",
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
