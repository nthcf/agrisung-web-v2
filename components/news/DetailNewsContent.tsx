import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { type News } from "@/libs/cms";

type DetailNewsContentProps = {
  data: News;
};

export function DetailNewsContent({ data }: DetailNewsContentProps) {
  return (
    <div className="mx-auto my-8 max-w-145">
      <h1 className="font-heading text-center text-2xl font-extrabold">
        {data.title}
      </h1>
      <div className="prose mt-4 px-4">
        <BlocksRenderer content={data.content} />
      </div>
    </div>
  );
}
