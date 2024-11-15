import MainSearchForm from "@/components/form/MainSearchForm";
import { type Price } from "@/libs/cms";

import LogoAndMenu from "./LogoAndMenu";
import PriceList from "./PriceList";
import TopBar from "./TopBar";

type HeaderProps = {
  priceList: Price[];
};

export default function Header({ priceList }: HeaderProps) {
  return (
    <header className="border-brand-gray-3 overflow-hidden border-b">
      <TopBar />
      <LogoAndMenu />
      <PriceList priceList={priceList} />
      <MainSearchForm />
    </header>
  );
}
