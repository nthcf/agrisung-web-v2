import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { allFields, mediaFields } from "./helpers";
import { ApiResp, HomeConfigV2 } from "./types";

export async function getPublicPriceList(locale = "en") {
  const search = qs.stringify({
    populate: {
      public_price_list: allFields,
    },
    locale,
  });
  const url = new URL("/api/homeconfigv2?" + search, BASE_URL);

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<HomeConfigV2>>(json, { deep: true });
}

export async function getSearchBanner(locale = "en") {
  const search = qs.stringify({
    populate: {
      search_result_banners: {
        populate: {
          img_media: mediaFields,
        },
      },
    },
    locale,
  });
  const url = new URL("/api/homeconfigv2?" + search, BASE_URL);

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<HomeConfigV2>>(json, { deep: true });
}

export async function getRecommendedSuppliers(locale = "en") {
  const search = qs.stringify({
    populate: {
      recommended: {
        populate: {
          suppliers: {
            populate: {
              suppliers: {
                populate: {
                  logo_media: mediaFields,
                  cover_media: mediaFields,
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

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<HomeConfigV2>>(json, { deep: true });
}

export async function getHomeConfigV2(locale = "en") {
  const search = qs.stringify({
    populate: {
      homepage_banners: {
        populate: {
          img_media: mediaFields,
        },
      },
      featured_product: {
        populate: {
          cover_media: mediaFields,
          supplier: { fields: ["name", "slug"] },
          currency: allFields,
        },
      },
      featured_supplier: {
        populate: {
          logo_media: mediaFields,
          cover_media: mediaFields,
        },
      },
      recommended: {
        populate: {
          products: {
            populate: {
              products: {
                populate: {
                  currency: allFields,
                  cover_media: mediaFields,
                  supplier: { fields: ["name", "slug"] },
                },
              },
            },
          },
          suppliers: {
            populate: {
              suppliers: {
                populate: {
                  logo_media: mediaFields,
                  cover_media: mediaFields,
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

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<HomeConfigV2>>(json, { deep: true });
}
