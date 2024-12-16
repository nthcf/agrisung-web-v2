"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import SignUpForm from "@/components/form/SignUpForm";
import { Trigger } from "@radix-ui/react-dialog";

export default function SignUp() {
  const [fk, setFk] = useState(0);

  const t = useTranslations();

  return (
    <SignUpForm
      key={fk}
      trigger={
        <Trigger className="text-xs font-bold">
          {t("nav.topBar.signIn")}
        </Trigger>
      }
      onReset={() => {
        setFk(fk + 1);
      }}
    />
  );
}
