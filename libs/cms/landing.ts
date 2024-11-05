import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { mediaFields } from "./helpers";
import { ApiResp, News } from "./types";

export async function getLanding(slug: string) {
  const search = qs.stringify({
    populate: {
      cover_media: mediaFields,
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });
  const url = new URL("/api/landings?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  if (json.data.length === 0) {
    throw new Error("Failed to fetch data!");
  }

  return camelcaseKeys<ApiResp<News[]>>(json, { deep: true });
}
