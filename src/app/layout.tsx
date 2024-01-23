import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import Header from "@/compornet/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MukuJiro",
  description: "Generated by mukuzai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
