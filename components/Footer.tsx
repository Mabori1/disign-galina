import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const nav = ["Главная", "Портфолио", "Услуги и цены", "Контакты"];

  return (
    <section className="flex justify-center gap-20 pb-10">
      <div className="flex flex-col items-center">
        <Link href="https://t.me/makfflury" target="_blank">
          <Image src="/logo.png" alt="logo" width={382} height={82} />
        </Link>
        <p className="mb-5">Социальные сети</p>
        <div className="flex size-full items-center justify-center gap-4">
          <Link href="https://t.me/makfflury" target="_blank">
            <Image
              src="/telegram.png"
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
              src="/whatsapp.png"
              alt="иконка whatsapp"
              width={32}
              height={32}
            />
          </Link>
          <Link href="/">
            <Image
              src="/discord.png"
              alt="иконка discord"
              width={32}
              height={32}
            />
          </Link>
          <Link href="/">
            <Image
              src="/instagram.png"
              alt="иконка instagram"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1">
        <p className="mb-2 text-xl font-bold">Страницы</p>
        {nav.map((navItem, index) => (
          <Link
            key={`link=${index}`}
            href={`#${navItem}`}
            className="space-x-1 font-jost text-xl text-nightshade-blue hover:text-neutral-500"
          >
            <span className="cursor-pointer">{navItem}</span>
          </Link>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-1 font-jost text-xl text-nightshade-blue">
        <p className="mb-2 text-xl font-bold">Контакты</p>

        <span>г. Краснодар, проезд Дальний 11к1</span>

        <Link
          href={`mailto:ph.makflya@mail.ru&body=привет?subject=вопрос`}
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
    </section>
  );
};

export default Footer;
