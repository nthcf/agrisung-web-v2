import { cx } from "cva";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

type BreadcrumbItemProps = {
  link: string;
  text: string;
  active?: boolean;
};

function BreadcrumbItem({ link, text, active }: BreadcrumbItemProps) {
  return (
    <li
      className={cx(
        "text-sm after:mx-2 after:content-['>'] last:after:content-none",
        active ? "text-fg-text-main-hc" : "text-fg-text-main",
      )}
    >
      <Link href={link}>{text}</Link>
    </li>
  );
}

type BreadcrumbProps = {
  data: BreadcrumbItemProps[];
};

export default function Breadcrumb({ data }: BreadcrumbProps) {
  const t = useTranslations();

  return (
    <nav className="container mx-auto px-4 pt-4 lg:px-20 xl:px-34">
      <ul className="flex items-center">
        <BreadcrumbItem link="/" text={t("shared.home")} />
        {data.map((item, i) => (
          <BreadcrumbItem
            key={i}
            link={item.link}
            text={item.text}
            active={item.active}
          />
        ))}
      </ul>
    </nav>
  );
}
