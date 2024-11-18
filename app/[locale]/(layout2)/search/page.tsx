import RfqForm1 from "@/components/form/RfqForm1";
import HeaderAndFilter from "@/components/search/HeaderAndFilter";
import NoResult from "@/components/search/NoResult";
import Result from "@/components/search/Result";
import { searchProducts } from "@/libs/cms";

async function DoSearch({ q }: { q: string | string[] }) {
  const qstr = typeof q === "string" ? q : q.join(",");
  const { data } = await searchProducts(qstr);

  return (
    <main className="bg-bg-main-pale">
      <div className="container mx-auto px-4 py-5 lg:px-20 xl:px-34">
        <HeaderAndFilter q={q} total={data.total} />
        {data.total === 0 ? (
          <NoResult />
        ) : (
          <>
            <Result data={data.products} />
            <RfqForm1 className="mt-4" />
          </>
        )}
      </div>
    </main>
  );
}

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q } = await searchParams;

  if (!q) {
    return (
      <main className="bg-bg-main-pale">
        <div className="container mx-auto px-4 pb-20 pt-5 lg:px-20 xl:px-34">
          <NoResult />
        </div>
      </main>
    );
  }

  return <DoSearch q={q} />;
}
