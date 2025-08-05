"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

// -- Иконка-разделитель для хлебных крошек --
const BreadcrumbSeparator = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 6" stroke="black" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// -- Переиспользуемый компонент для карточки новости --
interface NewsArticleCardProps {
  imageSrc: string;
  date: string;
  title: string;
  snippet: string;
  link: string;
  id: string;
}

const NewsArticleCard = ({ imageSrc, date, title, snippet, link, id }: NewsArticleCardProps) => (
  <Link href={`/news/${id}`} className="block hover:opacity-95 transition-opacity">
    <div className="flex flex-col gap-6">
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
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
  </Link>
);

// -- Основной компонент страницы новостей --
export default function NewsPage() {
  // Данные для новостных статей
  const articles = [
    {
      id: "1",
      imageSrc: "/news1.png",
      date: "03.03.2025",
      title: "День добрых дел: школьники помогают тем, кто нуждается.",
      snippet: "Ученики нашей школы приняли участие в благотворительной акции: собрали вещи для детского до...",
      link: "https://example.com/news/1",
    },
    {
      id: "2",
      imageSrc: "/news2.png",
      date: "03.03.2025",
      title: "Неделя науки в школе: эксперименты, открытия и новые знания!",
      snippet: "Ученики участвовали в увлекательных опытах, слушали лекции и даже попробовали себя в роли исследователей...",
      link: "https://example.com/news/2",
    },
    {
      id: "3",
      imageSrc: "/news3.png",
      date: "03.03.2025",
      title: "Читаем вместе: в школе прошёл литературный марафон",
      snippet: "Ученики нашей школы приняли участие в благотворительной акции: собрали вещи для детского до...",
      link: "https://example.com/news/3",
    },
    {
      id: "4",
      imageSrc: "/news4.png",
      date: "03.03.2025",
      title: "Спортивный день: соревнования, дружба и победы!",
      snippet: "Наши ученики соревновались в различных видах спорта, демонстрируя командный дух и волю к победе...",
      link: "https://example.com/news/4",
    },
    {
      id: "5",
      imageSrc: "/news5.png",
      date: "03.03.2025",
      title: "Концерт талантов: музыка, танцы и театральные постановки",
      snippet: "На сцене школы выступили самые талантливые ученики, подарив зрителям незабываемый вечер...",
      link: "https://example.com/news/5",
    },
    {
      id: "6",
      imageSrc: "/news6.png",
      date: "03.03.2025",
      title: "Экологическая акция: ученики ZIS за чистый город",
      snippet: "В рамках акции были высажены деревья и убраны территории парков, внося вклад в сохранение природы...",
      link: "https://example.com/news/6",
    },
  ];

  // ИСПРАВЛЕНО: Добавлено состояние для отслеживания количества видимых новостей
  const [visibleArticles, setVisibleArticles] = useState(6);

  // ИСПРАВЛЕНО: Добавлена функция для обработки нажатия на кнопку "Еще новости"
  const handleLoadMore = () => {
    setVisibleArticles(prevCount => prevCount + 3);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Блок с заголовком и хлебными крошками */}
        <div className="pt-6 mb-16">
          <div className="flex items-center text-sm text-black/60 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Главная</Link>
            <BreadcrumbSeparator />
            <span className="font-medium text-black">Новости</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-black">
            Новости, анонсы, мероприятия
          </h1>
        </div>

        {/* Адаптивная сетка для новостей */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.slice(0, visibleArticles).map((article, index) => (
            <NewsArticleCard
              key={index}
              id={article.id}
              imageSrc={article.imageSrc}
              date={article.date}
              title={article.title}
              snippet={article.snippet}
              link={article.link}
            />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="flex justify-center items-center relative gap-2.5 px-5 py-4 rounded-lg bg-[#4aa30a]/[0.12] hover:bg-[#4aa30a]/[0.20] transition-colors"
          >
            <p className="text-lg font-semibold text-left text-[#4aa30a]">
              Еще новости
            </p>
          </button>
        </div>

      </div>
    </section>
  );
}
