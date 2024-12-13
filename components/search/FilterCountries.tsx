"use client";

import * as Select from "@radix-ui/react-select";
import { useTranslations } from "next-intl";
import useSWR from "swr";

import { getCountries } from "@/libs/cms";

type FilterCountriesProps = {
  value?: string;
  onValueChange?: (value: string) => void;
};

export default function FilterCountries({
  value,
  onValueChange,
}: FilterCountriesProps) {
  const t = useTranslations();

  const { data, error, isLoading } = useSWR("countries", () => getCountries());

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Select.Root
      disabled={isLoading}
      value={value}
      onValueChange={onValueChange}
    >
      <Select.Trigger
        className="border-fg-border-main text-fg-text-main-hc data-placeholder:text-fg-text-main-lc mt-1 flex w-full items-center justify-between rounded-sm border p-2 text-sm outline-0"
        aria-label="Countries"
      >
        <Select.Value
          placeholder={t("form.headerSearch.filterCountriesPlaceholder")}
        />
        <Select.Icon className="icon-[octicon--chevron-down-16] text-fg-icon-main-lc size-6" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="border-fg-border-main overflow-hidden rounded-md border bg-white shadow-md">
          <Select.ScrollUpButton className="text-fg-icon-main-lc">
            <span className="icon-[octicon--chevron-up-16] size-6" />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-2">
            {data?.data.map((i) => (
              <Select.Item
                key={i.code}
                className="text-fg-text-main-hc data-highlighted:bg-bg-brand-bright data-highlighted:text-fg-text-brand relative rounded-sm p-2 pl-8 text-sm outline-0"
                value={i.code}
              >
                <Select.ItemText>{i.name}</Select.ItemText>
                <Select.ItemIndicator className="icon-[octicon--check-16] absolute top-1/2 left-2 size-4 -translate-y-1/2" />
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="text-fg-icon-main-lc">
            <span className="icon-[octicon--chevron-down-16] size-6" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
