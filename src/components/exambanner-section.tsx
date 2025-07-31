import React from 'react';
import Image from 'next/image';

export default function ExamBanner() {
  return (
    <section className="w-full bg-[#c3f1bd] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-between h-auto md:h-28 py-6 md:py-0">

          {/* Декоративное изображение (узор) */}
          <div className="absolute inset-0 flex justify-center items-center opacity-50 md:opacity-100">
            <Image
              src="/image5.png" // Убедитесь, что этот файл есть в папке /public
              alt=""
              width={565}
              height={80}
              className="object-cover"
            />
          </div>

          {/* Левая часть: Заголовок */}
          <div className="relative z-10 text-center md:text-left">
            <p className="text-base font-medium text-black">
              Вступительный экзамен в школу Zerdeli
            </p>
          </div>

          {/* Правая часть: Описание и кнопка */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <p className="text-sm text-center md:text-right text-black/60">
              Запишитесь на экзамен. <br className="hidden sm:block" />
              С вами свяжется менеджер.
            </p>
            <a
              href="#"
              className="flex-shrink-0 px-6 py-3 rounded-[40px] bg-[#6646ea] hover:bg-[#5538c8] transition-colors"
            >
              <p className="text-sm font-semibold text-left text-white">
                Запись на экзамены
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
