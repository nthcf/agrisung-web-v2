"use client";

import * as Select from "@radix-ui/react-select";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import { routing, usePathname, useRouter } from "@/i18n/routing";

export function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();

  const params = useParams();
  const locale = useLocale();
  const t = useTranslations();

  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select.Root
      disabled={isPending}
      defaultValue={locale}
      onValueChange={(l) =>
        startTransition(() => {
          router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            {
              locale: l,
            },
          );
        })
      }
    >
      <Select.Trigger className="inline-flex items-center text-xs outline-none">
        <Select.Value />
        <Select.Icon className="icon-[octicon--chevron-down-16] size-4" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md border border-fg-border-main bg-white shadow-md">
          <Select.Viewport className="min-w-40 p-2">
            {routing.locales.map((l) => (
              <Select.Item
                key={l}
                value={l}
                className="cursor-pointer p-2 text-xs outline-0 data-[highlighted]:bg-bg-brand-bright data-[highlighted]:font-semibold data-[highlighted]:text-fg-text-brand"
              >
                <Select.ItemText>{t(`shared.language.${l}`)}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
