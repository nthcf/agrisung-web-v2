"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useSession } from "next-auth/react";
import { useState } from "react";

import { trackRfqFormInteraction } from "@/analytics";
import RfqMainForm from "@/components/form/RfqMainForm";

type RfqProps = {
  text: string;
};

export default function Rfq({ text }: RfqProps) {
  const [fk, setFk] = useState(0);

  const { data: session } = useSession();

  return (
    <RfqMainForm
      key={fk}
      trigger={
        <Trigger
          className="cursor-pointer"
          onClick={() => {
            trackRfqFormInteraction("open", session, {
              trigger: "footer",
            });
          }}
        >
          {text}
        </Trigger>
      }
      onReset={() => {
        setFk(fk + 1);
      }}
    />
  );
}
