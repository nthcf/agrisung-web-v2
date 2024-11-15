/* eslint-disable @next/next/no-img-element */
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { Media } from "@/libs/cms";

type LightboxProps = React.PropsWithChildren<{
  data: Media;
}>;

export default function Lightbox({ children, data }: LightboxProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-dialog-overlay-fade-in fixed inset-0 bg-black/60" />
        <Dialog.Content className="data-[state=open]:animate-dialog-content-fade-in-zoom fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4 focus:outline-none">
          <VisuallyHidden.Root asChild>
            <Dialog.Title>Lightbox</Dialog.Title>
          </VisuallyHidden.Root>
          <img src={data.url} alt={data.name} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
