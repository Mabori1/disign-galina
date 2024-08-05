import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="Главная"
      className="mx-auto mb-28 flex size-full flex-col text-black"
    >
      <div className="size-full overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Hero image"
          width={1920}
          height={1080}
          className="size-full"
        />
      </div>
      <div className="mx-auto my-28 flex w-full max-w-3xl flex-col">
        <h1 className="mb-3 max-w-3xl text-wrap font-ledger text-8xl">
          Дом - зеркало вашей души
        </h1>
        <p className="font-jost text-2xl">
          Создание дизайна интерьера уникальный процесс, требующий глубокого
          понимания ваших потребностей, желаний и образа жизни
        </p>
      </div>
      <div className="mx-auto mt-28 flex items-center justify-between">
        <div className="mr-16 flex max-w-md flex-col">
          <h2 className="mb-7 font-ledger text-6xl">Обо Мне</h2>
          <p className="mb-11 font-jost text-2xl">
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
          <Button>
            Заказать дизайн <ArrowRight className="ml-3" />
          </Button>
        </div>
        <div className="size-full max-h-[735px]">
          <Image src="/about.jpg" alt="Обо мне" width={653} height={735} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
