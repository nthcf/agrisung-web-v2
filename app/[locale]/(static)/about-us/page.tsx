import { setRequestLocale } from "next-intl/server";

import CoreValues from "@/components/about-us/CoreValues";
import Hero from "@/components/about-us/Hero";
import Marketplace from "@/components/about-us/Marketplace";
import Mission from "@/components/about-us/Mission";
import WhoAreWe from "@/components/about-us/WhoAreWe";
import Why from "@/components/about-us/Why";
import { Locale } from "@/site.config";
import Difference from "@/components/about-us/Difference";

export default async function AboutUs({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <WhoAreWe />
      <CoreValues />
      <div className="bg-bg-main-pale space-y-12 py-12">
        <Mission />
        <Marketplace />
        <Why />
      </div>
      <Difference />
      <div className="bg-bg-main-pale h-20"></div>
    </main>
  );
}
