import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const komikaAxis = localFont({
  src: "../fonts/KOMIKAX_.ttf",
  variable: "--font-komika-axis",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://otaku-hub-apex.vercel.app"),
  applicationName: "Otaku Hub",
  title: {
    default: "Otaku Hub | Mangas et éditions collectors",
    template: "%s | Otaku Hub",
  },
  description:
    "Explorez Otaku Hub, la boutique en ligne dédiée aux mangas et éditions collectors. Parcourez le catalogue, découvrez vos prochaines lectures et gérez votre panier.",
  keywords: [
    "Otaku Hub",
    "manga",
    "boutique manga",
    "mangas en ligne",
    "éditions collectors",
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Otaku Hub",
    title: "Otaku Hub — Mangas et éditions collectors",
    description:
      "Explorez le catalogue Otaku Hub : mangas, éditions collectors et nouvelles lectures à découvrir.",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "Logo Otaku Hub",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Otaku Hub — Mangas et éditions collectors",
    description:
      "Explorez le catalogue Otaku Hub : mangas, éditions collectors et nouvelles lectures à découvrir.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${komikaAxis.variable} h-full antialiased`}
    >
      <body
        id="top"
        className="relative min-h-full flex flex-col bg-white dark:bg-black"
      >
        <div
          aria-hidden="true"
          className="page-bg pointer-events-none absolute inset-x-0 top-0 h-[600px] -z-10"
        />

        <Menu />

        <main className="page-content flex flex-1 w-full flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
