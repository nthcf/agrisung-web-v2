"use client";

import { useTranslations } from "next-intl";
import useSWR from "swr";

import { getCertifications } from "@/libs/cms";

import MultiSelect from "../common/MultiSelect";
import { type Dispatch } from "../common/types";

type FilterCertsProps = {
  selected: string[];
  onSelect: Dispatch<string[]>;
};

export default function FilterCerts({ selected, onSelect }: FilterCertsProps) {
  const t = useTranslations();
  const { data, error, isLoading } = useSWR("certs", () => getCertifications());

  if (error) {
    return <div>Error</div>;
  }

  return (
    <MultiSelect
      loading={isLoading}
      options={
        data?.data.map((cert) => ({
          label: cert.name,
          value: cert.name,
        })) || []
      }
      selected={selected}
      placeholder={t("form.headerSearch.filterCertsPlaceholder")}
      onSelect={onSelect}
    />
  );
}
