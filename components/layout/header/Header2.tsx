import Banner from "@/components/common/Banner";
import MainSearchForm from "@/components/form/MainSearchForm";
import { type Banner as TBanner } from "@/libs/cms";

import LogoAndMenu from "./LogoAndMenu";
import TopBar from "./TopBar";

type Header2Props = {
  banner?: TBanner;
};

export default function Header2({ banner }: Header2Props) {
  return (
    <header className="border-brand-gray-3 border-b">
      <TopBar />
      <LogoAndMenu />
      {banner && (
        <div className="container mx-auto px-4 lg:px-20 xl:px-34">
          <Banner data={banner} />
        </div>
      )}
      <MainSearchForm />
    </header>
  );
}
