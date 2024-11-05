import { useTranslations } from "next-intl";

import { SITE_MAIN_NAV } from "@/site.config";

import NavItem from "./NavItem";

export default function Navbar() {
  const t = useTranslations();

  return (
    <nav role="navigation" aria-label="Main Navigation">
      <ul className="flex gap-6">
        {SITE_MAIN_NAV.map((link, i) => (
          <li key={`${i}@${link.href}`}>
            <NavItem href={link.href} t={{ text: t(`nav.main.${link.t}`) }} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
