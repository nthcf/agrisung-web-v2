"use client";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { type News } from "@/libs/cms";

import NewsCard from "./NewsCard";
import NewsCardHorizontal from "./NewsCardHorizontal";

type FeaturedNewsGridProps = {
  data: News[];
};

export default function FeaturedNewsGrid({ data }: FeaturedNewsGridProps) {
  const n1 = data[0];
  const n2 = data[1];
  const n3 = data[2];

  return (
    <div className="mt-8">
      <OverlayScrollbarsComponent
        defer
        options={{ scrollbars: { autoHide: "move" } }}
      >
        <div className="flex gap-6 pb-3 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:pb-0">
          {n1 && (
            <div className="shrink-0 basis-4/5 sm:basis-7/10 md:basis-3/5 lg:row-span-2">
              <NewsCard data={n1} />
            </div>
          )}
          {n2 && (
            <div className="shrink-0 basis-4/5 sm:basis-7/10 md:basis-3/5 lg:hidden">
              <NewsCard data={n2} />
            </div>
          )}
          {n3 && (
            <div className="shrink-0 basis-4/5 sm:basis-7/10 md:basis-3/5 lg:hidden">
              <NewsCard data={n3} />
            </div>
          )}
          {n2 && (
            <div className="max-lg:hidden">
              <NewsCardHorizontal data={n2} />
            </div>
          )}
          {n3 && (
            <div className="max-lg:hidden">
              <NewsCardHorizontal data={n3} />
            </div>
          )}
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
}
