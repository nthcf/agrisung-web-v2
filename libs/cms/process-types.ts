import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { mediaFields } from "./helpers";
import { ApiResp, ProcessType } from "./types";

export async function getProcessTypes(locale = "en") {
  const search = qs.stringify({
    populate: {
      cover_media: mediaFields,
    },
    locale,
  });
  const url = new URL("/api/process-types?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<ProcessType[]>>(json, { deep: true });
}
