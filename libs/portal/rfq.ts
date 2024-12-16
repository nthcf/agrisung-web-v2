import camelcaseKeys from "camelcase-keys";

import { BASE_URL } from "./config";

export async function createRfq(
  body: {
    supplier_name: string;
    product_name: string;
    product_id: string;
    detail: string;
    company_name: string;
    contact_number: string;
    first_name: string;
    last_name: string;
    email: string;
  },
  accessToken?: string,
) {
  let headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers = {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  const url = new URL("/oms-backend/v1/crm/rfq", BASE_URL);

  const raw = JSON.stringify(body);

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: raw,
  });

  if (!res.ok) {
    throw new Error("Failed to create RFQ!");
  }

  const json = await res.json();

  return camelcaseKeys(json, { deep: true });
}
