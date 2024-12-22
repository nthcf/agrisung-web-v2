import AllNews from "@/components/news/AllNews";
import FeaturedNews from "@/components/news/FeaturedNews";
import { getListNews } from "@/libs/cms";

export default async function News() {
  const { data } = await getListNews();

  return (
    <main className="bg-bg-main-pale">
      <div className="container mx-auto px-4 pt-4 pb-10 lg:px-20 xl:px-34">
        <FeaturedNews data={data} />
        <AllNews data={data} />
      </div>
    </main>
  );
}
