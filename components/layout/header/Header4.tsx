import { type Session } from "next-auth";

import Banner from "@/components/common/Banner";
import { type Banner as TBanner } from "@/libs/cms";

import Header4Tabs from "./Header4Tabs";
import LogoAndMenu from "./LogoAndMenu";
import SearchMain from "./SearchMain";
import TopBar from "./TopBar";

type Header2Props = {
  banner?: TBanner;
  session: Session | null;
};

export default function Header4({ banner, session }: Header2Props) {
  return (
    <header className="border-brand-gray-3 border-b">
      <TopBar user={session?.user} />
      <LogoAndMenu />
      {banner && (
        <div className="container mx-auto px-4 lg:px-20 xl:px-34">
          <Banner data={banner} />
        </div>
      )}
      <SearchMain />
      <Header4Tabs />
    </header>
  );
}
