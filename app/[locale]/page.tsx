import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <section className="container mx-auto px-4 lg:px-20 xl:px-34">
      <article className="prose prose-sm py-10">
        <h1>{t("shared.title")}</h1>
        <p>{t("shared.description")}</p>
      </article>
    </section>
  );
}
