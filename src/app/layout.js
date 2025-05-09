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
  title: "Huda Musallah",
  description:
    "Prayer timings and information for Huda Musallah, a masjid in Scarborough near Abu Bakr Masjid. Namaz place located on Prudential Drive.",
  keywords: [
    "Huda Musallah",
    "Scarborough masjid",
    "namaz timings",
    "Prudential Drive",
    "Abu Bakr Masjid",
    "Islamic prayer",
    "Musallah Scarborough",
  ],
  authors: [{ name: "Huda Musallah" }],
  creator: "Huda Musallah",
  publisher: "Huda Musallah",
  applicationName: "Huda Musallah Namaz Timings",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Huda Musallah - Scarborough Namaz Timings",
    description:
      "Find prayer times and information for Huda Musallah, located on Prudential Drive in Scarborough, near Abu Bakr Masjid.",
    url: "https://hudamusallah.com", // Replace with your actual domain
    siteName: "Huda Musallah",
    locale: "en_CA",
    type: "website",
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://hudamusallah.com"), // Replace with your actual domain
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ background: "#fff" }}
      >
        <Header />
        <main style={{ minHeight: "80vh", padding: "2rem 0" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
