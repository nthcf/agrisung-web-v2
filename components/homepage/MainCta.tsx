import { cx } from "class-variance-authority";
import { useTranslations } from "next-intl";

import Button from "../common/Button";

type MainCtaProps = {} & React.ComponentPropsWithoutRef<"div">;

export default function MainCta({ className }: MainCtaProps) {
  const t = useTranslations();

  return (
    <div className={cx("mx-auto w-1/2", className)}>
      <Button className="w-full" size="lg">
        {t("page.homepage.mainCtaSection.button")}
      </Button>
    </div>
  );
}
