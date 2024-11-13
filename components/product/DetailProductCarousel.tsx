"use client";

import { cx } from "class-variance-authority";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { type Product } from "@/libs/cms";

type DetailProductCarouselProps = {
  data: Product;
} & React.ComponentPropsWithoutRef<"div">;

export default function DetailProductCarousel({
  className,
  data,
}: DetailProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [emblaThumbsRef] = useEmblaCarousel({
    axis: "y",
    containScroll: "keepSnaps",
  });

  return (
    <div className={cx("flex gap-3", className)}>
      <div className="w-25">
        <div ref={emblaThumbsRef} className="overflow-hidden">
          <div className="-mt-3 flex h-[474px] flex-col">
            {data.images?.map((image, i) => (
              <div
                key={i}
                className="min-h-0 flex-[0_0_112px] pt-3"
                style={{ transform: "translate3d(0, 0, 0)" }}
              >
                <div
                  className="relative aspect-square w-full shrink-0 cursor-pointer overflow-hidden rounded"
                  onClick={() => {
                    emblaApi?.scrollTo(i);
                  }}
                >
                  <Image
                    src={image.url}
                    alt={`${data.name} ${i}`}
                    sizes="100%"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div ref={emblaRef} className="flex-1 overflow-hidden">
        <div className="-ml-4 flex">
          {data.images?.map((image, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] pl-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded bg-bg-brand-bright">
                <Image
                  src={image.url}
                  alt={`${data.name} ${i}`}
                  sizes="100%"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
