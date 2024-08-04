import Image from "next/image";
import Link from "next/link";

const nav = ["Главная", "Портфолио", "Услуги и цены", "Контакты"];

const Header = () => {
  return (
    <div className="sticky mx-auto flex min-h-[103px] w-full max-w-7xl items-center justify-between px-20 py-10">
      <Image src="./logo.svg" alt="logo" width={382} height={82} />
      <div className="flex items-center justify-between gap-8">
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
