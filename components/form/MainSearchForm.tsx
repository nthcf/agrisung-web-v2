import { Search as ISearch } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Form from "next/form";

import Button from "../common/Button";

export default function MainSearchForm() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 lg:px-20 xl:px-34">
      <div className="py-4">
        <Form
          action={`/${locale}/search`}
          className="mx-auto flex w-2/3 items-center overflow-hidden rounded border border-fg-border-main pl-4"
        >
          <input
            className="mr-4 h-11 flex-1 border-0 p-0 text-sm text-fg-text-main-hc ring-0 placeholder:text-fg-text-main-lc focus:ring-0"
            name="q"
            type="text"
            placeholder={t("form.headerSearch.placeholder")}
          />
          <Button
            className="!h-11 !w-15 !rounded-none !rounded-l"
            color="primary"
            type="submit"
          >
            <ISearch />
          </Button>
        </Form>
      </div>
    </div>
  );
}
