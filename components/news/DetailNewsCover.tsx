import Image from "next/image";

import { type Media } from "@/libs/cms";

type DetailNewsCoverProps = {
  data: Media;
  title: string;
};

export default function DetailNewsCover({ data, title }: DetailNewsCoverProps) {
  return (
    <section className="relative container mx-auto h-60 md:h-100 lg:h-160">
      <Image
        src={data.url}
        alt={title}
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
      />
    </section>
  );
}
