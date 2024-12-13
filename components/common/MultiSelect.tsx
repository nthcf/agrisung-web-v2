import * as Popover from "@radix-ui/react-popover";
import { Command } from "cmdk";
import { useTranslations } from "next-intl";

import { type Dispatch } from "./types";

type MultiSelectProps<T> = {
  loading?: boolean;
  options: {
    label: string;
    value: T;
  }[];
  placeholder?: string;
  cmdLabel?: string;
  cmdInputPlaceholder?: string;
  selected: T[];
  onSelect: Dispatch<T[]>;
};

export default function MultiSelect<T>({
  loading,
  options = [],
  selected = [],
  placeholder,
  cmdLabel,
  cmdInputPlaceholder,
  onSelect,
}: MultiSelectProps<T>) {
  const t = useTranslations();

  return (
    <Popover.Root>
      <Popover.Trigger className="border-fg-border-main text-fg-text-main-hc mt-1 flex w-full items-center justify-between gap-2 rounded-sm border p-2 text-sm outline-0">
        {selected.length === 0 ? (
          <div className="text-fg-text-main-lc">{placeholder}</div>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            {selected.map((item, i) => (
              <div
                key={i}
                className="border-fg-border-main-lc bg-bg-main-pale text-fg-text-main rounded-sm border px-2 py-[2px] text-xs"
              >
                {options.find((option) => option.value === item)?.label}
              </div>
            ))}
          </div>
        )}
        <span className="icon-[octicon--chevron-down-16] text-fg-icon-main-lc size-6" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="z-1010 mt-2 w-[var(--radix-popover-trigger-width)] rounded-md bg-white p-2 shadow-md">
          <Command label={cmdLabel}>
            <Command.Input
              className="border-fg-border-main text-fg-text-main-hc placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0"
              placeholder={cmdInputPlaceholder}
            />
            <Command.List className="mt-2 h-45 overflow-auto">
              {loading && (
                <Command.Loading className="text-fg-text-main p-2 text-sm">
                  {t("shared.loading")}
                </Command.Loading>
              )}
              {!loading && (
                <Command.Empty className="text-fg-text-main p-2 text-sm">
                  {t("shared.noResultsFound")}
                </Command.Empty>
              )}
              {options.map((item, i) => (
                <Command.Item
                  key={i}
                  className="flex cursor-pointer items-center gap-2 p-2"
                  onSelect={() => {
                    if (selected.includes(item.value)) {
                      onSelect((prev) => prev.filter((i) => i !== item.value));
                    } else {
                      onSelect((prev) => [...prev, item.value]);
                    }
                  }}
                >
                  {selected.includes(item.value) ? (
                    <div className="icon-[mdi--checkbox-marked] text-fg-icon-brand size-5 shrink-0" />
                  ) : (
                    <div className="icon-[mdi--checkbox-blank-outline] text-fg-icon-main-lc size-5 shrink-0" />
                  )}
                  <span className="text-fg-text-main text-xs">
                    {item.label}
                  </span>
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
