import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { type News } from "@/libs/cms";

import Button from "../common/Button";
import AllNewsGrid from "./AllNewsGrid";

type DetailOtherNewsProps = {
  data: News[];
};

export default function DetailOtherNews({ data }: DetailOtherNewsProps) {
  const t = useTranslations();

  return (
    <section className="container mx-auto px-4 pt-4 pb-10 lg:px-20 xl:px-34">
      <div className="flex items-center justify-between">
        <h2 className="text-x2xl text-fg-text-main-hc font-bold">
          {t("page.news.otherNews")}
        </h2>
        <Button
          as={Link}
          href="/news"
          className="pr-3"
          size="lg"
          color="ghost-primary"
        >
          <span>{t("shared.viewAll")}</span>
          <span className="icon-[octicon--chevron-right-16] size-4" />
        </Button>
      </div>
      <AllNewsGrid data={data} />
    </section>
  );
}
