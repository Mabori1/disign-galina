import Image from "next/image";
import Link from "next/link";

const nav = ["Главная", "Портфолио", "Услуги и цены", "Контакты"];

const Header = () => {
  return (
    <div className="sticky top-0 z-10 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between bg-white px-20 py-1">
      <Link href="https://t.me/makfflury" target="_blank">
        <Image src="/logo.png" alt="logo" width={382} height={82} />
      </Link>
      <div className="flex flex-wrap items-center justify-between gap-8">
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
    </div>
  );
};

export default Header;
