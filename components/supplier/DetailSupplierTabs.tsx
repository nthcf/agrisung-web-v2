"use client";

import { cx } from "class-variance-authority";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/routing";

type TabItemProps = React.PropsWithChildren<{
  active: boolean;
  href: string;
}>;

function TabItem({ children, href, active }: TabItemProps) {
  return (
    <Link
      href={href}
      className={cx(
        "mr-6 inline-block min-w-45 border-b-[3px] px-2 py-2 pb-[5px] text-center text-lg",
        active
          ? "border-fg-border-brand text-fg-text-brand font-bold"
          : "text-fg-text-main-hc border-transparent",
      )}
    >
      {children}
    </Link>
  );
}

type DetailSupplierTabsProps = {
  slug: string;
};

export default function DetailSupplierTabs({ slug }: DetailSupplierTabsProps) {
  const t = useTranslations();

  const pathname = usePathname();

  const isActive = (href: string) => pathname.endsWith(href);

  return (
    <div className="container mx-auto px-4 pt-12 lg:px-20 xl:px-34">
      <TabItem
        active={isActive(`/supplier/${slug}`)}
        href={`/supplier/${slug}`}
      >
        {t("shared.overview")}
      </TabItem>
      <TabItem
        active={isActive(`/supplier/${slug}/product`)}
        href={`/supplier/${slug}/product`}
      >
        {t("shared.products")}
      </TabItem>
    </div>
  );
}
