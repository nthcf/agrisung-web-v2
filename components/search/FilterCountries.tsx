"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
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
        className="mt-1 flex w-full items-center justify-between rounded border border-fg-border-main p-2 text-sm text-fg-text-main-hc outline-0 data-[placeholder]:text-fg-text-main-lc"
        aria-label="Countries"
      >
        <Select.Value
          placeholder={t("form.headerSearch.filterCountriesPlaceholder")}
        />
        <Select.Icon className="text-fg-icon-main-lc">
          <ChevronDown size={24} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md border border-fg-border-main bg-white shadow-md">
          <Select.ScrollUpButton className="text-fg-icon-main-lc">
            <ChevronUp size={24} />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-2">
            {data?.data.map((i) => (
              <Select.Item
                key={i.code}
                className="relative rounded p-2 pl-8 text-sm text-fg-text-main-hc outline-0 data-[highlighted]:bg-bg-brand-bright data-[highlighted]:text-fg-text-brand"
                value={i.code}
              >
                <Select.ItemText>{i.name}</Select.ItemText>
                <Select.ItemIndicator className="absolute left-2 top-1/2 -translate-y-1/2">
                  <Check size={16} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="text-fg-icon-main-lc">
            <ChevronDown size={24} />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
