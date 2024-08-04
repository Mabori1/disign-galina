import Image from "next/image";
import React from "react";

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
      <div className="mx-auto mt-28 flex w-full max-w-3xl flex-col">
        <h1 className="mb-3 max-w-3xl text-wrap font-ledger text-8xl">
          Дом - зеркало вашей души
        </h1>
        <p className="font-jost text-2xl">
          Создание дизайна интерьера уникальный процесс, требующий глубокого
          понимания ваших потребностей, желаний и образа жизни
        </p>
      </div>
    </section>
  );
};

export default Hero;
