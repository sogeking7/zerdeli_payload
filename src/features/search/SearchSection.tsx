"use client";

import React, { useState, useEffect } from 'react';

// -- Иконки --
const SearchIcon = () => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 text-black/80"
  >
    <path
      d="M29.1665 29.1665L36.6665 36.6665"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.333 18.3333C33.333 10.049 26.6173 3.33325 18.333 3.33325C10.0487 3.33325 3.33301 10.049 3.33301 18.3333C3.33301 26.6175 10.0487 33.3332 18.333 33.3332C26.6173 33.3332 33.333 26.6175 33.333 18.3333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-black/80"
  >
    <path
      d="M25.3337 6.66675L6.66699 25.3334M6.66699 6.66675L25.3337 25.3334"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// -- Компонент оверлея для поиска --
interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Пример результатов поиска
  const searchResults = [
    { type: 'Страница', title: 'О школе', href: '/about' },
    { type: 'Новость', title: 'День добрых дел', href: '/news/charity-day' },
    { type: 'Программа', title: 'Математика и логика', href: '/programs/math' },
  ];

  // Сбрасываем поиск при закрытии
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        {/* Верхняя часть с полем ввода и кнопкой закрытия */}
        <div className="flex flex-col justify-start items-start w-full relative gap-4">
          <div className="flex justify-between items-center self-stretch relative">
            <div className="flex justify-start items-center flex-grow relative gap-4">
              <SearchIcon />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск"
                className="text-[32px] font-bold text-black bg-transparent outline-none placeholder-black/10 w-full"
                autoFocus
              />
            </div>
            <button onClick={onClose} className="flex-shrink-0">
              <CloseIcon />
            </button>
          </div>
          <hr className="w-full border-black/10" />
        </div>

        {/* Область результатов поиска */}
        <div className="mt-8">
          {searchTerm && (
            <div className="space-y-4">
              <p className="text-black/60">Результаты по запросу &quot;{searchTerm}&quot;:</p>
              {searchResults.map((result, index) => (
                <a href={result.href} key={index} className="block p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <p className="font-semibold text-black">{result.title}</p>
                  <p className="text-sm text-black/50">{result.type}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// -- Пример использования на странице --
// Вы можете встроить этот компонент в вашу главную страницу или шапку сайта
export default function SearchFeature() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="p-10">
      <button
        onClick={() => setIsSearchOpen(true)}
        className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold"
      >
        Открыть Поиск
      </button>

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}
