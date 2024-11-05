import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { mediaFields } from "./helpers";
import { ApiResp, Supplier } from "./types";

export async function getSuppliers(locale = "en") {
  const search = qs.stringify({
    populate: {
      logo_media: mediaFields,
      country: "*",
      products: {
        populate: {
          cover_media: mediaFields,
          origin: "*",
        },
      },
    },
    locale,
  });
  const url = new URL("/api/suppliers?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<Supplier[]>>(json, { deep: true });
}

export async function getSupplier(slug: string, locale = "en") {
  const search = qs.stringify({
    populate: {
      logo_media: mediaFields,
      cover_media: mediaFields,
      certs: mediaFields,
      country: "*",
      export_history: "*",
      products: {
        populate: {
          cover_media: mediaFields,
          origin: "*",
        },
      },
      news: {
        populate: {
          cover_media: mediaFields,
        },
      },
      technologies: {
        populate: {
          cover_media: mediaFields,
        },
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
    locale,
  });
  const url = new URL("/api/suppliers?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  if (json.data.length === 0) {
    throw new Error("Failed to fetch data!");
  }

  return camelcaseKeys<ApiResp<Supplier[]>>(json, { deep: true });
}
