import * as Popover from "@radix-ui/react-popover";
import { Command } from "cmdk";
import { ChevronDown, Square, SquareCheckBig } from "lucide-react";
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
      <Popover.Trigger className="mt-1 flex w-full items-center justify-between gap-2 rounded border border-fg-border-main p-2 text-sm text-fg-text-main-hc outline-0">
        {selected.length === 0 ? (
          <div className="text-fg-text-main-lc">{placeholder}</div>
        ) : (
          <div className="flex items-center gap-2">
            {selected.map((item, i) => (
              <div
                key={i}
                className="rounded border border-fg-border-main-lc bg-bg-main-pale px-2 py-[2px] text-xs text-fg-text-main"
              >
                {options.find((option) => option.value === item)?.label}
              </div>
            ))}
          </div>
        )}
        <ChevronDown className="text-fg-icon-main-lc" size={24} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="mt-2 w-[var(--radix-popover-trigger-width)] rounded-md bg-white p-2 shadow-md">
          <Command label={cmdLabel}>
            <Command.Input
              className="w-full rounded border-fg-border-main p-2 text-sm text-fg-text-main-hc placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0"
              placeholder={cmdInputPlaceholder}
            />
            <Command.List className="mt-2 h-45 overflow-auto">
              {loading && (
                <Command.Loading className="p-2 text-sm text-fg-text-main">
                  {t("shared.loading")}
                </Command.Loading>
              )}
              {!loading && (
                <Command.Empty className="p-2 text-sm text-fg-text-main">
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
                    <SquareCheckBig
                      className="shrink-0 text-fg-icon-brand"
                      size={20}
                    />
                  ) : (
                    <Square
                      className="shrink-0 text-fg-icon-main-lc"
                      size={20}
                    />
                  )}
                  <span className="text-xs text-fg-text-main">
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
