import { Filter, LayoutGrid, LayoutList } from "lucide-react";
import { useTranslations } from "next-intl";

import Button from "../common/Button";

export default function HeaderAndFilter() {
  const t = useTranslations();

  return (
    <section className="flex items-center justify-between rounded-lg bg-white p-3">
      <p className="text-sm text-fg-text-main-hc">
        {t("form.headerSearch.result", { count: 0 })}{" "}
        <strong>&quot;params.query&quot;</strong>
      </p>
      <div className="flex gap-4">
        <div className="flex gap-1">
          <Button disabled size="icon-lg">
            <LayoutList size={20} />
          </Button>
          <Button disabled size="icon-lg">
            <LayoutGrid size={20} />
          </Button>
        </div>
        <Button color="gray">
          <Filter size={20} />
          <span>{t("form.headerSearch.advanced")}</span>
        </Button>
      </div>
    </section>
  );
}
