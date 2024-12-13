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
      <h2 className="text-x2xl text-fg-text-main-hc font-bold">{data.title}</h2>
      {data.products.map((product) => (
        <div key={product.id} className="space-y-4">
          <div className="flex justify-between">
            <h3 className="text-fg-text-main-hc text-sm font-semibold">
              {product.title}
            </h3>
            {product.ctaTitle && (
              <Link
                className="text-fg-text-brand inline-flex items-center text-sm font-medium"
                href={product.ctaLink}
              >
                <span>{product.ctaTitle}</span>
                <span className="icon-[octicon--chevron-right-16] size-4" />
              </Link>
            )}
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.products.map((product) => (
              <ProductCard
                key={product.id}
                contentClassname="pt-3"
                data={product}
              />
            ))}
          </div>
        </div>
      ))}
      {data.suppliers.map((supplier) => (
        <div key={supplier.id} className="space-y-4">
          <div className="flex justify-between">
            <h3 className="text-fg-text-main-hc text-sm font-semibold">
              {supplier.title}
            </h3>
            {supplier.ctaTitle && (
              <Link
                className="text-fg-text-brand inline-flex items-center text-sm font-medium"
                href={supplier.ctaLink}
              >
                <span>{supplier.ctaTitle}</span>
                <span className="icon-[octicon--chevron-right-16] size-4" />
              </Link>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {supplier.suppliers.map((supplier) => (
              <SupplierCard
                key={supplier.id}
                className="pb-1"
                contentClassname="pt-3"
                data={supplier}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
