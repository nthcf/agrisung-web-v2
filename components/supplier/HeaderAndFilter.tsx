import { useTranslations } from "next-intl";

import Button from "../common/Button";

type HeaderAndFilterProps = {
  count: number;
};

export default function HeaderAndFilter({ count }: HeaderAndFilterProps) {
  const t = useTranslations();

  return (
    <section className="flex items-center justify-between rounded-lg bg-white p-3">
      <p className="text-fg-text-main-hc text-sm">
        {t("shared.xResults", { count })}
      </p>
      <div className="flex gap-4">
        <Button color="gray">
          <span className="icon-[mdi--filter-outline] size-5" />
          <span>{t("shared.filter")}</span>
        </Button>
      </div>
    </section>
  );
}
