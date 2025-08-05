"use client";

import React from 'react';
import Image from 'next/image';

// -- Переиспользуемый компонент для карточки новости --
interface NewsArticleCardProps {
  imageSrc: string;
  date: string;
  title: string;
  snippet: string;
}

const NewsArticleCard = ({ imageSrc, date, title, snippet }: NewsArticleCardProps) => (
  <div className="flex flex-col gap-6">
    <div className="relative w-full h-64 rounded-2xl overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="flex flex-col gap-4">
      <p className="text-sm text-left text-black/60">{date}</p>
      <div className="flex flex-col gap-4">
        <h3 className="text-[22px] font-semibold text-left text-black">
          {title}
        </h3>
        <p className="text-sm text-left text-black/60">
          {snippet}
        </p>
      </div>
    </div>
  </div>
);

// -- Основной компонент страницы новостей --
export default function NewsPage() {
  // Данные для новостных статей
  const articles = [
    {
      imageSrc: "/image.png", // Убедитесь, что файлы есть в /public
      date: "03.03.2025",
      title: "День добрых дел: школьники помогают тем, кто нуждается.",
      snippet: "Ученики нашей школы приняли участие в благотворительной акции: собрали вещи для детского до...",
    },
    {
      imageSrc: "/35668660964_acf8f7a22c_b-900x600.jpeg",
      date: "03.03.2025",
      title: "Неделя науки в школе: эксперименты, открытия и новые знания!",
      snippet: "Ученики участвовали в увлекательных опытах, слушали лекции и даже попробовали себя в роли исследователей...",
    },
    {
      imageSrc: "/image-4.png",
      date: "03.03.2025",
      title: "Читаем вместе: в школе прошёл литературный марафон",
      snippet: "Ученики нашей школы приняли участие в благотворительной акции: собрали вещи для детского до...",
    },
    {
      imageSrc: "/image-2.png",
      date: "03.03.2025",
      title: "Спортивный день: соревнования, дружба и победы!",
      snippet: "Наши ученики соревновались в различных видах спорта, демонстрируя командный дух и волю к победе...",
    },
    {
      imageSrc: "/image-5.png",
      date: "03.03.2025",
      title: "Концерт талантов: музыка, танцы и театральные постановки",
      snippet: "На сцене школы выступили самые талантливые ученики, подарив зрителям незабываемый вечер...",
    },
    {
      imageSrc: "/image-3.png",
      date: "03.03.2025",
      title: "Экологическая акция: ученики ZIS за чистый город",
      snippet: "В рамках акции были высажены деревья и убраны территории парков, внося вклад в сохранение природы...",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl text-center font-bold mb-16">Новости школы</h1>

        {/* Адаптивная сетка для новостей */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {articles.map((article, index) => (
            <NewsArticleCard
              key={index}
              imageSrc={article.imageSrc}
              date={article.date}
              title={article.title}
              snippet={article.snippet}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
