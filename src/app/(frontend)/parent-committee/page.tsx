"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// -- Иконка-разделитель для хлебных крошек --
const BreadcrumbSeparator = () => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75736 0.69669L12.5303 5.46966C12.8232 5.76255 12.8232 6.23743 12.5303 6.53032L7.75736 11.3033C7.46447 11.5962 6.98959 11.5962 6.6967 11.3033C6.40381 11.0104 6.40381 10.5355 6.6967 10.2426L10.1893 6.74999L5.48401e-07 6.74999L4.17266e-07 5.24999L10.1893 5.24999L6.6967 1.75735C6.40381 1.46446 6.40381 0.989583 6.6967 0.69669C6.98959 0.403796 7.46447 0.403796 7.75736 0.69669Z"
      fill="black"
      fillOpacity="0.3"
    />
  </svg>
);

// -- Иконка закрытия --
const CloseIcon = () => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M25.3332 6.66677L6.6665 25.3334M6.6665 6.66677L25.3332 25.3334"
      stroke="black"
      strokeOpacity="0.8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ParentCommitteePage() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumbs */}
        <div className="flex justify-start items-center gap-3 mb-8 mt-8">
          <Link href="/" className="text-sm text-black/30">Главная</Link>
          <BreadcrumbSeparator />
          <span className="text-sm text-black/80">Родителям</span>
        </div>

        {/* Page Title */}
        <h1 className="text-5xl font-bold text-black mb-16">Родителям</h1>

        {/* Divider */}
        <div className="w-full h-[2px] bg-black/12 mb-16"></div>

        {/* Sidebar Navigation */}
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/4">
            <div className="flex flex-col gap-6">
              <Link href="/parent-committee" className="text-base text-[#4aa30a]">
                Родительский комитет
              </Link>
              <Link href="#" className="text-base text-black/80">
                Календарь учебного года
              </Link>
              <Link href="#" className="text-base text-black/80">
                Конкурсы, олимпиады, проекты.
              </Link>
              <Link href="#" className="text-base text-black/80">
                Дополнительные занятия
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <div className="flex flex-col gap-12">
              {/* Title */}
              <h2 className="text-[40px] font-semibold text-black">Родительский комитет</h2>

              {/* Content Section */}
              <div className="flex flex-col gap-12">
                <div className="flex flex-col justify-start items-start w-full lg:w-[718px] gap-12">
                  {/* Information Section */}
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[28px] font-semibold text-black">Информация и контакты</p>
                    <div className="ml-auto">
                      <CloseIcon />
                    </div>
                  </div>


                  {/* Divider */}
                  <div className="w-full h-[2px] bg-black/12"></div>

                  {/* Content */}
                  <div className="w-full lg:w-[718px]">
                    <p className="text-sm text-black">
                      Родительский комитет нашей школы — это активная группа родителей, работающая в тесном
                      сотрудничестве с администрацией и педагогами для создания комфортной образовательной
                      среды и решения текущих вопросов школьной жизни. Мы стремимся активно участвовать в
                      организации мероприятий, поддерживать инициативы, направленные на улучшение условий для
                      детей и помогать в реализации образовательных проектов.
                      <br /><br />
                      Контакты родительского комитета:
                      <br />
                      Электронная почта: roditel@zis-school.kz
                      <br />
                      Телефон: +7 (707) 456-78-90
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}