
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export const useAutoplayCarousel = (api: CarouselApi | null, interval: number = 5000) => {
  const [_, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    setApi(api);
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [api, interval]);
};
