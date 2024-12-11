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
          <span className="icon-[octicon--filter-16] size-5" />
          <span>{t("form.headerSearch.advanced")}</span>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-dialog-overlay-fade-in">
          <Dialog.Content className="fixed left-1/2 top-1/2 w-145 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none data-[state=open]:animate-dialog-content-fade-in-zoom">
            <Dialog.Title className="text-x2xl font-bold text-fg-text-main-hc">
              {t("form.headerSearch.filter")}
            </Dialog.Title>
            <Dialog.Description className="text-sm text-fg-text-main-lc">
              Filter your results
            </Dialog.Description>
            <div className="mt-6">
              <p className="text-sm font-medium text-fg-text-main">
                {t("form.headerSearch.countryOfOrigin")}
              </p>
              <FilterCountries
                value={selectedCountry}
                onValueChange={setSelectedCountry}
              />
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium text-fg-text-main">
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
