import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { mediaFields } from "./helpers";
import { ApiResp, Technology } from "./types";

export async function getTechnologies(locale = "en") {
  const search = qs.stringify({
    populate: {
      cover_media: mediaFields,
    },
    locale,
  });
  const url = new URL("/api/technologies?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<Technology[]>>(json, { deep: true });
}

export async function getTechnology(slug: string, locale = "en") {
  const search = qs.stringify({
    populate: {
      cover_media: mediaFields,
      suppliers: {
        populate: {
          country: "*",
          logo_media: mediaFields,
          products: { fields: ["name"] },
          technologies: { fields: ["name"] },
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
  const url = new URL("/api/technologies?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  if (json.data.length === 0) {
    throw new Error("Failed to fetch data!");
  }

  return camelcaseKeys<ApiResp<Technology[]>>(json, { deep: true });
}
