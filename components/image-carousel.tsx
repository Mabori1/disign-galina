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

export function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const photos = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero5.jpg",
    "/hero6.jpg",
  ];

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
      className="sm-max:h-auto sm-max:w-full sm-max:px-4 relative w-full overflow-hidden rounded-bl-[200px]"
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
          {photos.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                src={item}
                width={1920}
                height={1080}
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
            className="absolute left-3 top-1/2 h-16 w-16 -translate-y-1/2 cursor-pointer"
          />
          <CircleChevronRight
            fill="#F4F0EC"
            size={90}
            strokeWidth={0.2}
            className="absolute right-3 top-1/2 h-16 w-16 -translate-y-1/2 cursor-pointer"
          />
        </div>
      </Carousel>

      <div
        className={`absolute bottom-0 flex w-full flex-wrap justify-center gap-[5px] pb-2 transition-opacity duration-1000 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
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
