"use client";

import * as Dialog from "@radix-ui/react-dialog";

type RfqMainFormProps = {
  trigger?: React.ReactNode;
};

export default function RfqMainForm({ trigger }: RfqMainFormProps) {
  return (
    <Dialog.Root>
      {trigger ? trigger : <Dialog.Trigger />}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-dialog-overlay-fade-in" />
        <Dialog.Content className="fixed bottom-0 right-0 top-0 w-145 bg-bg-main-pale p-6 focus:outline-none">
          <Dialog.Title className="text-x2xl font-bold text-fg-text-main-hc">
            Tell supplier what you need
          </Dialog.Title>
          <Dialog.Description className="text-sm text-fg-text-main">
            To: <span className="text-fg-text-main-hc">current.supplier</span>
          </Dialog.Description>
          <div className="mt-6 rounded-lg border border-fg-border-main bg-white p-6">
            <h4 className="font-bold text-fg-text-main-hc">
              Product Infomation
            </h4>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                  Product name:
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative aspect-square w-10 rounded bg-bg-brand-bright"></div>
                  <p className="text-sm text-fg-text-main-hc">
                    current.product
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <p className="mt-2 w-30 shrink-0 text-right text-sm text-fg-text-main">
                  Detail:
                </p>
                <textarea
                  className="w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0"
                  name=""
                  id=""
                  rows={6}
                  placeholder="Enter product details (color, size, materials etc. and other specification requirements)"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-lg border border-fg-border-main bg-white p-6">
            <h4 className="font-bold text-fg-text-main-hc">
              Contact Infomation
            </h4>
            <p className="mt-1 text-sm font-medium text-fg-text-main-lc">
              Your contact info enables our team to quickly discuss details,
              providing faster, tailored quotations for your convenience
            </p>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                  <span className="text-fg-text-danger">*</span>Email address:
                </p>
                <input
                  type="email"
                  className="w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                  <span className="text-fg-text-danger">*</span>Full name:
                </p>
                <input
                  type="email"
                  className="w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0"
                  placeholder="Enter your email address"
                />
                <input
                  type="email"
                  className="w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                  <span className="text-fg-text-danger">*</span>Email address:
                </p>
                <input
                  type="email"
                  className="w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex items-center gap-3">
                <p className="w-30 shrink-0 text-right text-sm text-fg-text-main">
                  <span className="text-fg-text-danger">*</span>Email address:
                </p>
                <input
                  type="email"
                  className="w-full rounded border-fg-border-main p-2 text-sm placeholder:text-fg-text-main-lc focus:border-fg-border-main focus:ring-0"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
