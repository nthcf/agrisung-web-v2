import { setRequestLocale } from "next-intl/server";

import { auth } from "@/auth";
import Footer from "@/components/layout/footer/Footer";
import Header3 from "@/components/layout/header/Header3";
import { routing } from "@/i18n/routing";
import { Locale } from "@/site.config";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function StaticLayout({
  children,
  params,
}: {
  params: Promise<{ locale: Locale }>;
  children?: React.ReactNode;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const session = await auth();

  return (
    <>
      <Header3 session={session} />
      {children}
      <Footer />
    </>
  );
}
