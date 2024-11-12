import { useTranslations } from "next-intl";

import RfqForm2 from "../form/RfqForm2";

export default function NoResult() {
  const t = useTranslations();

  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="text-lg font-bold text-fg-text-main-hc">
          {t("form.headerSearch.noResult")}
        </p>
        <p className="text-fg-text-main">
          {t("form.headerSearch.noResultText1")}
        </p>
        <p className="text-fg-text-main">
          {t("form.headerSearch.noResultText2")}
        </p>
      </div>
      <div className="mx-auto mt-20 w-1/2">
        <RfqForm2 />
      </div>
    </div>
  );
}
