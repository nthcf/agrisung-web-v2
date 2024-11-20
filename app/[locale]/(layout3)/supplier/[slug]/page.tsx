import RfqForm1 from "@/components/form/RfqForm1";
import DetailSupplierCover from "@/components/supplier/DetailSupplierCover";
import DetailSupplierHeader from "@/components/supplier/DetailSupplierHeader";
import DetailSupplierMedia from "@/components/supplier/DetailSupplierMedia";
import DetailSupplierOverview from "@/components/supplier/DetailSupplierOverview";
import DetailSupplierProducts from "@/components/supplier/DetailSupplierProducts";
import DetailSupplierTabs from "@/components/supplier/DetailSupplierTabs";
import { getSupplier } from "@/libs/cms";

export default async function SupplierDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: ss } = await getSupplier(slug);

  const sup = ss[0];

  return (
    <main>
      <DetailSupplierCover data={sup} />
      <DetailSupplierHeader data={sup} />
      <DetailSupplierTabs slug={slug} />
      <div className="bg-bg-main-pale">
        <div className="container mx-auto space-y-4 px-4 py-4 lg:px-20 xl:px-34">
          <DetailSupplierOverview data={sup} />
          <DetailSupplierProducts data={sup.products.slice(0, 8)} />
          {sup.medias && <DetailSupplierMedia data={sup.medias} />}
          <RfqForm1 />
        </div>
      </div>
    </main>
  );
}
