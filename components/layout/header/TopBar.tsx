import { type User } from "next-auth";
import { useTranslations } from "next-intl";

import ContactUsForm from "@/components/form/ContactUsForm";
import SignUpForm from "@/components/form/SignUpForm";
import { Link } from "@/i18n/routing";

import { LocaleSwitcher } from "./LocaleSwitcher";

type TopBarProps = {
  user?: User;
};

export default function TopBar({ user }: TopBarProps) {
  const t = useTranslations();

  return (
    <div className="bg-bg-brand-strong">
      <div className="container mx-auto px-4 lg:px-20 xl:px-34">
        <div className="text-fg-text-on-main flex justify-between py-[6px]">
          <div className="flex items-center gap-10">
            <p className="text-xs">
              <Link href="/about-us">{t("nav.topBar.aboutAgriSung")}</Link>
            </p>
          </div>
          <div className="flex items-center gap-10">
            <LocaleSwitcher />
            <ContactUsForm />
            {user ? (
              <p className="text-xs">
                {t("shared.hello")} <strong>{user.name}</strong>
              </p>
            ) : (
              <SignUpForm />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
