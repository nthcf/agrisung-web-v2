import { type PropsWithLocale } from "@/app/types";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { getHeaderPriceTable } from "@/libs/cms";

export default async function Layout1({ children }: PropsWithLocale) {
  const data = await getHeaderPriceTable();

  return (
    <>
      <Header priceTable={data} />
      {children}
      <Footer />
    </>
  );
}
