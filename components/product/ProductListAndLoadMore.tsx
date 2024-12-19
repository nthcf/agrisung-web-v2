"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";

import { Product } from "@/libs/cms";

import Button from "../common/Button";
import HeaderAndFilter from "./HeaderAndFilter";
import ProductCard from "./ProductCard";

type ProductListAndLoadMoreProps = {
  initialData: Product[];
  initialHasMore: boolean;
  initialPage: number;
};

type PageData = {
  items: Product[];
  hasMore: boolean;
};

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json() as Promise<PageData>);

export default function ProductListAndLoadMore({
  initialData,
  initialHasMore,
  initialPage,
}: ProductListAndLoadMoreProps) {
  const [initialLoaded] = useState<PageData>({
    items: initialData,
    hasMore: initialHasMore,
  });

  const getKey = (pageIndex: number, previousPageData: PageData | null) => {
    if (previousPageData && !previousPageData.hasMore) {
      return null;
    }

    return `/api/public/products?page=${pageIndex + initialPage}`;
  };

  const { data, isLoading, size, setSize } = useSWRInfinite(getKey, fetcher, {
    revalidateFirstPage: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false, // Prevent revalidation of initial data
    fallbackData: [
      { items: initialLoaded.items, hasMore: initialLoaded.hasMore },
    ],
  });

  const t = useTranslations();

  const items = data ? data.flatMap((page) => page.items) : [];
  const hasMore = data && data[data.length - 1]?.hasMore;
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  const loadMore = () => {
    setSize(size + 1);
  };

  return (
    <>
      <HeaderAndFilter count={items.length} />
      <section>
        <div className="mt-4 grid grid-cols-4 gap-4">
          {items.map((s) => (
            <ProductCard key={s.id} data={s} contentClassname="p-3" />
          ))}
        </div>
        {hasMore && (
          <Button
            className="mt-4 w-full border-transparent!"
            disabled={isLoadingMore}
            size="lg"
            type="button"
            onClick={() => {
              loadMore();
            }}
          >
            {isLoadingMore ? t("shared.loading") : t("shared.loadMoreResult")}
          </Button>
        )}
      </section>
    </>
  );
}
