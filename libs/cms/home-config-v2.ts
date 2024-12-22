import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { allFields, mediaFields } from "./helpers";
import { ApiResp, HomeConfigV2 } from "./types";

export async function getPublicPriceList(locale = "en") {
  const search = qs.stringify({
    locale,
    populate: {
      public_price_list: allFields,
    },
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
    locale,
    populate: {
      search_result_banners: {
        populate: {
          img_media: mediaFields,
        },
      },
    },
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
    locale,
    populate: {
      recommended: {
        populate: {
          suppliers: {
            populate: {
              suppliers: {
                populate: {
                  cover_media: mediaFields,
                  export_histories: {
                    fields: ["name"],
                  },
                  logo_media: mediaFields,
                  products: {
                    populate: {
                      raw_product: {
                        fields: ["name"],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
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
    locale,
    populate: {
      featured_product: {
        populate: {
          cover_media: mediaFields,
          currency: allFields,
          supplier: {
            fields: ["name", "slug"],
          },
        },
      },
      featured_supplier: {
        populate: {
          cover_media: mediaFields,
          export_histories: {
            fields: ["name"],
          },
          logo_media: mediaFields,
          products: {
            populate: {
              raw_product: {
                fields: ["name"],
              },
            },
          },
        },
      },
      homepage_banners: {
        populate: {
          img_media: mediaFields,
        },
      },
      recommended: {
        populate: {
          products: {
            populate: {
              products: {
                populate: {
                  cover_media: mediaFields,
                  currency: allFields,
                  supplier: {
                    fields: ["name", "slug"],
                  },
                },
              },
            },
          },
          suppliers: {
            populate: {
              suppliers: {
                populate: {
                  cover_media: mediaFields,
                  export_histories: {
                    fields: ["name"],
                  },
                  logo_media: mediaFields,
                  products: {
                    populate: {
                      raw_product: {
                        fields: ["name"],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  const url = new URL("/api/homeconfigv2?" + search, BASE_URL);

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<HomeConfigV2>>(json, { deep: true });
}
