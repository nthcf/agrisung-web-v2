"use client";

import { type News } from "@/libs/cms";

import NewsCard from "./NewsCard";

type AllNewsGridProps = {
  data: News[];
};

export default function AllNewsGrid({ data }: AllNewsGridProps) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
      {data.map((i) => (
        <NewsCard key={i.id} data={i} />
      ))}
    </div>
  );
}
