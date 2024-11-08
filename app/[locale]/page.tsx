import AsideCta from "@/components/homepage/AsideCta";
import Banner from "@/components/homepage/Banner";
import CreateRfq from "@/components/homepage/CreateRfq";
import MainCta from "@/components/homepage/MainCta";
import ProductList from "@/components/homepage/ProductList";
import Recommended from "@/components/homepage/Recommended";
import ProductCard from "@/components/product/ProductCard";
import SupplierCard from "@/components/supplier/SupplierCard";
import { getHomeConfigV2, getProducts } from "@/libs/cms";

export default async function Home() {
  const { data: hcf } = await getHomeConfigV2();
  const { data: prd } = await getProducts(1);

  const banner1 = hcf.banners.find((b) => b.position === "pos1");
  const banner2 = hcf.banners.find((b) => b.position === "pos2");
  const banner3 = hcf.banners.find((b) => b.position === "pos3");

  return (
    <main className="bg-bg-main-pale">
      <div className="container mx-auto px-4 pb-10 pt-5 lg:px-20 xl:px-34">
        <div className="relative flex items-start gap-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-6 rounded-lg bg-white p-4">
              {banner1 && <Banner data={banner1} />}
              <Recommended data={hcf.recommended} />
            </div>
            {banner2 && <Banner data={banner2} />}
            <CreateRfq />
            {banner3 && <Banner data={banner3} />}
            <ProductList data={prd} />
            <CreateRfq className="!mt-6" />
            <MainCta className="!mt-6" />
          </div>
          <aside className="sticky top-5 w-64 space-y-3">
            <ProductCard data={hcf.featuredProduct} featured />
            <SupplierCard data={hcf.featuredSupplier} featured />
            <AsideCta />
          </aside>
        </div>
      </div>
    </main>
  );
}
