import { useTranslations } from "next-intl";

function DiffItem({ text }: { text: string }) {
  return (
    <div className="bg-bg-brand-bright border-fg-border-brand rounded-lg border px-6 py-4">
      <p className="text-fg-text-brand text-center text-sm font-medium">
        {text}
      </p>
    </div>
  );
}

export default function Difference() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-10 lg:px-20 xl:px-34">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-fg-text-main-hc text-x4xl font-bold">
            {t("page.aboutUs.differenceSection.title")}
          </h2>
          <p className="text-fg-text-main mt-1 text-lg">
            {t("page.aboutUs.differenceSection.desc")}
          </p>
        </div>
        <div className="grid gap-3 pl-6">
          <DiffItem text={t("page.aboutUs.differenceSection.diff1")} />
          <DiffItem text={t("page.aboutUs.differenceSection.diff2")} />
          <DiffItem text={t("page.aboutUs.differenceSection.diff3")} />
        </div>
      </div>
    </div>
  );
}
