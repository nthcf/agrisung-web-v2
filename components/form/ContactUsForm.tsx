"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { cx } from "class-variance-authority";
import { useTranslations } from "next-intl";
import { useActionState } from "react";

import { submitContactForm } from "@/actions/form";

import Button from "../common/Button";

export default function ContactUsForm() {
  const [state, action, pending] = useActionState(submitContactForm, {
    success: false,
  });

  const t = useTranslations();

  if (state.success) {
    return (
      <Dialog.Root>
        <Dialog.Trigger className="text-xs">
          {t("nav.topBar.contactUs")}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-dialog-overlay-fade-in fixed inset-0 bg-black/60" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-108 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 focus:outline-hidden">
            <div className="flex justify-center">
              <div className="icon-[octicon--check-circle-fill-16] text-fg-icon-success-deep size-16" />
            </div>
            <Dialog.Title className="text-fg-text-main-hc mt-3 text-center text-2xl font-semibold">
              {t("form.contactUs.thankYouTitle")}
            </Dialog.Title>
            <Dialog.Description className="text-fg-text-main mt-3 text-center">
              {t("form.contactUs.thankYouText")}
            </Dialog.Description>
            <Dialog.Close asChild>
              <Button className="mt-8 w-full" size="lg">
                {t("form.contactUs.successButton")}
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="text-xs">
        {t("nav.topBar.contactUs")}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-dialog-overlay-fade-in fixed inset-0 z-999 bg-black/60" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-1000 w-145 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 focus:outline-hidden">
          <Dialog.Title className="text-fg-text-main-hc mt-3 text-2xl font-semibold">
            {t("form.contactUs.title")}
          </Dialog.Title>
          <Dialog.Description className="text-fg-text-main mt-3">
            {t("form.contactUs.description")}
          </Dialog.Description>
          <form action={action}>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                <span className="text-fg-text-danger">*</span>
                {t("form.contactUs.fullNameLabel")}
              </p>
              <input
                type="text"
                className={cx(
                  "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="firstName"
                required
              />
              <input
                type="text"
                className={cx(
                  "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="lastName"
                required
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                <span className="text-fg-text-danger">*</span>
                {t("form.contactUs.emailLabel")}
              </p>
              <input
                type="email"
                className={cx(
                  "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="email"
                required
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                <span className="text-fg-text-danger">*</span>
                {t("form.contactUs.companyLabel")}
              </p>
              <input
                type="text"
                className={cx(
                  "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="company"
                required
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                <span className="text-fg-text-danger">*</span>
                {t("form.contactUs.contactNumberLabel")}
              </p>
              <input
                type="text"
                className={cx(
                  "border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="contactNumber"
                required
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-fg-text-main w-30 shrink-0 text-right text-sm">
                <span className="text-fg-text-danger">*</span>
                {t("form.contactUs.messageLabel")}
              </p>
              <textarea
                className="border-fg-border-main placeholder:text-fg-text-main-lc focus:border-fg-border-main w-full rounded-sm p-2 text-sm focus:ring-0"
                rows={4}
                name="message"
              ></textarea>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-30"></div>
              <Button type="submit" disabled={pending}>
                {t("form.contactUs.submitButton")}
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
