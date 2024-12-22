import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { mediaFields } from "./helpers";
import { Product, Supplier } from "./types";

export async function search(q: string) {
  const search = qs.stringify({
    filters: {
      name: {
        $containsi: q,
      },
    },
    populate: {
      cover_media: mediaFields,
    },
  });
  const url = new URL("/api/products?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    return { data: { products: [], suppliers: [] } };
  }

  const json = await res.json();

  return camelcaseKeys<{
    data: { products: Product[]; suppliers: Supplier[] };
  }>({ data: { products: json.data, suppliers: [] } }, { deep: true });
}
