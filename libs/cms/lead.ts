import camelcaseKeys from "camelcase-keys";

import { BASE_URL } from "./config";
import { ApiResp, Lead } from "./types";

export async function createLead(body: {
  additional_info?: string;
  company?: string;
  email?: string;
  message?: string;
  name?: string;
  phone?: string;
  type?: string;
}) {
  const url = new URL("/api/leads", BASE_URL);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: body }),
  });

  if (!res.ok) {
    throw new Error("Failed to create lead!");
  }

  const json = await res.json();

  return camelcaseKeys<ApiResp<Lead>>(json, { deep: true });
}
