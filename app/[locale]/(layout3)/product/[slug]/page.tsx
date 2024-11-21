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

  const { data: ps } = await getProduct(slug);

  const pro = ps[0];

  const { data: ss } = await getSupplier(pro.suppliers[0].slug);

  const sup = ss[0];

  return (
    <main className="bg-bg-main-pale">
      <Breadcrumb data={[{ link: pro.slug, text: pro.name, active: true }]} />
      <div className="container mx-auto space-y-4 px-4 py-5 lg:px-20 xl:px-34">
        <div className="relative flex items-start gap-6">
          <div className="flex-1 space-y-4">
            <div className="space-y-3 rounded-lg bg-white p-4">
              <h1 className="text-x2xl font-bold text-fg-text-main-hc">
                {pro.name}
              </h1>
              <SupplierInfoBar data={sup} />
              <DetailProductCarousel data={pro} />
            </div>
            <DetailProductSpecs data={pro} />
            <DetailProductSupplier data={sup} />
          </div>
          <aside className="sticky top-5 w-96 space-y-3">
            <DetailProductDescriptionPrice data={pro} />
          </aside>
        </div>
        <DetailProductSupplierProducts
          data={sup.products.slice(0, 8)}
          slug={sup.slug}
          total={sup.products.length}
        />
        <RfqForm1 />
      </div>
    </main>
  );
}
