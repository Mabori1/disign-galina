"use client";
import { ImageCarousel } from "@/components/ImageCarousel";
import { portfolioSlug } from "@/data";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }: { params: { slug: string } }) => {
  const portfolio = portfolioSlug.find((item) => item.id === params.slug);
  if (!portfolio) return null;

  return (
    <section className="mx-auto mb-5 size-full">
      <div className="absolute inset-0 w-[100vw] pt-14 lg:min-h-96 lg:pt-28">
        <Image
          src="/portfolio-slug-hero.jpg"
          alt="фото интерьера"
          width={1920}
          height={384}
        />
      </div>
      <div className="mx-auto mt-[23vw] flex flex-col justify-center">
        <div className="mt-16 flex flex-wrap lg:mt-24">
          <Link
            href="/portfolio"
            className="z-20 mb-5 ml-4 flex cursor-pointer items-center"
          >
            <ArrowLeft
              className="mr-1 size-3 lg:mr-2 lg:size-6"
              width={25}
              height={23}
            />
            <span className="cursor-pointer font-jost text-sm font-medium lg:text-2xl">
              Назад
            </span>
          </Link>
          <div className="mx-auto flex max-w-[658px] flex-col px-4 lg:px-0">
            <h2 className="font-ledger text-lg md:text-3xl lg:text-4xl">
              {portfolio.title}
              <span>
                м
                <sup>
                  <small>2</small>
                </sup>
              </span>
            </h2>
            <p className="mt-2 font-jost text-sm lg:mt-10 lg:text-[22px]">
              {portfolio.text}
            </p>
          </div>
        </div>

        <div className="mx-4 mt-8 flex flex-wrap items-center justify-center overflow-hidden rounded-bl-[5rem] rounded-tr-[5rem] lg:mx-auto lg:mt-20 lg:rounded-[5rem]">
          <ImageCarousel data={portfolio.images} width={1200} height={800} />
        </div>
      </div>
    </section>
  );
};

export default Page;
