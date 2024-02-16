import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Q1E2 Recordings",
  description: "Good tunes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head> <link rel="icon" href="/favicon.png" sizes="any" /></head>
      <body className={inter.className}><Nav />{children}<Footer /></body>
    </html>
  );
}
