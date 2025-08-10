import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

interface SectionCardProps {
  icon: string
  title: string
}

function SectionCard({ icon, title }: SectionCardProps) {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 w-[220px] md:w-[260px] h-28 md:h-40 rounded-2xl bg-white border border-black/[0.12]"
      style={{ boxShadow: '0px 3px 16px 1px rgba(0,0,0,0.04)' }}
    >
      <Image alt="icon" src={`/svg` + icon} width={50} height={50} className="md:size-12 size-10" />
      <p className="md:text-lg font-medium text-center text-black px-2">{title}</p>
    </div>
  )
}

export default function AdditionSections() {
  const t = useTranslations('HomePage')
  const sectionsIcons = [
    '/relax-time.svg',
    '/robotics.svg',
    '/dombyra.svg',
    '/chess.svg',
    '/dancing.svg',
    '/karate.svg',
    '/oratorskoe.svg',
    '/togyz-qumalaq.svg',
    '/reading.svg',
    '/speaking.svg',
  ]

  // Разделяем массив на две части для двух рядов
  const row1Data = sectionsIcons.slice(0, Math.ceil(sectionsIcons.length / 2))
  const row2Data = sectionsIcons.slice(Math.ceil(sectionsIcons.length / 2))

  // Дублируем каждый ряд для бесшовной анимации
  const extendedRow1 = [...row1Data, ...row1Data]
  const extendedRow2 = [...row2Data, ...row2Data]

  return (
    <section id="additional">
      <div className="flex flex-col items-center w-full overflow-hidden">
        <h2 className="text-2xl md:text-4xl text-center text-black mb-10">
          <span>{t('additions.headingTop')}</span> <br /> {t('additions.headingBottom')}
        </h2>

        {/* Первый ряд, движется вправо */}
        <div className="marquee-container w-full mb-4 md:mb-6">
          <div className="flex animate-marquee-reverse ">
            {extendedRow1.map((icon, index) => (
              <div key={`row1-${index}`} className="mx-2 md:mx-3">
                <SectionCard title={t(`additions.items.${index}`)} icon={icon} />
              </div>
            ))}
          </div>
        </div>

        {/* Второй ряд, движется влево */}
        <div className="marquee-container w-full">
          <div className="flex animate-marquee">
            {extendedRow2.map((icon, index) => {
              const itemIndex = (index % row2Data.length) + row1Data.length
              return (
                <div key={`row2-${index}`} className="mx-2 md:mx-3">
                  <SectionCard title={t(`additions.items.${itemIndex}`)} icon={icon} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
