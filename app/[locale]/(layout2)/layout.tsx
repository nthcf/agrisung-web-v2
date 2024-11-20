import Footer from "@/components/layout/footer/Footer";
import Header2 from "@/components/layout/header/Header2";
import { getSearchBanner } from "@/libs/cms";

export default async function Layout2({ children }: React.PropsWithChildren) {
  const { data } = await getSearchBanner();

  return (
    <>
      <Header2 banner={data.searchResultBanners[0]} />
      {children}
      <Footer />
    </>
  );
}
