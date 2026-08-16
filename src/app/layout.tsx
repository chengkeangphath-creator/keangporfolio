import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phath Chengkeang | IT Professional & Software Developer",
  description: "Explore the professional developer portfolio of Phath Chengkeang. Showcasing software engineering projects, technical skills, certificates, and academic achievements.",
  keywords: ["Software Developer", "IT Student", "Norton University", "Phath Chengkeang", "PHP", "Flutter Developer", "Oracle SQL Developer"],
  authors: [{ name: "Phath Chengkeang" }],
  openGraph: {
    title: "Phath Chengkeang | IT Professional & Software Developer",
    description: "Explore the professional developer portfolio of Phath Chengkeang. Showcasing software engineering projects, technical skills, certificates, and academic achievements.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand-primary/30 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
