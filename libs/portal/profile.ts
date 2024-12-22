import camelcaseKeys from "camelcase-keys";

import { BASE_URL } from "./config";

export async function createContact(accessToken: string) {
  const url = new URL("/oms-backend/v1/crm/contact", BASE_URL);

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to create RFQ!");
  }

  const json = await res.json();

  return camelcaseKeys(json, { deep: true });
}
