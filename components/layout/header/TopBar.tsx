import { type User as TUser } from "next-auth";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";

import ContactUs from "./ContactUs";
import { LocaleSwitcher } from "./LocaleSwitcher";
import SignUp from "./SignUp";
import { User } from "./User";

type TopBarProps = {
  user?: TUser;
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
            <ContactUs />
            {user ? <User data={user} /> : <SignUp />}
          </div>
        </div>
      </div>
    </div>
  );
}
