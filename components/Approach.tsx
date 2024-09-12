import React from "react";
import Image from "next/image";

const Approach = () => {
  return (
    <section className="mb-11 flex flex-col flex-wrap items-center rounded-[70px] bg-isabelline pt-10 lg:mb-28">
      <div className="mx-auto flex flex-col items-center">
        <h2 className="mb-1 text-center font-ledger text-[22px] lg:mb-3 lg:text-6xl">
          Как я работаю
        </h2>
        <p className="mb-4 text-center font-jost text-sm lg:mb-11 lg:text-2xl">
          Для тех, кто ценит время и деньги
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1030px] flex-wrap-reverse items-center justify-center px-4 lg:mb-16 lg:mt-10 lg:gap-12">
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap1.jpg" alt="фото стола" width={454} height={486} />
        </div>
        <div className="flex size-full max-w-[454px] flex-col lg:justify-center">
          <div className="mb-2 flex justify-center lg:mb-14 lg:items-center lg:justify-between">
            <Image
              className="hidden lg:block"
              src="/aps1.png"
              alt="иконка мольберта"
              width="92"
              height="92"
            />
            <span className="font-dm text-5xl lg:text-9xl">01</span>
          </div>
          <div className="flex size-full max-w-md flex-col lg:mr-16">
            <h3 className="mb-2 text-center font-ledger text-[22px] lg:mb-7 lg:text-5xl">
              Подготовка
            </h3>
            <p className="mb-2 font-jost text-sm text-typewriter-Ink lg:mb-11 lg:text-2xl">
              Выезд на объект для замера и фотофиксации всех помещений
              коммуникаций, подписание договора, сбор подробного технического
              задания
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1030px] flex-wrap items-center justify-center px-4 lg:mb-16 lg:gap-12">
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-2 flex justify-center lg:mb-14 lg:items-center lg:justify-between">
            <Image
              className="hidden lg:block"
              src="/aps2.png"
              alt="иконка чертежных инструментов"
              width="92"
              height="92"
            />
            <span className="font-dm text-5xl lg:text-9xl">02</span>
          </div>
          <div className="flex size-full max-w-md flex-col lg:mr-16">
            <h3 className="mb-2 text-center font-ledger text-[22px] lg:mb-7 lg:text-5xl">
              Планировочное решение
            </h3>
            <p className="mb-2 font-jost text-sm text-typewriter-Ink lg:mb-11 lg:text-2xl">
              Изготовление пакета чертежей, таких как: обмерный план,
              расстановки мебели в нескольких вариантах
            </p>
          </div>
        </div>
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap2.jpg" alt="фото окна" width={454} height={486} />
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1030px] flex-wrap-reverse items-center justify-center px-4 lg:mb-16 lg:gap-12">
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap3.jpg" alt="фото дивана" width={454} height={486} />
        </div>
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-2 flex justify-center lg:mb-14 lg:items-center lg:justify-between">
            <Image
              className="hidden lg:block"
              src="/aps3.png"
              alt="иконка дома"
              width="92"
              height="92"
            />
            <span className="font-dm text-5xl lg:text-9xl">03</span>
          </div>
          <div className="flex size-full max-w-md flex-col lg:mr-16">
            <h3 className="mb-2 text-center font-ledger text-[22px] lg:mb-7 lg:text-5xl">
              Концепция и <br />
              3D-Визуализация
            </h3>
            <p className="mb-2 font-jost text-sm text-typewriter-Ink lg:mb-11 lg:text-2xl">
              Разработка концепции и визуального стиля, отрисовка
              фотореалистичных 3D-Визуализаций
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1030px] flex-wrap items-center justify-center px-4 lg:mb-16 lg:gap-12">
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-2 flex justify-center lg:mb-14 lg:items-center lg:justify-between">
            <Image
              className="hidden lg:block"
              src="/aps4.png"
              alt="иконка лестницы"
              width="92"
              height="92"
            />
            <span className="font-dm text-5xl lg:text-9xl">04</span>
          </div>
          <div className="flex size-full max-w-md flex-col lg:mr-16">
            <h3 className="mb-2 text-center font-ledger text-[22px] lg:mb-7 lg:text-5xl">
              Компоновка проекта
            </h3>
            <p className="mb-2 font-jost text-sm text-typewriter-Ink lg:mb-11 lg:text-2xl">
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
