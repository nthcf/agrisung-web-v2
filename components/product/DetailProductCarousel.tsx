"use client";

import { cx } from "class-variance-authority";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
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

  const { nextDisabled, prevDisabled, onNext, onPrev } =
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
          {!thumbPrevDisabled && (
            <Button
              className="absolute left-1/2 top-0 -translate-x-1/2"
              color="gray"
              corner="pill"
              size="icon-lg"
              onClick={onThumbPrev}
            >
              <ChevronUp />
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
              <ChevronDown />
            </Button>
          )}
        </div>
      </div>
      <div ref={emblaRef} className="relative flex-1 overflow-hidden">
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
        <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 items-center justify-between">
          <Button
            color="gray"
            corner="pill"
            size="icon-xl"
            disabled={prevDisabled}
            onClick={onPrev}
          >
            <ChevronLeft size={32} />
          </Button>
          <Button
            color="gray"
            corner="pill"
            size="icon-xl"
            disabled={nextDisabled}
            onClick={onNext}
          >
            <ChevronRight size={32} />
          </Button>
        </div>
      </div>
    </div>
  );
}
