import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { allFields, mediaFields } from "./helpers";
import { ApiResp, Product } from "./types";

export async function getProducts(page: number, locale = "en") {
  const search = qs.stringify({
    locale,
    pagination: {
      page,
      pageSize: 20,
    },
    populate: {
      cover_media: mediaFields,
      origin: allFields,
      process_type: allFields,
      supplier: {
        populate: {
          logo_media: mediaFields,
        },
      },
    },
  });
  const url = new URL("/api/products?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<Product[]>>(json, { deep: true });
}

export async function getProduct(slug: string, locale = "en") {
  const search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    locale,
    populate: {
      cover_media: mediaFields,
      currency: allFields,
      images: mediaFields,
      origin: allFields,
      payment_terms: allFields,
      process_type: allFields,
      raw_product: {
        fields: ["name"],
      },
      samples: allFields,
      shipments: allFields,
      supplier: {
        populate: {
          country: allFields,
          logo_media: mediaFields,
        },
      },
      varieties: allFields,
    },
  });
  const url = new URL("/api/products?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  if (json.data.length === 0) {
    return undefined;
  }

  return camelcaseKeys<ApiResp<Product[]>>(json, { deep: true });
}

export async function getProductsByRawProduct(name: string, locale = "en") {
  const search = qs.stringify({
    filters: {
      raw_product: {
        name: {
          $eq: name,
        },
      },
    },
    locale,
    populate: {
      cover_media: mediaFields,
      origin: "*",
      process_type: "*",
      supplier: {
        populate: {
          country: "*",
          logo_media: mediaFields,
        },
      },
    },
  });
  const url = new URL("/api/products?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  if (json.data.length === 0) {
    throw new Error("Failed to fetch data!");
  }

  return camelcaseKeys<ApiResp<Product[]>>(json, { deep: true });
}

export async function searchProducts(
  q: string,
  origin: string,
  certs: string,
  locale = "en",
) {
  const search = qs.stringify({
    certs,
    keyword: q,
    locale,
    originCode: origin,
  });
  const url = new URL("/api/products/search?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<{ products: Product[]; total: number }>>(json, {
    deep: true,
  });
}

export async function getSuggestion(locale = "en") {
  const search = qs.stringify({
    locale,
  });
  const url = new URL("/api/products/recommend?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<string[]>>(json, {
    deep: true,
  });
}
