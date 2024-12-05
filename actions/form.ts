"use server";

import { createContact, createUser } from "@/libs/portal";

function getString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export async function submitContactForm(
  state: {
    success: boolean;
  },
  formData: FormData,
) {
  const data = {
    email: getString(formData.get("email")),
    firstName: getString(formData.get("firstName")),
    lastName: getString(formData.get("lastName")),
    company: getString(formData.get("company")),
    contactNumber: getString(formData.get("contactNumber")),
    message: getString(formData.get("message")),
  };

  await createContact({
    email: data.email,
    first_name: data.firstName,
    last_name: data.lastName,
    company_name: data.company,
    contact_number: data.contactNumber,
    message: data.message,
  });

  return {
    success: true,
  };
}

export async function submitSignupForm(
  state: {
    success: boolean;
  },
  formData: FormData,
) {
  const data = {
    email: getString(formData.get("email")),
    firstName: getString(formData.get("firstName")),
    lastName: getString(formData.get("lastName")),
    company: getString(formData.get("company")),
    contactNumber: getString(formData.get("contactNumber")),
  };

  await createUser({
    email: data.email,
    first_name: data.firstName,
    last_name: data.lastName,
    company_name: data.company,
    contact_number: data.contactNumber,
  });

  return {
    success: true,
  };
}
