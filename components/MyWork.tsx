import { myWork } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const MyWork = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="mx-auto flex max-w-lg flex-col items-center">
        <h2 className="mb-5 text-center font-ledger text-7xl">Мои работы</h2>
        <p className="text-center font-jost text-2xl">Во власти качества</p>
      </div>

      <div className="mx-auto my-28 flex w-full max-w-[1201px] flex-wrap items-center justify-center gap-x-28 gap-y-12">
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
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="font-ledger text-2xl">{item.title},</h3>
                <span className="font-jost text-2xl">
                  {`${item.square} м`}
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

      <div className="mb-20 flex size-full min-h-[460px] max-w-[1920px] flex-wrap items-center justify-center gap-10 rounded-3xl bg-isabelline py-10">
        <div className="flex flex-col items-center border md:border-r-golden-beige">
          <span className="mx-20 text-8xl text-golden-beige">4+</span>
          <p className="font-jost text-2xl text-typewriter-Ink">
            Года практики
          </p>
        </div>
        <div className="flex flex-col items-center border lg:border-r-golden-beige">
          <span className="mx-20 text-8xl text-golden-beige">60+</span>
          <p className="font-jost text-2xl text-typewriter-Ink">
            Готовых проектов
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="mx-20 text-8xl text-golden-beige">90</span>
          <p className="font-jost text-2xl text-typewriter-Ink">
            Довольных заказчиков
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
