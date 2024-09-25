import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import Navbar from "./components/Navbar"; // Import the Navbar component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Joker Discord Server",
  description: "Official website for the Joker Discord server.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar /> {/* Add the Navbar here */}
          <main className="flex-1">
            {children}
            <Analytics />
            <SpeedInsights />
          </main> {/* Ensure children take full height */}
        </div>
      </body>
    </html>
  );
}
