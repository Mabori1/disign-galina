import React from "react";
import Image from "next/image";

const Approach = () => {
  return (
    <section className="mb-28 flex flex-col items-center rounded-3xl bg-isabelline pt-20">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <h2 className="mb-7 font-ledger text-6xl">Как я работаю</h2>
        <p className="mb-11 font-jost text-2xl">
          Для тех, кто ценит время и деньги
        </p>
      </div>

      <div className="mx-auto mb-16 mt-28 flex w-full max-w-[1000px] items-center justify-between">
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap1.jpg" alt="Обо мне фото" width={454} height={486} />
        </div>
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-14 flex items-center justify-between">
            <Image
              src="/aps1.png"
              alt="иконка мольберта"
              width="92"
              height="92"
            />
            <span className="font-jost text-9xl">01</span>
          </div>
          <div className="mr-16 flex size-full max-w-md flex-col">
            <h3 className="mb-7 text-center font-ledger text-5xl">
              Подготовка
            </h3>
            <p className="mb-11 font-jost text-2xl text-typewriter-Ink">
              Выезд на объект для замера и фотофиксации всех помещений
              коммуникаций, подписание договора, сбор подробного технического
              задания
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-16 mt-28 flex w-full max-w-[1000px] items-center justify-between">
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-14 flex items-center justify-between">
            <Image
              src="/aps2.png"
              alt="иконка мольберта"
              width="92"
              height="92"
            />
            <span className="font-jost text-9xl">02</span>
          </div>
          <div className="mr-16 flex size-full max-w-md flex-col">
            <h3 className="mb-7 text-center font-ledger text-5xl">
              Планировочное решение
            </h3>
            <p className="mb-11 font-jost text-2xl text-typewriter-Ink">
              Изготовление пакета чертежей, таких как: обмерный план,
              расстановки мебели в нескольких вариантах
            </p>
          </div>
        </div>

        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap3.jpg" alt="Обо мне фото" width={454} height={486} />
        </div>
      </div>
      <div className="mx-auto mb-16 mt-28 flex w-full max-w-[1000px] items-center justify-between">
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap3.jpg" alt="Обо мне фото" width={454} height={486} />
        </div>
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-14 flex items-center justify-between">
            <Image
              src="/aps3.png"
              alt="иконка мольберта"
              width="92"
              height="92"
            />
            <span className="font-jost text-9xl">03</span>
          </div>
          <div className="mr-16 flex size-full max-w-md flex-col">
            <h3 className="mb-7 text-center font-ledger text-5xl">
              Концепция и 3D-Визуализация
            </h3>
            <p className="mb-11 font-jost text-2xl text-typewriter-Ink">
              Разработка концепции и визуального стиля, отрисовка
              фотореалистичных 3D-Визуализаций
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-16 mt-28 flex w-full max-w-[1000px] items-center justify-between">
        <div className="flex size-full max-w-[454px] flex-col justify-center">
          <div className="mb-14 flex items-center justify-between">
            <Image
              src="/aps4.png"
              alt="иконка мольберта"
              width="92"
              height="92"
            />
            <span className="font-jost text-9xl">04</span>
          </div>
          <div className="mr-16 flex size-full max-w-md flex-col">
            <h3 className="mb-7 text-center font-ledger text-5xl">
              Компоновка проекта
            </h3>
            <p className="mb-11 font-jost text-2xl text-typewriter-Ink">
              Изготовление пакета чертежей, таких как: обмерный план,
              расстановки мебели в нескольких вариантах
            </p>
          </div>
        </div>
        <div className="size-full max-w-[454px] overflow-hidden rounded-bl-[400px] rounded-tr-[100px] border border-black">
          <Image src="/ap4.jpg" alt="Обо мне фото" width={454} height={486} />
        </div>
      </div>
    </section>
  );
};

export default Approach;
