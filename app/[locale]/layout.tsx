import { GoogleTagManager } from "@next/third-parties/google";
import { cx } from "cva";
import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Script from "next/script";

import { FontBody, FontHeading, SITE_GTM_ID, type Locale } from "@/site.config";

import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const t = await getTranslations({ locale });

  return {
    title: t("shared.title"),
    description: t("shared.description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  params: Promise<{ locale: Locale }>;
  children?: React.ReactNode;
}) {
  const { locale } = await params;

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
