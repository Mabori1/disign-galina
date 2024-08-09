import Image from "next/image";

const Page = () => {
  return (
    <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
      <div className="min-h-96 w-[100vw] pt-28">
        <Image
          src="/price-img.jpg"
          alt="фото интерьера"
          width={1920}
          height={384}
        />

        <div className="absolute -bottom-0.5 left-1/2 flex h-44 min-w-[503px] translate-x-[-50%] flex-col flex-wrap items-center justify-center gap-4 overflow-hidden rounded rounded-t-3xl bg-white font-ledger">
          <h1 className="text-5xl font-medium">Услуги и цены</h1>
          <p className="font-jost text-2xl text-typewriter-Ink">
            Качество выше, чем цена
          </p>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Page;
