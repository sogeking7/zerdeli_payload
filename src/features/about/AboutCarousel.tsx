'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import useCarousel from '@/hooks/useCarousel'

const aboutBullets = [
  {
    icon: '/svg/math.svg',
    title: 'Математика и логика',
    description: 'Учим думать, считать и решать нестандартные задачи.',
  },

  {
    icon: '/svg/cpu.svg',
    title: 'ИТ и робототехника',
    description: 'Развиваем инженерное мышление через технологии.',
  },

  {
    icon: '/svg/abc.svg',
    title: 'Английский язык',
    description: 'Улучшение навыков чтения и разговорной речи',
  },
  {
    icon: '/svg/spiral.svg',
    title: 'Естествознание',
    description: 'Погружаемся в науку, изучая окружающую среду.',
  },
]

export default function AboutCarousel() {
  const { setApi, current } = useCarousel()

  return (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {aboutBullets.map((i, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4 pl-2 md:pl-4 ">
              <div className="px-4 py-10 bg-[#ECFFE7] h-full rounded-2xl flex items-center justify-center flex-col">
                <div className="bg-[#CFFFC2] p-4 rounded-full flex items-center justify-center mb-5">
                  <Image
                    alt="icon"
                    src={i.icon}
                    width={32}
                    height={32}
                    className="md:size-8 size-6"
                  />
                </div>
                <h3 className="text-black mb-2 text-center">{i.title}</h3>
                <p className="text-black/60 text-center">{i.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mx-auto flex max-lg:py-6 gap-2 lg:hidden justify-center">
        {aboutBullets.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              'rounded-full size-2',
              current === idx + 1 ? 'bg-[#4AA30A]' : 'bg-[#E3E3E3]',
            )}
          ></div>
        ))}
      </div>
    </div>
  )
}
