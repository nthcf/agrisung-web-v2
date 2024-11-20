"use client";

import { useRouter } from "@/i18n/routing";
import { Command } from "cmdk";
import { Search as ISearch } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import useSWR from "swr";

import { getSuggestion } from "@/libs/cms";

import Button from "../common/Button";

export default function MainSearchForm() {
  const router = useRouter();
  const t = useTranslations();
  const [search, setSearch] = useState("");
  const { data, error, isLoading } = useSWR("certs", () => getSuggestion());

  return (
    <div className="container mx-auto px-4 lg:px-20 xl:px-34">
      <div className="py-4">
        <Command
          label="Main Search With Suggestion"
          className="relative mx-auto flex w-2/3 items-center rounded border border-fg-border-main pl-4"
        >
          <Command.Input
            className="peer mr-4 h-11 flex-1 border-0 p-0 text-sm text-fg-text-main-hc ring-0 placeholder:text-fg-text-main-lc focus:ring-0"
            placeholder={t("form.headerSearch.placeholder")}
            value={search}
            onValueChange={setSearch}
          />
          <Button
            className="!h-11 !w-15 !rounded-none !rounded-l"
            color="primary"
            onClick={() => {
              router.push({ pathname: "/search", query: { q: search } });
            }}
          >
            <ISearch />
          </Button>
          <Command.List className="absolute left-0 right-0 top-full z-[89] mt-2 hidden h-90 overflow-auto rounded-lg bg-white p-2 shadow-md peer-focus:block">
            {isLoading && (
              <Command.Loading className="p-2 text-sm text-fg-text-main">
                {t("shared.loading")}
              </Command.Loading>
            )}
            {(!isLoading || error) && (
              <Command.Empty className="p-2 text-sm text-fg-text-main">
                {t("shared.noResultsFound")}
              </Command.Empty>
            )}
            {data?.data.map((item, i) => (
              <Command.Item
                key={item + i}
                className="cursor-pointer p-2 text-xs text-fg-text-main-hc data-[selected=true]:bg-bg-brand-bright"
                onSelect={() => {
                  router.push({ pathname: "/search", query: { q: item } });
                }}
              >
                {item}
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
