"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { cx } from "cva";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useActionState, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { submitRfq } from "@/actions/rfq";
import { trackRfqFormInteraction } from "@/analytics";
import { type Product, type Supplier } from "@/libs/cms";

import Button from "../common/Button";

type RfqMainFormProps = {
  trigger: React.ReactNode;
  productName?: string;
  product?: Product;
  supplier?: Supplier;
  onReset?: () => void;
};

export default function RfqMainForm({
  productName,
  product,
  supplier,
  trigger,
  onReset,
}: RfqMainFormProps) {
  const [productName2, setProductName2] = useState("");
  const [detail, setDetail] = useState("");
  const [hasContact, setHasContact] = useState(false);

  const [state, action, pending] = useActionState(submitRfq, {
    success: false,
  });

  const { data: session } = useSession();
  const [femail, setFemail] = useLocalStorage("rfq_femail", "");
  const [ffname, setFfname] = useLocalStorage("rfq_ffname", "");
  const [flname, setFlname] = useLocalStorage("rfq_flname", "");
  const [fcompany, setFcompany] = useLocalStorage("rfq_fcompany", "");
  const [fcontact, setFcontact] = useLocalStorage("rfq_fcontact", "");

  const t = useTranslations();

  useEffect(() => {
    if (productName) {
      setProductName2(productName);
    }
  }, [productName]);

  useEffect(
    () => {
      if (femail && ffname && flname && fcompany && fcontact) {
        setHasContact(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  if (state.success) {
    return (
      <Dialog.Root
        onOpenChange={(open) => {
          if (onReset && open === false) {
            onReset();
          }
        }}
      >
        {trigger}
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-dialog-overlay-fade-in fixed inset-0 z-900 bg-black/60" />
          <Dialog.Content className="data-[state=open]:animate-dialog-content-fade-in-zoom fixed top-1/2 left-1/2 z-1000 w-108 rounded-lg bg-white p-6 focus:outline-hidden">
            <Dialog.Close className="absolute top-6 right-6">
              <span className="icon-[octicon--x-16] text-fg-text-main-hc size-6" />
            </Dialog.Close>
            <div className="flex justify-center">
              <div className="icon-[octicon--check-circle-fill-16] text-fg-icon-success-deep size-16" />
            </div>
            <Dialog.Title className="text-fg-text-main-hc mt-3 text-center text-2xl font-semibold">
              {t("form.mainRfq.successTitle")}
            </Dialog.Title>
            <Dialog.Description className="text-fg-text-main mt-3 text-center">
              {t.rich("form.mainRfq.successMessage", {
                email: femail,
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </Dialog.Description>
            <Dialog.Close asChild>
              <Button className="mt-8 w-full" size="lg">
                {t("form.mainRfq.successButton")}
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  return (
    <Dialog.Root>
      {trigger}
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-dialog-overlay-fade-in fixed inset-0 z-900 bg-black/60">
          <Dialog.Content className="bg-bg-main-pale fixed top-0 right-0 bottom-0 z-1000 w-145 p-6 focus:outline-hidden">
            <Dialog.Close className="absolute top-6 right-6">
              <span className="icon-[octicon--x-16] text-fg-text-main-hc size-6" />
            </Dialog.Close>
            <form
              className="h-full pb-24"
              action={action}
              name="main_rfq_form"
              id="main_rfq_form"
            >
              <Dialog.Title className="text-x2xl text-fg-text-main-hc font-bold">
                {t("form.mainRfq.title")}
              </Dialog.Title>
              <Dialog.Description className="text-fg-text-main text-sm">
                {supplier ? (
                  <>
                    {t("form.mainRfq.to")}{" "}
                    <span className="text-fg-text-main-hc">
                      {supplier?.name}
                    </span>
                  </>
                ) : (
                  <span>{t("form.mainRfq.description")}</span>
                )}
              </Dialog.Description>
              <OverlayScrollbarsComponent
                className="mt-6 h-[calc(100%_-_96px)]"
                defer
                options={{ scrollbars: { autoHide: "move" } }}
              >
                <input type="hidden" name="supplier" value={supplier?.name} />
                <div className="border-fg-border-main rounded-lg border bg-white p-6">
                  <h4 className="text-fg-text-main-hc font-bold">
                    {t("form.mainRfq.productInfomation")}
                  </h4>
                  <div className="mt-6">
                    <div className="flex items-center gap-3">
                      <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                        {!product && (
                          <span className="text-fg-text-danger">*</span>
                        )}
                        {t("form.mainRfq.productNameLabel")}
                      </p>
                      {product ? (
                        <div className="flex items-center gap-3">
                          <div className="bg-bg-brand-bright relative aspect-square w-10 overflow-hidden rounded-sm">
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
                          <p className="text-fg-text-main-hc text-sm">
                            {product.name}
                          </p>
                          <input
                            type="hidden"
                            name="product"
                            value={product.name}
                          />
                          <input
                            type="hidden"
                            name="productId"
                            value={product.documentId}
                          />
                        </div>
                      ) : (
                        <input
                          type="text"
                          className={cx(
                            "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                            "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                          )}
                          placeholder={t("form.mainRfq.productNamePlaceholder")}
                          name="product"
                          required
                          value={productName2}
                          onChange={(e) => {
                            setProductName2(e.target.value);
                          }}
                        />
                      )}
                    </div>
                    <div className="mt-4 flex gap-3">
                      <p className="text-fg-text-main mt-2 w-30 shrink-0 text-right text-sm">
                        {t("form.mainRfq.detailLabel")}
                      </p>
                      <textarea
                        className="border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0"
                        rows={6}
                        placeholder={t("form.mainRfq.detailPlaceholder")}
                        name="detail"
                        value={detail}
                        onChange={(e) => {
                          setDetail(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="border-fg-border-main relative mt-6 rounded-lg border bg-white p-6">
                  {hasContact && (
                    <Button
                      className="absolute top-6 right-6"
                      color="gray"
                      size="sm"
                      type="button"
                      onClick={() => {
                        setHasContact(false);
                      }}
                    >
                      <span className="icon-[octicon--pencil-16] text-fg-icon-main size-4" />
                      {t("shared.edit")}
                    </Button>
                  )}
                  <h4 className="text-fg-text-main-hc font-bold">
                    {t("form.mainRfq.contactInfomation")}
                  </h4>
                  {!hasContact && (
                    <p className="text-fg-text-main-lc mt-1 text-sm font-medium">
                      {t("form.mainRfq.contactDescription")}
                    </p>
                  )}
                  <div className="mt-6">
                    <div className="flex items-center gap-3">
                      <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                        {!hasContact && (
                          <span className="text-fg-text-danger">*</span>
                        )}
                        {t("form.mainRfq.emailLabel")}
                      </p>
                      <input
                        type="email"
                        className={cx(
                          "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                          "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                        )}
                        placeholder={t("form.mainRfq.emailPlaceholder")}
                        name="email"
                        required
                        defaultValue={femail}
                        readOnly={hasContact}
                        onChange={(e) => {
                          setFemail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                        {!hasContact && (
                          <span className="text-fg-text-danger">*</span>
                        )}
                        {t("form.mainRfq.fullNameLabel")}
                      </p>
                      <input
                        type="text"
                        className={cx(
                          "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                          "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                        )}
                        placeholder={t("form.mainRfq.firstNamePlaceholder")}
                        name="firstName"
                        required
                        defaultValue={ffname}
                        readOnly={hasContact}
                        onChange={(e) => {
                          setFfname(e.target.value);
                        }}
                      />
                      <input
                        type="text"
                        className={cx(
                          "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                          "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                        )}
                        placeholder={t("form.mainRfq.lastNamePlaceholder")}
                        name="lastName"
                        required
                        defaultValue={flname}
                        readOnly={hasContact}
                        onChange={(e) => {
                          setFlname(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                        {!hasContact && (
                          <span className="text-fg-text-danger">*</span>
                        )}
                        {t("form.mainRfq.companyLabel")}
                      </p>
                      <input
                        type="text"
                        className={cx(
                          "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                          "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                        )}
                        placeholder={t("form.mainRfq.companyPlaceholder")}
                        name="company"
                        required
                        defaultValue={fcompany}
                        readOnly={hasContact}
                        onChange={(e) => {
                          setFcompany(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                        {!hasContact && (
                          <span className="text-fg-text-danger">*</span>
                        )}
                        {t("form.mainRfq.contactNumberLabel")}
                      </p>
                      <input
                        type="text"
                        className={cx(
                          "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                          "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                        )}
                        placeholder={t("form.mainRfq.contactNumberPlaceholder")}
                        name="contactNumber"
                        required
                        defaultValue={fcontact}
                        readOnly={hasContact}
                        onChange={(e) => {
                          setFcontact(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </OverlayScrollbarsComponent>
              <div className="absolute right-0 bottom-0 w-full bg-white p-6">
                <button
                  className="bg-bg-brand w-full rounded-sm py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
                  type="submit"
                  disabled={
                    pending ||
                    !femail ||
                    !ffname ||
                    !flname ||
                    !fcompany ||
                    !fcontact ||
                    !detail ||
                    (!product && !productName2)
                  }
                  onClick={() => {
                    trackRfqFormInteraction("submit", session);
                  }}
                >
                  {t("form.mainRfq.button")}
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
