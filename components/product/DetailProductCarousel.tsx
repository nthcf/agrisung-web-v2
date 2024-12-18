"use client";

import { cx } from "cva";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { type Product } from "@/libs/cms";
import { useEmblaPrevNext } from "@/libs/hooks/embla";

import Button from "../common/Button";

type DetailProductCarouselProps = {
  data: Product;
} & React.ComponentPropsWithoutRef<"div">;

export default function DetailProductCarousel({
  className,
  data,
}: DetailProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    axis: "y",
    slidesToScroll: "auto",
  });

  const { nextDisabled, prevDisabled, selectedIndex, onNext, onPrev } =
    useEmblaPrevNext(emblaApi);
  const {
    nextDisabled: thumbNextDisabled,
    prevDisabled: thumbPrevDisabled,
    onNext: onThumbNext,
    onPrev: onThumbPrev,
  } = useEmblaPrevNext(emblaThumbsApi);

  return (
    <div className={cx("flex gap-3", className)}>
      <div className="w-25">
        <div ref={emblaThumbsRef} className="relative overflow-hidden">
          <div className="-mt-3 flex h-[474px] flex-col">
            {data.images?.map((image, i) => (
              <div
                key={i}
                className="min-h-0 flex-[0_0_112px] pt-3"
                style={{ transform: "translate3d(0, 0, 0)" }}
              >
                <div
                  className={cx(
                    "relative aspect-square w-full shrink-0 cursor-pointer overflow-hidden rounded-sm",
                    selectedIndex === i
                      ? "border-fg-border-brand border-2"
                      : "border-fg-border-main border",
                  )}
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
          {!thumbPrevDisabled && (
            <Button
              className="absolute top-0 left-1/2 -translate-x-1/2"
              color="gray"
              corner="pill"
              size="icon-lg"
              onClick={onThumbPrev}
            >
              <span className="icon-[octicon--chevron-up-16] size-6" />
            </Button>
          )}
          {!thumbNextDisabled && (
            <Button
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              color="gray"
              corner="pill"
              size="icon-lg"
              onClick={onThumbNext}
            >
              <span className="icon-[octicon--chevron-down-16] size-6" />
            </Button>
          )}
        </div>
      </div>
      <div ref={emblaRef} className="relative flex-1 overflow-hidden">
        <div className="-ml-4 flex">
          {data.images?.map((image, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] pl-4">
              <div className="bg-bg-brand-bright relative aspect-4/3 overflow-hidden rounded-sm">
                <Image
                  src={image.url}
                  alt={`${data.name} ${i}`}
                  sizes="100%"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 right-4 left-4 flex -translate-y-1/2 items-center justify-between">
          <Button
            color="gray"
            corner="pill"
            size="icon-xl"
            disabled={prevDisabled}
            onClick={onPrev}
          >
            <span className="icon-[octicon--chevron-left-16] size-8" />
          </Button>
          <Button
            color="gray"
            corner="pill"
            size="icon-xl"
            disabled={nextDisabled}
            onClick={onNext}
          >
            <span className="icon-[octicon--chevron-right-16] size-8" />
          </Button>
        </div>
      </div>
    </div>
  );
}
