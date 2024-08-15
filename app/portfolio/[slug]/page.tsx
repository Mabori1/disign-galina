"use client";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import { portfolioSlug } from "@/data";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const Page = ({ params }: { params: { slug: string } }) => {
  const portfolio = portfolioSlug.find((item) => item.id === params.slug);
  if (!portfolio) return null;
  return (
    <section>
      <div className="relative mx-auto flex h-full w-full flex-col">
        <div className="min-h-96 w-[100vw] pt-28">
          <Image
            src="/portfolio-slug-hero.jpg"
            alt="фото интерьера"
            width={1920}
            height={384}
          />
        </div>
        <div className="mt-28 flex flex-wrap">
          <div className="mr-auto flex">
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-3" width={25} height={23} />
              <span className="cursor-pointer font-jost text-2xl font-bold">
                Назад
              </span>
            </Button>
          </div>
          <div className="mx-auto flex max-w-[658px] flex-col">
            <h2 className="font-ledger text-4xl">
              {portfolio.title}
              <span>
                м
                <sup>
                  <small>2</small>
                </sup>
              </span>
            </h2>
            <p className="mt-10 font-jost text-[22px]">{portfolio.text}</p>
          </div>
        </div>

        <div className="mx-auto mt-28 flex flex-wrap items-center justify-center overflow-hidden rounded-[5rem]">
          <ImageCarousel data={portfolio.images} width={1200} height={800} />
        </div>
      </div>
    </section>
  );
};

export default Page;
