import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { mediaFields } from "./helpers";
import { ApiResp, RawProduct } from "./types";

export async function getRawProducts(locale = "en") {
  const search = qs.stringify({
    locale,
    populate: {
      cover_media: mediaFields,
      products: {
        populate: {
          cover_media: mediaFields,
        },
      },
    },
  });
  const url = new URL("/api/raw-products?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<RawProduct[]>>(json, { deep: true });
}
