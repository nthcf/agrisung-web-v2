"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { useRouter } from "@/i18n/routing";

import Button from "../common/Button";
import FilterCerts from "./FilterCerts";
import FilterCountries from "./FilterCountries";

type FilterProps = {
  q: string;
  origin: string;
  certs: string;
};

export default function Filters({ q }: FilterProps) {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);

  const t = useTranslations();

  const router = useRouter();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button color="gray">
          <span className="icon-[mdi--filter-outline] size-5" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-dialog-overlay-fade-in fixed inset-0 z-900 bg-black/60">
          <Dialog.Content className="data-[state=open]:animate-dialog-content-fade-in-zoom fixed top-1/2 left-1/2 z-1000 w-145 rounded-md bg-white p-6 focus:outline-hidden">
            <Dialog.Title className="text-x2xl text-fg-text-main-hc font-bold">
              {t("form.headerSearch.filter")}
            </Dialog.Title>
            <Dialog.Description className="text-fg-text-main-lc text-sm">
              {t("form.headerSearch.filterDescription")}
            </Dialog.Description>
            <div className="mt-6">
              <p className="text-fg-text-main text-sm font-medium">
                {t("form.headerSearch.countryOfOrigin")}
              </p>
              <FilterCountries
                value={selectedCountry}
                onValueChange={setSelectedCountry}
              />
            </div>
            <div className="mt-2">
              <p className="text-fg-text-main text-sm font-medium">
                {t("form.headerSearch.certifications")}
              </p>
              <FilterCerts
                selected={selectedCerts}
                onSelect={setSelectedCerts}
              />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Button
                onClick={() => {
                  setSelectedCountry("");
                  setSelectedCerts([]);
                }}
              >
                {t("shared.clear")}
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  router.replace({
                    pathname: "/search",
                    query: {
                      q,
                      origin: selectedCountry,
                      certs: selectedCerts.join(","),
                    },
                  });

                  setOpen(false);
                }}
              >
                {t("shared.apply")}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
