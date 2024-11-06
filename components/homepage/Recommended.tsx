import { ChevronRight } from "lucide-react";

import { Link } from "@/i18n/routing";

import ProductCard from "../product/ProductCard";
import SupplierCard from "../supplier/SupplierCard";

export default function Recommended() {
  return (
    <section className="space-y-6">
      <h2 className="text-x2xl font-bold text-fg-text-main-hc">
        homeconfig.recommended.title
      </h2>
      {/* loop */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <h3 className="text-sm font-semibold text-fg-text-main-hc">
            sections[0].title
          </h3>
          <Link
            className="inline-flex items-center text-sm font-medium text-fg-text-brand"
            href="/"
          >
            <span>sections[0].link</span>
            <ChevronRight size={16} />
          </Link>
        </div>
        <div className="flex gap-3">
          {/* loop */}
          {/* product/supplier card */}
          <ProductCard className="flex-1" data="" />
          <ProductCard className="flex-1" data="" />
          <ProductCard className="flex-1" data="" />
          <ProductCard className="flex-1" data="" />
        </div>
      </div>
      {/* loop */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <h3 className="text-sm font-semibold text-fg-text-main-hc">
            sections[0].title
          </h3>
          <Link
            className="inline-flex items-center text-sm font-medium text-fg-text-brand"
            href="/"
          >
            <span>sections[0].link</span>
            <ChevronRight size={16} />
          </Link>
        </div>
        <div className="flex gap-3">
          {/* loop */}
          {/* product/supplier card */}
          <SupplierCard className="flex-1" data="" />
          <SupplierCard className="flex-1" data="" />
          <SupplierCard className="flex-1" data="" />
        </div>
      </div>
    </section>
  );
}
