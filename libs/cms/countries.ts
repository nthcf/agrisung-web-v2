import camelcaseKeys from "camelcase-keys";
import qs from "qs";

import { BASE_URL } from "./config";
import { ApiResp, Country } from "./types";

export async function getCountries(locale = "en") {
  const search = qs.stringify({
    locale,
  });
  const url = new URL("/api/countries?" + search, BASE_URL);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<Country[]>>(json, { deep: true });
}
