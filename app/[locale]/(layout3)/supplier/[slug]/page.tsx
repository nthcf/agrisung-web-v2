import { notFound } from "next/navigation";

import RfqForm1 from "@/components/form/RfqForm1";
import DetailSupplierCover from "@/components/supplier/DetailSupplierCover";
import DetailSupplierHeader from "@/components/supplier/DetailSupplierHeader";
import DetailSupplierMedia from "@/components/supplier/DetailSupplierMedia";
import DetailSupplierOverview from "@/components/supplier/DetailSupplierOverview";
import DetailSupplierProducts from "@/components/supplier/DetailSupplierProducts";
import DetailSupplierRecommended from "@/components/supplier/DetailSupplierRecommended";
import DetailSupplierTabs from "@/components/supplier/DetailSupplierTabs";
import { getRecommendedSuppliers, getSupplier } from "@/libs/cms";

export default async function SupplierDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await getSupplier(slug);

  if (!res) {
    notFound();
  }

  const sup = res.data[0];

  const { data } = await getRecommendedSuppliers();

  return (
    <main>
      <DetailSupplierCover data={sup} />
      <DetailSupplierHeader data={sup} />
      <DetailSupplierTabs slug={slug} />
      <div className="bg-bg-main-pale">
        <div className="container mx-auto space-y-4 px-4 py-4 lg:px-20 xl:px-34">
          <DetailSupplierOverview data={sup} />
          {sup.products && (
            <DetailSupplierProducts
              data={sup.products.slice(0, 8)}
              slug={sup.slug}
            />
          )}
          {(sup.youtubeId || sup.medias) && <DetailSupplierMedia data={sup} />}
          <RfqForm1 hideProductField />
          <DetailSupplierRecommended data={data.recommended.suppliers} />
        </div>
      </div>
    </main>
  );
}
