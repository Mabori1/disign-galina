import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-auto w-screen flex-wrap items-center justify-around overflow-hidden">
      <div className="my-10">
        <h2 className="text-[200px] text-golden-beige">404</h2>
        <p className="mb-10 text-4xl">
          Запрошенная вами <br />
          страница не найдена
        </p>
        <Link href="/">
          <Button className={cn("mb-6 px-8")}>
            На главную <ArrowRight className="ml-3" />
          </Button>
        </Link>
      </div>
      <div className="overflow-clip rounded-bl-[300px] border-4">
        <Image src="/404.jpg" alt="404" width={813} height={942} />
      </div>
    </div>
  );
}
