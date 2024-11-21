"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";

import { type Certification } from "@/libs/cms";

type SupplierCertProps = {
  data: Certification;
};

export default function SupplierCert({ data }: SupplierCertProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="relative mx-auto size-20 overflow-hidden rounded bg-bg-brand-bright">
            {data.logoMedia && (
              <Image
                src={data.logoMedia.url}
                alt={data.name}
                sizes="100%"
                fill
                style={{ objectFit: "contain" }}
              />
            )}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-bg-main-strong rounded p-2 text-sm text-fg-text-on-main-hc"
            sideOffset={5}
          >
            {data.name}
            <Tooltip.Arrow className="fill-bg-main-strong" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
