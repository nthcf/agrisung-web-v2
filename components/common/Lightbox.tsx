/* eslint-disable @next/next/no-img-element */

"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { Media } from "@/libs/cms";

type LightboxProps = React.PropsWithChildren<{
  data: Media | string;
  trigger?: React.ReactNode;
}>;

export default function Lightbox({ data, trigger }: LightboxProps) {
  return (
    <Dialog.Root>
      {trigger}
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-dialog-overlay-fade-in fixed inset-0 z-900 bg-black/60" />
        <Dialog.Content className="data-[state=open]:animate-dialog-content-fade-in-zoom fixed top-1/2 left-1/2 z-1000 rounded-md bg-white p-4 focus:outline-hidden">
          <VisuallyHidden.Root>
            <Dialog.Title>Lightbox</Dialog.Title>
            <Dialog.Description>Lightbox</Dialog.Description>
          </VisuallyHidden.Root>
          {typeof data === "string" ? (
            <iframe
              width="832"
              height="468"
              src={`https://www.youtube.com/embed/${data}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <img src={data.url} alt={data.name} />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
