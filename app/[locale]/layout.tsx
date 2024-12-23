import { GoogleTagManager } from "@next/third-parties/google";
import { cx } from "cva";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";

import { routing } from "@/i18n/routing";
import { FontBody, FontHeading, SITE_GTM_ID, type Locale } from "@/site.config";

import "overlayscrollbars/overlayscrollbars.css";

import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale });

  return {
    title: `${t("shared.title")} | ${t("shared.description")}`,
    description: t("shared.description"),
  };
}

export default async function AppLayout({
  children,
  params,
}: {
  params: Promise<{ locale: Locale }>;
  children?: React.ReactNode;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cx(FontBody.variable, FontHeading.variable, "font-body")}
      >
        <SessionProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </SessionProvider>
        <GoogleTagManager gtmId={SITE_GTM_ID} />
        <Script
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/47057829.js"
        />
      </body>
    </html>
  );
}
