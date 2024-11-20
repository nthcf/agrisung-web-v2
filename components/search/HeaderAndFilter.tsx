import { LayoutGrid, LayoutList } from "lucide-react";
import { useTranslations } from "next-intl";

import Button from "../common/Button";
import Filters from "./Filters";

type HeaderAndFilterProps = {
  q: string;
  origin: string;
  certs: string;
  total: number;
};

export default function HeaderAndFilter({
  q,
  origin,
  certs,
  total,
}: HeaderAndFilterProps) {
  const t = useTranslations();

  return (
    <section className="flex items-center justify-between rounded-lg bg-white p-3">
      <p className="text-sm text-fg-text-main-hc">
        {t("form.headerSearch.result", { count: total })}{" "}
        <strong>&quot;{q}&quot;</strong>
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
        <Filters q={q} origin={origin} certs={certs} />
      </div>
    </section>
  );
}
