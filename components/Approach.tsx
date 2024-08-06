import React from "react";
import Image from "next/image";

const Approach = () => {
  return (
    <section className="mb-28 flex flex-col flex-wrap items-center rounded-3xl bg-isabelline pt-20">
      <div className="mx-auto flex max-w-lg flex-col items-center">
        <h2 className="mb-5 text-center font-ledger text-2xl md:text-4xl lg:text-6xl">
          Как я работаю
        </h2>
        <p className="mb-11 text-center font-jost text-base md:text-xl lg:text-2xl">
          Для тех, кто ценит время и деньги
        </p>
      </div>

      <div className="mx-auto mb-16 mt-10 flex w-full max-w-[1030px] flex-wrap-reverse items-center justify-center gap-12 px-4">
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap1.jpg" alt="фото стола" width={454} height={486} />
        </div>
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-14 flex items-center justify-between">
            <Image
              src="/aps1.png"
              alt="иконка мольберта"
              width="92"
              height="92"
            />
            <span className="font-jost text-8xl">01</span>
          </div>
          <div className="mr-16 flex size-full max-w-md flex-col">
            <h3 className="mb-7 text-center font-ledger text-2xl md:text-4xl lg:text-6xl">
              Подготовка
            </h3>
            <p className="mb-11 font-jost text-base text-typewriter-Ink md:text-xl lg:text-2xl">
              Выезд на объект для замера и фотофиксации всех помещений
              коммуникаций, подписание договора, сбор подробного технического
              задания
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-16 mt-10 flex w-full max-w-[1030px] flex-wrap items-center justify-center gap-12 px-4">
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-14 flex items-center justify-between">
            <Image
              src="/aps2.png"
              alt="иконка чертежных инструментов"
              width="92"
              height="92"
            />
            <span className="font-jost text-8xl">02</span>
          </div>
          <div className="mr-16 flex size-full max-w-md flex-col">
            <h3 className="mb-7 text-center font-ledger text-2xl md:text-4xl lg:text-6xl">
              Планировочное решение
            </h3>
            <p className="mb-11 font-jost text-base text-typewriter-Ink md:text-xl lg:text-2xl">
              Изготовление пакета чертежей, таких как: обмерный план,
              расстановки мебели в нескольких вариантах
            </p>
          </div>
        </div>
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap2.jpg" alt="фото окна" width={454} height={486} />
        </div>
      </div>

      <div className="mx-auto mb-16 mt-10 flex w-full max-w-[1030px] flex-wrap-reverse items-center justify-center gap-12 px-4">
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap3.jpg" alt="фото дивана" width={454} height={486} />
        </div>
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-14 flex items-center justify-between">
            <Image src="/aps3.png" alt="иконка дома" width="92" height="92" />
            <span className="font-jost text-8xl">03</span>
          </div>
          <div className="mr-16 flex size-full max-w-md flex-col">
            <h3 className="mb-7 text-center font-ledger text-2xl md:text-4xl lg:text-6xl">
              Концепция и 3D-Визуализация
            </h3>
            <p className="mb-11 font-jost text-base text-typewriter-Ink md:text-xl lg:text-2xl">
              Разработка концепции и визуального стиля, отрисовка
              фотореалистичных 3D-Визуализаций
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-16 mt-10 flex w-full max-w-[1030px] flex-wrap items-center justify-center gap-12 px-4">
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-14 flex items-center justify-between">
            <Image
              src="/aps4.png"
              alt="иконка лестницы"
              width="92"
              height="92"
            />
            <span className="font-jost text-8xl">04</span>
          </div>
          <div className="mr-16 flex size-full max-w-md flex-col">
            <h3 className="mb-7 text-center font-ledger text-2xl md:text-4xl lg:text-6xl">
              Компоновка проекта
            </h3>
            <p className="mb-11 font-jost text-base text-typewriter-Ink md:text-xl lg:text-2xl">
              Создание дополнительных комплкетов чертежей для строителей, таких
              как: план пола, потолка, плинтусов, розеток и тд.
            </p>
          </div>
        </div>
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap4.jpg" alt="фото спальни" width={454} height={486} />
        </div>
      </div>
    </section>
  );
};

export default Approach;
