import { navHeader } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <section className="flex flex-col items-center bg-white py-20">
      <div className="mx-3 mb-10 flex size-full h-[374px] max-w-[80%] flex-col items-center justify-center gap-5 rounded-[70px] bg-nightshade-blue text-center text-white lg:max-w-[60%]">
        <h3 className="font-ledger text-4xl md:text-6xl">Остались вопросы?</h3>
        <p className="font-jost text-2xl">
          Закажите обратный звонок и мы свяжемся с Вами
        </p>

        <Link
          href="https://wa.me/79884892654?text=Здравствуйте%2C+у+меня+есть+вопрос"
          target="_blank"
        >
          <Button className="bg-golden-beige px-10">
            Заказать <ArrowRight className="ml-3" />
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-20">
        <div className="flex flex-col items-center">
          <Link href="https://t.me/makfflury" target="_blank">
            <Image src="/logo.png" alt="logo" width={382} height={82} />
          </Link>
          <p className="mb-5">Социальные сети</p>
          <div className="flex size-full items-center justify-center gap-4">
            <Link href="https://t.me/makfflury" target="_blank">
              <Image
                src="/telegram.svg"
                alt="иконка телеграмма"
                width={32}
                height={32}
              />
            </Link>
            <Link
              href="https://wa.me/79884892654?text=Здравствуйте%2C+у+меня+есть+вопрос"
              target="_blank"
            >
              <Image
                src="/whatsapp.svg"
                alt="иконка whatsapp"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/">
              <Image
                src="/behance.svg"
                alt="иконка discord"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.svg"
                alt="иконка instagram"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-1">
          <p className="mb-2 text-xl font-bold">Страницы</p>
          {navHeader.map((navItem, index) => (
            <Link
              key={`link=${index}`}
              href={`${navItem.link}`}
              className="space-x-1 font-jost text-xl text-nightshade-blue hover:text-neutral-500"
            >
              <span className="cursor-pointer">{navItem.label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-1 font-jost text-xl text-nightshade-blue">
          <p className="mb-2 text-xl font-bold">Контакты</p>

          <span>г. Краснодар, проезд Дальний 11к1</span>

          <Link
            href={`mailto:ph.makflya@mail.ru`}
            className="cursor-pointer hover:text-neutral-500"
          >
            <span>ph.makflya@mail.ru</span>
          </Link>

          <Link
            href={`tel:+79937692654`}
            className="cursor-pointer hover:text-neutral-500"
          >
            <span>+7(993)769-26-54</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
