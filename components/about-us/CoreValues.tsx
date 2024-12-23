import { useTranslations } from "next-intl";
import Image from "next/image";

function CoreValueItem({
  desc,
  icon,
  title,
}: {
  desc: string;
  icon: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Image src={icon} alt={title} width={80} height={80} />
      <h3 className="text-fg-text-brand text-center text-2xl font-bold">
        {title}
      </h3>
      <p className="text-fg-text-brand text-center text-sm">{desc}</p>
    </div>
  );
}

export default function CoreValues() {
  const t = useTranslations();

  return (
    <section className="container mx-auto">
      <h2 className="text-x4xl text-fg-text-main-hc text-center font-bold">
        {t("page.aboutUs.coreValuesSection.title")}
      </h2>
      <div className="mt-6 mb-10">
        <div className="bg-bg-brand-bright grid grid-cols-4 gap-10 px-34 py-10">
          <CoreValueItem
            title={t("page.aboutUs.coreValuesSection.core1")}
            desc={t("page.aboutUs.coreValuesSection.desc1")}
            icon="/core-value-1.svg"
          />
          <CoreValueItem
            title={t("page.aboutUs.coreValuesSection.core2")}
            desc={t("page.aboutUs.coreValuesSection.desc2")}
            icon="/core-value-2.svg"
          />
          <CoreValueItem
            title={t("page.aboutUs.coreValuesSection.core3")}
            desc={t("page.aboutUs.coreValuesSection.desc3")}
            icon="/core-value-3.svg"
          />
          <CoreValueItem
            title={t("page.aboutUs.coreValuesSection.core4")}
            desc={t("page.aboutUs.coreValuesSection.desc4")}
            icon="/core-value-4.svg"
          />
        </div>
      </div>
    </section>
  );
}
