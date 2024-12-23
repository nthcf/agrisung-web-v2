import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { allFields, mediaFields } from "./helpers";
import { ApiResp, Supplier } from "./types";

export async function getSuppliers(locale = "en") {
  const search = qs.stringify({
    populate: {
      logo_media: mediaFields,
      cover_media: mediaFields,
      export_histories: allFields,
      products: {
        populate: {
          raw_product: {
            fields: ["name"],
          },
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
    filters: {
      slug: {
        $eq: slug,
      },
    },
    locale,
    populate: {
      certifications: {
        populate: {
          logo_media: mediaFields,
        },
      },
      country: allFields,
      cover_media: mediaFields,
      export_histories: allFields,
      logo_media: mediaFields,
      medias: mediaFields,
      products: {
        populate: {
          cover_media: mediaFields,
          currency: allFields,
          origin: allFields,
          supplier: {
            fields: ["name", "slug"],
          },
        },
      },
      technologies: {
        populate: {
          cover_media: mediaFields,
        },
      },
    },
  });
  const url = new URL("/api/suppliers?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  if (json.data.length === 0) {
    return undefined;
  }

  return camelcaseKeys<ApiResp<Supplier[]>>(json, { deep: true });
}
