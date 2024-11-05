import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { mediaFields } from "./helpers";
import { ApiResp, News } from "./types";

export async function getListNews() {
  const search = qs.stringify({
    populate: {
      cover_media: mediaFields,
    },
    filters: {
      suppliers: {
        $null: true,
      },
    },
    sort: ["createdAt:desc"],
  });
  const url = new URL("/api/list-news?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<News[]>>(json, { deep: true });
}

export async function getListNewsOfSupplier(slug: string) {
  const search = qs.stringify({
    populate: {
      cover_media: mediaFields,
    },
    filters: {
      suppliers: {
        slug: {
          $eq: slug,
        },
      },
    },
  });
  const url = new URL("/api/list-news?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<News[]>>(json, { deep: true });
}

export async function getNews(slug: string) {
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
  const url = new URL("/api/list-news?" + search, BASE_URL);

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
