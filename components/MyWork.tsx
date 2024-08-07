import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { myWork } from "@/data";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "./ImageCarousel";

const MyWork = () => {
  return (
    <section className="mb-28 flex flex-col items-center pt-20">
      <div className="mx-auto flex max-w-lg flex-col items-center">
        <h2 className="mb-5 text-center font-ledger text-4xl lg:text-6xl">
          Мои работы
        </h2>
        <p className="mb-11 text-center font-jost text-3xl">
          Во власти качества
        </p>
      </div>

      <div className="mx-auto mb-16 mt-10 flex w-full max-w-[1150px] flex-wrap items-center justify-center gap-20">
        {myWork.map((item, index) => (
          <div key={index} className="flex flex-col justify-center">
            <div
              className={cn(
                "mb-6 w-full overflow-hidden rounded-bl-[100px] xl:max-w-[525px]",
              )}
            >
              <ImageCarousel data={item.images} width={548} height={525} />
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <h3 className="font-ledger text-2xl">{item.title},</h3>
              <span className="font-jost text-xl">
                {`${item.square} м`}
                <sup>
                  <small>2</small>
                </sup>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-20 flex size-full min-h-[460px] max-w-[1920px] flex-wrap items-center justify-center gap-10 bg-isabelline py-10">
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

      <div className="flex size-full h-[374px] max-w-[1020px] flex-col items-center justify-center gap-5 rounded-[70px] bg-nightshade-blue px-3 text-center text-white">
        <h3 className="font-ledger text-6xl">Остались вопросы?</h3>
        <p className="font-jost text-2xl">
          Закажите обратный звонок и мы свяжемся с Вами
        </p>

        <Link
          href="https://wa.me/79884892654?text=Здравствуйте%2C+у+меня+есть+вопрос"
          target="_blank"
        >
          <Button className="bg-golden-beige px-10">
            Заказать дизайн <ArrowRight className="ml-3" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MyWork;
