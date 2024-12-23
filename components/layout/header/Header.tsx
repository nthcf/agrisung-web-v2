import { type Session } from "next-auth";

import MainSearchForm from "@/components/form/MainSearchForm";
import { type Price } from "@/libs/cms";

import LogoAndMenu from "./LogoAndMenu";
import PriceList from "./PriceList";
import TopBar from "./TopBar";

type HeaderProps = {
  priceList: Price[];
  session: Session | null;
};

export default function Header({ priceList, session }: HeaderProps) {
  return (
    <header className="border-brand-gray-3 border-b">
      <TopBar user={session?.user} />
      <LogoAndMenu />
      {priceList.length > 0 && <PriceList priceList={priceList} />}
      <MainSearchForm />
    </header>
  );
}
