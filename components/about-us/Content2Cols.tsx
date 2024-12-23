import { cx } from "cva";
import Image from "next/image";

type Content2ColsProps = {
  content: React.ReactNode;
  image: string;
  reverseOrder?: boolean;
};

export default function Content2Cols({
  content,
  image,
  reverseOrder,
}: Content2ColsProps) {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-lg bg-white">
      <div
        className={cx(
          "relative aspect-16/9 h-full w-full",
          reverseOrder && "order-last",
        )}
      >
        <Image
          src={image}
          alt="Agri Sung"
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col justify-center p-6">{content}</div>
    </div>
  );
}
