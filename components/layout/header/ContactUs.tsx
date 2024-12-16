"use client";

import { useState } from "react";

import ContactUsForm from "@/components/form/ContactUsForm";

export default function ContactUs() {
  const [fk, setFk] = useState(0);

  return (
    <ContactUsForm
      key={fk}
      onReset={() => {
        setFk(fk + 1);
      }}
    />
  );
}
