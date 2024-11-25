import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { allFields, mediaFields } from "./helpers";
import { ApiResp, Supplier } from "./types";

export async function getSuppliers(locale = "en") {
  const search = qs.stringify({
    populate: {
      logo_media: mediaFields,
      country: allFields,
      products: {
        populate: {
          cover_media: mediaFields,
          origin: allFields,
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
      country: allFields,
      export_history: allFields,
      products: {
        populate: {
          cover_media: mediaFields,
          origin: allFields,
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
      certifications: {
        populate: {
          logo_media: mediaFields,
        },
      },
      medias: mediaFields,
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
    throw new Error("Not found supplier!");
  }

  return camelcaseKeys<ApiResp<Supplier[]>>(json, { deep: true });
}
