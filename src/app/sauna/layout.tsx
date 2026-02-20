import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "バレルサウナ事業",
  description:
    "究極の「整う」を体感できるバレルサウナ。大阪・関西でバレルサウナの設計・施工・販売を行っています。自宅で本格サウナを楽しめる、世界にひとつのオンリーワンサウナをご提供。",
  openGraph: {
    title: "バレルサウナ事業 | 夢中とは夢の中",
    description: "究極の「整う」を体感できるバレルサウナ。大阪・関西で設計・施工・販売。",
    url: "https://www.mukuzai-life.com/sauna",
  },
};

export default function SaunaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
