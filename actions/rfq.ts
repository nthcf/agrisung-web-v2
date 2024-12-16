"use server";

import { auth } from "@/auth";
import { createRfq } from "@/libs/portal";

function getString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export async function submitRfq(
  state: {
    success: boolean;
  },
  formData: FormData,
) {
  const session = await auth();

  const data = {
    supplier: getString(formData.get("supplier")),
    product: getString(formData.get("product")),
    productId: getString(formData.get("productId")),
    detail: getString(formData.get("detail")),
    email: getString(formData.get("email")),
    firstName: getString(formData.get("firstName")),
    lastName: getString(formData.get("lastName")),
    company: getString(formData.get("company")),
    contactNumber: getString(formData.get("contactNumber")),
  };

  await createRfq(
    {
      supplier_name: data.supplier,
      product_name: data.product,
      product_id: data.productId,
      detail: data.detail,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      company_name: data.company,
      contact_number: data.contactNumber,
    },
    session?.user.accessToken,
  );

  return {
    success: true,
  };
}
