import { useTranslations } from "next-intl";

import Button from "../common/Button";

export default function AsideCta() {
  const t = useTranslations();

  return (
    <div className="rounded-lg bg-white p-3">
      <p className="text-sm font-medium text-fg-text-main-hc">
        {t("page.homepage.aside.rfqTitle")}
      </p>
      <div className="mt-3 flex items-center gap-1">
        <Button className="flex-1">{t("page.homepage.aside.rfqButton")}</Button>
      </div>
    </div>
  );
}
