import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { mediaFields } from "./helpers";
import { ApiResp, HomeConfigV2 } from "./types";

export async function getHomeConfigV2(locale = "en") {
  const search = qs.stringify({
    populate: {
      banners: {
        populate: {
          img_media: mediaFields,
        },
      },
      featured_product: {
        populate: {
          cover_media: mediaFields,
          suppliers: { fields: ["name", "slug"] },
        },
      },
      featured_supplier: {
        populate: {
          logo_media: mediaFields,
        },
      },
      recommended: {
        populate: {
          products: {
            populate: {
              products: {
                populate: {
                  cover_media: mediaFields,
                  suppliers: { fields: ["name", "slug"] },
                },
              },
            },
          },
          suppliers: {
            populate: {
              suppliers: {
                populate: {
                  logo_media: mediaFields,
                },
              },
            },
          },
        },
      },
    },
    locale,
  });
  const url = new URL("/api/homeconfigv2?" + search, BASE_URL);
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<HomeConfigV2>>(json, { deep: true });
}
