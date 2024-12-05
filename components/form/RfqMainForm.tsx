"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { cx } from "class-variance-authority";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { submitRfq } from "@/actions/rfq";
import { type Product, type Supplier } from "@/libs/cms";

import Button from "../common/Button";

type RfqMainFormProps = {
  productName?: string;
  product?: Product;
  supplier?: Supplier;
  trigger?: React.ReactNode;
};

export default function RfqMainForm({
  productName,
  product,
  supplier,
  trigger,
}: RfqMainFormProps) {
  const [open, setOpen] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const [state, action, pending] = useActionState(submitRfq, {
    success: false,
  });

  const [femail, setFemail] = useLocalStorage("rfq_femail", "");
  const [ffname, setFfname] = useLocalStorage("rfq_ffname", "");
  const [flname, setFlname] = useLocalStorage("rfq_flname", "");
  const [fcompany, setFcompany] = useLocalStorage("rfq_fcompany", "");
  const [fcontact, setFcontact] = useLocalStorage("rfq_fcontact", "");

  const t = useTranslations();

  useEffect(
    () => {
      if (femail && ffname && flname && fcompany && fcontact) {
        setHasValue(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (state.success) {
    return (
      <Dialog.Root open={open} onOpenChange={setOpen}>
        {trigger ? trigger : <Dialog.Trigger />}
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-dialog-overlay-fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-108 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 focus:outline-none">
            <Dialog.Close className="absolute right-6 top-6">
              <span className="icon-[octicon--x-16] size-6 text-fg-text-main-hc">
                x
              </span>
            </Dialog.Close>
            <div className="flex justify-center">
              <div className="icon-[octicon--check-circle-fill-16] size-16 text-fg-icon-success-deep" />
            </div>
            <Dialog.Title className="mt-3 text-center text-2xl font-semibold text-fg-text-main-hc">
              {t("form.mainRfq.successTitle")}
            </Dialog.Title>
            <Dialog.Description className="mt-3 text-center text-fg-text-main">
              {t("form.mainRfq.successMessage", { email: femail })}
            </Dialog.Description>
            <Button
              className="mt-8 w-full"
              size="lg"
              onClick={() => {
                setOpen(false);
              }}
            >
              {t("form.mainRfq.successButton")}
            </Button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {trigger ? trigger : <Dialog.Trigger />}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[999] bg-black/60 data-[state=open]:animate-dialog-overlay-fade-in" />
        <Dialog.Content className="fixed bottom-0 right-0 top-0 z-[1000] w-145 bg-bg-main-pale p-6 focus:outline-none">
          <form action={action}>
            <Dialog.Title className="text-x2xl font-bold text-fg-text-main-hc">
              {t("form.mainRfq.title")}
            </Dialog.Title>
            <Dialog.Description className="text-sm text-fg-text-main">
              {supplier ? (
                <>
                  {t("form.mainRfq.to")}{" "}
                  <span className="text-fg-text-main-hc">{supplier?.name}</span>
                </>
              ) : (
                <span>{t("form.mainRfq.description")}</span>
              )}
            </Dialog.Description>
            <input type="hidden" name="supplier" value={supplier?.name} />
            <div className="mt-6 rounded-lg border border-fg-border-main bg-white p-6">
              <h4 className="font-bold text-fg-text-main-hc">
                {t("form.mainRfq.productInfomation")}
              </h4>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                    {t("form.mainRfq.productNameLabel")}
                  </p>
                  {product ? (
                    <div className="flex items-center gap-3">
                      <div className="relative aspect-square w-10 overflow-hidden rounded bg-bg-brand-bright">
                        {product.coverMedia && (
                          <Image
                            src={product.coverMedia.url}
                            alt={product.name}
                            sizes="100%"
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        )}
                      </div>
                      <p className="text-sm text-fg-text-main-hc">
                        {product.name}
                      </p>
                      <input
                        type="hidden"
                        name="product"
                        value={product.name}
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      className={cx(
                        "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                        "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                      )}
                      placeholder={t("form.mainRfq.productNamePlaceholder")}
                      name="product"
                      required
                      defaultValue={productName}
                    />
                  )}
                </div>
                <div className="mt-4 flex gap-3">
                  <p className="mt-2 w-30 shrink-0 text-right text-sm text-fg-text-main">
                    {t("form.mainRfq.detailLabel")}
                  </p>
                  <textarea
                    className="w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0"
                    rows={6}
                    placeholder={t("form.mainRfq.detailPlaceholder")}
                    name="detail"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="relative mt-6 rounded-lg border border-fg-border-main bg-white p-6">
              {hasValue && (
                <Button
                  className="absolute right-6 top-6"
                  color="gray"
                  size="sm"
                  type="button"
                  onClick={() => {
                    setHasValue(false);
                  }}
                >
                  <span className="icon-[octicon--pencil-16] size-4 text-fg-icon-main" />
                  {t("shared.edit")}
                </Button>
              )}
              <h4 className="font-bold text-fg-text-main-hc">
                {t("form.mainRfq.contactInfomation")}
              </h4>
              {!hasValue && (
                <p className="mt-1 text-sm font-medium text-fg-text-main-lc">
                  {t("form.mainRfq.contactDescription")}
                </p>
              )}
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                    {!hasValue && (
                      <span className="text-fg-text-danger">*</span>
                    )}
                    {t("form.mainRfq.emailLabel")}
                  </p>
                  <input
                    type="email"
                    className={cx(
                      "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                      "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                    )}
                    placeholder={t("form.mainRfq.emailPlaceholder")}
                    name="email"
                    required
                    defaultValue={femail}
                    readOnly={hasValue}
                    onChange={(e) => {
                      setFemail(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                    {!hasValue && (
                      <span className="text-fg-text-danger">*</span>
                    )}
                    {t("form.mainRfq.fullNameLabel")}
                  </p>
                  <input
                    type="text"
                    className={cx(
                      "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                      "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                    )}
                    placeholder={t("form.mainRfq.firstNamePlaceholder")}
                    name="firstName"
                    required
                    defaultValue={ffname}
                    readOnly={hasValue}
                    onChange={(e) => {
                      setFfname(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    className={cx(
                      "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                      "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                    )}
                    placeholder={t("form.mainRfq.lastNamePlaceholder")}
                    name="lastName"
                    required
                    defaultValue={flname}
                    readOnly={hasValue}
                    onChange={(e) => {
                      setFlname(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                    {!hasValue && (
                      <span className="text-fg-text-danger">*</span>
                    )}
                    {t("form.mainRfq.companyLabel")}
                  </p>
                  <input
                    type="text"
                    className={cx(
                      "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                      "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                    )}
                    placeholder={t("form.mainRfq.companyPlaceholder")}
                    name="company"
                    required
                    defaultValue={fcompany}
                    readOnly={hasValue}
                    onChange={(e) => {
                      setFcompany(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                    {!hasValue && (
                      <span className="text-fg-text-danger">*</span>
                    )}
                    {t("form.mainRfq.contactNumberLabel")}
                  </p>
                  <input
                    type="text"
                    className={cx(
                      "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                      "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                    )}
                    placeholder={t("form.mainRfq.contactNumberPlaceholder")}
                    name="contactNumber"
                    required
                    defaultValue={fcontact}
                    readOnly={hasValue}
                    onChange={(e) => {
                      setFcontact(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-full bg-white p-6">
              <button
                className="w-full rounded bg-bg-brand py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
                type="submit"
                disabled={pending}
              >
                {t("form.mainRfq.button")}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
