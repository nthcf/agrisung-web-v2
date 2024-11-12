import MainSearchForm from "@/components/form/MainSearchForm";
import { type Price } from "@/libs/cms";

import LogoAndMenu from "./LogoAndMenu";
import PriceTable from "./PriceTable";
import TopBar from "./TopBar";

type HeaderProps = {
  priceTable: Price[];
};

export default function Header({ priceTable }: HeaderProps) {
  return (
    <header className="border-brand-gray-3 overflow-hidden border-b">
      <TopBar />
      <LogoAndMenu />
      <PriceTable priceTable={priceTable} />
      <MainSearchForm />
    </header>
  );
}
