import { portfolioContent1, portfolioContent2 } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
        <div className="min-h-96 w-[100vw] pt-28">
          <Image
            src="/portfolio-img.jpg"
            alt="фото интерьера"
            width={1920}
            height={384}
          />

          <div className="absolute -bottom-0.5 left-1/2 flex h-44 min-w-[503px] translate-x-[-50%] flex-col flex-wrap items-center justify-center gap-4 overflow-hidden rounded rounded-t-3xl bg-white font-ledger">
            <h1 className="text-5xl font-medium">Портфолио</h1>
            <p className="font-jost text-2xl text-typewriter-Ink">
              Во власти качества
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-28 flex flex-wrap items-start justify-center gap-4 overflow-hidden">
        <div className="flex flex-col">
          {portfolioContent1.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className={cn(
                "flex max-h-min max-w-[585px] flex-col overflow-hidden p-5 hover:shadow-xl",
              )}
            >
              <div className="mb-7 h-auto max-w-[585px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={item.imgWidth}
                  height={item.imgHeight}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="font-ledger text-2xl">{item.title},</h3>
                  <span className="font-jost text-[22px] text-typewriter-Ink">
                    {`${item.text} м`}
                    <sup>
                      <small>2</small>
                    </sup>
                  </span>
                </div>
                <Link href={`/portfolio/${item.id}`}>
                  <Image
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
                "flex max-h-min max-w-[585px] flex-col overflow-hidden p-5 hover:shadow-xl",
              )}
            >
              <div className="mb-7 h-auto max-w-[585px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={item.imgWidth}
                  height={item.imgHeight}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="font-ledger text-2xl">{item.title},</h3>
                  <span className="font-jost text-[22px] text-typewriter-Ink">
                    {`${item.text} м`}
                    <sup>
                      <small>2</small>
                    </sup>
                  </span>
                </div>
                <Link href={`/portfolio/${item.id}`}>
                  <Image
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
