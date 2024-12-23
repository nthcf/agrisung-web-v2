"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import { useState } from "react";

import ContactUsForm from "@/components/form/ContactUsForm";
import Button from "../common/Button";

export default function ContactUs() {
  const [fk, setFk] = useState(0);

  const t = useTranslations();

  return (
    <ContactUsForm
      key={fk}
      trigger={
        <Trigger asChild>
          <Button size="lg">{t("page.aboutUs.heroSection.button")}</Button>
        </Trigger>
      }
      onReset={() => {
        setFk(fk + 1);
      }}
    />
  );
}
