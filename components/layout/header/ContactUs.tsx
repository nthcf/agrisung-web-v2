"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import { useState } from "react";

import ContactUsForm from "@/components/form/ContactUsForm";

export default function ContactUs() {
  const [fk, setFk] = useState(0);

  const t = useTranslations();

  return (
    <ContactUsForm
      key={fk}
      trigger={
        <Trigger className="cursor-pointer text-xs">
          {t("nav.topBar.contactUs")}
        </Trigger>
      }
      onReset={() => {
        setFk(fk + 1);
      }}
    />
  );
}
