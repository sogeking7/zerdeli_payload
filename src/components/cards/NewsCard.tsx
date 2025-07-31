"use client";

import React from 'react';
import Image from 'next/image';

// Интерфейс для пропсов компонента
interface NewsCardProps {
  bgColor: string;
  childImageSrc: string;
  description: string;
}

export const NewsCard = ({ bgColor, childImageSrc, description }: NewsCardProps) => (
  <div className={`relative w-full lg:w-[612px] h-80 rounded-lg overflow-hidden ${bgColor} p-8`}>

    {/* Декоративный SVG узор фона */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 306 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-5 165C138.667 165 168.6 -33 311 -3L311 165H-5Z" fill="white" fillOpacity="0.9"/>
      </svg>
    </div>

    <div className="relative z-10 flex flex-col justify-between h-full">
      {/* Фото ребенка */}
      <Image
        src={childImageSrc}
        alt="Фото ученика"
        width={112}
        height={112}
        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
      />

      {/* Текст описания */}
      <p className="text-xl font-medium text-left text-black max-w-sm">
        {description}
      </p>
    </div>
  </div>
);