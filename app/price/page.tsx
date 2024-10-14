import { Button } from "@/components/ui/button";
import { priceContent, priceVariants } from "@/data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
        <div className="max-h-[60vh] w-[100vw] pt-16 lg:min-h-96 lg:pt-28">
          <Image
            src="/price-img.jpg"
            alt="фото интерьера"
            width={1920}
            height={384}
          />

          <div className="absolute left-1/2 top-[70%] flex h-[40%] min-w-[50%] translate-x-[-50%] flex-col items-center justify-center overflow-hidden rounded rounded-t-3xl bg-white font-ledger lg:top-[65%] lg:min-w-[40%] lg:gap-4">
            <h1 className="text-xl font-medium md:text-4xl lg:text-5xl">
              Услуги и цены
            </h1>
            <p className="font-jost text-sm text-typewriter-Ink md:text-xl lg:text-2xl">
              Качество выше, чем цена
            </p>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-4 flex snap-y flex-wrap justify-center gap-1 overflow-hidden text-center lg:mt-16 lg:gap-4">
        {priceContent.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={cn(
              "flex h-max max-w-[358px] snap-center scroll-mb-20 flex-col overflow-hidden rounded-2xl p-5 hover:shadow-xl",

              item.id === "спецификация" ? "bg-isabelline" : "",
            )}
          >
            <h3 className="mb-2 font-ledger text-base font-bold lg:mb-5 lg:text-[25px]">
              {item.title}
            </h3>
            <p className="font-jost text-sm lg:text-[22px]">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="mx-2 mt-4 flex size-full justify-center overflow-hidden px-2 text-center md:justify-between lg:mt-12 lg:gap-4 lg:px-4">
        {priceVariants.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={cn(
              "mx-1 flex size-full min-h-[450px] flex-col overflow-hidden rounded-2xl border bg-isabelline hover:shadow-xl md:mx-1 lg:m-5 lg:min-h-[723px] lg:max-w-[31%] lg:pt-16",
            )}
          >
            <div
              className={cn(
                "relative h-[140px] border-b lg:h-[210px]",
                item.id === "2" ? "border-b-black" : "border-b-golden-beige",
              )}
            >
              {item.id === "2" && (
                <div className="absolute bottom-2 left-1/2 flex h-11 w-2/3 translate-x-[-50%] items-center justify-center rounded-xl bg-nightshade-blue text-center font-jost text-xs text-white lg:-bottom-5 lg:rounded-full lg:text-[1.125rem]">
                  Самый популярный
                </div>
              )}
              <h3 className="mt-3 font-ledger text-sm font-bold lg:mb-5 lg:text-[25px]">
                {item.title}
              </h3>
              <h2 className="mx-auto font-dm text-base font-bold lg:text-7xl">
                {item.price}
              </h2>
              <p className="font-serif text-sm lg:text-4xl">
                руб/м
                <sup>
                  <small>2</small>
                </sup>
              </p>
            </div>
            <div className="mt-8 flex grow pl-2 text-start lg:pl-8">
              <ul className="flex flex-col gap-1 lg:gap-4">
                {item.content.map((elem, i) => (
                  <li
                    className="list-inside list-disc font-jost text-xs text-typewriter-Ink lg:text-2xl"
                    key={i}
                  >
                    <Link href={`#${priceContent[elem].id}`}>
                      {priceContent[elem].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contacts">
              <Button
                className={cn(
                  "mb-6 rounded-full px-2 text-sm lg:px-8",
                  item.id === "2"
                    ? "bg-nightshade-blue hover:bg-golden-beige"
                    : "bg-golden-beige",
                )}
              >
                Заказать{" "}
                <ArrowRight className="ml-1 size-4 lg:ml-3 lg:size-5" />
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <h3 className="mt-10 text-center font-ledger text-sm lg:text-3xl">
        Скидка <span className="text-golden-beige">-5%</span> при заказе с сайта
      </h3>
    </section>
  );
};

export default Page;
