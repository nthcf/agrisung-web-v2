"use client";

import { Command } from "cmdk";
import { cx } from "cva";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import useSWR from "swr";
import { useOnClickOutside } from "usehooks-ts";

import { useRouter } from "@/i18n/routing";

import Button from "../common/Button";

export default function MainSearchForm() {
  const resultRef = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);

  const t = useTranslations();

  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    showResult ? "suggestion" : null,
    async () => {
      const res = await fetch("/api/public/suggestion");
      const json = (await res.json()) as string[];

      return json;
    },
  );

  // @ts-expect-error TODO
  useOnClickOutside(resultRef, () => {
    if (showResult) {
      setShowResult(false);
    }
  });

  return (
    <div className="container mx-auto px-4 lg:px-20 xl:px-34">
      <div className="py-4">
        <Command
          label="Main Search With Suggestion"
          className="border-fg-border-main relative mx-auto flex w-2/3 items-center rounded-sm border pl-4"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              router.push({ pathname: "/search", query: { q: search } });
            }
          }}
        >
          <Command.Input
            className="text-fg-text-main-hc placeholder:text-fg-text-main-lc mr-4 h-11 flex-1 border-0 p-0 text-sm ring-0 focus:ring-0"
            placeholder={t("form.headerSearch.placeholder")}
            value={search}
            onValueChange={setSearch}
            onFocus={() => {
              if (!showResult) {
                setShowResult(true);
              }
            }}
          />
          <Button
            className="h-11! w-15!"
            color="primary"
            onClick={() => {
              router.push({ pathname: "/search", query: { q: search } });
            }}
          >
            <div className="icon-[octicon--search-16] size-6" />
          </Button>
          <Command.List
            ref={resultRef}
            className={cx(
              "absolute top-full right-0 left-0 z-89 mt-2 h-90 overflow-auto rounded-lg bg-white p-2 shadow-md",
              showResult ? "block" : "hidden",
            )}
          >
            {isLoading && (
              <Command.Loading className="text-fg-text-main p-2 text-sm">
                {t("shared.loading")}
              </Command.Loading>
            )}
            {(!isLoading || error) && (
              <Command.Empty className="text-fg-text-main p-2 text-sm">
                {t("shared.noResultsFound")}
              </Command.Empty>
            )}
            {data?.map((item, i) => (
              <Command.Item
                key={item + i}
                className="text-fg-text-main-hc data-[selected=true]:bg-bg-brand-bright cursor-pointer p-2 text-xs"
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
