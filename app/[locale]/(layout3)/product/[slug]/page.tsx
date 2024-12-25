import { notFound } from "next/navigation";

import RfqForm1 from "@/components/form/RfqForm1";
import Breadcrumb from "@/components/layout/content/Breadcrumb";
import DetailProductCarousel from "@/components/product/DetailProductCarousel";
import DetailProductDescriptionPrice from "@/components/product/DetailProductDescriptionPrice";
import DetailProductSpecs from "@/components/product/DetailProductSpecs";
import DetailProductSupplier from "@/components/product/DetailProductSupplier";
import DetailProductSupplierProducts from "@/components/product/DetailProductSupplierProducts";
import SupplierInfoBar from "@/components/supplier/SupplierInfoBar";
import { getProduct, getSupplier } from "@/libs/cms";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await getProduct(slug);

  if (!res) {
    notFound();
  }

  const pro = res.data[0];

  if (!pro.supplier) {
    notFound();
  }

  const res1 = await getSupplier(pro.supplier.slug);

  if (!res1) {
    notFound();
  }

  const sup = res1.data[0];

  let breadcrumb: { link: string; text: string; active?: boolean }[] = [];

  if (pro.processType) {
    breadcrumb = [
      {
        link: `/search?q=${pro.processType.name}`,
        text: pro.processType.name,
      },
    ];
  }

  if (pro.rawProduct) {
    breadcrumb = [
      ...breadcrumb,
      {
        link: `/search?q=${pro.rawProduct.name}`,
        text: pro.rawProduct.name,
        active: true,
      },
    ];
  }

  return (
    <main className="bg-bg-main-pale">
      <Breadcrumb data={breadcrumb} />
      <div className="container mx-auto space-y-4 px-4 py-5 lg:px-20 xl:px-34">
        <div className="relative flex items-start gap-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-3 rounded-lg bg-white p-4">
              <h1 className="text-x2xl text-fg-text-main-hc font-bold">
                {pro.name}
              </h1>
              <SupplierInfoBar data={sup} />
              <DetailProductCarousel data={pro} />
            </div>
            <DetailProductSpecs data={pro} />
            <DetailProductSupplier data={sup} />
          </div>
          <aside className="sticky top-5 w-96 space-y-3">
            <DetailProductDescriptionPrice product={pro} supplier={sup} />
          </aside>
        </div>
        {sup.products && (
          <DetailProductSupplierProducts
            data={sup.products.slice(0, 8)}
            slug={sup.slug}
            total={sup.products.length}
          />
        )}
        <RfqForm1 />
      </div>
    </main>
  );
}
