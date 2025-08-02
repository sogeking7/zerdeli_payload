import Image from 'next/image'
import React from 'react'

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
  const sectionsData = [
    { id: 1, title: 'Relax time', icon: '/relax-time.svg' },
    { id: 2, title: 'Робототехника', icon: '/robotics.svg' },
    { id: 3, title: 'Домбра', icon: '/dombyra.svg' },
    { id: 4, title: 'Шахмат', icon: '/chess.svg' },
    { id: 5, title: 'Танцы', icon: '/dancing.svg' },
    { id: 6, title: 'Каратэ', icon: '/karate.svg' },
    {
      id: 7,
      title: 'Ораторское искусство',
      icon: '/oratorskoe.svg',
    },
    { id: 8, title: 'Тогыз Кумалак', icon: '/togyz-qumalaq.svg' },
    { id: 9, title: 'Чтение книг', icon: '/reading.svg' },
    { id: 10, title: 'Speaking Club', icon: '/speaking.svg' },
  ]

  // Разделяем массив на две части для двух рядов
  const row1Data = sectionsData.slice(0, Math.ceil(sectionsData.length / 2))
  const row2Data = sectionsData.slice(Math.ceil(sectionsData.length / 2))

  // Дублируем каждый ряд для бесшовной анимации
  const extendedRow1 = [...row1Data, ...row1Data]
  const extendedRow2 = [...row2Data, ...row2Data]

  return (
    <section id="additional">
      <div className="flex flex-col items-center w-full overflow-hidden">
        <h2 className="text-2xl md:text-4xl text-center text-black mb-10">
          <span>Дополнительные занятия</span> <br /> для развития ребенка
        </h2>

        {/* Первый ряд, движется вправо */}
        <div className="marquee-container w-full mb-4 md:mb-6">
          <div className="flex animate-marquee-reverse ">
            {extendedRow1.map((section, index) => (
              <div key={`row1-${index}`} className="mx-2 md:mx-3">
                <SectionCard title={section.title} icon={section.icon} />
              </div>
            ))}
          </div>
        </div>

        {/* Второй ряд, движется влево */}
        <div className="marquee-container w-full">
          <div className="flex animate-marquee">
            {extendedRow2.map((section, index) => (
              <div key={`row2-${index}`} className="mx-2 md:mx-3">
                <SectionCard title={section.title} icon={section.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
