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
      <h2 className="text-x2xl font-bold text-fg-text-main-hc">{r.title}</h2>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {r.suppliers.map((s) => (
          <SupplierCard key={s.id} data={s} />
        ))}
      </div>
    </div>
  ));
}
