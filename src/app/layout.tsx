import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidenav from "@/components/Sidenav";
import Navbar from "@/components/Navbar";
// import Sidenav from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Sidenav />
        <Navbar />
        <main className="overflow-hidden ml-0 md:ml-48">{children}</main>
      </body>
    </html>
  );
}
