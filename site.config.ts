import { Bricolage_Grotesque } from "next/font/google";

export { GeistSans as FontBody } from "geist/font/sans";

export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const FontHeading = Bricolage_Grotesque({
  subsets: ["latin", "vietnamese"],
  variable: "--font-bricolage-grotesque",
});

export const SITE_BASE_URL = "https://www.agrisung.com";

export const SITE_MAIN_NAV = [
  { t: "products", href: "/products" },
  { t: "suppliers", href: "/suppliers" },
  { t: "news", href: "/news" },
  { t: "marketInsights", href: "/market-insights" },
  { t: "priceTrends", href: "/price-trends" },
  { t: "tools", href: "/tools" },
] as const;
