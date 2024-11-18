import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { allFields, mediaFields } from "./helpers";
import { ApiResp, HomeConfig } from "./types";

export async function getHeaderPriceTable(locale = "en") {
  const search = qs.stringify({
    populate: {
      header_price_table: allFields,
    },
    locale,
  });
  const url = new URL("/api/homeconfig?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  const homeConfig = camelcaseKeys<ApiResp<HomeConfig>>(json, { deep: true });

  return homeConfig.data.headerPriceTable;
}

export async function getHomeConfig(locale = "en") {
  const search = qs.stringify({
    populate: {
      harvest_maps: {
        populate: {
          data: {
            populate: {
              cover_media: mediaFields,
            },
          },
        },
      },
      market_follow_products: {
        populate: {
          cover_media: mediaFields,
        },
      },
    },
    locale,
  });
  const url = new URL("/api/homeconfig?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<HomeConfig>>(json, { deep: true });
}
