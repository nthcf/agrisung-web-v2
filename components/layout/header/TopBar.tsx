import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TopBar() {
  const t = useTranslations();

  return (
    <div className="bg-bg-brand-deep">
      <div className="container mx-auto px-4 lg:px-20 xl:px-34">
        <div className="flex justify-between py-[6px] text-fg-text-on-main">
          <div className="flex items-center gap-10">
            <p className="inline-flex items-center text-xs">
              <span>{t("nav.topBar.seeAllMenu")}</span>
              <ChevronDown size={20} />
            </p>
            <p className="text-xs">{t("nav.topBar.aboutAgriSung")}</p>
            <p className="text-xs">{t("nav.topBar.helpCenterFaq")}</p>
          </div>
          <div className="flex items-center gap-10">
            <p className="inline-flex items-center text-xs">
              <span>{t("shared.language.en")}</span>
              <ChevronDown size={20} />
            </p>
            <p className="text-xs">{t("nav.topBar.contactUs")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
