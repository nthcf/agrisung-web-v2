import { type PropsWithLocale } from "@/app/types";
import Footer from "@/components/layout/footer/Footer";
import Header2 from "@/components/layout/header/Header2";

export default async function Layout2({ children }: PropsWithLocale) {
  return (
    <>
      <Header2 />
      {children}
      <Footer />
    </>
  );
}
