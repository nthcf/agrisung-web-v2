import RfqForm1 from "@/components/form/RfqForm1";
import HeaderAndFilter from "@/components/search/HeaderAndFilter";
import NoResult from "@/components/search/NoResult";
import Result from "@/components/search/Result";
import { searchProducts } from "@/libs/cms";

async function DoSearch({
  q,
  origin = "",
  certs = "",
}: {
  q: string | string[];
  origin?: string | string[];
  certs?: string | string[];
}) {
  const qstr = typeof q === "string" ? q : q.join(",");
  const ostr = typeof origin === "string" ? origin : origin.join(",");
  const cstr = typeof certs === "string" ? certs : certs.join(",");

  const { data } = await searchProducts(qstr, ostr, cstr);

  return (
    <main className="bg-bg-main-pale">
      <div className="container mx-auto px-4 py-5 lg:px-20 xl:px-34">
        <HeaderAndFilter
          q={qstr}
          origin={ostr}
          certs={cstr}
          total={data.total}
        />
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
  const { q, origin, certs } = await searchParams;

  if (!q) {
    return (
      <main className="bg-bg-main-pale">
        <div className="container mx-auto px-4 pb-20 pt-5 lg:px-20 xl:px-34">
          <NoResult />
        </div>
      </main>
    );
  }

  return <DoSearch q={q} origin={origin} certs={certs} />;
}
