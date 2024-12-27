import { sendGTMEvent } from "@next/third-parties/google";
import { type Session } from "next-auth";

import { type Banner, type Product, type Supplier } from "./libs/cms";

type UserData = {
  user_email?: string;
  user_id?: string;
  user_name?: string;
  user_type: "authenticated" | "guest";
};

export const GA_EVENTS = {
  CONTACT_US_FORM_INTERACTION: "contact_us_form_interaction",
  BANNER_CLICK: "banner_click",
  PRODUCT_CLICK: "product_click",
  RFQ_FORM_INTERACTION: "rfq_form_interaction",
  SUPPLIER_CLICK: "supplier_click",
  SUPPLIER_MEDIA_VIEW: "supplier_media_view",
  USER_LOGIN: "user_login",
  USER_LOGOUT: "user_logout",
} as const;

const getUserData = (session?: Session | null): UserData => {
  if (!session?.user) {
    return {
      user_type: "guest",
    };
  }

  return {
    user_email: session.user.email ?? "",
    user_id: session.user.id,
    user_name: session.user.name ?? "",
    user_type: "authenticated",
  };
};

const sendEvent = (
  eventName: string,
  params: Record<string, unknown> = {},
  session?: Session | null,
) => {
  if (typeof window !== "undefined") {
    const userData = getUserData(session);

    sendGTMEvent({
      event: eventName,
      ...params,
      ...userData,
      timestamp: new Date().toISOString(),
    });
  }
};

export const trackProductClick = (
  product: Product,
  session?: Session | null,
  additionalData?: Record<string, unknown>,
) => {
  sendEvent(
    GA_EVENTS.PRODUCT_CLICK,
    {
      product_id: product.documentId,
      product_name: product.name,
      ...additionalData,
      location: window.location.pathname,
    },
    session,
  );
};

export const trackSupplierClick = (
  supplier: Supplier,
  session?: Session | null,
  additionalData?: Record<string, unknown>,
) => {
  sendEvent(
    GA_EVENTS.SUPPLIER_CLICK,
    {
      supplier_id: supplier.documentId,
      supplier_name: supplier.name,
      ...additionalData,
      location: window.location.pathname,
    },
    session,
  );
};

export const trackSupplierMediaView = (
  supplier: Supplier,
  session?: Session | null,
  additionalData?: Record<string, unknown>,
) => {
  sendEvent(
    GA_EVENTS.SUPPLIER_MEDIA_VIEW,
    {
      supplier_id: supplier.documentId,
      supplier_name: supplier.name,
      ...additionalData,
      location: window.location.pathname,
    },
    session,
  );
};

export const trackBannerClick = (
  banner: Banner,
  session?: Session | null,
  additionalData?: Record<string, unknown>,
) => {
  sendEvent(
    GA_EVENTS.BANNER_CLICK,
    {
      banner_position: banner.position,
      banner_destination_url: banner.ctaLink,
      ...additionalData,
      location: window.location.pathname,
    },
    session,
  );
};

export const trackRfqFormInteraction = (
  action: "open" | "submit" | "close",
  session?: Session | null,
  formData?: Record<string, unknown>,
) => {
  sendEvent(
    GA_EVENTS.RFQ_FORM_INTERACTION,
    {
      form_action: action,
      ...formData,
      location: window.location.pathname,
    },
    session,
  );
};

export const trackContactUsFormInteraction = (
  action: "open" | "submit" | "close",
  session?: Session | null,
  formData?: Record<string, unknown>,
) => {
  sendEvent(
    GA_EVENTS.CONTACT_US_FORM_INTERACTION,
    {
      form_action: action,
      ...formData,
      location: window.location.pathname,
    },
    session,
  );
};

export const trackAuthEvent = (
  action: "login" | "logout",
  session?: Session | null,
) => {
  sendEvent(
    action === "login" ? GA_EVENTS.USER_LOGIN : GA_EVENTS.USER_LOGOUT,
    {},
    session,
  );
};
