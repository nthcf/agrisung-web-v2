import { useTranslations } from "next-intl";

import Button from "@/components/common/Button";
import { Link } from "@/i18n/routing";
import { SITE_FOOTER_NAV } from "@/site.config";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="">
      <div className="container mx-auto px-4 py-20 lg:px-20 xl:px-34">
        <div className="flex justify-between">
          {SITE_FOOTER_NAV.map((nav) => (
            <div key={nav.t}>
              <h3 className="text-fg-text-main text-lg font-bold">
                {t(`nav.footer.${nav.t}`)}
              </h3>
              <ul className="mt-4 space-y-4">
                {nav.items.map((item) => (
                  <li key={item.t} className="text-fg-text-main-hc text-sm">
                    <Link href={item.href}>{t(`nav.footer.${item.t}`)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-80">
            <h3 className="text-fg-text-main text-lg font-bold">
              {t("shared.contact")}
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-fg-text-main-hc flex gap-1 text-sm">
                <span className="icon-[carbon--phone-voice] text-fg-icon-main size-5 shrink-0" />
                <span>{t("shared.phone")}</span>
              </li>
              <li className="text-fg-text-main-hc flex gap-1 text-sm">
                <span className="icon-[carbon--location] text-fg-icon-main size-5 shrink-0" />
                <span>{t("shared.address")}</span>
              </li>
              <li className="text-fg-text-main-hc flex gap-1 text-sm">
                <span className="icon-[carbon--email] text-fg-icon-main size-5 shrink-0" />
                <span>{t("shared.email")}</span>
              </li>
            </ul>
            <h3 className="text-fg-text-main mt-10 text-lg font-bold">
              {t("nav.footer.connectWithAgriSung")}
            </h3>
            <ul className="mt-4 flex gap-3">
              <li>
                <Button
                  as={Link}
                  href="https://www.facebook.com/profile.php?id=61564057781575"
                  color="gray"
                  corner="pill"
                  hover="primary"
                  size="icon-lg"
                >
                  <svg
                    className="size-5 fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </Button>
              </li>
              <li>
                <Button
                  as={Link}
                  href="https://www.linkedin.com/company/agri-sung/"
                  color="gray"
                  corner="pill"
                  hover="primary"
                  size="icon-lg"
                >
                  <svg
                    className="size-5 fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </li>
              <li>
                <Button
                  as={Link}
                  href="https://www.youtube.com/channel/UCSiL4tIo8nXPViwvZCgNbBw"
                  color="gray"
                  corner="pill"
                  hover="primary"
                  size="icon-lg"
                >
                  <svg
                    className="size-5 fill-current"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-bg-brand-strong h-4 w-full"></div>
    </footer>
  );
}
