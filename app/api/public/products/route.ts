import { getProducts } from "@/libs/cms";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, meta } = await getProducts(page);

  const resp = {
    items: data,
    hasMore: meta.pagination.pageCount > page,
  };

  return new Response(JSON.stringify(resp), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
