import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altaf Hafizun — Full-Stack Developer",
  description: "Altaf Hafizun is a Full-Stack/Web Developer experienced in building scalable web applications using Laravel, Next.js, React, Vue, MySQL, and PostgreSQL.",
  openGraph: {
    title: "Altaf Hafizun — Full-Stack Developer",
    description: "Altaf Hafizun is a Full-Stack/Web Developer experienced in building scalable web applications using Laravel, Next.js, React, Vue, MySQL, and PostgreSQL.",
    url: "https://altaf22hafizun.vercel.app/",
    siteName: "Altaf Hafizun Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
