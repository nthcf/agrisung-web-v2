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
          <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-dialog-overlay-fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-108 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 focus:outline-none">
            <div className="flex justify-center">
              <div className="icon-[octicon--check-circle-fill-16] size-16 text-fg-icon-success-deep" />
            </div>
            <Dialog.Title className="mt-3 text-center text-2xl font-semibold text-fg-text-main-hc">
              Thank you
            </Dialog.Title>
            <Dialog.Description className="mt-3 text-center text-fg-text-main">
              Thank you for contact us, we will get back to you soon.
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
      <Dialog.Trigger className="text-xs">
        {t("nav.topBar.contactUs")}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[999] bg-black/60 data-[state=open]:animate-dialog-overlay-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[1000] w-145 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 focus:outline-none">
          <Dialog.Title className="mt-3 text-2xl font-semibold text-fg-text-main-hc">
            Sign Up
          </Dialog.Title>
          <Dialog.Description className="mt-3 text-fg-text-main">
            Leave a message, we will get back to you soon.
          </Dialog.Description>
          <form action={action}>
            <div className="mt-4 flex items-center gap-3">
              <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                <span className="text-fg-text-danger">*</span>
                Full name
              </p>
              <input
                type="text"
                className={cx(
                  "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="firstName"
                required
              />
              <input
                type="text"
                className={cx(
                  "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="lastName"
                required
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                <span className="text-fg-text-danger">*</span>
                Email
              </p>
              <input
                type="email"
                className={cx(
                  "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="email"
                required
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                <span className="text-fg-text-danger">*</span>
                Company
              </p>
              <input
                type="text"
                className={cx(
                  "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="company"
                required
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                <span className="text-fg-text-danger">*</span>
                Contact number
              </p>
              <input
                type="text"
                className={cx(
                  "w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0",
                  "read-only:border-fg-border-main read-only:bg-bg-main-pale read-only:text-fg-text-main-lc",
                )}
                name="contactNumber"
                required
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                <span className="text-fg-text-danger">*</span>
                Message
              </p>
              <textarea
                className="w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0"
                rows={4}
                name="message"
              ></textarea>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-30"></div>
              <Button type="submit" disabled={pending}>
                Sign Up
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
