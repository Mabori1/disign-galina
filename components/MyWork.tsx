import { CircleChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const MyWork = () => {
  return (
    <section className="mb-28 flex flex-col items-center pt-20">
      <div className="mx-auto flex max-w-lg flex-col items-center">
        <h2 className="mb-5 font-ledger text-6xl">Мои работы</h2>
        <p className="mb-11 font-jost text-2xl">Во власти качества</p>
      </div>

      <div className="mx-auto mb-16 mt-10 flex w-full max-w-[1150px] flex-wrap items-center justify-between gap-20">
        <div className="flex flex-col justify-center">
          <div className="mb-6 w-full max-w-[525px] overflow-hidden rounded-tr-[100px]">
            <Image src="/w1.jpg" alt="фото ванна" height={525} width={548} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="font-ledger text-2xl">Санкт-Петербург</h3>
              <span className="font-jost text-xl">
                72 м
                <sup>
                  <small>2</small>
                </sup>
              </span>
            </div>
            <CircleChevronRight
              fill="#F4F0EC"
              size={60}
              strokeWidth={0.2}
              className="transition-color duration-300 hover:fill-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-6 w-full max-w-[525px] overflow-hidden rounded-tl-[100px]">
            <Image src="/w2.jpg" alt="фото ванна" height={525} width={548} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="font-ledger text-2xl">США</h3>
              <span className="font-jost text-xl">
                126 м
                <sup>
                  <small>2</small>
                </sup>
              </span>
            </div>
            <CircleChevronRight
              fill="#F4F0EC"
              size={60}
              strokeWidth={0.2}
              className="transition-color duration-300 hover:fill-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-6 w-full max-w-[525px] overflow-hidden rounded-br-[100px]">
            <Image src="/w3.jpg" alt="фото ванна" height={525} width={548} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="font-ledger text-2xl">Екатеринбург</h3>
              <span className="font-jost text-xl">
                56 м
                <sup>
                  <small>2</small>
                </sup>
              </span>
            </div>
            <CircleChevronRight
              fill="#F4F0EC"
              size={60}
              strokeWidth={0.2}
              className="transition-color duration-300 hover:fill-gray-300"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-6 w-full max-w-[525px] overflow-hidden rounded-bl-[100px]">
            <Image src="/w4.jpg" alt="фото ванна" height={525} width={548} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="font-ledger text-2xl">Москва</h3>
              <span className="font-jost text-xl">
                32 м
                <sup>
                  <small>2</small>
                </sup>
              </span>
            </div>
            <CircleChevronRight
              fill="#F4F0EC"
              size={60}
              strokeWidth={0.2}
              className="transition-color duration-300 hover:fill-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="mb-20 flex size-full h-[460px] max-w-[1920px] items-center justify-center bg-isabelline">
        <div className="flex flex-col items-center border border-r-golden-beige">
          <span className="mx-20 text-8xl text-golden-beige">4+</span>
          <p className="font-jost text-2xl text-typewriter-Ink">
            Года практики
          </p>
        </div>
        <div className="flex flex-col items-center border border-r-golden-beige">
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

      <div className="flex size-full h-[374px] max-w-[1020px] flex-col items-center justify-center gap-5 rounded-[100px] bg-nightshade-blue text-white">
        <h3 className="font-ledger text-6xl">Остались вопросы?</h3>
        <p className="font-jost text-2xl">
          Закажите обратный звонок и мы свяжемся с Вами
        </p>

        <Button className="bg-golden-beige px-10">
          Заказать дизайн <ArrowRight className="ml-3" />
        </Button>
      </div>
    </section>
  );
};

export default MyWork;
