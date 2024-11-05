import { cx } from "class-variance-authority";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";

import Header from "@/components/layout/header/Header";
import { routing } from "@/i18n/routing";
import { getHeaderPriceTable } from "@/libs/cms";
import { FontBody, FontHeading } from "@/site.config";

import { type PropsWithLocale } from "../types";

import "../globals.css";

export async function generateMetadata({ params }: PropsWithLocale) {
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
}: PropsWithLocale) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const data = await getHeaderPriceTable();

  return (
    <html lang={locale}>
      <body
        className={cx(FontBody.variable, FontHeading.variable, "font-body")}
      >
        <NextIntlClientProvider messages={messages}>
          <Header priceTable={data} />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
