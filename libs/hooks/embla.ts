import { UseEmblaCarouselType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export function useEmblaPrevNext(api: UseEmblaCarouselType[1]) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const onPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const onNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const onSelect = useCallback((api: NonNullable<UseEmblaCarouselType[1]>) => {
    setSelectedIndex(api.selectedScrollSnap());
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
    api.scrollTo(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (api) {
      onSelect(api);
      api.on("reInit", onSelect).on("select", onSelect);
    }
  }, [api, onSelect]);

  return {
    nextDisabled,
    prevDisabled,
    selectedIndex,
    onNext,
    onPrev,
    onSelect,
  };
}
