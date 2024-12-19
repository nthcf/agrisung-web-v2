import RfqForm1 from "@/components/form/RfqForm1";
import ProductListAndLoadMore from "@/components/product/ProductListAndLoadMore";
import { getProducts } from "@/libs/cms";

export default async function ProductList() {
  const { data, meta } = await getProducts(1);

  return (
    <main className="bg-bg-main-pale">
      <div className="container mx-auto px-4 pt-4 pb-10 lg:px-20 xl:px-34">
        <ProductListAndLoadMore
          initialData={data}
          initialHasMore={meta.pagination.pageCount > 1}
          initialPage={1}
        />
        <section className="mt-10">
          <RfqForm1 />
        </section>
      </div>
    </main>
  );
}
