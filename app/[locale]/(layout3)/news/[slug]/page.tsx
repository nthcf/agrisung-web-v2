import { DetailNewsContent } from "@/components/news/DetailNewsContent";
import DetailNewsCover from "@/components/news/DetailNewsCover";
import DetailOtherNews from "@/components/news/DetailOtherNews";
import { getListNews, getNews } from "@/libs/cms";

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data } = await getNews(slug);

  const { data: list } = await getListNews();

  return (
    <main>
      <DetailNewsCover data={data[0].coverMedia} title={data[0].title} />
      <DetailNewsContent data={data[0]} />
      <DetailOtherNews data={list.slice(0, 3)} />
    </main>
  );
}
