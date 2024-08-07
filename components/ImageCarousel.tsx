"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

type ImageCarouselProps = {
  data: string[];
  width: number;
  height: number;
};

export function ImageCarousel(props: ImageCarouselProps) {
  const { data, width, height } = props;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleImageClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!api) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const third = rect.width / 3;

    if (clickX < third) {
      api.scrollPrev();
    } else if (clickX > 2 * third) {
      api.scrollNext();
    }
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleImageClick}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="sm-max:max-w-full w-full"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item}
                width={width}
                height={height}
                priority
                alt="фото объекта недвижимости"
                className="sm-max:object-contain h-full w-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <CircleChevronLeft
            fill="#F4F0EC"
            size={90}
            strokeWidth={0.2}
            className="absolute left-3 top-1/2 h-10 w-10 -translate-y-1/2 cursor-pointer md:h-16 md:w-16"
          />
          <CircleChevronRight
            fill="#F4F0EC"
            size={90}
            strokeWidth={0.2}
            className="absolute right-3 top-1/2 h-10 w-10 -translate-y-1/2 cursor-pointer md:h-16 md:w-16"
          />
        </div>
      </Carousel>

      <div
        className={`absolute bottom-0 flex w-full flex-wrap justify-center gap-[5px] pb-2 opacity-100 transition-opacity duration-1000`}
        // ${isHovered ? "opacity-100" : "opacity-0"}
      >
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`h-1 w-7 rounded-full transition-colors duration-300 ${
              current - 1 === index ? "bg-sky-50" : "bg-white/60"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
