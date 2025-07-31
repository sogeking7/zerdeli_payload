"use client";

import React, { useState } from 'react';

// -- Компоненты иконок --

// Иконка "плюс" для закрытого вопроса
const PlusIcon = () => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 flex-shrink-0"
  >
    <circle cx={24} cy={24} r={24} fill="white" />
    <path
      d="M33.8999 24.0001H14.1009M24.0004 14.1006V33.8996"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Иконка "минус" для открытого вопроса
const MinusIcon = () => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 flex-shrink-0"
  >
    <circle cx={24} cy={24} r={24} fill="white" />
    <path
      d="M31 24H17"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


// -- Переиспользуемый компонент для одного вопроса (аккордеон) --

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="self-stretch flex-grow-0 flex-shrink-0 rounded-2xl bg-[#f6f6f6] transition-all duration-300">
      <div
        className="flex justify-between items-center w-full p-4 cursor-pointer"
        onClick={onClick}
      >
        <p className="text-xl font-bold text-left text-black pr-4">
          {question}
        </p>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      {/* Анимированное появление ответа */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-6 text-lg text-left text-black/80">
          {answer}
        </p>
      </div>
    </div>
  );
};


// -- Основной компонент секции FAQ --

export default function FaqSection() {
  // Данные для вопросов и ответов
  const faqData = [
    {
      question: "В какое время проводятся занятия?",
      answer: "Занятие начинается в 8:45 утра и заканчивается в 5:00 вечера.",
    },
    {
      question: "Какова квалификация преподавателей? Могут ли они дать качественное образование?",
      answer: "Все наши преподаватели имеют высшую квалификационную категорию и многолетний опыт работы. Мы тщательно отбираем лучших специалистов, чтобы обеспечить высокое качество образования.",
    },
    {
      question: "Каково качество школьного питания?",
      answer: "Мы предлагаем сбалансированное трехразовое питание, разработанное совместно с диетологами. Все блюда готовятся на нашей кухне из свежих и качественных продуктов.",
    },
    {
      question: "Есть ли гарантия качества образования? Через сколько времени у ученика будет прогресс?",
      answer: "Мы гарантируем индивидуальный подход к каждому ученику. Прогресс зависит от многих факторов, но первые результаты, как правило, заметны уже через 2-3 месяца регулярных занятий.",
    },
    {
      question: "В чем отличие от других школ?",
      answer: "Наше ключевое отличие — это углубленное изучение IT-дисциплин, проектная деятельность и развитие soft skills, что готовит учеников к профессиям будущего.",
    },
  ];

  // Состояние для отслеживания открытого вопроса
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    // Если кликнули по уже открытому вопросу, закрываем его. Иначе - открываем новый.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-full py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col justify-start items-center gap-16">
        <h2 className="text-4xl text-center text-black">
          Часто задаваемые
          <br />
          вопросы
        </h2>

        <div className="w-full flex flex-col gap-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
