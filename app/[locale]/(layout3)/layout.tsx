import { type PropsWithLocale } from "@/app/types";
import Footer from "@/components/layout/footer/Footer";
import Header3 from "@/components/layout/header/Header3";

export default async function Layout2({ children }: PropsWithLocale) {
  return (
    <>
      <Header3 />
      {children}
      <Footer />
    </>
  );
}
