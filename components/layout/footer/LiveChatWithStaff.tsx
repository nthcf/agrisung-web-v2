"use client";

import { useTranslations } from "next-intl";

export default function LiveChatWithStaff() {
  const t = useTranslations();

  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        window.HubSpotConversations.widget.open();
      }}
    >
      {t("nav.footer.liveChatWithStaff")}
    </button>
  );
}
