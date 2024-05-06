import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `AlphaTech Logics`,
  description: "A data consultancy and software services company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
