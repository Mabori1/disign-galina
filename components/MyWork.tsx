import { myWork } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const MyWork = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="mx-auto flex max-w-lg flex-col items-center">
        <h2 className="mb-1 text-center font-ledger text-[22px] lg:mb-3 lg:text-6xl">
          Мои работы
        </h2>
        <p className="mb-4 text-center font-jost text-sm lg:mb-11 lg:text-2xl">
          Во власти качества
        </p>
      </div>

      <div className="mx-auto mb-11 flex w-full max-w-[1201px] flex-wrap items-center justify-center gap-y-11 lg:my-28 lg:gap-x-28 lg:gap-y-12">
        {myWork.map((item, index) => (
          <div key={index} className="flex flex-col justify-center">
            <div
              className={cn(
                "mb-6 w-full overflow-hidden xl:max-w-[525px]",
                index === 0 ? "rounded-tr-[100px]" : "",
                index === 1 ? "rounded-tl-[100px]" : "",
                index === 2 ? "rounded-br-[100px]" : "",
                index === 3 ? "rounded-bl-[100px]" : "",
              )}
            >
              <Image src={item.img} alt={item.title} width={548} height={525} />
            </div>
            <div className="flex items-center justify-between px-2">
              <div className="flex flex-col gap-1">
                <h3 className="font-ledger text-xl lg:text-2xl">
                  {item.title},
                </h3>
                <span className="font-jost text-xl lg:text-2xl">
                  {`${item.square} м`}
                  <sup>
                    <small>2</small>
                  </sup>
                </span>
              </div>
              <Link href={`/portfolio`}>
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

      <div className="flex size-full max-w-[1920px] items-center justify-center rounded-3xl bg-isabelline py-10 lg:mb-20 lg:min-h-[460px] lg:gap-10">
        <div className="flex flex-col items-center border-r border-r-golden-beige">
          <span className="text-4xl text-golden-beige lg:mx-20 lg:text-8xl">
            4+
          </span>
          <p className="mx-2 font-jost text-xs text-typewriter-Ink lg:text-2xl">
            Года практики
          </p>
        </div>
        <div className="flex flex-col items-center border-r border-r-golden-beige">
          <span className="text-4xl text-golden-beige lg:mx-20 lg:text-8xl">
            60+
          </span>
          <p className="mx-2 font-jost text-xs text-typewriter-Ink lg:text-2xl">
            Готовых проектов
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl text-golden-beige lg:mx-20 lg:text-8xl">
            90
          </span>
          <p className="mx-2 font-jost text-xs text-typewriter-Ink lg:text-2xl">
            Довольных заказчиков
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
