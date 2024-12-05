import camelcaseKeys from "camelcase-keys";

import { BASE_URL } from "./config";

export async function createContact(body: {
  email: string;
  first_name: string;
  last_name: string;
  company_name: string;
  contact_number: string;
  message: string;
}) {
  const url = new URL("/oms-backend/v1/crm/contact-form", BASE_URL);

  const raw = JSON.stringify(body);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  });

  if (!res.ok) {
    throw new Error("Failed to create RFQ!");
  }

  const json = await res.json();

  return camelcaseKeys(json, { deep: true });
}

export async function createUser(body: {
  email: string;
  first_name: string;
  last_name: string;
  company_name: string;
  contact_number: string;
}) {
  const url = new URL("/oms-backend/v1/crm/registration-form", BASE_URL);

  const raw = JSON.stringify(body);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: raw,
  });

  if (!res.ok) {
    throw new Error("Failed to create RFQ!");
  }

  const json = await res.json();

  return camelcaseKeys(json, { deep: true });
}
