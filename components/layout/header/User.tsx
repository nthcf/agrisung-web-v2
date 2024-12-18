"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { type User as TUser } from "next-auth";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

import { OMS_BASE_URL } from "@/site.config";

type UserProps = {
  data: TUser;
};

export function User({ data }: UserProps) {
  const t = useTranslations();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="inline-flex cursor-pointer items-center text-xs font-semibold outline-hidden">
        {data.name}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="border-fg-border-main text-fg-text-main-hc z-999 min-w-50 overflow-hidden rounded-md border bg-white p-1 shadow-md"
          align="end"
          sideOffset={4}
        >
          <DropdownMenu.Item
            className="cursor-pointer p-2 text-xs outline-0"
            disabled
          >
            {t("shared.hello")}{" "}
            <span className="font-semibold">{data.name}</span>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="bg-fg-border-main my-1 h-px" />
          <DropdownMenu.Item asChild>
            <div className="data-highlighted:text-fg-text-brand-hover cursor-pointer p-2 text-xs outline-0">
              <a
                href={`${OMS_BASE_URL}/buyer/profile`}
                target="_blank"
                rel="noreferrer"
              >
                {t("shared.myAccount")}
              </a>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <div className="data-highlighted:text-fg-text-brand-hover cursor-pointer p-2 text-xs outline-0">
              <a
                href={`${OMS_BASE_URL}/buyer/rfq`}
                target="_blank"
                rel="noreferrer"
              >
                {t("shared.rfqs")}
              </a>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="bg-fg-border-main my-1 h-px" />
          <DropdownMenu.Item
            className="text-fg-text-danger data-highlighted:text-fg-text-danger-deep cursor-pointer p-2 text-xs outline-0"
            onSelect={() => {
              signOut();
            }}
          >
            {t("shared.signOut")}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
