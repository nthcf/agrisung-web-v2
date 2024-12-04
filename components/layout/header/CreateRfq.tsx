import { Trigger } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

import Button from "@/components/common/Button";
import RfqMainForm from "@/components/form/RfqMainForm";

export default function CreateRfq() {
  const t = useTranslations();

  return (
    <RfqMainForm
      trigger={
        <Trigger asChild>
          <Button>
            <span className="icon-[octicon--goal-16] size-5" />
            <span>{t("shared.createMyRfq")}</span>
          </Button>
        </Trigger>
      }
    />
  );
}
