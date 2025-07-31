// src/components/LifeAtZisSection.tsx

import React from 'react';

// 1. Импортируем все вспомогательные компоненты из их файлов
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { PaginationDot } from './icons/PaginationDot';
import { NewsCard } from './cards/NewsCard';

// -- Основной компонент секции --

export default function LifeAtZisSection() {
  // ИСПРАВЛЕНО: Убрано свойство patternImageSrc, так как узор теперь часть NewsCard
  const newsData = [
    {
      bgColor: "bg-[#edffd6]",
      childImageSrc: "/news-img1.png",
      description: "В благотворительной ярмарке, прошедшей в первую неделю Рамадана, приняли участие 17 классов.",
    },
    {
      bgColor: "bg-[#fffbe5]",
      childImageSrc: "/news-img2.png",
      description: "В благотворительной ярмарке, прошедшей в первую неделю Рамадана, приняли участие 17 классов.",
    },
  ];

  return (
    <section className="bg-white w-full py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Блок заголовка для правильного центрирования */}
        <div className="relative mb-12">
          <div className="text-center">
            <h2 className="text-5xl">
              <span className="text-black">Жизнь в </span>
              <span className="text-[#4aa30a]">ZIS</span>
            </h2>
            <p className="text-2xl font-light mt-2">
              Новости, анонсы, мероприятия
            </p>
          </div>
          <a href="#" className="absolute top-1/2 -translate-y-1/2 right-0 hidden md:flex items-center gap-2 text-base text-black hover:text-[#4aa30a] transition-colors">
            <span>Все новости</span>
            <ArrowRightIcon />
          </a>
        </div>

        {/* Контейнер для карточек */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-12">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              bgColor={news.bgColor}
              childImageSrc={news.childImageSrc}
              description={news.description}
            />
          ))}
        </div>

        {/* Пагинация */}
        <div className="flex justify-center items-center gap-2">
          <PaginationDot isActive />
          <PaginationDot />
          <PaginationDot />
        </div>
      </div>
    </section>
  );
}
