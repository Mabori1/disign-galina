import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="Главная"
      className="mx-auto mt-10 flex size-full flex-col text-black"
    >
      <div className="relative left-1/2 top-[60px] mx-auto h-auto w-[100vw] translate-x-[-50%] overflow-hidden rounded-bl-[150px] lg:rounded-bl-[200px]">
        <Image
          src="/hero.jpg"
          alt="Главное фото сайта"
          width={1920}
          height={1080}
        />
      </div>
      <div className="mt-20 flex w-full max-w-3xl flex-col px-5 lg:mt-36">
        <h1 className="mb-1 max-w-3xl text-wrap font-ledger text-[22px] md:text-4xl lg:mb-5 lg:text-7xl">
          Дом - зеркало вашей души
        </h1>
        <p className="font-jost text-xs md:text-sm lg:text-2xl">
          &nbsp;&nbsp;Создание дизайна интерьера уникальный процесс, требующий
          глубокого понимания ваших потребностей, желаний и образа жизни
        </p>
      </div>
      <div className="my-6 flex flex-wrap-reverse justify-between lg:my-20">
        <div className="flex max-w-md flex-col px-5">
          <h2 className="mb-3 font-ledger text-[22px] md:text-[24px] lg:mt-7 lg:text-center lg:text-6xl">
            Обо Мне
          </h2>
          <p className="mb-5 font-jost text-xs md:text-sm lg:mb-11 lg:text-2xl">
            &nbsp;&nbsp; Меня зовут Галина, я - профессиональный дизайнер
            интерьера с многолетним опытом, моя задача создать для вас
            пространство, в котором хочется жить! Обращаю внимание не только на
            визуальную концепцию, но и функциональность интерьера, учитывая все
            особенности вашей квартиры, используя максимум пространства, не
            забывая о индивидуальности каждого члена семьи. Для меня важно в
            проекте использовать не только красивые, но и доступные мебель и
            материалы, ориентируясь на ваш бюджет, попутно консультируя о плюсах
            и минусах выбора с возможной альтернативой
          </p>

          <Link href="https://wa.me/79884892654" className="mb-5 text-center">
            <Button>
              Заказать <ArrowRight className="ml-3" />
            </Button>
          </Link>
        </div>
        <div className="mb-5 size-full max-w-[653px]">
          <Image src="/about.jpg" alt="Обо мне" width={653} height={735} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
