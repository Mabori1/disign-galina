import { portfolioContent1, portfolioContent2 } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
        <div className="max-h-[60vh] w-[100vw] pt-16 lg:min-h-96 lg:pt-28">
          <Image
            src="/portfolio-img.jpg"
            alt="фото интерьера"
            width={1920}
            height={384}
          />

          <div className="absolute left-1/2 top-[70%] flex h-[40%] min-w-[40%] translate-x-[-50%] flex-col items-center justify-center overflow-hidden rounded rounded-t-3xl bg-white font-ledger lg:top-[65%] lg:gap-4">
            <h1 className="text-xl font-medium md:text-4xl lg:text-5xl">
              Портфолио
            </h1>
            <p className="font-jost text-sm text-typewriter-Ink md:text-xl lg:text-2xl">
              Во власти качества
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 flex items-start justify-center overflow-hidden lg:mt-28 lg:gap-4">
        <div className="flex flex-col">
          {portfolioContent1.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className={cn(
                "flex max-h-min max-w-[585px] flex-col overflow-hidden p-3 hover:shadow-xl lg:p-5",
              )}
            >
              <div className="mb-2 h-auto max-w-[585px] overflow-hidden lg:mb-7">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={item.imgWidth}
                  height={item.imgHeight}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="font-ledger text-xs lg:text-2xl">
                    {item.title},
                  </h3>
                  <span className="font-jost text-xs text-typewriter-Ink lg:text-[22px]">
                    {`${item.text} м`}
                    <sup>
                      <small>2</small>
                    </sup>
                  </span>
                </div>
                <Link href={`/portfolio/${item.id}`}>
                  <Image
                    className="size-10 lg:size-16"
                    src="/circleRight.svg"
                    width={70}
                    alt="arrow"
                    height={70}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {portfolioContent2.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className={cn(
                "flex max-h-min max-w-[585px] flex-col overflow-hidden p-3 hover:shadow-xl lg:p-5",
              )}
            >
              <div className="mb-2 h-auto max-w-[585px] overflow-hidden lg:mb-7">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={item.imgWidth}
                  height={item.imgHeight}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="font-ledger text-xs lg:text-2xl">
                    {item.title},
                  </h3>
                  <span className="font-jost text-xs text-typewriter-Ink lg:text-[22px]">
                    {`${item.text} м`}
                    <sup>
                      <small>2</small>
                    </sup>
                  </span>
                </div>
                <Link href={`/portfolio/${item.id}`}>
                  <Image
                    className="size-10 lg:size-16"
                    src="/circleRight.svg"
                    width={70}
                    alt="arrow"
                    height={70}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
