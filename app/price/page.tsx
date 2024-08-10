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
        <div className="min-h-96 w-[100vw] pt-28">
          <Image
            src="/price-img.jpg"
            alt="фото интерьера"
            width={1920}
            height={384}
          />

          <div className="absolute -bottom-0.5 left-1/2 flex h-44 min-w-[503px] translate-x-[-50%] flex-col flex-wrap items-center justify-center gap-4 overflow-hidden rounded rounded-t-3xl bg-white font-ledger">
            <h1 className="text-5xl font-medium">Услуги и цены</h1>
            <p className="font-jost text-2xl text-typewriter-Ink">
              Качество выше, чем цена
            </p>
          </div>
        </div>
      </div>
      <div className="mt-52 flex flex-wrap justify-center gap-4 overflow-hidden text-center">
        {priceContent.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={cn(
              "flex h-[320px] max-w-[358px] snap-center flex-col overflow-hidden rounded-2xl p-5 hover:shadow-xl",

              item.id === "спецификация" ? "bg-isabelline" : "",
            )}
          >
            <h3 className="mb-5 font-ledger text-[25px] font-bold">
              {item.title}
            </h3>
            <p className="font-jost text-[22px]">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-28 flex size-full flex-wrap justify-center gap-4 overflow-hidden text-center md:justify-between">
        {priceVariants.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={cn(
              "m-5 flex size-full min-h-[723px] flex-col overflow-hidden rounded-2xl border bg-isabelline pt-16 hover:shadow-xl md:mx-1 lg:max-w-[31%]",
            )}
          >
            <div
              className={cn(
                "relative h-[210px] border-b",
                item.id === "2" ? "border-b-black" : "border-b-golden-beige",
              )}
            >
              {item.id === "2" && (
                <div className="absolute -bottom-5 left-1/2 flex h-11 w-2/3 translate-x-[-50%] items-center justify-center rounded-full bg-nightshade-blue text-center font-jost text-[1.125rem] text-white">
                  Самый популярный
                </div>
              )}
              <h3 className="mb-5 font-ledger text-[25px] font-bold">
                {item.title}
              </h3>
              <h2 className="mx-auto font-ledger text-7xl font-bold">
                {item.price}
              </h2>
              <p className="font-serif text-4xl">
                м
                <sup>
                  <small>2</small>
                </sup>
              </p>
            </div>
            <div className="flex grow items-center justify-center">
              <ul className="flex flex-col gap-4">
                {item.content.map((elem, i) => (
                  <li
                    className="font-jost text-2xl text-typewriter-Ink"
                    key={i}
                  >
                    <Link href={`#${priceContent[elem].id}`}>
                      {priceContent[elem].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="https://wa.me/79884892654?text=Здравствуйте%2C+у+меня+есть+вопрос">
              <Button
                className={cn(
                  "mb-6 px-8",
                  item.id === "2"
                    ? "bg-nightshade-blue hover:bg-golden-beige"
                    : "bg-golden-beige",
                )}
              >
                Заказать <ArrowRight className="ml-3" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
