import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { allFields, mediaFields } from "./helpers";
import { ApiResp, Product } from "./types";

export async function getProducts(page: number, locale = "en") {
  const search = qs.stringify({
    populate: {
      cover_media: mediaFields,
      origin: allFields,
      supplier: {
        populate: {
          logo_media: mediaFields,
        },
      },
      process_type: allFields,
    },
    pagination: {
      page,
      pageSize: 20,
    },
    locale,
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
    populate: {
      cover_media: mediaFields,
      images: mediaFields,
      origin: allFields,
      supplier: {
        populate: {
          logo_media: mediaFields,
          country: allFields,
        },
      },
      process_type: allFields,
      raw_product: {
        fields: ["name"],
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
    locale,
  });
  const url = new URL("/api/products?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  if (json.data.length === 0) {
    throw new Error("Not found product!");
  }

  return camelcaseKeys<ApiResp<Product[]>>(json, { deep: true });
}

export async function getProductsByRawProduct(name: string, locale = "en") {
  const search = qs.stringify({
    populate: {
      cover_media: mediaFields,
      origin: "*",
      supplier: {
        populate: {
          logo_media: mediaFields,
          country: "*",
        },
      },
      process_type: "*",
    },
    filters: {
      raw_product: {
        name: {
          $eq: name,
        },
      },
    },
    locale,
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
    keyword: q,
    originCode: origin,
    certs,
    locale,
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
