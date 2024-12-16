"use client";

import { useTranslations } from "next-intl";

export default function LiveChatWithStaff() {
  const t = useTranslations();

  return (
    <button
      className="text-fg-text-main-hc cursor-pointer text-sm"
      onClick={() => {
        window.HubSpotConversations.widget.open();
      }}
    >
      {t("nav.footer.liveChatWithStaff")}
    </button>
  );
}
