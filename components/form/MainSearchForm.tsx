import { Search as ISearch } from "lucide-react";
import { useTranslations } from "next-intl";

import Button from "../common/Button";

export default function MainSearchForm() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 lg:px-20 xl:px-34">
      <div className="py-4">
        <div className="mx-auto flex w-2/3 items-center overflow-hidden rounded border border-fg-border-brand-lc pl-4">
          <input
            className="mr-4 h-11 flex-1 border-0 p-0 text-sm text-fg-text-main-hc ring-0 placeholder:text-fg-text-main-lc focus:ring-0"
            type="text"
            placeholder={t("form.headerSearch.placeholder")}
          />
          <Button
            className="!h-11 !w-15 !rounded-none !rounded-l"
            color="primary"
          >
            <ISearch />
          </Button>
        </div>
      </div>
    </div>
  );
}