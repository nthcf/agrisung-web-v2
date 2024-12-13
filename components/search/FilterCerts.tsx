"use client";

import { useTranslations } from "next-intl";
import useSWR from "swr";

import { type Certification } from "@/libs/cms";

import MultiSelect from "../common/MultiSelect";
import { type Dispatch } from "../common/types";

type FilterCertsProps = {
  selected: string[];
  onSelect: Dispatch<string[]>;
};

export default function FilterCerts({ selected, onSelect }: FilterCertsProps) {
  const t = useTranslations();

  const { data, error, isLoading } = useSWR("certs", async () => {
    const res = await fetch("/api/public/certs");
    const json = (await res.json()) as Certification[];

    return json;
  });

  if (error) {
    return <div>Error</div>;
  }

  return (
    <MultiSelect
      loading={isLoading}
      options={
        data?.map((cert) => ({
          label: cert.name,
          value: cert.name,
        })) || []
      }
      selected={selected}
      placeholder={t("form.headerSearch.filterCertsPlaceholder")}
      cmdLabel={t("form.headerSearch.filterCertsLabel")}
      cmdInputPlaceholder={t("shared.search")}
      onSelect={onSelect}
    />
  );
}
