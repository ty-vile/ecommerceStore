// next
import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/fonts/fonts";
// components
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
