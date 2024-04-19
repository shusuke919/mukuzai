import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "aos/dist/aos.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "夢中とは夢の中",
  description:
    "夢中とは夢の中です。事業内容はコンテナハウス事業、バレルサウナ事業",
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
        <Footer />
      </body>
    </html>
  );
}
