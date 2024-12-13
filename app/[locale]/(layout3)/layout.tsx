import { auth } from "@/auth";
import Footer from "@/components/layout/footer/Footer";
import Header3 from "@/components/layout/header/Header3";

export default async function Layout3({ children }: React.PropsWithChildren) {
  const session = await auth();

  return (
    <>
      <Header3 session={session} />
      {children}
      <Footer />
    </>
  );
}
