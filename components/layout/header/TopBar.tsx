import { useTranslations } from "next-intl";

import ContactUsForm from "@/components/form/ContactUsForm";
import SignUpForm from "@/components/form/SignUpForm";
import { Link } from "@/i18n/routing";

import { LocaleSwitcher } from "./LocaleSwitcher";

export default function TopBar() {
  const t = useTranslations();

  return (
    <div className="bg-bg-brand-strong">
      <div className="container mx-auto px-4 lg:px-20 xl:px-34">
        <div className="flex justify-between py-[6px] text-fg-text-on-main">
          <div className="flex items-center gap-10">
            <p className="text-xs">
              <Link href="/about-us">{t("nav.topBar.aboutAgriSung")}</Link>
            </p>
          </div>
          <div className="flex items-center gap-10">
            <LocaleSwitcher />
            <ContactUsForm />
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
