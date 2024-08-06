import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ImageCarousel } from "./image-carousel";

const Hero = () => {
  return (
    <section
      id="Главная"
      className="mx-auto mb-28 mt-10 flex size-full flex-col text-black"
    >
      <div className="relative size-full overflow-hidden rounded-bl-[50px] md:rounded-bl-[100px] lg:rounded-bl-[200px]">
        <ImageCarousel />
      </div>
      <div className="mx-auto my-14 flex w-full max-w-3xl flex-col items-center md:my-20 lg:my-28">
        <h1 className="mb-3 max-w-3xl text-wrap text-center font-ledger text-3xl md:text-6xl lg:text-8xl">
          Дом - зеркало вашей души
        </h1>
        <p className="text-center font-jost text-base lg:text-2xl">
          Создание дизайна интерьера уникальный процесс, требующий глубокого
          понимания ваших потребностей, желаний и образа жизни
        </p>
      </div>
      <div className="mx-auto my-8 flex flex-wrap-reverse items-center justify-center lg:my-28">
        <div className="mr-16 flex max-w-md flex-col items-center">
          <h2 className="mb-7 text-center font-ledger text-2xl md:text-4xl lg:text-6xl">
            Обо Мне
          </h2>
          <p className="mb-11 text-center font-jost text-base md:text-xl lg:text-2xl">
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

          <Link href="https://wa.me/79884892654?text=Здравствуйте%2C+у+меня+есть+вопрос">
            <Button className="my-5">
              Заказать дизайн <ArrowRight className="ml-3" />
            </Button>
          </Link>
        </div>
        <div className="mb-20 size-full max-w-[653px]">
          <Image src="/about.jpg" alt="Обо мне" width={653} height={735} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
