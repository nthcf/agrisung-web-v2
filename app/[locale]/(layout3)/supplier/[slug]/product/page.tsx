import { notFound } from "next/navigation";

import RfqForm1 from "@/components/form/RfqForm1";
import DetailSupplierCover from "@/components/supplier/DetailSupplierCover";
import DetailSupplierHeader from "@/components/supplier/DetailSupplierHeader";
import DetailSupplierProducts from "@/components/supplier/DetailSupplierProducts";
import DetailSupplierTabs from "@/components/supplier/DetailSupplierTabs";
import { getSupplier } from "@/libs/cms";

export default async function SupplierDetailProducts({
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

  return (
    <main>
      <DetailSupplierCover data={sup} />
      <DetailSupplierHeader data={sup} />
      <DetailSupplierTabs slug={slug} />
      <div className="bg-bg-main-pale">
        <div className="container mx-auto space-y-4 px-4 py-4 lg:px-20 xl:px-34">
          <DetailSupplierProducts
            data={sup.products ?? []}
            slug={sup.slug}
            hideViewAll
          />
          <RfqForm1 />
        </div>
      </div>
    </main>
  );
}
