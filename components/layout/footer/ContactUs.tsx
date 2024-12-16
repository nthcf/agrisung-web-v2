"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useState } from "react";

import ContactUsForm from "@/components/form/ContactUsForm";

type ContactUsProps = {
  text: string;
};

export default function ContactUs({ text }: ContactUsProps) {
  const [fk, setFk] = useState(0);

  return (
    <ContactUsForm
      key={fk}
      trigger={<Trigger className="cursor-pointer">{text}</Trigger>}
      onReset={() => {
        setFk(fk + 1);
      }}
    />
  );
}
