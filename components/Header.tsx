"use client";

import { navHeader } from "@/data";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isNavBar, setIsNavBar] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNavBar(false); // Скролл вниз
        } else {
          setShowNavBar(true); // Скролл вверх
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed left-0 top-0 z-10 w-full bg-white px-2 xl:px-4`}>
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-6 lg:max-w-7xl">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <div className="mr-4 flex w-[200px] shrink md:w-[250px] lg:w-[300px]">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={332} height={72} />
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <div className="mr-2 flex items-center justify-center gap-3">
              <Link href="tel:+7(993)7692654">
                <Image
                  src="/phone.svg"
                  alt="иконка трубки телефона"
                  width={25}
                  height={25}
                />
              </Link>

              <Link href="mailto:ph.makflya@mail.ru">
                <Image
                  src="/mail.svg"
                  alt="иконка почты"
                  width={25}
                  height={25}
                />
              </Link>

              <Link href="https://t.me/makfflury" target="_blank">
                <Image
                  src="/telegram.svg"
                  alt="иконка телеграмма"
                  width={25}
                  height={25}
                />
              </Link>
            </div>

            <button
              className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
              onClick={() => setIsNavBar(!isNavBar)}
              aria-label="Menu"
            >
              {isNavBar ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`flex md:block ${isNavBar ? "flex justify-center md:p-0" : "hidden"}`}
        >
          <ul className="h-screen items-center justify-center md:flex md:h-auto">
            {navHeader.map((navItem, index) => (
              <li
                key={index}
                className="border-b-2 border-b-nightshade-blue py-4 text-center font-jost text-sm text-nightshade-blue hover:text-neutral-500 md:border-b-0 md:px-2 md:text-lg lg:px-6 lg:text-xl xl:text-2xl"
              >
                <Link
                  href={`${navItem.link}`}
                  onClick={() => setIsNavBar(!isNavBar)}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <Link href="tel:+7(993)7692654" className="hidden text-xl xl:block">
            +7(993) 769-26-54
          </Link>

          <Link href="tel:+7(993)7692654" className="hidden md:block xl:hidden">
            <Image src="/phone.svg" alt="иконка почты" width={30} height={30} />
          </Link>

          <Link href="mailto:ph.makflya@mail.ru" className="hidden md:block">
            <Image src="/mail.svg" alt="иконка почты" width={30} height={30} />
          </Link>

          <Link
            href="https://t.me/makfflury"
            target="_blank"
            className="hidden md:block"
          >
            <Image
              src="/telegram.svg"
              alt="иконка телеграмма"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
