import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

export default function Filters() {
  return (
    <div className="w-100 bg-white p-3">
      <div>
        <p className="text-sm font-medium text-fg-text-main">
          Country of Origin
        </p>
        <Select.Root>
          <Select.Trigger
            className="mt-1 flex w-full items-center justify-between rounded border border-fg-border-main-lc p-2 text-sm text-fg-text-main-hc outline-0 data-[placeholder]:text-fg-text-main-lc"
            aria-label="Countries"
          >
            <Select.Value placeholder="Select a country" />
            <Select.Icon className="text-fg-icon-main-lc">
              <ChevronDown size={24} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="overflow-hidden rounded bg-white shadow-md">
              <Select.ScrollUpButton className="text-fg-icon-main-lc">
                <ChevronUp size={24} />
              </Select.ScrollUpButton>
              <Select.Viewport className="p-2">
                {["apple", "banana", "blueberry", "grapes", "pineapple"].map(
                  (i) => (
                    <Select.Item
                      key={i}
                      className="relative rounded p-2 pl-8 text-sm text-fg-text-main-hc outline-0 data-[highlighted]:bg-bg-brand-bright data-[highlighted]:text-fg-text-brand"
                      value={i}
                    >
                      <Select.ItemText>{i}</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2 top-1/2 -translate-y-1/2">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ),
                )}
              </Select.Viewport>
              <Select.ScrollDownButton className="text-fg-icon-main-lc">
                <ChevronDown size={24} />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  );
}
