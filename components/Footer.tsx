import { Facebook, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={382} height={82} />
        </Link>
        <p className="mb-5">Социальные сети</p>
        <div className="flex size-full items-center justify-center gap-4">
          <Link href="https://t.me/makfflury">
            <Image
              src="/telegram.png"
              alt="иконка телеграмма"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://wa.me/79884892654?text=Здравствуйте%2C+у+меня+есть+вопрос">
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

      <div className="flex flex-col items-center"></div>

      <div className="flex flex-col items-center"></div>
    </section>
  );
};

export default Footer;
