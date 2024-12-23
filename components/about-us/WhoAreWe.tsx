import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WhoAreWe() {
  const t = useTranslations();

  return (
    <section className="container mx-auto flex gap-9">
      <Image
        src="/about-us-2.png"
        alt="Agri Sung"
        width={695}
        height={594}
        className="-scale-x-[1]"
      />
      <div className="flex flex-1 flex-col justify-center pr-34">
        <h2 className="text-fg-text-brand text-4xl font-bold">
          {t("page.aboutUs.whoAreWeSection.title")}
        </h2>
        <p className="text-fg-text-main mt-6 text-lg">
          {t("page.aboutUs.whoAreWeSection.desc1")}
        </p>
        <p className="text-fg-text-main mt-6 text-lg">
          {t("page.aboutUs.whoAreWeSection.desc2")}
        </p>
      </div>
    </section>
  );
}
