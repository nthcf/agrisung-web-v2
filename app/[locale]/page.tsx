import AsideCta from "@/components/homepage/AsideCta";
import Banner from "@/components/homepage/Banner";
import CreateRfq from "@/components/homepage/CreateRfq";
import MainCta from "@/components/homepage/MainCta";
import ProductList from "@/components/homepage/ProductList";
import Recommended from "@/components/homepage/Recommended";
import ProductCard from "@/components/product/ProductCard";
import SupplierCard from "@/components/supplier/SupplierCard";

export default function Home() {
  return (
    <main className="bg-bg-main-pale">
      <div className="container mx-auto px-4 pb-10 pt-5 lg:px-20 xl:px-34">
        <div className="relative flex items-start gap-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-6 rounded-lg bg-white p-4">
              <Banner data={{ style: "horizontal" }} />
              <Recommended />
            </div>
            <Banner data={{ style: "vertical" }} />
            <CreateRfq />
            <Banner data={{ style: "horizontal" }} />
            <ProductList />
            <CreateRfq className="!mt-6" />
            <MainCta className="!mt-6" />
          </div>
          <aside className="sticky top-5 w-64 space-y-3">
            <ProductCard data="1" />
            <SupplierCard data="1" />
            <AsideCta />
          </aside>
        </div>
      </div>
    </main>
  );
}
