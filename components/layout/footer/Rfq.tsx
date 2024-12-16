"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useState } from "react";

import RfqMainForm from "@/components/form/RfqMainForm";

type RfqProps = {
  text: string;
};

export default function Rfq({ text }: RfqProps) {
  const [fk, setFk] = useState(0);

  return (
    <RfqMainForm
      key={fk}
      trigger={<Trigger className="cursor-pointer">{text}</Trigger>}
      onReset={() => {
        setFk(fk + 1);
      }}
    />
  );
}
