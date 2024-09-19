import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section>
      <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
        <div className="max-h-[60vh] w-[100vw] pt-16 lg:min-h-96 lg:pt-28">
          <Image
            src="/contacts-bg.jpg"
            alt="фото интерьера"
            width={1920}
            height={384}
          />

          <div className="absolute left-1/2 top-[70%] flex h-[40%] min-w-[40%] translate-x-[-50%] flex-col items-center justify-center overflow-hidden rounded rounded-t-3xl bg-white font-ledger lg:top-[65%] lg:gap-4">
            <h1 className="text-xl font-medium md:text-4xl lg:text-5xl">
              Контакты
            </h1>
            <p className="font-jost text-sm text-typewriter-Ink md:text-xl lg:text-2xl">
              Работаем, чтобы вы отдыхали
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 flex items-start justify-center overflow-hidden lg:mt-28 lg:gap-4"></div>
    </section>
  );
};

export default Page;
