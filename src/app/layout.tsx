import type { Metadata } from "next";
import { Inter } from "next/font/google"; // or your preferred font
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headless CMS",
  description: "Next.js + WordPress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1 container mx-auto py-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
