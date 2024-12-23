import { useTranslations } from "next-intl";

import Content2Cols from "./Content2Cols";

export default function Marketplace() {
  const t = useTranslations();

  return (
    <section className="container mx-auto px-4 lg:px-20 xl:px-34">
      <Content2Cols
        content={
          <>
            <h2 className="text-fg-text-main-hc text-x4xl font-bold">
              {t("page.aboutUs.marketplaceSection.title")}
            </h2>
            <p className="text-fg-text-main mt-1 text-lg">
              {t("page.aboutUs.marketplaceSection.desc1")}
            </p>
            <p className="text-fg-text-main mt-6 text-lg">
              {t("page.aboutUs.marketplaceSection.desc2")}
            </p>
          </>
        }
        image="/about-us-4.jpg"
        reverseOrder
      />
    </section>
  );
}
