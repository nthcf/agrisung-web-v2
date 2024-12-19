import RfqForm1 from "@/components/form/RfqForm1";
import HeaderAndFilter from "@/components/supplier/HeaderAndFilter";
import SupplierCard from "@/components/supplier/SupplierCard";
import { getSuppliers } from "@/libs/cms";

export default async function SupplierList() {
  const { data } = await getSuppliers();

  return (
    <main className="bg-bg-main-pale">
      <div className="container mx-auto px-4 pt-4 pb-10 lg:px-20 xl:px-34">
        <HeaderAndFilter count={data.length} />
        <section className="mt-4 grid grid-cols-3 gap-4">
          {data.map((s) => (
            <SupplierCard
              key={s.id}
              data={s}
              contentClassname="p-3"
              noRoundedBottom
            />
          ))}
        </section>
        <section className="mt-10">
          <RfqForm1 />
        </section>
      </div>
    </main>
  );
}
