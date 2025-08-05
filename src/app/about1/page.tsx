import React from 'react';
import Image from 'next/image';

// -- Иконки для карточек преимуществ --
const MathIcon = () => (
  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* ... SVG код ... */}
  </svg>
);
const ITIcon = () => (
  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* ... SVG код ... */}
  </svg>
);
const EnglishIcon = () => (
  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* ... SVG код ... */}
  </svg>
);
const ScienceIcon = () => (
  <svg width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* ... SVG код ... */}
  </svg>
);

// -- Переиспользуемый компонент для карточки преимуществ --
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col justify-start items-center flex-grow gap-5 px-4 pt-10 pb-8 rounded-2xl bg-[#ecffe7]">
    {icon}
    <div className="flex flex-col justify-start items-start self-stretch relative gap-2">
      <p className="self-stretch text-xl font-bold text-center text-black">
        {title}
      </p>
      <p className="self-stretch text-base text-center text-black/60">
        {description}
      </p>
    </div>
  </div>
);

// -- Основной компонент страницы --
export default function AboutSchoolPage() {
  const featuresData = [
    { icon: <MathIcon />, title: "Математика и логика", description: "Учим думать, считать и решать нестандартные задачи." },
    { icon: <ITIcon />, title: "ИТ и робототехника", description: "Развиваем инженерное мышление через технологии." },
    { icon: <EnglishIcon />, title: "Английский язык", description: "Улучшение навыков чтения и разговорной речи" },
    { icon: <ScienceIcon />, title: "Естествознание", description: "Погружаемся в науку, изучая окружающую среду." },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* ... остальной JSX код страницы ... */}
      </div>
    </div>
  );
}
