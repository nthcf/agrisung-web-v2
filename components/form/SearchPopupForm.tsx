"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState } from "react";

import SearchMainForm from "./SearchMainForm";

type SearchPopupFormProps = {
  trigger: React.ReactNode;
  onReset?: () => void;
};

export default function SearchPopupForm({ trigger }: SearchPopupFormProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {trigger}
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-dialog-overlay-fade-in fixed inset-0 z-900 bg-black/60" />
        <Dialog.Content className="data-[state=open]:animate-dialog-content-fade-in-zoom bg-bg-main-pale fixed top-1/2 left-1/2 z-1000 w-145 rounded-lg p-4 focus:outline-hidden">
          <VisuallyHidden.Root>
            <Dialog.Title>Search</Dialog.Title>
            <Dialog.Description>Search</Dialog.Description>
          </VisuallyHidden.Root>
          <SearchMainForm
            alwaysShowResult
            onSearch={() => {
              setOpen(false);
            }}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
