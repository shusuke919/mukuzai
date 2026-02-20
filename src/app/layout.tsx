import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "aos/dist/aos.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "夢中とは夢の中 | コンテナハウス・バレルサウナ",
    template: "%s | 夢中とは夢の中",
  },
  description:
    "大阪・関西でコンテナハウス・バレルサウナの設計・施工を行う「夢中とは夢の中」。快適な空間と笑顔を届けるコンテナハウス設計、究極の「整う」を体感できるバレルサウナ事業を展開。",
  keywords: ["コンテナハウス", "バレルサウナ", "大阪", "関西", "サウナ", "設計", "施工"],
  authors: [{ name: "夢中とは夢の中" }],
  openGraph: {
    title: "夢中とは夢の中 | コンテナハウス・バレルサウナ",
    description: "大阪・関西でコンテナハウス・バレルサウナの設計・施工を行う「夢中とは夢の中」",
    url: "https://www.mukuzai-life.com",
    siteName: "夢中とは夢の中",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "夢中とは夢の中 | コンテナハウス・バレルサウナ",
    description: "大阪・関西でコンテナハウス・バレルサウナの設計・施工",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.mukuzai-life.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
