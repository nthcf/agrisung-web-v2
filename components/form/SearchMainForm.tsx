"use client";

import { Command } from "cmdk";
import { cx } from "cva";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import useSWR from "swr";
import { useOnClickOutside } from "usehooks-ts";

import { useRouter } from "@/i18n/routing";

import Button from "../common/Button";

type SearchMainFormProps = {
  alwaysShowResult?: boolean;
  onSearch?: () => void;
};

export default function SearchMainForm({
  alwaysShowResult,
  onSearch,
}: SearchMainFormProps) {
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

  // @ts-expect-error It's a `usehooks-ts` issue
  useOnClickOutside(resultRef, () => {
    if (showResult) {
      setShowResult(false);
    }
  });

  return (
    <Command
      label="Main Search With Suggestion"
      className="relative w-full"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          router.push({ pathname: "/search", query: { q: search } });

          if (onSearch) {
            onSearch();
          }
        }
      }}
    >
      <div className="border-fg-border-main flex items-center rounded-sm border bg-white pl-4">
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
      </div>
      <Command.List
        ref={resultRef}
        className={cx(
          "z-89 mt-2 h-90 overflow-auto rounded-lg bg-white p-2 shadow-md",
          alwaysShowResult || showResult ? "block" : "hidden",
          alwaysShowResult ? "" : "absolute top-full right-0 left-0",
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
            className="text-fg-text-main-hc hover:bg-bg-brand-bright cursor-pointer p-2 text-xs"
            onSelect={() => {
              router.push({ pathname: "/search", query: { q: item } });

              if (onSearch) {
                onSearch();
              }
            }}
          >
            {item}
          </Command.Item>
        ))}
      </Command.List>
    </Command>
  );
}
