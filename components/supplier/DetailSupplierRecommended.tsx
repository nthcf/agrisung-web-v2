import { Supplier } from "@/libs/cms";

import SupplierCard from "./SupplierCard";

type DetailSupplierRecommendedProps = {
  data: {
    id: number;
    title: string;
    suppliers: Supplier[];
  }[];
};

export default function DetailSupplierRecommended({
  data,
}: DetailSupplierRecommendedProps) {
  return data.map((r) => (
    <div key={r.id} className="rounded-lg bg-white p-3">
      <h2 className="text-x2xl text-fg-text-main-hc font-bold">{r.title}</h2>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {r.suppliers.map((s) => (
          <SupplierCard
            key={s.id}
            className="pb-1"
            contentClassname="pt-3"
            data={s}
          />
        ))}
      </div>
    </div>
  ));
}
