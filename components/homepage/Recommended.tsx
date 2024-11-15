import { ChevronRight } from "lucide-react";

import { Link } from "@/i18n/routing";
import { type Recommended as TRecommended } from "@/libs/cms";

import ProductCard from "../product/ProductCard";
import SupplierCard from "../supplier/SupplierCard";

type RecommendedProps = {
  data: TRecommended;
};

export default function Recommended({ data }: RecommendedProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-x2xl font-bold text-fg-text-main-hc">{data.title}</h2>
      {data.products.map((product) => (
        <div key={product.id} className="space-y-4">
          <div className="flex justify-between">
            <h3 className="text-sm font-semibold text-fg-text-main-hc">
              {product.title}
            </h3>
            <Link
              className="inline-flex items-center text-sm font-medium text-fg-text-brand"
              href={product.ctaLink}
            >
              <span>{product.ctaTitle}</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      ))}
      {data.suppliers.map((supplier) => (
        <div key={supplier.id} className="space-y-4">
          <div className="flex justify-between">
            <h3 className="text-sm font-semibold text-fg-text-main-hc">
              {supplier.title}
            </h3>
            <Link
              className="inline-flex items-center text-sm font-medium text-fg-text-brand"
              href={supplier.ctaLink}
            >
              <span>{supplier.ctaTitle}</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {supplier.suppliers.map((supplier) => (
              <SupplierCard key={supplier.id} data={supplier} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
