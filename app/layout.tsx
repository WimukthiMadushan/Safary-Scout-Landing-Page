import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClickEffect from "./../components/ClickEffect"
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
  title: "Safary Scout",
  description: "Safary Scout is a tool to help you find and explore Safari extensions.",
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
        <ClickEffect />
        {children}
      </body>
    </html>
  );
}
