"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// -- Иконка-разделитель для хлебных крошек --
const BreadcrumbSeparator = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 6" stroke="black" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// -- Иконка закрытия формы --
const CloseIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0 w-6 h-6 absolute right-4 top-4 cursor-pointer"
    preserveAspectRatio="xMidYMid meet"
  >
    <g clipPath="url(#clip0_222_340)">
      <rect x="0.5" y="0.5" width={23} height={23} rx="7.5" stroke="black" strokeOpacity="0.12" />
      <path
        d="M16 8L8 16M8 8L16 16"
        stroke="black"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_222_340">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// -- Иконка выпадающего списка --
const DropdownIcon = () => (
  <svg
    width={10}
    height={6}
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0"
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="M5 5.5L0 0.5H10L5 5.5Z" fill="black" />
  </svg>
);

export default function ExamRegistrationPage() {
  const [childName, setChildName] = useState('');
  const [grade, setGrade] = useState('');
  const [parentName, setParentName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [city, setCity] = useState('Астана');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  
  const cities = ['Астана', 'Шымкент', 'Жезказган', 'Атырау', 'Тараз'];
  
  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setShowCityDropdown(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log({ childName, grade, parentName, whatsappNumber, city });
    alert('Форма отправлена!');
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Блок с хлебными крошками */}
        <div className="pt-6 mb-16">
          <div className="flex items-center text-sm text-black/60 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Главная</Link>
            <BreadcrumbSeparator />
            <span className="font-medium text-black">Запись на экзамен</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-black">
            Запись на экзамен
          </h1>
        </div>

        {/* Форма записи на экзамен */}
        <div className="flex justify-center items-center w-full">
          <div
            className="flex flex-col justify-start items-start w-full max-w-[505px] relative gap-12 px-10 py-12 rounded-2xl bg-white border border-black/[0.12]"
            style={{ boxShadow: "0px 3px 40px 1px rgba(0,0,0,0.08)" }}
          >
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-2xl font-bold text-center text-black">
              Запись на экзамены
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5 w-full">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 w-full">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">
                    ФИО ребенка
                  </p>
                </div>
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-4 py-5 rounded-lg bg-white border border-black/[0.12] w-full"
                />
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 w-full">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">
                    Класс записи
                  </p>
                </div>
                <input
                  type="text"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-4 py-5 rounded-lg bg-white border border-black/[0.12] w-full"
                />
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 w-full">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">
                    ФИО родителя
                  </p>
                </div>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-4 py-5 rounded-lg bg-white border border-black/[0.12] w-full"
                />
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 w-full">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">
                    WhatsApp номер родителя
                  </p>
                </div>
                <input
                  type="text"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-4 py-5 rounded-lg bg-white border border-black/[0.12] w-full"
                />
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3 w-full">
                <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black">Город</p>
                </div>
                <div className="relative w-full">
                  <div 
                    className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-4 py-5 rounded-lg bg-white border border-black/[0.12] cursor-pointer"
                    onClick={() => setShowCityDropdown(!showCityDropdown)}
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black/60">
                      {city}
                    </p>
                    <DropdownIcon />
                  </div>
                  {showCityDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-black/[0.12] rounded-lg shadow-lg z-10">
                      {cities.map((cityOption) => (
                        <div 
                          key={cityOption} 
                          className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                          onClick={() => handleCitySelect(cityOption)}
                        >
                          {cityOption}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <button 
                type="submit"
                className="mt-6 self-center flex justify-center items-center relative gap-2.5 px-5 py-4 rounded-lg bg-[#4aa30a] hover:bg-[#3f8c08] transition-colors"
              >
                <p className="text-lg font-semibold text-left text-white">
                  Отправить заявку
                </p>
              </button>
            </form>
            <Link href="/" className="absolute right-4 top-4">
              <CloseIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}