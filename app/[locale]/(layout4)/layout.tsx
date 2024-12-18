import { auth } from "@/auth";
import Footer from "@/components/layout/footer/Footer";
import Header4 from "@/components/layout/header/Header4";
import { getSearchBanner } from "@/libs/cms";

export default async function Layout2({ children }: React.PropsWithChildren) {
  const session = await auth();
  const { data } = await getSearchBanner();

  return (
    <>
      <Header4 banner={data.searchResultBanners[0]} session={session} />
      {children}
      <Footer />
    </>
  );
}
