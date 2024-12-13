import { Bricolage_Grotesque } from "next/font/google";
export { GeistSans as FontBody } from "geist/font/sans";

export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const FontHeading = Bricolage_Grotesque({
  subsets: ["latin", "vietnamese"],
  variable: "--font-bricolage-grotesque",
});

export const SITE_BASE_URL = "https://www.agrisung.com";

export const SITE_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

export const SITE_MAIN_NAV = [
  { t: "products", href: "/products" },
  { t: "suppliers", href: "/suppliers" },
  { t: "news", href: "/news" },
  { t: "marketInsights", href: "/market-insights" },
  { t: "priceTrends", href: "/price-trends" },
  { t: "tools", href: "/tools" },
] as const;

export const SITE_FOOTER_NAV = [
  {
    t: "getSupport",
    items: [
      // { t: "helpCenter", href: "/" },
      { t: "liveChatWithStaff", href: "/" },
      // { t: "checkOrderStatus", href: "/" },
      // { t: "faq", href: "/" },
    ],
  },
  {
    t: "sourceOnAgriSung",
    items: [
      { t: "requestForQuotation", href: "/" },
      // { t: "subscribeForValueInsight", href: "/" },
      // { t: "membershipProgram", href: "/" },
      // { t: "logisticSolution", href: "/" },
    ],
  },
  {
    t: "sellOnAgriSung",
    items: [
      { t: "startSelling", href: "/" },
      { t: "partnershipWithAgs", href: "/" },
      // { t: "sellingCenter", href: "/" },
      // { t: "becomeAVerifiedSupplier", href: "/" },
    ],
  },
  {
    t: "getToKnowUs",
    items: [
      { t: "aboutAgriSung", href: "/about-us" },
      // { t: "whyChooseUs", href: "/" },
      // { t: "career", href: "/" },
      {
        t: "lifeAtSung",
        href: "https://www.facebook.com/groups/456141860303857",
      },
    ],
  },
] as const;
