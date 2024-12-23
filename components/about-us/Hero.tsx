import { useTranslations } from "next-intl";
import Image from "next/image";
import ContactUs from "./ContactUs";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative container mx-auto h-138">
      <Image
        src="/about-us-1.jpg"
        alt="Agri Sung"
        sizes="100%"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent"></div>
      <div className="relative flex h-full max-w-160 flex-col justify-center pl-34">
        <h1 className="text-fg-text-on-main-hc text-5xl font-bold">
          {t("page.aboutUs.heroSection.title")}
        </h1>
        <p className="text-fg-text-on-main mt-2 text-lg">
          {t("page.aboutUs.heroSection.desc")}
        </p>
        <div className="mt-6">
          <ContactUs />
        </div>
      </div>
    </section>
  );
}
