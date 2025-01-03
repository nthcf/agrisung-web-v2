import { auth } from "@/auth";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { getPublicPriceList } from "@/libs/cms";

export default async function Layout1({ children }: React.PropsWithChildren) {
  const session = await auth();
  const { data } = await getPublicPriceList();

  return (
    <>
      <Header priceList={data.publicPriceList} session={session} />
      {children}
      <Footer />
    </>
  );
}
