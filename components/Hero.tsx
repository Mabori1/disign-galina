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
      <div className="relative left-1/2 top-[60px] mx-auto h-auto w-[100vw] translate-x-[-50%] overflow-hidden rounded-bl-[50px] md:rounded-bl-[100px] lg:rounded-bl-[200px]">
        <Image
          src="/hero.jpg"
          alt="Главное фото сайта"
          width={1920}
          height={1080}
        />
      </div>
      <div className="mt-36 flex w-full max-w-3xl flex-col">
        <h1 className="mb-5 max-w-3xl text-wrap font-ledger text-6xl md:text-7xl">
          Дом - зеркало <br /> вашей души
        </h1>
        <p className="font-jost text-2xl">
          Создание дизайна интерьера уникальный процесс, требующий глубокого
          понимания ваших потребностей, желаний и образа жизни
        </p>
      </div>
      <div className="mx-auto my-20 flex flex-wrap-reverse justify-between md:justify-between">
        <div className="flex max-w-md flex-col">
          <h2 className="mb-3 mt-7 text-center font-ledger text-4xl lg:text-6xl">
            Обо Мне
          </h2>
          <p className="mb-11 font-jost text-[22px] leading-6 md:text-3xl lg:text-2xl">
            Меня зовут Галина, я - профессиональный дизайнер интерьера с
            многолетним опытом, моя задача создать для вас пространство, в
            котором хочется жить! Обращаю внимание не только на визуальную
            концепцию, но и функциональность интерьера, учитывая все особенности
            вашей квартиры, используя максимум пространства, не забывая о
            индивидуальности каждого члена семьи. Для меня важно в проекте
            использовать не только красивые, но и доступные мебель и материалы,
            ориентируясь на ваш бюджет, попутно консультируя о плюсах и минусах
            выбора с возможной альтернативой
          </p>

          <Link href="https://wa.me/79884892654" className="text-center">
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
