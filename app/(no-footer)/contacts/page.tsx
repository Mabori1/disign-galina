"use client";

import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { sendMail } from "@/lib/send-mail";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Имя должно быть не менее двух букв.",
  }),
  email: z.string().email({ message: "Адрес почты не валиден." }),
  address: z.string(),
  telephone: z
    .string()
    .refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value), {
      message: "Номер телефона не валиден.",
    }),
  description: z.string().optional(),
});

const Page = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      address: "",
      telephone: "",
      description: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const mailText = `<p>Отправлено с сайта design-gm.ru</p><br>
        <p><strong>Name: </strong> ${data.username}</p><br>
        <p><strong>Email: </strong> ${data.email}</p><br>
        <p><strong>Address: </strong> ${data.address}</p><br>
        <p><strong>Phone: </strong> ${data.telephone}</p><br>
        <p><strong>Message: </strong> ${data.description}</p><br>`;

    const response = await sendMail({
      email: data.email,
      sendTo: process.env.SITE_MAIL_RECIEVER,
      subject: `Contact form submission from ${data.username}`,
      text: "отправлено из google API",
      html: mailText,
    });

    if (response?.messageId) {
      toast({
        description: "Почта успешно отправлена.",
      });
    } else {
      toast({
        description: "Почта не отправлена.",
      });
    }
  }

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
      <div className="mt-10 flex flex-col lg:mt-28">
        <h1 className="mb-10 text-center font-ledger text-3xl lg:mb-24 lg:text-5xl">
          Оставьте заявку и мы с<br /> Вами свяжемся
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col gap-3 rounded-3xl bg-isabelline p-8">
            <div className="flex items-center">
              <Image
                src="/contacts-email.svg"
                alt="иконка почты"
                width={52}
                height={52}
              />
              <span className="ml-3 font-jost text-xl">ph.makflya@mail.ru</span>
            </div>
            <div className="flex items-center">
              <Image
                src="/contacts-phone.svg"
                alt="иконка телефона"
                width={52}
                height={52}
              />
              <span className="ml-3 font-jost text-xl">
                +7&nbsp;(933)&nbsp;769-25-54
              </span>
            </div>
            <div className="flex size-full items-center justify-center gap-4">
              <Link href="https://t.me/makfflury" target="_blank">
                <Image
                  src="/telegram.svg"
                  alt="иконка телеграмма"
                  width={38}
                  height={38}
                />
              </Link>
              <Link href="https://wa.me/79884892654" target="_blank">
                <Image
                  src="/whatsapp.svg"
                  alt="иконка whatsapp"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="https://www.behance.net/galinamakeeva">
                <Image
                  src="/Behance.svg"
                  alt="иконка behance"
                  width={36}
                  height={36}
                />
              </Link>
              <Link href="mailto:ph.makflya@mail.ru">
                <Image
                  src="/mail.svg"
                  alt="иконка instagram"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex max-w-[624px] flex-col flex-wrap justify-between gap-6 md:flex-row"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Имя"
                          {...field}
                          className="w-[300px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="w-[300px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Адрес"
                          {...field}
                          className="w-[300px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Телефон"
                          {...field}
                          className="w-[300px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Комментарий"
                          className="w-[300px] resize-none md:w-[624px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="ml-auto rounded-2xl p-7">
                  Отправить
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
