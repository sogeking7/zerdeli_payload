// src/components/AdditionSections.tsx

import React from 'react';

// 1. Импортируем компонент карточки
import SectionCard  from './cards/SectionCard';

// 2. Импортируем ВСЕ иконки из папки icons
import { RelaxIcon } from './icons/RelaxIcon';
import { RoboticsIcon } from './icons/RoboticsIcon';
import { DombraIcon } from './icons/DombraIcon';
import { ChessIcon } from './icons/ChessIcon';
import { DanceIcon } from './icons/DanceIcon';
import { KarateIcon } from './icons/KarateIcon';
import { OratoryIcon } from './icons/OratoryIcon';
import { TogyzKumalakIcon } from './icons/TogyzKumalakIcon';
import { BookReadingIcon } from './icons/BookReadingIcon';
import { SpeakingClubIcon } from './icons/SpeakingClubIcon';

// -- Основной компонент --
export default function AdditionSections() {
  const sectionsData = [
    { id: 1, title: 'Relax time', icon: <RelaxIcon /> },
    { id: 2, title: 'Робототехника', icon: <RoboticsIcon /> },
    { id: 3, title: 'Добмра', icon: <DombraIcon /> },
    { id: 4, title: 'Шахмат', icon: <ChessIcon /> },
    { id: 5, title: 'Танцы', icon: <DanceIcon /> },
    { id: 6, title: 'Каратэ', icon: <KarateIcon /> },
    { id: 7, title: <>Ораторское <br /> искусство</>, icon: <OratoryIcon /> },
    { id: 8, title: 'Тогыз Кумалак', icon: <TogyzKumalakIcon /> },
    { id: 9, title: 'Чтение книг', icon: <BookReadingIcon /> },
    { id: 10, title: 'Speaking Club', icon: <SpeakingClubIcon /> },
  ];

  // Разделяем массив на две части для двух рядов
  const row1Data = sectionsData.slice(0, Math.ceil(sectionsData.length / 2));
  const row2Data = sectionsData.slice(Math.ceil(sectionsData.length / 2));

  // Дублируем каждый ряд для бесшовной анимации
  const extendedRow1 = [...row1Data, ...row1Data];
  const extendedRow2 = [...row2Data, ...row2Data];

  return (
    <section className="flex flex-col items-center bg-white w-full py-16 md:py-24 overflow-hidden">
      <h2 className="text-4xl text-center text-black mb-16">
        Дополнительные занятия <br /> для развития ребенка
      </h2>

      {/* Первый ряд, движется вправо */}
      <div className="marquee-container w-full mb-6">
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] motion-reduce:animate-none">
          {extendedRow1.map((section, index) => (
            <div key={`row1-${index}`} className="mx-3">
              <SectionCard
                title={section.title}
                icon={section.icon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Второй ряд, движется влево */}
      <div className="marquee-container w-full">
        <div className="flex animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {extendedRow2.map((section, index) => (
            <div key={`row2-${index}`} className="mx-3">
              <SectionCard
                title={section.title}
                icon={section.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}