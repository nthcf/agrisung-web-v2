import { GoogleTagManager } from "@next/third-parties/google";
import { cx } from "class-variance-authority";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { FontBody, FontHeading, type Locale } from "@/site.config";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
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

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cx(FontBody.variable, FontHeading.variable, "font-body")}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <GoogleTagManager gtmId="GTM-T9L5H9P4" />
      </body>
    </html>
  );
}
