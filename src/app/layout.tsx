import type { Metadata } from "next";
import { Rajdhani, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import ChatBot from "@/components/ChatBot";
import { site } from "@/lib/site";

const rajdhani = Rajdhani({
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.pageMeta.home.title,
  description: site.pageMeta.home.description,
  keywords: site.pageMeta.home.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <ChatBot />
      </body>
    </html>
  );
}
