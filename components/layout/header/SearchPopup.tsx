"use client";

import { Trigger } from "@radix-ui/react-dialog";

import Button from "@/components/common/Button";
import SearchPopupForm from "@/components/form/SearchPopupForm";

export default function SearchPopup() {
  return (
    <SearchPopupForm
      trigger={
        <Trigger asChild>
          <Button color="gray" size="icon-lg">
            <span className="icon-[octicon--search-16] size-5" />
          </Button>
        </Trigger>
      }
    />
  );
}
