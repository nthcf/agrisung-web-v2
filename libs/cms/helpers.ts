import { BASE_URL } from "./config";

export function prefixMediaUrl(url: string) {
  if (url.startsWith("http")) {
    return url;
  }

  return BASE_URL + url;
}

export const allFields = {
  fields: "*",
};

export const mediaFields = {
  fields: ["alternativeText", "name", "url"],
};
