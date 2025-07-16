import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BootCamp 1.0 | SkillGrid.ng",
  description:
    "Point them young to the right direction, we will teach your child to build real apps and games that work.",
  openGraph: {
    title: "BootCamp 1.0 | SkillGrid.ng",
    description:
      "Point them young to the right direction, we will teach your child to build real apps and games that work.",
    url: "https://skillgrid.ng",
    siteName: "SkillGrid.ng",
    images: [
      {
        url: "/assets/og-image.jpg",
        secureUrl: "https://skillgrid.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SkillGrid BootCamp 1.0",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BootCamp 1.0 | SkillGrid.ng",
    description:
      "Point them young to the right direction, we will teach your child to build real apps and games that work.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  keywords: [
    "SkillGrid",
    "BootCamp",
    "Kids Coding Bootcamp",
    "Learn to Code",
    "Tech Skills for Kids",
    "Coding for Children",
    "Programming Bootcamp",
    "Web Development for Kids",
    "Game Development for Kids",
    "Tech Education",
    "Digital Skills for Kids",
    "Empowering Young Coders",
    "Future Tech Leaders",
    "SkillGrid.ng",
  ],
  authors: [
    {
      name: "Tavershima Achir",
      url: "https://achirtavershima.com.ng",
    },
    {
      name: "David Nienge",
      url: "https://davidnienge.com.ng",
    },
  ],
  creator: "Tavershima Achir",
  themeColor: "#000000",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: "https://skillgrid.ng",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/atom.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
