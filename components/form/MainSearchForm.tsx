"use client";

import { cx } from "class-variance-authority";
import { Command } from "cmdk";
import { Search as ISearch } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import useSWR from "swr";
import { useOnClickOutside } from "usehooks-ts";

import { useRouter } from "@/i18n/routing";
import { getSuggestion } from "@/libs/cms";

import Button from "../common/Button";

export default function MainSearchForm() {
  const resultRef = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);

  const t = useTranslations();

  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    showResult ? "suggestion" : null,
    () => getSuggestion(),
  );

  // @ts-expect-error resultRef
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
          className="relative mx-auto flex w-2/3 items-center rounded border border-fg-border-main pl-4"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              router.push({ pathname: "/search", query: { q: search } });
            }
          }}
        >
          <Command.Input
            className="mr-4 h-11 flex-1 border-0 p-0 text-sm text-fg-text-main-hc ring-0 placeholder:text-fg-text-main-lc focus:ring-0"
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
            className="!h-11 !w-15 !rounded-none !rounded-l"
            color="primary"
            onClick={() => {
              router.push({ pathname: "/search", query: { q: search } });
            }}
          >
            <ISearch />
          </Button>
          <Command.List
            ref={resultRef}
            className={cx(
              "absolute left-0 right-0 top-full z-[89] mt-2 h-90 overflow-auto rounded-lg bg-white p-2 shadow-md",
              showResult ? "block" : "hidden",
            )}
          >
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
