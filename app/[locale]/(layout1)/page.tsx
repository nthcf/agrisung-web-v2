import { connection } from "next/server";

import Banner from "@/components/common/Banner";
import RfqForm1 from "@/components/form/RfqForm1";
import AsideCta from "@/components/homepage/AsideCta";
import MainCta from "@/components/homepage/MainCta";
import ProductList from "@/components/homepage/ProductList";
import Recommended from "@/components/homepage/Recommended";
import ProductCard from "@/components/product/ProductCard";
import SupplierCard from "@/components/supplier/SupplierCard";
import { getHomeConfigV2, getProducts } from "@/libs/cms";

export default async function Home() {
  await connection();

  const { data: hcf } = await getHomeConfigV2();
  const { data: prd } = await getProducts(1);

  const banner1 = hcf.homepageBanners.find((b) => b.position === "pos1");
  const banner2 = hcf.homepageBanners.find((b) => b.position === "pos2");
  const banner3 = hcf.homepageBanners.find((b) => b.position === "pos3");

  return (
    <main className="bg-bg-main-pale">
      <div className="container mx-auto px-4 pt-5 pb-10 lg:px-20 xl:px-34">
        <div className="relative flex items-start gap-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-6 rounded-lg bg-white p-4">
              {banner1 && <Banner data={banner1} />}
              <Recommended data={hcf.recommended} />
            </div>
            {banner2 && <Banner data={banner2} />}
            <RfqForm1 hideDescription />
            {banner3 && <Banner data={banner3} />}
            <ProductList data={prd} />
            <RfqForm1 className="mt-6!" hideDescription />
            <MainCta className="mt-6!" />
          </div>
          <aside className="sticky top-5 w-64 space-y-3">
            {hcf.featuredProduct && (
              <ProductCard
                className="p-3"
                contentClassname="pt-3"
                data={hcf.featuredProduct}
                featured
              />
            )}
            {hcf.featuredSupplier && (
              <SupplierCard
                className="p-3"
                contentClassname="pt-3"
                data={hcf.featuredSupplier}
                featured
              />
            )}
            <AsideCta />
          </aside>
        </div>
      </div>
    </main>
  );
}
